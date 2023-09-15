import os
import time
import json
import re
from progress_bar import printProgressBar
import requests
import pandas as pd
import pymongo
from pymongo import MongoClient
from bs4 import BeautifulSoup
from dotenv import load_dotenv

load_dotenv()
MONGO_USERNAME = os.getenv("MONGO_USERNAME")
MONGO_PASSWORD = os.getenv("MONGO_PASSWORD")

DB_CONNECTION_STR = rf"mongodb+srv://{MONGO_USERNAME}:{MONGO_PASSWORD}@mbtimoviesprimarydb.siwuxjf.mongodb.net/?retryWrites=true&w=majority"
IMDB_HEADERS ={"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:66.0) Gecko/20100101 Firefox/66.0", "Accept-Encoding":"gzip, deflate", "Accept":"text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8", "DNT":"1","Connection":"close", "Upgrade-Insecure-Requests":"1"}

QUERY_INTERVAL = 0.1
MAX_QUERY_SIZE = 200

def scrape_imdb_movies(url: str, interval: float = 0.25, max_items: int = 200) -> list:
    """
    scrape_imdb_movies scrapes imdb.com for movies that match the genre specified

    @param url: genre formatted imdb url
    @param interval: duration to pause between each query
    @param max_items: max number of items to query
    @return: a list of scraped movies
    """

    response = requests.get(url, headers=IMDB_HEADERS)
    response = BeautifulSoup(response.content, 'lxml')

    movies_list = []
    content = response.select('.lister-item.mode-advanced')
    for i, movie in enumerate(content):
        time.sleep(interval)
        try:
            meta_data = {
                "certificate":movie.select('.certificate')[0].get_text().strip(),
                "time":movie.select('.runtime')[0].get_text().strip(),
                "rating":float(movie.select('.ratings-imdb-rating')[0].get_text().strip()),
                "metascore":int(movie.select('.ratings-metascore')[0].get_text().replace(" ", "").replace("Metascore", "")),
                "votes":movie.select('.sort-num_votes-visible')[0].get_text().strip()
            }

            movie_data = { 
                "name": re.sub(r"[0-9]\.|\(\d{4}\)", "", movie.select('.lister-item-header')[0].get_text()).strip(),
                "year":int(re.sub("[^0-9]", "", movie.select('.lister-item-year')[0].get_text())),
                "genres":movie.select('.genre')[0].get_text().replace(" ", "").replace("\n", "").split(','),
                "description":movie.select('.text-muted')[2].get_text().strip(),
                "img_path": movie.select('img')[0]['loadlate'],
                "meta": meta_data
            }
        except IndexError:
            continue

        movies_list.append(movie_data)
        if len(movies_list) == max_items:
            break
    return movies_list

if __name__ == "__main__":
    # Connect to MongoDB cluster
    cluster = MongoClient(DB_CONNECTION_STR)
    db = cluster["MoviesDB"]
    collection = db["Movies"]
    movie_genres = [
        "Action",
        "Adventure",
        "Animation",
        "Biography",
        "Comedy",
        "Crime",
        "Drama",
        "Family",
        "Fantasy",
        "Film-Noir",
        "History",
        "Horror",
        "Music",
        "Musical",
        "Mystery",
        "Romance",
        "Sci-Fi",
        "Sport",
        "Thriller",
        "War",
        "Western"
    ]
    
    print("Established connection to MongoDB database...\n")
    print("Commencing scraping operation on IMDB...\n")
    
    num_genres = len(movie_genres)
    unique_movies_set = {}
    for i, genre in enumerate(movie_genres):
        url = rf"https://www.imdb.com/search/title/?genres={genre}&sort=user_rating,desc&title_type=feature&num_votes=25000,&pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=5aab685f-35eb-40f3-95f7-c53f09d542c3&pf_rd_r=N97GEQS6R7J9EV7V770D&pf_rd_s=right-6&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_gnr_16"
        movies_list = scrape_imdb_movies(url, QUERY_INTERVAL, MAX_QUERY_SIZE)

        # Write Data to MongoDB Movies collection
        for movie in movies_list:
            name = movie['name']
            if name not in unique_movies_set:
                unique_movies_set[name] = movie
        printProgressBar(i + 1, num_genres, prefix = 'Progress:', suffix = 'Complete', length = 50)
    
    print('Inserting movies into MongoDB...\n')
    num_unique_movies = len(unique_movies_set)
    for i, unique_movie in enumerate(unique_movies_set.values()):
        collection.insert_one(unique_movie)
        printProgressBar(i + 1, num_unique_movies, prefix = 'Progress:', suffix = 'Complete', length = 50)
    
    print("Scraping complete! A total of " + str(num_unique_movies) + " movies have been successfully inserted into MongoDB.")
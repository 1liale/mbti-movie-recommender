/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const listAllMovies = /* GraphQL */ `
  query ListAllMovies($limit: Int, $skip: Int) {
    listAllMovies(limit: $limit, skip: $skip) {
      _id
      description
      genres
      img_path
      meta {
        certificate
        metascore
        rating
        time
        votes
        __typename
      }
      name
      year
      __typename
    }
  }
`;
export const getMovies = /* GraphQL */ `
  query GetMovies(
    $sortBy: MovieSortByInput
    $query: MovieQueryInput
    $limit: Int
    $skip: Int
  ) {
    getMovies(sortBy: $sortBy, query: $query, limit: $limit, skip: $skip) {
      _id
      description
      genres
      img_path
      meta {
        certificate
        metascore
        rating
        time
        votes
        __typename
      }
      name
      year
      __typename
    }
  }
`;

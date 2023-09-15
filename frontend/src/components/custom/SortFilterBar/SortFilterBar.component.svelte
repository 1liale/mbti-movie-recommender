<script lang="ts">
	import { Span, ButtonGroup, Button, MultiSelect, type SelectOptionType } from "flowbite-svelte";
	import type { SortType } from "./SortFilterBar.types";
    
    let sortBy: SortType = "name";
    let filterBy: (string | number)[] = [];
    let filterOptions: SelectOptionType[] = [
        { value: 'action', name: 'Action' },
        { value: 'adventure', name: 'Adventure' },
        { value: 'animation', name: 'Animation' },
        { value: 'biography', name: 'Biography' },
        { value: 'comedy', name: 'Comedy' },
        { value: 'crime', name: 'Crime' },
        { value: 'drama', name: 'Drama' },
        { value: 'family', name: 'Family' },
        { value: 'fantasy', name: 'Fantasy' },
        { value: 'film-noir', name: 'Film-Noir' },
        { value: 'history', name: 'History' },
        { value: 'horror', name: 'Horror' },
        { value: 'music', name: 'Music' },
        { value: 'musical', name: 'Musical' },
        { value: 'mystery', name: 'Mystery' },
        { value: 'romance', name: 'Romance' },
        { value: 'sci-fi', name: 'Sci-Fi' },
        { value: 'sport', name: 'Sport' },
        { value: 'thriller', name: 'Thriller' },
        { value: 'war', name: 'War' },
        { value: 'western', name: 'Western' }
    ]
</script>
<div class="flex items-center justify-center py-2 md:py-4 gap-3 mb-3 mx-auto">
    <Span class="text-black dark:text-white">Sort:</Span>
    <ButtonGroup>
        <Button on:click={() => sortBy = 'name'} class="{sortBy === "name" ? 'dark:text-white text-primary-700' : 'dark:text-gray-400'} dark:bg-gray-700 dark:hover:text-primary-500" size="sm">Name</Button>
        <Button on:click={() => sortBy = 'year'} class="{sortBy === "year" ? 'dark:text-white text-primary-700' : 'dark:text-gray-400'} dark:bg-gray-700 dark:hover:text-primary-500" size="sm">Year</Button>
    </ButtonGroup>

    <Span class="text-black dark:text-white ml-12">Genres:</Span>
    <MultiSelect class="border-2 bg-white dark:bg-gray-700 min-w-44" dropdownClass="border-2 bg-slate-200 w-44 h-40" items={filterOptions} bind:value={filterBy} />
</div>
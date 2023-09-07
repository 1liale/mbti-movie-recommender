<script lang="ts">
	import MovieCard from "$components/custom/MovieCard/MovieCard.component.svelte";
	import Gallery from "$components/general/Gallery/Gallery.component.svelte";
	import type { GalleryItem } from "$components/general/Gallery/Gallery.types";
	import { Button, ButtonGroup, Dropdown, DropdownItem, Span } from "flowbite-svelte";
	import { ChevronDownSolid, ChevronRightSolid } from "flowbite-svelte-icons";

    const movieItems: GalleryItem[] = [
        {component: MovieCard, props: undefined},
        {component: MovieCard, props: undefined},
        {component: MovieCard, props: undefined},
        {component: MovieCard, props: undefined},
        {component: MovieCard, props: undefined},
        {component: MovieCard, props: undefined},
        {component: MovieCard, props: undefined},
        {component: MovieCard, props: undefined},
        {component: MovieCard, props: undefined},
        {component: MovieCard, props: undefined},
        {component: MovieCard, props: undefined},
        {component: MovieCard, props: undefined},
        {component: MovieCard, props: undefined},
        {component: MovieCard, props: undefined},
        {component: MovieCard, props: undefined},
        {component: MovieCard, props: undefined},
        {component: MovieCard, props: undefined},
        {component: MovieCard, props: undefined},
        {component: MovieCard, props: undefined},
    ] 
</script>

<svelte:head><title>MBTI Movies - Browse</title></svelte:head>


<Gallery items={movieItems} customClass='gap-6 grid-cols-2 md:grid-cols-4'>
    <div slot="filter-bar" class="flex items-center justify-center py-2 md:py-4 gap-3 mb-3 mx-auto">
        <Span class="text-black dark:text-white" >Sort:</Span>
        <ButtonGroup>
            <Button color="light" class="dark:bg-gray-700" size="sm">Date</Button>
            <Button color="light" class="dark:bg-gray-700" size="sm">Name</Button>
        </ButtonGroup>

        <!-- TODO: Add button functionalities for filter -->
        <Span class="text-black dark:text-white ml-12" >Filter:</Span>
        <Button color="light" class="dark:bg-gray-700 dark:hover:bg-gray-700">Dropdown button<ChevronDownSolid class="w-3 h-3 ml-2 text-primary-700 dark:text-white" /></Button>
        <!-- TODO: Replace placeholder dropdown -->
        <Dropdown>
            <DropdownItem>Dashboard</DropdownItem>
            <DropdownItem class="flex items-center justify-between">
                Dropdown<ChevronRightSolid class="w-3 h-3 ml-2 text-primary-700 dark:text-white" />
            </DropdownItem>
            <Dropdown placement="right-start">
                <DropdownItem>Overview</DropdownItem>
                <DropdownItem>My downloads</DropdownItem>
                <DropdownItem>Billing</DropdownItem>
            </Dropdown>
            <DropdownItem>Earnings</DropdownItem>
            <DropdownItem slot="footer">Sign out</DropdownItem>
        </Dropdown>
    </div>
</Gallery>
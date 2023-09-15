<script lang="ts">
	import MovieCard from '$components/custom/MovieCard/MovieCard.component.svelte';
	import Gallery from '$components/general/Gallery/Gallery.component.svelte';
	import type { GalleryItem } from '$components/general/Gallery/Gallery.types';
	import type { MovieItem } from '$components/custom/MovieCard/MovieCard.types.js';
	import SortFilterBar from '$components/custom/SortFilterBar/SortFilterBar.component.svelte';

	export let data;

	const result = data.result.data?.listAllMovies;
	const items: GalleryItem[] = result?.map((item) => {
		const movieItem: MovieItem = {
			name: item?.name,
			year: item?.year,
			description: item?.description,
			genres: item?.genres as string[],
			img_path: item?.img_path || '',
			meta: {
				certificate: item?.meta?.certificate,
				metascore: item?.meta?.metascore,
				rating: item?.meta?.rating,
				time: item?.meta?.time,
				votes: item?.meta?.votes
			}
		}

		const galleryItem: GalleryItem = {
			component: MovieCard,
			props: { value: movieItem }
		}
		return galleryItem
	}) || []
</script>

<svelte:head><title>MBTI Movies - Browse</title></svelte:head>

<Gallery {items} customClass="gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
	<SortFilterBar slot="filter-bar" />
</Gallery>

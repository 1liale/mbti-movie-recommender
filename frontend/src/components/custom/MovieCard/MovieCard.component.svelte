<script lang="ts">
	import DefaultMovieImg from '$assets/logo.png';
	import { Card, Heading, P } from 'flowbite-svelte';
	import type { MovieCardComponentProps, MovieItem } from './MovieCard.types';
	import { toggleModal } from '$stores/modal.store';

	interface $$Props extends MovieCardComponentProps {}

	export let isHidden: boolean = false;
	export let customClass: string | undefined = '';
	export let customStyle: string | undefined = '';

	export let value: MovieItem;

	const movieImage = value.img_path || DefaultMovieImg

	const handleOnCardClick = () => {
		toggleModal();
	};
</script>

{#if !isHidden}
	<Card on:click={handleOnCardClick} style={customStyle} class="flex flex-row gap-4 dark:bg-gray-700 {customClass}">
		<div class="h-40 md:h-44 w-1/3 md:w-1/2">
			<Heading tag="h3" class="line-clamp-3 mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
				{value.name}
			</Heading>
			<P class="font-normal line-clamp-4 dark:text-gray-400 leading-tight">
				{value.description}
			</P>
		</div>
		<div class="relative w-2/3 md:w-1/2">
			<img class="absolute h-full w-full object-cover" src={movieImage} alt="movie-card">
		</div>
	</Card>
{/if}

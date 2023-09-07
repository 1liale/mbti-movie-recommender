<script lang='ts'>
	import { Card } from 'flowbite-svelte';
	import type { MovieCardComponentProps } from './MovieCard.types';

    interface $$Props extends MovieCardComponentProps {}

    export let isHidden: boolean = false;
    export let customClass: string | undefined = '';
    export let customStyle: string | undefined = '';

</script>

{#if !isHidden} 
    <Card style={customStyle} class="dark:bg-gray-700 {customClass}">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        <p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
    </Card>
{/if}
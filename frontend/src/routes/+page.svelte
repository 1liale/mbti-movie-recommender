<script lang='ts'>
	import { ButtonGroup, InputAddon, Input, Button, Heading, Span, Hr, P, Popover, Spinner } from "flowbite-svelte";
	import Logo from '$assets/logo.png';
    import Typewriter from 'svelte-typewriter'
	import { toggleModal } from "$stores/modal.store";

    let isSearching: boolean = false;
</script>

<svelte:head><title>MBTI Movies - Home</title></svelte:head>

<div class="flex flex-col grow items-center justify-start gap-12 mt-60 px-8">
    <div class="flex flex-col items-center text-center">
        <Heading id="search-heading" class="text-white dark:text-gray-200 dark:font-semibold" tag="h2" >
            <Typewriter on:done={() => {
                console.log("DONE TYPING")
            }} scrambleDuration={2000} mode="scramble">
                MBTI Movies Recommender
            </Typewriter>
        </Heading>
    </div>
    <ButtonGroup id="input-search" class="w-2/3">
        <InputAddon><img src={Logo} alt="Logo" class="h-3 sm:h-6" /></InputAddon>
        <Input id="input-addon" type="text" placeholder="Enter a phrase that best describes you :)" />
        <Button on:click={() => { isSearching = true; setTimeout(() => {isSearching = false; toggleModal()}, 2000) }} color="primary">
            {#if isSearching}
                Loading
                <Spinner class="ml-3" size="4" color="white" />
            {:else}
                Search
            {/if}
        </Button>
    </ButtonGroup>

    <Popover placement='right' offset={20} class="w-30 md:w-50 text-sm font-gray-200 dark:bg-gray-700" triggeredBy="#input-search">
        <P size="sm" height="relaxed" class="w-20 md:w-30 lg:w-40 dark:text-gray-100">Type something into the input field, we will recommend some movies to match your MBTI mojo! 😎 </P>
    </Popover>
</div>
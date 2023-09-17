<script lang="ts">
	import Logo from '$assets/logo.png';
	import { page } from '$app/stores';
	import {
		Avatar,
		Button,
		DarkMode,
		Dropdown,
		DropdownHeader,
		DropdownItem,
		Heading,
		Input,
		NavBrand,
		NavHamburger,
		NavLi,
		NavUl,
		Navbar,
		Span
	} from 'flowbite-svelte';
	import { SearchOutline } from 'flowbite-svelte-icons';
	import type { NavBarComponentProps } from './NavBar.types';

	import { signOut } from '@auth/sveltekit/client';

	interface $$Props extends NavBarComponentProps {}

	export let isHidden: boolean = false;
	export let customClass: string | undefined = '';
	export let customStyle: string | undefined = '';

	$: activeUrl = $page.url.pathname;

	let isSignedInTest: boolean = false;
</script>

{#if !isHidden}
	<Navbar color="form" style={customStyle} class={customClass} let:hidden let:toggle>
		<NavBrand href="/">
			<img src={Logo} alt="Logo" class="mr-3 h-6 sm:h-9" />
			<Heading
				tag="h2"
				class="font-sans"
				customSize="xl:text-3xl md:text-3xl sm:text-xl font-extrabold dark:text-white"
			>
				<Span gradient>MBTI Movies</Span>
			</Heading>
		</NavBrand>
		<div class="flex order-2">
			<Button
				color="none"
				data-collapse-toggle="mobile-menu-3"
				aria-controls="mobile-menu-3"
				aria-expanded="false"
				class="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1"
			>
				<SearchOutline class="w-5 h-5" />
			</Button>
			<div class="hidden relative md:block">
				<div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
					<SearchOutline class="w-4 h-4" />
				</div>
				<Input id="search-navbar" class="pl-10" placeholder="Search..." />
			</div>
			<div class="flex items-center md:order-2 pl-3 hover:cursor-pointer">
				{#if $page.data.session}
					<Avatar class="hover:bg-gray-200 dark:hover:bg-gray-700" border id="avatar-menu">U</Avatar
					>
					<Dropdown border triggeredBy="#avatar-menu">
						<DropdownHeader>
							<span class="block text-sm">Jane Doe</span>
							<span class="block truncate text-sm font-medium">JaneDoe123@gmail.com</span>
						</DropdownHeader>
						<DropdownItem
							on:click={(e) => {
								e.preventDefault();
								signOut();
							}}>Sign out</DropdownItem
						>
					</Dropdown>
				{:else}
					<Button href="/auth/login">Sign in</Button>
				{/if}
			</div>
			<DarkMode class="ml-3 border-gray-300 dark:border-gray-500 border" />
			<NavHamburger on:click={toggle} />
		</div>
		<NavUl active {hidden} {activeUrl}>
			<NavLi href="/">Home</NavLi>
			<NavLi href="/browse">Browse</NavLi>
		</NavUl>
	</Navbar>
{/if}

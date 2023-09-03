<script lang="ts">
    import Logo from '$assets/logo.png';
    import { Button, Heading, Input, NavBrand, NavHamburger, NavLi, NavUl, Navbar } from 'flowbite-svelte';
    import { SearchOutline } from 'flowbite-svelte-icons'
</script>

<Navbar color="form" let:hidden let:toggle>
    <NavBrand href="/">
        <img src={Logo} alt="Logo" class="mr-3 h-6 sm:h-9"/>
        <Heading tag="h2" class="font-sans" customSize="text-3xl font-extrabold dark:text-white">MBTI Movies</Heading>
    </NavBrand>
    <div class="flex md:order-2">
        <Button color="none" data-collapse-toggle="mobile-menu-3" aria-controls="mobile-menu-3" aria-expanded="false" class="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1">
          <SearchOutline class="w-5 h-5" />
        </Button>
        <div class="hidden relative md:block">
          <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <SearchOutline class="w-4 h-4" />
          </div>
          <Input id="search-navbar" class="pl-10" placeholder="Search..." />
        </div>
        <NavHamburger on:click={toggle} />
    </div>
    <NavUl {hidden}>
        <NavLi href="/">Home</NavLi>
    </NavUl>
</Navbar>


<script>
	import NavBar from '$components/NavBar/NavBar.component.svelte';
	import '../app.postcss';
</script>

<div class="app">
	<NavBar />
	<slot />
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;

		background: linear-gradient(to bottom, #9bfaff, #1e90ff);
		background-repeat: no-repeat;
		background-attachment: fixed;
	}
</style>

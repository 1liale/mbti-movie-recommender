<script>
	import NavBar from '$components/NavBar/NavBar.component.svelte';
	import '../app.postcss';
</script>

<div class="app">
	<slot /> 
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		
		background: linear-gradient(to bottom, #9bfaff, #1E90FF);
		/* Replace #87CEEB and #1E90FF with your preferred light blue colors */
		background-repeat: no-repeat;
		background-attachment: fixed;
	}
</style>
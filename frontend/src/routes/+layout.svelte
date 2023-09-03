<script>
	import InfoAlert from '$components/Alerts/InfoAlert.component.svelte';
	import NavBar from '$components/NavBar/NavBar.component.svelte';

	import '../app.postcss';
</script>

<div class="app">
	<NavBar />
	<InfoAlert color="blue" customClass="dark:bg-white-500">
		Hold on, project is currently under development! Rome wasn't built in a day 😛 Please visit
		another time!</InfoAlert
	>
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

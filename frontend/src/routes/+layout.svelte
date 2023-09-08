<script>
	import InfoAlert from '$components/general/Alerts/InfoAlert.component.svelte';
	import NavBar from '$components/custom/NavBar/NavBar.component.svelte';

	import '../app.css';
	import Modal from '$components/general/Modal/Modal.component.svelte';

	const isDevEnv = import.meta.env.DEV;
</script>

<div
	class="app relative flex flex-col bg-gradient-to-b from-c-cyan to-c-blue dark:from-c-blue dark:to-blue-400 h-screen"
>
	<NavBar />
	<InfoAlert isHidden={isDevEnv} color="blue" customClass="dark:bg-white-500">
		Hold on, project is currently under development! Some features may not be available 🥲. Please visit
		another time!
	</InfoAlert>
	<content class="flex-auto overflow-auto p-3">
		<slot />
	</content>
	<Modal />
</div>

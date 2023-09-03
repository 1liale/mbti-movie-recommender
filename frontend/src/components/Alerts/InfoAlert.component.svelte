<script lang="ts">
	import { Alert } from 'flowbite-svelte';
	import { InfoCircleSolid } from 'flowbite-svelte-icons';
	import type { AlertColors, InfoAlertComponentProps } from './InfoAlert.types';

	interface $$Props extends InfoAlertComponentProps {}

	export let customClass: string | undefined = '';
	export let customStyle: string | undefined = '';
	export let isHidden: boolean | undefined = false;
	export let color: AlertColors = 'default';
	export let dismissable: boolean | undefined = false;
</script>

{#if !isHidden}
	<Alert {color} class="m-2 {customClass}" style={customStyle} {dismissable}>
		<InfoCircleSolid slot="icon" class="w-4 h-4" />
		<span class="font-medium"><slot /></span>
	</Alert>
{/if}

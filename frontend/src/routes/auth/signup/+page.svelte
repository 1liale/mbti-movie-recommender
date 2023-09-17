<script lang="ts">
	import { signIn } from '@auth/sveltekit/client';
	import { invalidateAll } from '$app/navigation';
	import AuthForm from '$components/custom/AuthForm/AuthForm.component.svelte';
	const handleSubmit = async (event) => {
		const data = new FormData(event.target);
		try {
			console.log(data.get('email'));
			// await signIn('credentials', {
			//   email: data.get('email'),
			//   password: data.get('password')
			// });
		} catch (error) {
			await invalidateAll();
		}
	};
</script>

<div class="flex h-full items-center justify-center">
	<AuthForm isSignIn={false} {handleSubmit} />
</div>

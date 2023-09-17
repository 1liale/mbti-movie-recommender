<script lang="ts">
	import { invalidateAll } from '$app/navigation';
	import AuthForm from '$components/custom/AuthForm/AuthForm.component.svelte';
	import { redirect } from '@sveltejs/kit';

	type SignInParameters = {
		username: string;
		password: string;
	};

	// async function signIn({ username, password }: SignInParameters) {
	//   try {
	//     const user = await Auth.signIn(username, password);
	//     console.log(user)
	//   } catch (error) {
	//     console.log('error signing in', error);
	//   }
	// }

	const handleSubmit = async (event) => {
		try {
			const data = new FormData(event.target);
			const userInfo: SignInParameters = {
				username: data.get('username') as string,
				password: data.get('password') as string
			};
			redirect(300, '/');
			// await signIn('credentials', userInfo);
		} catch (error) {
			await invalidateAll();
		}
	};
</script>

<div class="flex h-full items-center justify-center">
	<AuthForm {handleSubmit} />
</div>

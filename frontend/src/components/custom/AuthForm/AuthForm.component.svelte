<script lang="ts">
	import { Register } from 'flowbite-svelte-blocks';
	import { Button, Checkbox, Label, Input } from 'flowbite-svelte';
	import type { AuthFormComponentProps } from './AuthForm.types';

	interface $$Props extends AuthFormComponentProps {}

	export let handleSubmit: (event: SubmitEvent) => Promise<void> = async () => {};
	export let isSignIn: boolean = true;
</script>

<div class="w-1/2">
	<Register divClass="bg-white rounded-lg shadow dark:border dark:bg-gray-800 dark:border-gray-800">
		<div class="p-6 space-y-4 md:space-y-6 sm:p-8">
			<form class="flex flex-col space-y-6" on:submit|preventDefault={handleSubmit}>
				<h3 class="text-xl font-medium text-gray-800 dark:text-white p-0">
					{isSignIn ? 'Sign in to your' : 'Sign up for an '} account
				</h3>
				<Label class="space-y-2">
					<span>Your username</span>
					<Input type="text" name="username" placeholder="username" required />
				</Label>
				<Label class="space-y-2">
					<span>Your password</span>
					<Input type="password" name="password" placeholder="••••••••" required />
				</Label>
				<div class="flex items-start">
					<Checkbox>Remember me</Checkbox>
					<!-- <a href="/" class="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500">Forgot password? (doesn't work yet)</a> -->
				</div>
				<Button type="submit" class="w-full">{isSignIn ? 'Sign in' : 'Sign up'}</Button>
				<p class="text-sm font-light text-gray-500 dark:text-gray-400">
					Don’t have an account yet?
					<a
						href={!isSignIn ? '/auth/login' : '/auth/signup'}
						class="font-medium text-primary-600 hover:underline dark:text-primary-500"
						>{!isSignIn ? 'Sign in' : 'Sign up'}</a
					>
				</p>
			</form>
		</div>
	</Register>
</div>

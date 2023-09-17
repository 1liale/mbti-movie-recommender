import type { ComponentProps } from '$components/Component.types';

export interface AuthFormComponentProps extends ComponentProps {
	handleSubmit: (event: SubmitEvent) => Promise<void>;
	isSignIn?: boolean;
}

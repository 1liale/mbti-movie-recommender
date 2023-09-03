import type { ComponentProps } from '$components/Types/Component.types';

export type AlertColors =
	| 'form'
	| 'none'
	| 'default'
	| 'red'
	| 'gray'
	| 'yellow'
	| 'green'
	| 'indigo'
	| 'purple'
	| 'pink'
	| 'blue'
	| 'light'
	| 'dark'
	| 'dropdown'
	| 'navbar'
	| 'navbarUl'
	| 'primary'
	| 'orange'
	| undefined;

export interface InfoAlertComponentProps extends ComponentProps {
	color?: AlertColors;
	dismissable?: boolean;
}

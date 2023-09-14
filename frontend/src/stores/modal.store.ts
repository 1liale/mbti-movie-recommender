import { writable } from 'svelte/store';

export type ModalState = {
	isOpened: boolean;
};

const defaultModalState = {
	isOpened: false
};

export const setModal = (modalState: ModalState) => {
	ModalUIState.set(modalState);
};

export const toggleModal = () => {
	ModalUIState.update((state) => {
		state.isOpened = !state.isOpened;
		return state;
	});
};

export const ModalUIState = writable(Object.assign({}, defaultModalState));

import type { ComponentProps } from "$components/Component.types";
import type { ComponentType } from "svelte";

export type GalleryItem = {
    component?: ComponentType;
    props?: Record<string, unknown>;
} | undefined

export interface GalleryComponentProps extends ComponentProps {
    items?: GalleryItem[] 
}
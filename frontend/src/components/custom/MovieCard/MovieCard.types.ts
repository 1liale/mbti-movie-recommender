import type { ComponentProps } from '$components/Component.types';

export type MovieItemMeta = {
    certificate: string | null | undefined,
    metascore: string | null | undefined,
    rating: string | null | undefined,
    time: string | null | undefined,
    votes: string | null | undefined,
}

export type MovieItem = {
    genres?: string[],
    img_path?: string,
    name: string | null | undefined,
    year: number | null | undefined,
    description: string | null | undefined,
    meta?: MovieItemMeta
}

export interface MovieCardComponentProps extends ComponentProps {
    value: MovieItem
}

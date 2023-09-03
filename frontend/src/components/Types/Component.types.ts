export interface ComponentProps extends Record<string, unknown> {
    customClass?: string;
    customStyle?: string;
    id?: string;
    isHidden?: boolean;
    isReadOnly?: boolean;
}
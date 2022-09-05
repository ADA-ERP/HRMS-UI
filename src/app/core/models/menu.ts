export interface Menu{
    level: number,
    title:string,
    icon?: string,
    open?: boolean,
    selected?: boolean,
    disabled?: boolean,
    route:string,
    children?:Menu[]
}
export interface PaginatedRaw<T> {
    first: number,
    prev: any,
    next: number,
    last: number,
    pages: number,
    items: number,
    data: T[]
}
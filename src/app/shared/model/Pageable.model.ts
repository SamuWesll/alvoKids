export interface PageableModel<T> {
    content: Array<T>,
    pageable: {
        pageNumber: number,
        pageSize: number,
    },
    last: boolean,
    totalElements: number,
    totalPages: number,
    first: boolean,
    size: number,
    number: number,
    numberOfElements: number,
    empty: boolean,
}
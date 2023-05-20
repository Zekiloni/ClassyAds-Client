


export interface IPagedOutput<T> {
    pageNumber: number;
    pageSize: number;
    totalNumberOfPages: number;
    totalNumberOfRecords: number;
    results: T[];
};
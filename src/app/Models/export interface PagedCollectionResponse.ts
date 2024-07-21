export interface PagedCollectionResponse<T> {
  pageNumber: number;
  pageSize: number;
  count: number;
  data: T[];
}

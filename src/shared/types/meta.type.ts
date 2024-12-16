export type ResponseMeta = {
  offset?: number;
  limit?: number;
  page?: number;
  hasNextPage?: boolean;
  pagingCounter?: number;
  hasPrevPage?: number;
  prevPage?: number;
  nextPage?: number;
  totalDocs?: number;
  totalPages?: number;
};

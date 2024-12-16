export type ParamType = number | string | string[] | boolean | null;

export const QUERY_MAP = {};

type QueriesMapKeys = keyof typeof QUERY_MAP;

export type QueryFilters<T extends string | number | symbol = QueriesMapKeys> = {
  page?: number;
  per_page?: number;
} & {
  [Key in T]?: ParamType;
};

export type QueryType<T> = QueryFilters<QueriesMapKeys> & T;

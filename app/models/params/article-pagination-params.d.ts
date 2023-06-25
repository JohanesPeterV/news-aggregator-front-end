declare type ArticlePaginationParams = {
  q: string | null;
  category: string | null;
  start_date: string | null;
  end_date: string | null;
} & PaginationParams;

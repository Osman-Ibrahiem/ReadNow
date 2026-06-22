export interface Article {
  id:        string;
  title:     string;
  body:      string;
  thumbnail: string;
  author:    string;
  category:  string;
  date:      string;
  readTime:  number;
}

export interface PaginatedResponse<T> {
  data:       T[];
  page:       number;
  totalPages: number;
  total:      number;
  hasNext:    boolean;
}
export interface ArticlesElement {
  id?: number;
  title: string | null;
  author: string | null;
  author_title: string | null;
  author_image: string | null;
  category: string | null;
  content: string | null;
  main_photo: string | null;
  createdAt?: string;
  updatedAt?: string;
}

export interface CategoriesElement {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
}

export interface FilterArticlesNewLevel {
  filterArticles: {
    filterArticles: ArticlesElement[];
  };
}

export interface FilterArticlesOneLevel {
  filterArticles?: ArticlesElement[];
}

export interface ArticlesCardProps {
  customArticles?:
    | FilterArticlesOneLevel
    | FilterArticlesNewLevel;
  trigerValue?: object[] | undefined;
}

export interface ApiResponse {
  data?: Array<ArticlesElement>;
  error?: unknown;
}

export type GetElementDBArgs = number | string | string[] | undefined;

export type EmptyObject = {
  [K in any]: never;
};

export interface AccountArticleProps {
  article: {
    article: ArticlesElement;
  };
}

export interface SearchProps {
  searchList: FilterArticlesNewLevel | undefined;
}

export interface UpdateFetch {
  [index: string]: string;
}

interface DispatchType {
  type: string;
}

export interface DispatchCreatorsFilter extends DispatchType{
  filterArticles?: ArticlesElement[];
}

export interface DispatchFilterArticles extends DispatchType {
  filterArticles?: FilterArticlesNewLevel;
  inputSearch?: string;
}

export interface DispatchCreatorsAccount extends DispatchType {
  article: AccountArticleProps;
}

export interface StateInterface
  extends DispatchFilterArticles,
    DispatchCreatorsAccount {}

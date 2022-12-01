export interface ArticlesElement {
  id?: number,
  title: string | null,
  author: string | null,
  author_title: string | null,
  author_image: string | null,
  category: string | null,
  content: string | null,
  main_photo: string | null,
  createdAt?: string,
  updatedAt?: string,
}

export interface CategoriesElement {
  id: number,
  name: string,
  createdAt: string,
  updatedAt: string,
}

export interface ApiResponse {
  data?: Array<ArticlesElement>,
  error?: unknown,
}

export type GetElementDBArgs = number | string | string[] | undefined;
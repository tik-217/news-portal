export interface ArticlesElement {
  id: number,
  title: string,
  author: string,
  author_title: string,
  author_image: string,
  category: string,
  content: string,
  main_photo: string,
  createdAt: string,
  updatedAt: string,
}

export interface CategoriesElement {
  id: number,
  name: number,
  createdAt: string,
  updatedAt: string,
}

export interface ApiResponse {
  data?: Array<ArticlesElement>,
  error?: unknown,
}

export type GetElementDBArgs = number | string | string[] | undefined;
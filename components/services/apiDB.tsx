import useSWR from "swr";
import axios from "axios";
import {
  ArticlesElement,
  CategoriesElement,
  GetElementDBArgs,
} from "../../types";

const fetcher = async (url: string) =>
  await axios.get(url).then((res) => res.data);

export function dataArticles() {
  const { data, error } = useSWR(`http://localhost:3001/articles`, fetcher);

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
}

export function dataCategories() {
  const { data, error } = useSWR(`http://localhost:3001/categories`, fetcher);

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
}

// export async function getCategoriesDB() {
//   return await dataCategories().data.map((el: CategoriesElement) => {
//     return el;
//   });
// }

// export async function getArticlesDB(id: GetElementDBArgs) {
//   return await dataArticles().data.filter((el: ArticlesElement) => {
//     if (String(el.id) === String(id)) return el;
//   });
// }
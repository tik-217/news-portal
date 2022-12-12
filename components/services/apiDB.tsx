import useSWR from "swr";
import axios from "axios";

const fetcher = async (url: string) =>
  await axios.get(url).then((res) => res.data);

export function dataArticles(offset?: number, limit?: number) {
  const { data, error } = useSWR(
    offset && limit || offset === 0
      ? `http://localhost:3001/articles/?offset=${offset}&limit=${limit}`
      : `http://localhost:3001/articles`,
    fetcher
  );

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

export function dataTags() {
  const { data, error } = useSWR(`http://localhost:3001/tags`, fetcher);

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
}

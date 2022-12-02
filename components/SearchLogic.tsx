import { RefObject } from "react";
import axios from "axios";

// next
import useSWR from "swr";

// types
import { ArticlesElement } from "../types";
import { useRouter } from "next/router";
import { Index } from "flexsearch";
import Search from "../pages/search";

const fetcher = async (url: string) =>
  await axios.get(url).then((res) => res.data);

export default async function SearchLogic(
  e: React.KeyboardEvent<HTMLInputElement>,
  searchField: RefObject<HTMLInputElement>,
  loadingPosts: boolean
) {
  e.preventDefault();

  const rout = useRouter();

  const { data, error } = useSWR(
    loadingPosts ? "http://localhost:3001/articles" : null,
    fetcher
  );

  const inputSearch =
    searchField && (searchField.current as HTMLInputElement).value;

  const index = new Index({ tokenize: "forward" });

  data &&
    data.forEach(({ content }: { content: string }, i: number) => {
      index.add(i, content);
    });

  const flex = index.search(inputSearch, {
    limit: 3,
  });

  const results: ArticlesElement[] = flex.map((i) => data[i]);

  rout.push("/search");

  <Search searchList={results} />
}

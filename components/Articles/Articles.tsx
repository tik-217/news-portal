import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ArticlesCard from "../ArticlesCard/ArticlesCard";
import { dataArticles } from "../services/apiDB";

export default function Articles() {
  const router = useRouter();
  const offset = router.query.offset ? Number(router.query.offset) : 0;
  const limit = router.query.limit ? Number(router.query.limit) : 8;

  const initialState = offset === 0 ? 1 : offset/limit+1;
  
  const [activePaginationNumber, setActivePaginationNumber] =
    useState<number>();
  
  useEffect(() => {
    setActivePaginationNumber(initialState)
  }, [initialState]);

  const {data} = dataArticles();
  const articlesLength = data && data.length;

  let paginationLength = Math.floor(articlesLength / limit);
  
  function createPagination() {
    const liCollection = [];

    if (articlesLength % limit !== 0) paginationLength++;

    for (let i = 1; i <= paginationLength; i++) {
      liCollection.push(
        <li key={i} onClick={(e) => setActivePaginationNumber(i)}>
          {activePaginationNumber === i ? (
            <span className="pgn__num current">{i}</span>
          ) : (
            <Link
              className="pgn__num"
              href={`/?offset=${limit * i - limit}&limit=${limit}`}
            >
              {i}
            </Link>
          )}
        </li>
      );
    }

    return liCollection;
  }

  return (
    <section className="s-content s-content--top-padding">
      <ArticlesCard customArticles={dataArticles(offset, limit).data} />

      <div className="row pagination-wrap">
        <div className="col-full">
          <nav className="pgn" data-aos="fade-up">
            <ul>
              <li>
                <Link
                  className="pgn__prev"
                  href={`/?offset=${
                    offset === 0 ? offset : offset - limit
                  }&limit=${limit}`}
                >
                  Prev
                </Link>
              </li>
              {createPagination()}
              <li>
                {}
                <Link
                  className="pgn__next"
                  href={`/?offset=${
                    offset === paginationLength * limit - limit
                      ? offset
                      : offset + limit
                  }&limit=${limit}`}
                >
                  Next
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
}

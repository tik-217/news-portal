import React, { useState } from "react";

// next
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import useSWR from "swr";

// types
import { ArticlesElement, CategoriesElement } from "../types";

// services
import { dataArticles, dataCategories } from "./services/apiDB";

// coomponents
import GenerateCategoriesHTML from "./GenerateCategoriesHTML";

// axios
import axios from "axios";

const deleteFetch = (url: string) => axios.delete(url).then((res) => res.data);

export default React.memo(function ArticlesCard({
  searchArticles,
}: {
  searchArticles?: ArticlesElement[];
}) {
  const [deleteReq, setDeleteReq] = useState<number>();

  useSWR(
    typeof deleteReq === "number" &&
      `http://localhost:3001/articles/?id=${deleteReq}`,
    deleteFetch
  );

  const articles = searchArticles ? searchArticles : dataArticles().data;
  const categories = dataCategories().data;
  const categoriesArr = getCategories();

  const rout = useRouter();

  function getCategories() {
    return (
      categories &&
      categories.map((el: CategoriesElement) => {
        return el;
      })
    );
  }

  return (
    <div className="row entries-wrap wide">
      <div className="entries">
        {articles &&
          articles.map((el: ArticlesElement) => {
            return (
              <article className="col-block" key={el.id}>
                <div className="item-entry" data-aos="zoom-in">
                  {rout.pathname === "/account" && (
                    <div className="update_image">
                      <img src="/icons8-edit.svg" alt="" />
                      <img
                        src="/icons8-trash.svg"
                        alt=""
                        onClick={() => setDeleteReq(el.id)}
                      />
                    </div>
                  )}
                  <div className="item-entry__thumb">
                    <Link
                      href={`/blog/${el.id}`}
                      className="item-entry__thumb-link"
                    >
                      <Image
                        height={350}
                        width={350}
                        src={el.main_photo !== null ? el.main_photo : ""}
                        alt=""
                      />
                    </Link>
                  </div>

                  <div className="item-entry__text">
                    <div className="item-entry__cat">
                      {
                        <GenerateCategoriesHTML
                          category1={categoriesArr}
                          categoryString2={el.category}
                        />
                      }
                    </div>

                    <h1 className="item-entry__title">
                      <Link href={`/blog/${el.id}`}>{el.title}</Link>
                    </h1>

                    <div className="item-entry__date">
                      <p>{el.createdAt}</p>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
      </div>
    </div>
  );
});

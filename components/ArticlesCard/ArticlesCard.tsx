import React, { useState } from "react";
import { useEffect } from "react";
import { useSWRConfig } from "swr";
import {
  Image,
  Link,
  dataArticles,
  dataCategories,
  GenerateCategoriesHTML,
  ControlsPosts,
  ArticlesElement,
  CategoriesElement,
} from "./index";

export default React.memo(function ArticlesCard({
  searchArticles,
  trigerValue,
}: {
  searchArticles?: ArticlesElement[];
  trigerValue?: object[] | undefined;
}) {
  const { mutate } = useSWRConfig();

  const [mutateAccount, setMutateAccount] = useState<boolean>(true);

  const articles = searchArticles ? searchArticles : dataArticles().data;
  const categories = dataCategories().data;
  const categoriesArr = getCategories();

  useEffect(() => {
    mutate("http://localhost:3001/articles");
    setMutateAccount(!mutateAccount);
  }, [trigerValue]);

  function getCategories() {
    return (
      categories &&
      categories.map((el: CategoriesElement) => {
        return el;
      })
    );
  }

  function createDate(date: string | undefined) {
    const dateObject = date && new Date(date);

    const mounth = dateObject && dateObject.toLocaleString('en-us', { month: 'long' });
    const dateNum = dateObject && dateObject.getDate();
    const fullYear = dateObject && dateObject.getFullYear();

    return (
      <>
        {mounth} {dateNum}, {fullYear}
      </>
    )
  }

  return (
    <div className="row entries-wrap wide">
      <div className="entries">
        {articles &&
          articles.map((el: ArticlesElement) => {
            return (
              <article className="col-block" key={el.id}>
                <div className="item-entry" data-aos="zoom-in">
                  <ControlsPosts el={el} />
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
                      <p>{createDate(el.createdAt)}</p>
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

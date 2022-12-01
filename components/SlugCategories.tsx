// next
import { NextRouter, useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

// types
import { ArticlesElement, CategoriesElement } from "../types";

// services
import { dataCategories } from "./services/apiDB";
import getCategoryName from "./services/getCategoryName";

// components
import GenerateCategoriesHTML from "./GenerateCategoriesHTML";

export default function SlugCategories() {
  const categories = dataCategories().data;

  const categoriesArr = getCategories();
  const rout: NextRouter = useRouter();

  function getCategories() {
    return (
      categories &&
      categories.map((el: CategoriesElement) => {
        return el;
      })
    );
  }

  const filteredArticles = getCategoryName(rout);

  return (
    <div className="row entries-wrap wide">
      <div className="entries">
        {filteredArticles &&
          filteredArticles.map((el: ArticlesElement) => {
            return (
              <article className="col-block" key={el.id}>
                <div className="item-entry" data-aos="zoom-in">
                  <div className="item-entry__thumb">
                    <Link
                      href={`/blog/${el.id}`}
                      className="item-entry__thumb-link"
                    >
                      <Image
                        height={350}
                        width={350}
                        src={el.main_photo}
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
}

import { useRouter } from "next/router";

import Image from "next/image";
import Link from "next/link";

import { ArticlesElement, CategoriesElement } from "../types";
import { dataArticles, dataCategories } from "./services/apiDB";
import GenerateCategoriesHTML from "./services/GenerateCategoriesHTML";

export default function Articles() {
  const articles = dataArticles().data;
  const categories = dataCategories().data;
  const categoriesArr = getCategories();

  function getCategories() {
    return (
      categories &&
      categories.map((el: CategoriesElement) => {
        return el;
      })
    );
  }

  const rout = useRouter();
  const jsxElem = rout.pathname.split("/")[1] === "categories";

  return (
    <section
      className={jsxElem ? "s-content s-content--top-padding" : "s-content"}
    >
      {jsxElem && (
        <div className="row narrow">
          <div className="col-full s-content__header" data-aos="fade-up">
            <h1 className="display-1 display-1--with-line-sep">
              Category: Lifestyle
            </h1>
            <p className="lead">
              Dolor similique vitae. Exercitationem quidem occaecati iusto. Id
              non vitae enim quas error dolor maiores ut. Exercitationem earum
              ut repudiandae optio veritatis animi nulla qui dolores.
            </p>
          </div>
        </div>
      )}
      <div className="row entries-wrap wide">
        <div className="entries">
          {articles &&
            articles.map((el: ArticlesElement) => {
              return (
                <article className="col-block" key={el.id}>
                  <div className="item-entry" data-aos="zoom-in">
                    <div className="item-entry__thumb">
                      <a
                        href={`/blog/${el.id}`}
                        className="item-entry__thumb-link"
                      >
                        <Image
                          height={350}
                          width={350}
                          src={el.main_photo}
                          alt=""
                        />
                      </a>
                    </div>

                    <div className="item-entry__text">
                      <div className="item-entry__cat">
                        {<GenerateCategoriesHTML category1={categoriesArr} categoryString2={el.category} />}
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

      <div className="row pagination-wrap">
        <div className="col-full">
          <nav className="pgn" data-aos="fade-up">
            <ul>
              <li>
                <a className="pgn__prev" href="#0">
                  Prev
                </a>
              </li>
              <li>
                <a className="pgn__num" href="#0">
                  1
                </a>
              </li>
              <li>
                <span className="pgn__num current">2</span>
              </li>
              <li>
                <a className="pgn__num" href="#0">
                  3
                </a>
              </li>
              <li>
                <a className="pgn__num" href="#0">
                  4
                </a>
              </li>
              <li>
                <a className="pgn__num" href="#0">
                  5
                </a>
              </li>
              <li>
                <span className="pgn__num dots">…</span>
              </li>
              <li>
                <a className="pgn__num" href="#0">
                  8
                </a>
              </li>
              <li>
                <a className="pgn__next" href="#0">
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
}

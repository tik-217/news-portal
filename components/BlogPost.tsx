import React from "react";

// next source
import Link from "next/link";
import Image from "next/image";

// types
import { ArticlesElement, CategoriesElement, GetElementDBArgs } from "../types";

// api requests
import { dataArticles, dataCategories } from "./services/apiDB";

// components
import GenerateCategoriesHTML from "./GenerateCategoriesHTML";

// MarkDown
// import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
// import { serialize } from "next-mdx-remote/serialize";

export default function BlogPost({ artId }: { artId: GetElementDBArgs }) {
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

  function prevNextArticles(index: number) {
    return articles?.filter((el: ArticlesElement) => el.id === index);
  }

  const prevArticle: ArticlesElement | undefined = prevNextArticles(
    Number(artId) - 1
  )[0];
  const nextArticle: ArticlesElement | undefined = prevNextArticles(
    Number(artId) + 1
  )[0];

  return (
    <section className="s-content s-content--top-padding s-content--narrow">
      {articles &&
        articles
          ?.filter((el: ArticlesElement) => el.id === Number(artId) && el)
          .map((el: ArticlesElement) => {
            return (
              <article className="row entry format-standard" key={el.id}>
                <div className="entry__media col-full">
                  <div className="entry__post-thumb">
                    <Image
                      height={500}
                      width={1000}
                      src="/images/thumbs/single/standard/standard-1000.jpg"
                      alt=""
                    />
                  </div>
                </div>

                <div className="entry__header col-full">
                  <h1 className="entry__header-title display-1">{el.title}</h1>
                  <ul className="entry__header-meta">
                    <li className="date">June 15, 2018</li>
                    <li className="byline">
                      By
                      <a href="#0">{el.author}</a>
                    </li>
                  </ul>
                </div>

                <div className="col-full entry__main">
                  {el.content}

                  <div className="entry__taxonomies">
                    <div className="entry__cat">
                      <h5>Posted In:</h5>
                      <span className="entry__tax-list">
                        {
                          <GenerateCategoriesHTML
                            category1={categoriesArr}
                            categoryString2={el.category}
                          />
                        }
                      </span>
                    </div>

                    <div className="entry__tags">
                      <h5>Tags:</h5>
                      <span className="entry__tax-list entry__tax-list--pill">
                        {/* Вывести все категории конеретной статьи из таблицы Tags */}
                        <a href="#0">orci</a>
                        <a href="#0">lectus</a>
                        <a href="#0">varius</a>
                        <a href="#0">turpis</a>
                      </span>
                    </div>
                  </div>

                  <div className="entry__author">
                    <Image
                      height={350}
                      width={350}
                      src={el.author_image}
                      alt=""
                    />

                    <div className="entry__author-about">
                      <h5 className="entry__author-name">
                        <span>Posted by</span>
                        <a href="#0">{el.author}</a>
                      </h5>

                      <div className="entry__author-desc">
                        <p>{el.author_title}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}

      {(prevArticle || nextArticle) && (
        <div className="s-content__entry-nav">
          <div className="row s-content__nav">
            <div className="col-six s-content__prev">
              {prevArticle && (
                <Link href={`/blog/${prevArticle.id}`} rel="prev">
                  <span>Previous Post</span>
                  {prevArticle.title}
                </Link>
              )}
            </div>
            <div className="col-six s-content__next">
              {nextArticle && (
                <Link href={`/blog/${nextArticle.id}`} rel="next">
                  <span>Next Post</span>
                  {nextArticle.title}
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

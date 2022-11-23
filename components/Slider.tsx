import Link from "next/link";
import Image from "next/image";

// slick slider
import Slick from "react-slick";

// types
import { ArticlesElement, CategoriesElement } from "../types";

// sercices
import { dataArticles, dataCategories } from "./services/apiDB";
import { slickConf } from "./services/slick-config";

// components
import GenerateCategoriesHTML from "./services/GenerateCategoriesHTML";

export default function Slider() {
  const data = dataArticles().data;
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

  return (
    <section className="s-featured">
      <div className="row">
        <div className="col-full">
          <div className="featured-slider featured" data-aos="zoom-in">
            <Slick {...slickConf}>
              {data &&
                data.map((el: ArticlesElement) => {
                  return (
                    <div className="featured__slide" key={el.id}>
                      <div className="entry">
                        <div className="entry__background"></div>

                        <div className="entry__content">
                          <span className="entry__category">
                            <Link href={`/categories/${el.category}`}>
                              <GenerateCategoriesHTML category1={categoriesArr} categoryString2={el.category} />
                            </Link>
                          </span>

                          <h1>
                            <Link href={`/blog/${el.id}`} title="">
                              {el.title}
                            </Link>
                          </h1>

                          <div className="entry__info">
                            <a href="#0" className="entry__profile-pic">
                              <Image
                                height={800}
                                width={800}
                                className="avatar"
                                src={el.author_image}
                                alt=""
                              />
                            </a>
                            <ul className="entry__meta">
                              <li>
                                  {el.author}
                              </li>
                              <li>{el.createdAt}</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}

              {/* <div className="featured__slide">
                <div className="entry">
                  <div
                    className="entry__background"
                    style={{
                      ["background-image" as any]:
                        "url('images/thumbs/featured/featured-watch.jpg')",
                    }}
                  ></div>

                  <div className="entry__content">
                    <span className="entry__category">
                      <a href="#0">Management</a>
                    </span>

                    <h1>
                      <a href="#0" title="">
                        The Pomodoro Technique Really Works.
                      </a>
                    </h1>

                    <div className="entry__info">
                      <a href="#0" className="entry__profile-pic">
                        <img
                          className="avatar"
                          src="images/avatars/user-03.jpg"
                          alt=""
                        />
                      </a>

                      <ul className="entry__meta">
                        <li>
                          <a href="#0">John Doe</a>
                        </li>
                        <li>June 13, 2018</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="featured__slide">
                <div className="entry">
                  <div
                    className="entry__background"
                    style={{
                      ["background-image" as any]:
                        "url('images/thumbs/featured/featured-beetle.jpg')",
                    }}
                  ></div>

                  <div className="entry__content">
                    <span className="entry__category">
                      <a href="#0">LifeStyle</a>
                    </span>

                    <h1>
                      <a href="#0" title="">
                        The difference between classNameics, Vintage & Antique
                        Cars.
                      </a>
                    </h1>

                    <div className="entry__info">
                      <a href="#0" className="entry__profile-pic">
                        <img
                          className="avatar"
                          src="images/avatars/user-03.jpg"
                          alt=""
                        />
                      </a>

                      <ul className="entry__meta">
                        <li>
                          <a href="#0">John Doe</a>
                        </li>
                        <li>June 12, 2018</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div> */}
            </Slick>
          </div>
        </div>
      </div>
    </section>
  );
}

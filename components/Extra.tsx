import Image from "next/image";
import Link from "next/link";

// api
import { dataArticles, dataCategories } from "../components/services/apiDB";

// types
import { ArticlesElement, CategoriesElement } from "../types";

export default function Extra() {
  const articles: ArticlesElement[] = dataArticles(0, 6).data;
  const categories = dataCategories().data;

  return (
    <section className="s-extra">
      <div className="row">
        <div className="col-seven md-six tab-full popular">
          <h3>Popular Posts</h3>

          <div className="block-1-2 block-m-full popular__posts">
            {articles &&
              articles.map((el) => {
                return (
                  <article key={el.id} className="col-block popular__post">
                    <a href={`/blog/${el.id}`} className="popular__thumb">
                      {el.main_photo && (
                        <Image
                          height={150}
                          width={150}
                          src={el.main_photo}
                          alt=""
                        />
                      )}
                    </a>
                    <h5>{el.title}</h5>
                    <section className="popular__meta">
                      <span className="popular__author">
                        <span>By</span> {el.author}
                      </span>
                      <span className="popular__date">
                        <span> on </span>
                        <time dateTime="2018-06-14">{el.createdAt}</time>
                      </span>
                    </section>
                  </article>
                );
              })}

            {/* <article className="col-block popular__post">
              <a href="#0" className="popular__thumb">
                <Image
                  height={150}
                  width={150}
                  src="/images/thumbs/small/wheel-150.jpg"
                  alt=""
                />
              </a>
              <h5>
                <a href="#0">Visiting Theme Parks Improves Your Health.</a>
              </h5>
              <section className="popular__meta">
                <span className="popular__author">
                  <span>By</span> <a href="#0">John Doe</a>
                </span>
                <span className="popular__date">
                  <span>on</span>{" "}
                  <time dateTime="2018-06-12">Jun 12, 2018</time>
                </span>
              </section>
            </article>
            <article className="col-block popular__post">
              <a href="#0" className="popular__thumb">
                <Image
                  height={150}
                  width={150}
                  src="/images/thumbs/small/shutterbug-150.jpg"
                  alt=""
                />
              </a>
              <h5>
                <a href="#0">Key Benefits Of Family Photography.</a>
              </h5>
              <section className="popular__meta">
                <span className="popular__author">
                  <span>By</span> <a href="#0">John Doe</a>
                </span>
                <span className="popular__date">
                  <span>on</span>{" "}
                  <time dateTime="2018-06-12">Jun 12, 2018</time>
                </span>
              </section>
            </article>
            <article className="col-block popular__post">
              <a href="#0" className="popular__thumb">
                <Image
                  height={150}
                  width={150}
                  src="/images/thumbs/small/cookies-150.jpg"
                  alt=""
                />
              </a>
              <h5>
                <a href="#0">Absolutely No Sugar Oatmeal Cookies.</a>
              </h5>
              <section className="popular__meta">
                <span className="popular__author">
                  <span>By</span> <a href="#0"> John Doe</a>
                </span>
                <span className="popular__date">
                  <span>on</span>{" "}
                  <time dateTime="2018-06-12">Jun 12, 2018</time>
                </span>
              </section>
            </article>
            <article className="col-block popular__post">
              <a href="#0" className="popular__thumb">
                <Image
                  height={150}
                  width={150}
                  src="/images/thumbs/small/beetle-150.jpg"
                  alt=""
                />
              </a>
              <h5>
                <a href="#0">Throwback To The Good Old Days.</a>
              </h5>
              <section className="popular__meta">
                <span className="popular__author">
                  <span>By</span> <a href="#0">John Doe</a>
                </span>
                <span className="popular__date">
                  <span>on</span>{" "}
                  <time dateTime="2018-06-12">Jun 12, 2018</time>
                </span>
              </section>
            </article>
            <article className="col-block popular__post">
              <a href="#0" className="popular__thumb">
                <Image
                  height={150}
                  width={150}
                  src="/images/thumbs/small/salad-150.jpg"
                  alt=""
                />
              </a>
              <h5>Healthy Mediterranean Salad Recipes</h5>
              <section className="popular__meta">
                <span className="popular__author">
                  <span>By</span> <a href="#0"> John Doe</a>
                </span>
                <span className="popular__date">
                  <span>on</span>{" "}
                  <time dateTime="2018-06-12">Jun 12, 2018</time>
                </span>
              </section>
            </article> */}
          </div>
        </div>

        <div className="col-four md-six tab-full end">
          <div className="row">
            <div className="col-six md-six mob-full categories">
              <h3>Categories</h3>

              <ul className="linklist">
                {categories &&
                  categories.map((el: CategoriesElement) => {
                    return (
                      <li key={el.id}>
                        <a href={`/categories/${el.name}`}>{el.name}</a>
                      </li>
                    );
                  })}
              </ul>
            </div>

            <div className="col-six md-six mob-full sitelinks">
              <h3>Site Links</h3>

              <ul className="linklist">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/categories">Categories</Link>
                </li>
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="/contacts">Contacts</Link>
                </li>
                <li>
                  <Link href="/login">Login</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

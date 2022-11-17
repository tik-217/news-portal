import { useRouter } from "next/router";
import Image from "next/image";

export default function Articles() {
  const asPath = useRouter().asPath;
  const jsxElem = asPath === "/category/categories";

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
          <article className="col-block">
            <div className="item-entry" data-aos="zoom-in">
              <div className="item-entry__thumb">
                <a
                  href="single-standard.html"
                  className="item-entry__thumb-link"
                >
                  <Image
                    height={350}
                    width={350}
                    src="/images/thumbs/post/lamp-400.jpg"
                    alt=""
                  />
                </a>
              </div>

              <div className="item-entry__text">
                <div className="item-entry__cat">
                  <a href="category.html">Design</a>
                </div>

                <h1 className="item-entry__title">
                  <a href="single-standard.html">
                    3 Benefits of Minimalism In Interior Design.
                  </a>
                </h1>

                <div className="item-entry__date">
                  <a href="single-standard.html">June 15, 2018</a>
                </div>
              </div>
            </div>
          </article>

          <article className="col-block">
            <div className="item-entry" data-aos="zoom-in">
              <div className="item-entry__thumb">
                <a
                  href="single-standard.html"
                  className="item-entry__thumb-link"
                >
                  <Image
                    height={350}
                    width={350}
                    src="/images/thumbs/post/tulips-400.jpg"
                    alt=""
                  />
                </a>
              </div>

              <div className="item-entry__text">
                <div className="item-entry__cat">
                  <a href="category.html">Health</a>
                </div>

                <h1 className="item-entry__title">
                  <a href="single-standard.html">
                    10 Interesting Facts About Caffeine.
                  </a>
                </h1>

                <div className="item-entry__date">
                  <a href="single-standard.html">June 14, 2018</a>
                </div>
              </div>
            </div>
          </article>

          <article className="col-block">
            <div className="item-entry" data-aos="zoom-in">
              <div className="item-entry__thumb">
                <a
                  href="single-standard.html"
                  className="item-entry__thumb-link"
                >
                  <Image
                    height={350}
                    width={350}
                    src="/images/thumbs/post/music-400.jpg"
                    alt=""
                  />
                </a>
              </div>

              <div className="item-entry__text">
                <div className="item-entry__cat">
                  <a href="category.html">Health</a>
                </div>

                <h1 className="item-entry__title">
                  <a href="single-standard.html">
                    The Power of Music to Reduce Stress.
                  </a>
                </h1>

                <div className="item-entry__date">
                  <a href="single-standard.html">June 14, 2018</a>
                </div>
              </div>
            </div>
          </article>

          <article className="col-block">
            <div className="item-entry" data-aos="zoom-in">
              <div className="item-entry__thumb">
                <a
                  href="single-standard.html"
                  className="item-entry__thumb-link"
                >
                  <Image
                    height={350}
                    width={350}
                    src="/images/thumbs/post/watch-400.jpg"
                    alt=""
                  />
                </a>
              </div>

              <div className="item-entry__text">
                <div className="item-entry__cat">
                  <a href="category.html">Management</a>
                </div>

                <h1 className="item-entry__title">
                  <a href="single-standard.html">
                    The Pomodoro Technique Really Works.
                  </a>
                </h1>

                <div className="item-entry__date">
                  <a href="single-standard.html">June 12, 2018</a>
                </div>
              </div>
            </div>
          </article>

          <article className="col-block">
            <div className="item-entry" data-aos="zoom-in">
              <div className="item-entry__thumb">
                <a
                  href="single-standard.html"
                  className="item-entry__thumb-link"
                >
                  <Image
                    height={350}
                    width={350}
                    src="/images/thumbs/post/wheel-400.jpg"
                    alt=""
                  />
                </a>
              </div>

              <div className="item-entry__text">
                <div className="item-entry__cat">
                  <a href="category.html">Lifestyle</a>
                </div>

                <h1 className="item-entry__title">
                  <a href="single-standard.html">
                    Visiting Theme Parks Improves Your Health.
                  </a>
                </h1>

                <div className="item-entry__date">
                  <a href="single-standard.html">June 12, 2017</a>
                </div>
              </div>
            </div>
          </article>

          <article className="col-block">
            <div className="item-entry" data-aos="zoom-in">
              <div className="item-entry__thumb">
                <a
                  href="single-standard.html"
                  className="item-entry__thumb-link"
                >
                  <Image
                    height={350}
                    width={350}
                    src="/images/thumbs/post/tulips-400.jpg"
                    alt=""
                  />
                </a>
              </div>

              <div className="item-entry__text">
                <div className="item-entry__cat">
                  <a href="category.html">Health</a>
                </div>

                <h1 className="item-entry__title">
                  <a href="single-standard.html">
                    10 Interesting Facts About Caffeine.
                  </a>
                </h1>

                <div className="item-entry__date">
                  <a href="single-standard.html">June 14, 2018</a>
                </div>
              </div>
            </div>
          </article>

          <article className="col-block">
            <div className="item-entry" data-aos="zoom-in">
              <div className="item-entry__thumb">
                <a
                  href="single-standard.html"
                  className="item-entry__thumb-link"
                >
                  <Image
                    height={350}
                    width={350}
                    src="/images/thumbs/post/music-400.jpg"
                    alt=""
                  />
                </a>
              </div>

              <div className="item-entry__text">
                <div className="item-entry__cat">
                  <a href="category.html">Health</a>
                </div>

                <h1 className="item-entry__title">
                  <a href="single-standard.html">
                    The Power of Music to Reduce Stress.
                  </a>
                </h1>

                <div className="item-entry__date">
                  <a href="single-standard.html">June 14, 2018</a>
                </div>
              </div>
            </div>
          </article>

          <article className="col-block">
            <div className="item-entry" data-aos="zoom-in">
              <div className="item-entry__thumb">
                <a
                  href="single-standard.html"
                  className="item-entry__thumb-link"
                >
                  <Image
                    height={350}
                    width={350}
                    src="/images/thumbs/post/watch-400.jpg"
                    alt=""
                  />
                </a>
              </div>

              <div className="item-entry__text">
                <div className="item-entry__cat">
                  <a href="category.html">Management</a>
                </div>

                <h1 className="item-entry__title">
                  <a href="single-standard.html">
                    The Pomodoro Technique Really Works.
                  </a>
                </h1>

                <div className="item-entry__date">
                  <a href="single-standard.html">June 12, 2018</a>
                </div>
              </div>
            </div>
          </article>

          <article className="col-block">
            <div className="item-entry" data-aos="zoom-in">
              <div className="item-entry__thumb">
                <a
                  href="single-standard.html"
                  className="item-entry__thumb-link"
                >
                  <Image
                    height={350}
                    width={350}
                    src="/images/thumbs/post/wheel-400.jpg"
                    alt=""
                  />
                </a>
              </div>

              <div className="item-entry__text">
                <div className="item-entry__cat">
                  <a href="category.html">Lifestyle</a>
                </div>

                <h1 className="item-entry__title">
                  <a href="single-standard.html">
                    Visiting Theme Parks Improves Your Health.
                  </a>
                </h1>

                <div className="item-entry__date">
                  <a href="single-standard.html">June 12, 2017</a>
                </div>
              </div>
            </div>
          </article>

          <article className="col-block">
            <div className="item-entry" data-aos="zoom-in">
              <div className="item-entry__thumb">
                <a
                  href="single-standard.html"
                  className="item-entry__thumb-link"
                >
                  <Image
                    height={350}
                    width={350}
                    src="/images/thumbs/post/watch-400.jpg"
                    alt=""
                  />
                </a>
              </div>

              <div className="item-entry__text">
                <div className="item-entry__cat">
                  <a href="category.html">Management</a>
                </div>

                <h1 className="item-entry__title">
                  <a href="single-standard.html">
                    The Pomodoro Technique Really Works.
                  </a>
                </h1>

                <div className="item-entry__date">
                  <a href="single-standard.html">June 12, 2018</a>
                </div>
              </div>
            </div>
          </article>

          <article className="col-block">
            <div className="item-entry" data-aos="zoom-in">
              <div className="item-entry__thumb">
                <a
                  href="single-standard.html"
                  className="item-entry__thumb-link"
                >
                  <Image
                    height={350}
                    width={350}
                    src="/images/thumbs/post/wheel-400.jpg"
                    alt=""
                  />
                </a>
              </div>

              <div className="item-entry__text">
                <div className="item-entry__cat">
                  <a href="category.html">Lifestyle</a>
                </div>

                <h1 className="item-entry__title">
                  <a href="single-standard.html">
                    Visiting Theme Parks Improves Your Health.
                  </a>
                </h1>

                <div className="item-entry__date">
                  <a href="single-standard.html">June 12, 2017</a>
                </div>
              </div>
            </div>
          </article>

          <article className="col-block">
            <div className="item-entry" data-aos="zoom-in">
              <div className="item-entry__thumb">
                <a
                  href="single-standard.html"
                  className="item-entry__thumb-link"
                >
                  <Image
                    height={350}
                    width={350}
                    src="/images/thumbs/post/wheel-400.jpg"
                    alt=""
                  />
                </a>
              </div>

              <div className="item-entry__text">
                <div className="item-entry__cat">
                  <a href="category.html">Lifestyle</a>
                </div>

                <h1 className="item-entry__title">
                  <a href="single-standard.html">
                    Visiting Theme Parks Improves Your Health.
                  </a>
                </h1>

                <div className="item-entry__date">
                  <a href="single-standard.html">June 12, 2017</a>
                </div>
              </div>
            </div>
          </article>
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
import Image from "next/image";

export default function Extra() {
  return (
    <section className="s-extra">
      <div className="row">
        <div className="col-seven md-six tab-full popular">
          <h3>Popular Posts</h3>

          <div className="block-1-2 block-m-full popular__posts">
            <article className="col-block popular__post">
              <a href="#0" className="popular__thumb">
                <Image
                  height={150}
                  width={150}
                  src="/images/thumbs/small/tulips-150.jpg"
                  alt=""
                />
              </a>
              <h5>10 Interesting Facts About Caffeine.</h5>
              <section className="popular__meta">
                <span className="popular__author">
                  <span>By</span> <a href="#0">John Doe</a>
                </span>
                <span className="popular__date">
                  <span>on</span>{" "}
                  <time dateTime="2018-06-14">Jun 14, 2018</time>
                </span>
              </section>
            </article>
            <article className="col-block popular__post">
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
            </article>
          </div>
        </div>

        <div className="col-four md-six tab-full end">
          <div className="row">
            <div className="col-six md-six mob-full categories">
              <h3>Categories</h3>

              <ul className="linklist">
                <li>
                  <a href="#0">Lifestyle</a>
                </li>
                <li>
                  <a href="#0">Travel</a>
                </li>
                <li>
                  <a href="#0">Recipes</a>
                </li>
                <li>
                  <a href="#0">Management</a>
                </li>
                <li>
                  <a href="#0">Health</a>
                </li>
                <li>
                  <a href="#0">Creativity</a>
                </li>
              </ul>
            </div>

            <div className="col-six md-six mob-full sitelinks">
              <h3>Site Links</h3>

              <ul className="linklist">
                <li>
                  <a href="#0">Home</a>
                </li>
                <li>
                  <a href="#0">Blog</a>
                </li>
                <li>
                  <a href="#0">Styles</a>
                </li>
                <li>
                  <a href="#0">About</a>
                </li>
                <li>
                  <a href="#0">Contact</a>
                </li>
                <li>
                  <a href="#0">Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

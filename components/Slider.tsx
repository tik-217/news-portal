import { useEffect } from "react";

// slick slider
import Slick from "react-slick";
import { slickConf } from "./services/slick-config";

export default function Slider() {

  useEffect(() => {});

  return (
    <section className="s-featured">
      <div className="row">
        <div className="col-full">
          <div className="featured-slider featured" data-aos="zoom-in">
            <Slick {...slickConf}>
              <div className="featured__slide">
                <div className="entry">
                  <div
                    className="entry__background"
                    style={{
                      ["background-image" as any]:
                        "url('images/thumbs/featured/featured-guitarman.jpg')",
                    }}
                  ></div>

                  <div className="entry__content">
                    <span className="entry__category">
                      <a href="#0">Music</a>
                    </span>

                    <h1>
                      <a href="#0" title="">
                        What Your Music Preference Says About You and Your
                        Personality.
                      </a>
                    </h1>

                    <div className="entry__info">
                      <a href="#0" className="entry__profile-pic">
                        <img
                          className="avatar"
                          src="images/avatars/user-05.jpg"
                          alt=""
                        />
                      </a>
                      <ul className="entry__meta">
                        <li>
                          <a href="#0">Jonathan Smith</a>
                        </li>
                        <li>June 02, 2018</li>
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
              </div>
            </Slick>
          </div>
        </div>
      </div>
    </section>
  );
}

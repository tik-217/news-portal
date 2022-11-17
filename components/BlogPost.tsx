import Image from "next/image";

export default function Home() {
  return (
    <section className="s-content s-content--top-padding s-content--narrow">
      <article className="row entry format-standard">
        <div className="entry__media col-full">
          <div className="entry__post-thumb">
            <Image
              sizes="(max-width: 2000px) 100vw, 2000px"
              src="/images/thumbs/single/standard/standard-1000.jpg"
              alt=""
            />
          </div>
        </div>

        <div className="entry__header col-full">
          <h1 className="entry__header-title display-1">
            This Is A Standard Format Post.
          </h1>
          <ul className="entry__header-meta">
            <li className="date">June 15, 2018</li>
            <li className="byline">
              By
              <a href="#0">Jonathan Doe</a>
            </li>
          </ul>
        </div>

        <div className="col-full entry__main">
          <p className="lead drop-cap">
            Duis ex ad cupidatat tempor Excepteur cillum cupidatat fugiat
            nostrud cupidatat dolor sunt sint sit nisi est eu exercitation
            incididunt adipisicing veniam velit id fugiat enim mollit amet anim
            veniam dolor dolor irure velit commodo cillum sit nulla ullamco
            magna amet magna cupidatat qui labore cillum sit in tempor veniam
            consequat non laborum adipisicing aliqua ea nisi sint.
          </p>

          <p>
            Duis ex ad cupidatat tempor Excepteur cillum cupidatat fugiat
            nostrud cupidatat dolor sunt sint sit nisi est eu exercitation
            incididunt adipisicing veniam velit id fugiat enim mollit amet anim
            veniam dolor dolor irure velit commodo cillum sit nulla ullamco
            magna amet magna cupidatat qui labore cillum sit in tempor veniam
            consequat non laborum adipisicing aliqua ea nisi sint ut quis
            proident ullamco ut dolore culpa occaecat ut laboris in sit minim
            cupidatat ut dolor voluptate enim veniam consequat occaecat fugiat
            in adipisicing in amet Ut nulla nisi non ut enim aliqua laborum
            mollit quis nostrud sed sed.
          </p>

          <p>
            <Image
              sizes="(max-width: 2000px) 100vw, 2000px"
              src="/images/wheel-1000.jpg"
              alt=""
            />
          </p>

          <h2>Large Heading</h2>

          <p>
            Harum quidem rerum facilis est et expedita distinctio. Nam libero
            tempore, cum soluta nobis est eligendi optio cumque nihil impedit
            quo minus <a href="http://#">omnis voluptas assumenda est</a> id
            quod maxime placeat facere possimus, omnis dolor repellendus.
            Temporibus autem quibusdam et aut officiis debitis aut rerum
            necessitatibus saepe eveniet ut et.
          </p>

          <blockquote>
            <p>
              This is a simple example of a styled blockquote. A blockquote tag
              typically specifies a section that is quoted from another source
              of some sort, or highlighting text in your post.
            </p>
          </blockquote>

          <p>
            Odio dignissimos ducimus qui blanditiis praesentium voluptatum
            deleniti atque corrupti dolores et quas molestias excepturi sint
            occaecati cupiditate non provident, similique sunt in culpa. Aenean
            eu leo quam. Pellentesque ornare sem lacinia quam venenatis
            vestibulum. Nulla vitae elit libero, a pharetra augue laboris in sit
            minim cupidatat ut dolor voluptate enim veniam consequat occaecat
            fugiat in adipisicing in amet Ut nulla nisi non ut enim aliqua
            laborum mollit quis nostrud sed sed.
          </p>

          <h3>Smaller Heading</h3>

          <p>
            Dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa. Aenean eu leo quam. Pellentesque
            ornare sem lacinia quam venenatis vestibulum. Nulla vitae elit
            libero, a pharetra augue laboris in sit minim cupidatat ut dolor
            voluptate enim veniam consequat occaecat fugiat in adipisicing in
            amet Ut nulla nisi non ut enim aliqua laborum mollit quis nostrud
            sed sed.
          </p>

          <p>
            Odio dignissimos ducimus qui blanditiis praesentium voluptatum
            deleniti atque corrupti dolores et quas molestias excepturi sint
            occaecati cupiditate non provident, similique sunt in culpa.
          </p>

          <ul>
            <li>
              Donec nulla non metus auctor fringilla.
              <ul>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
              </ul>
            </li>
            <li>Donec nulla non metus auctor fringilla.</li>
            <li>Donec nulla non metus auctor fringilla.</li>
          </ul>

          <p>
            Odio dignissimos ducimus qui blanditiis praesentium voluptatum
            deleniti atque corrupti dolores et quas molestias excepturi sint
            occaecati cupiditate non provident, similique sunt in culpa. Aenean
            eu leo quam. Pellentesque ornare sem lacinia quam venenatis
            vestibulum. Nulla vitae elit libero, a pharetra augue laboris in sit
            minim cupidatat ut dolor voluptate enim veniam consequat occaecat
            fugiat in adipisicing in amet Ut nulla nisi non ut enim aliqua
            laborum mollit quis nostrud sed sed.
          </p>

          <div className="entry__taxonomies">
            <div className="entry__cat">
              <h5>Posted In:</h5>
              <span className="entry__tax-list">
                <a href="#0">Lifestyle</a>
                <a href="#0">Management</a>
              </span>
            </div>

            <div className="entry__tags">
              <h5>Tags:</h5>
              <span className="entry__tax-list entry__tax-list--pill">
                <a href="#0">orci</a>
                <a href="#0">lectus</a>
                <a href="#0">varius</a>
                <a href="#0">turpis</a>
              </span>
            </div>
          </div>

          <div className="entry__author">
            <img src="images/avatars/user-03.jpg" alt="" />

            <div className="entry__author-about">
              <h5 className="entry__author-name">
                <span>Posted by</span>
                <a href="#0">Jonathan Doe</a>
              </h5>

              <div className="entry__author-desc">
                <p>
                  Alias aperiam at debitis deserunt dignissimos dolorem
                  doloribus, fuga fugiat impedit laudantium magni maxime nihil
                  nisi quidem quisquam sed ullam voluptas voluptatum. Lorem
                  ipsum dolor sit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>

      <div className="s-content__entry-nav">
        <div className="row s-content__nav">
          <div className="col-six s-content__prev">
            <a href="#0" rel="prev">
              <span>Previous Post</span>
              The Pomodoro Technique Really Works.
            </a>
          </div>
          <div className="col-six s-content__next">
            <a href="#0" rel="next">
              <span>Next Post</span>3 Benefits of Minimalism In Interior Design.
            </a>
          </div>
        </div>
      </div>

      <div className="comments-wrap">
        <div id="comments" className="row">
          <div className="col-full">
            <h3 className="h2">5 Comments</h3>

            <ol className="commentlist">
              <li className="depth-1 comment">
                <div className="comment__avatar">
                  <img
                    className="avatar"
                    src="images/avatars/user-01.jpg"
                    alt=""
                    width="50"
                    height="50"
                  />
                </div>

                <div className="comment__content">
                  <div className="comment__info">
                    <div className="comment__author">Itachi Uchiha</div>

                    <div className="comment__meta">
                      <div className="comment__time">Jun 15, 2018</div>
                      <div className="comment__reply">
                        <a className="comment-reply-link" href="#0">
                          Reply
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="comment__text">
                    <p>
                      Adhuc quaerendum est ne, vis ut harum tantas noluisse, id
                      suas iisque mei. Nec te inani ponderum vulputate, facilisi
                      expetenda has et. Iudico dictas scriptorem an vim, ei alia
                      mentitum est, ne has voluptua praesent.
                    </p>
                  </div>
                </div>
              </li>

              <li className="thread-alt depth-1 comment">
                <div className="comment__avatar">
                  <img
                    className="avatar"
                    src="images/avatars/user-04.jpg"
                    alt=""
                    width="50"
                    height="50"
                  />
                </div>

                <div className="comment__content">
                  <div className="comment__info">
                    <div className="comment__author">John Doe</div>

                    <div className="comment__meta">
                      <div className="comment__time">Jun 15, 2018</div>
                      <div className="comment__reply">
                        <a className="comment-reply-link" href="#0">
                          Reply
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="comment__text">
                    <p>
                      Sumo euismod dissentiunt ne sit, ad eos iudico qualisque
                      adversarium, tota falli et mei. Esse euismod urbanitas ut
                      sed, et duo scaevola pericula splendide. Primis veritus
                      contentiones nec ad, nec et tantas semper delicatissimi.
                    </p>
                  </div>
                </div>

                <ul className="children">
                  <li className="depth-2 comment">
                    <div className="comment__avatar">
                      <img
                        className="avatar"
                        src="images/avatars/user-03.jpg"
                        alt=""
                        width="50"
                        height="50"
                      />
                    </div>

                    <div className="comment__content">
                      <div className="comment__info">
                        <div className="comment__author">Kakashi Hatake</div>

                        <div className="comment__meta">
                          <div className="comment__time">Jun 15, 2018</div>
                          <div className="comment__reply">
                            <a className="comment-reply-link" href="#0">
                              Reply
                            </a>
                          </div>
                        </div>
                      </div>

                      <div className="comment__text">
                        <p>
                          Duis sed odio sit amet nibh vulputate cursus a sit
                          amet mauris. Morbi accumsan ipsum velit. Duis sed odio
                          sit amet nibh vulputate cursus a sit amet mauris
                        </p>
                      </div>
                    </div>

                    <ul className="children">
                      <li className="depth-3 comment">
                        <div className="comment__avatar">
                          <img
                            className="avatar"
                            src="images/avatars/user-04.jpg"
                            alt=""
                            width="50"
                            height="50"
                          />
                        </div>

                        <div className="comment__content">
                          <div className="comment__info">
                            <div className="comment__author">John Doe</div>

                            <div className="comment__meta">
                              <div className="comment__time">Jun 15, 2018</div>
                              <div className="comment__reply">
                                <a className="comment-reply-link" href="#0">
                                  Reply
                                </a>
                              </div>
                            </div>
                          </div>

                          <div className="comment__text">
                            <p>
                              Investigationes demonstraverunt lectores legere me
                              lius quod ii legunt saepius. Claritas est etiam
                              processus dynamicus, qui sequitur mutationem
                              consuetudium lectorum.
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>

              <li className="depth-1 comment">
                <div className="comment__avatar">
                  <img
                    className="avatar"
                    src="images/avatars/user-02.jpg"
                    alt=""
                    width="50"
                    height="50"
                  />
                </div>

                <div className="comment__content">
                  <div className="comment__info">
                    <div className="comment__author">Shikamaru Nara</div>

                    <div className="comment__meta">
                      <div className="comment__time">Jun 15, 2018</div>
                      <div className="comment__reply">
                        <a className="comment-reply-link" href="#0">
                          Reply
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="comment__text">
                    <p>
                      Typi non habent claritatem insitam; est usus legentis in
                      iis qui facit eorum claritatem.
                    </p>
                  </div>
                </div>
              </li>
            </ol>
          </div>
        </div>

        <div className="row comment-respond">
          <div id="respond" className="col-full">
            <h3 className="h2">
              Add Comment <span>Your email address will not be published</span>
            </h3>

            <form
              name="contactForm"
              id="contactForm"
              method="post"
              action=""
              autoComplete="off"
            >
              <fieldset>
                <div className="form-field">
                  <input
                    name="cName"
                    id="cName"
                    className="full-width"
                    placeholder="Your Name*"
                    value=""
                    type="text"
                  />
                </div>

                <div className="form-field">
                  <input
                    name="cEmail"
                    id="cEmail"
                    className="full-width"
                    placeholder="Your Email*"
                    value=""
                    type="text"
                  />
                </div>

                <div className="form-field">
                  <input
                    name="cWebsite"
                    id="cWebsite"
                    className="full-width"
                    placeholder="Website"
                    value=""
                    type="text"
                  />
                </div>

                <div className="message form-field">
                  <textarea
                    name="cMessage"
                    id="cMessage"
                    className="full-width"
                    placeholder="Your Message*"
                  ></textarea>
                </div>

                <input
                  name="submit"
                  id="submit"
                  className="btn btn--primary btn-wide btn--large full-width"
                  value="Add Comment"
                  type="submit"
                />
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

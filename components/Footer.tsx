export default function Header() {
  return (
    <footer className="s-footer">
      <div className="s-footer__main">
        <div className="row">
          <div className="col-six tab-full s-footer__about">
            <h4>About Wordsmith</h4>
            <p>
              Fugiat quas eveniet voluptatem natus. Placeat error temporibus
              magnam sunt optio aliquam. Ut ut occaecati placeat at. Fuga fugit
              ea autem. Dignissimos voluptate repellat occaecati minima
              dignissimos mollitia consequatur. Sit vel delectus amet officiis
              repudiandae est voluptatem. Tempora maxime provident nisi et fuga
              et enim exercitationem ipsam. Culpa error temporibus magnam est
              voluptatem.
            </p>
          </div>

          <div className="col-six tab-full s-footer__subscribe">
            <h4>Our Newsletter</h4>
            <p>
              Sit vel delectus amet officiis repudiandae est voluptatem. Tempora
              maxime provident nisi et fuga et enim exercitationem ipsam. Culpa
              consequatur occaecati.
            </p>

            <div className="subscribe-form">
              <form id="mc-form" className="group" noValidate={true}>
                <input
                  type="email"
                  name="EMAIL"
                  className="email"
                  id="mc-email"
                  placeholder="Email Address"
                  required
                />

                <input type="submit" name="subscribe" />
                <label htmlFor="mc-email" className="subscribe-message"></label>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="s-footer__bottom">
        <div className="row">
          <div className="col-six">
            <ul className="footer-social">
              <li>
                <a href="#0">
                  <i className="fab fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#0">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#0">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#0">
                  <i className="fab fa-youtube"></i>
                </a>
              </li>
              <li>
                <a href="#0">
                  <i className="fab fa-pinterest"></i>
                </a>
              </li>
            </ul>
          </div>

          <div className="col-six">
            <div className="s-footer__copyright">
              <span>
                Copyright &copy;
                <script>document.write(new Date().getFullYear());</script> All
                rights reserved | This template is made with{" "}
                <i className="fa fa-heart" aria-hidden="true"></i> by{" "}
                <a href="https://colorlib.com" target="_blank">
                  Colorlib
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="go-top">
        <a className="smoothscroll" title="Back to Top" href="#top"></a>
      </div>
    </footer>
  );
}

import ArticlesCard from "./ArticlesCard";

export default function Articles() {
  return (
    <section className="s-content s-content--top-padding">
      <ArticlesCard />

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

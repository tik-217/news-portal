import { useRouter } from "next/router";
import Articles from "../../components/Articles/Articles";
import Extra from "../../components/Extra";

export default function Home() {
  return (
    <section
      className="s-content s-content--top-padding"
    >
      <div className="row narrow">
          <div className="col-full s-content__header" data-aos="fade-up">
            <h1 className="display-1 display-1--with-line-sep">
              All Category
            </h1>
            <p className="lead">
              Dolor similique vitae. Exercitationem quidem occaecati iusto. Id
              non vitae enim quas error dolor maiores ut. Exercitationem earum
              ut repudiandae optio veritatis animi nulla qui dolores.
            </p>
          </div>
        </div>
      <Articles />
      <Extra />
    </section>
  )
}
import { useRouter } from "next/router";
import Extra from "../../components/Extra";
import SlugCategories from "../../components/SlugCategories";

export default function Home() {
  const rout = useRouter();

  return (
    <section className="s-content s-content--top-padding">
      <div className="row narrow">
        <div className="col-full s-content__header" data-aos="fade-up">
          <h1 className="display-1 display-1--with-line-sep">
            {`Category: ${rout.query.slug}`}
          </h1>
          <p className="lead">
            Dolor similique vitae. Exercitationem quidem occaecati iusto. Id non
            vitae enim quas error dolor maiores ut. Exercitationem earum ut
            repudiandae optio veritatis animi nulla qui dolores.
          </p>
        </div>
      </div>
      <SlugCategories />
      <Extra />
    </section>
  );
}

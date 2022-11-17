import Image from "next/image";
import Extra from "../components/Extra";

export default function About() {
  return (
    <>
      <section className="s-content s-content--top-padding s-content--narrow">
        <div className="row narrow">
          <div className="col-full s-content__header">
            <h1 className="display-1 display-1--with-line-sep">
              About Wordsmith.
            </h1>
            <p className="lead">
              Duis ex ad cupidatat tempor Excepteur cillum cupidatat fugiat
              nostrud cupidatat dolor sunt sint sit nisi est eu exercitation
              incididunt adipisicing veniam velit id fugiat enim mollit amet
              anim veniam dolor dolor irure velit commodo.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-full s-content__main">
            <p>
              <Image
                height={500}
                width={1000}
                src="/images/thumbs/about/about-1000.jpg"
                alt=""
                priority={true}
              />
            </p>

            <h2>This Is Our Story</h2>

            <p>
              Odio dignissimos ducimus qui blanditiis praesentium voluptatum
              deleniti atque corrupti dolores et quas molestias excepturi sint
              occaecati cupiditate non provident, similique sunt in culpa.
              Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
            </p>

            <p>
              Duis ex ad cupidatat tempor Excepteur cillum cupidatat fugiat
              nostrud cupidatat dolor sunt sint sit nisi est eu exercitation
              incididunt adipisicing veniam velit id fugiat enim mollit amet
              anim veniam dolor dolor irure velit commodo cillum sit nulla
              ullamco. Lorem ipsum Nisi amet fugiat eiusmod et aliqua ad qui ut
              nisi Ut aute anim mollit fugiat aute.
            </p>

            <hr />

            <div className="row block-1-2 block-tab-full">
              <div className="col-block">
                <h4 className="quarter-top-margin">Who We Are.</h4>
                <p>
                  Lorem ipsum Nisi amet fugiat eiusmod et aliqua ad qui ut nisi
                  Ut aute anim mollit fugiat qui sit ex occaecat et eu mollit
                  nisi pariatur fugiat deserunt dolor veniam reprehenderit
                  aliquip magna nisi consequat aliqua veniam in aute ullamco
                  Duis laborum ad non pariatur sit.
                </p>
              </div>

              <div className="col-block">
                <h4 className="quarter-top-margin">Our Mission.</h4>
                <p>
                  Lorem ipsum Nisi amet fugiat eiusmod et aliqua ad qui ut nisi
                  Ut aute anim mollit fugiat qui sit ex occaecat et eu mollit
                  nisi pariatur fugiat deserunt dolor veniam reprehenderit
                  aliquip magna nisi consequat aliqua veniam in aute ullamco
                  Duis laborum ad non pariatur sit.
                </p>
              </div>

              <div className="col-block">
                <h4 className="quarter-top-margin">Our Vision.</h4>
                <p>
                  Lorem ipsum Nisi amet fugiat eiusmod et aliqua ad qui ut nisi
                  Ut aute anim mollit fugiat qui sit ex occaecat et eu mollit
                  nisi pariatur fugiat deserunt dolor veniam reprehenderit
                  aliquip magna nisi consequat aliqua veniam in aute ullamco
                  Duis laborum ad non pariatur sit.
                </p>
              </div>

              <div className="col-block">
                <h4 className="quarter-top-margin">Our Core Values.</h4>
                <p>
                  Lorem ipsum Nisi amet fugiat eiusmod et aliqua ad qui ut nisi
                  Ut aute anim mollit fugiat qui sit ex occaecat et eu mollit
                  nisi pariatur fugiat deserunt dolor veniam reprehenderit
                  aliquip magna nisi consequat aliqua veniam in aute ullamco
                  Duis laborum ad non pariatur sit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Extra />
    </>
  );
}

import Image from "next/image";
import Extra from "../components/Extra";

export default function Contacts() {
  return (
    <>
      <section className="s-content s-content--top-padding s-content--narrow">
        <div className="row narrow">
          <div className="col-full s-content__header">
            <h1 className="display-1 display-1--with-line-sep">Contact Us.</h1>
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
                src="/images/thumbs/contact/contact-1000.jpg"
                alt=""
              />
            </p>

            <h2>Say Hello</h2>

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
              nisi Ut aute anim mollit fugiat aute
            </p>

            <div id="map-wrap">
              <div id="map-container"></div>
              <div id="map-zoom-in"></div>
              <div id="map-zoom-out"></div>
            </div>

            <div className="row">
              <div className="col-six tab-full">
                <h4>Where to Find Us</h4>

                <p>
                  1600 Amphitheatre Parkway
                  <br />
                  Mountain View, CA
                  <br />
                  94043 US
                </p>
              </div>

              <div className="col-six tab-full">
                <h4>Contact Info</h4>

                <p>
                  sayhello@wordsmith.com
                  <br />
                  info@wordsmith.com <br />
                  Phone: (+1) 123 456
                </p>
              </div>
            </div>

            <h4>Get In Touch</h4>

            <form
              name="cForm"
              id="cForm"
              className="contact-form"
              method="post"
              action=""
            >
              <fieldset>
                <div>
                  <input
                    name="cName"
                    id="cName"
                    className="full-width"
                    placeholder="Your Name*"
                    type="text"
                  />
                </div>

                <div className="form-field">
                  <input
                    name="cEmail"
                    id="cEmail"
                    className="full-width"
                    placeholder="Your Email*"
                    type="text"
                  />
                </div>

                <div className="form-field">
                  <input
                    name="cWebsite"
                    id="cWebsite"
                    className="full-width"
                    placeholder="Website"
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

                <button
                  type="submit"
                  className="submit btn btn--primary btn--large full-width"
                >
                  Send Message
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </section>

      {/* 
      
        
      */}

      <Extra />
    </>
  );
}

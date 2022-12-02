// import { getProviders, signIn, getCsrfToken, signOut } from "next-auth/react";
import { getCsrfToken, signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function SignIn() {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "authenticated") router.push("/");

  async function login(e: React.MouseEvent<HTMLInputElement>) {
    e.preventDefault();

    const fieldList = (e.target as HTMLInputElement).parentNode as HTMLFieldSetElement;
    const currentEmail = (fieldList.querySelector("input") as HTMLInputElement).value;

    function loaderActive(cssName1: string, cssName2: string) {
      const htmlTag = document.querySelector("html");
      htmlTag?.classList.remove(cssName1);
      htmlTag?.classList.add(cssName2);
    }

    loaderActive("no-js", "ss-preloader");
    await signIn("email", { redirect: true, email: currentEmail });
    loaderActive("ss-preloader", "no-js");
  }

  return (
    <section className="s-content s-content--top-padding s-content--narrow">
      <div className="row comment-respond">
        <div id="respond" className="col-full">
          <h3 className="h2 h3-custom">Login</h3>
          <form name="loginForm" id="loginForm" autoComplete="off">
            <fieldset>
              <div className="form-field">
                <input
                  name="Login"
                  id="login"
                  className="full-width"
                  placeholder="Login"
                  type="text"
                />
              </div>
              <div className="form-field">
                <input
                  name="Password"
                  id="password"
                  className="full-width"
                  placeholder="Password"
                  type="hidden"
                />
              </div>
              <input
                name="submit"
                id="submit"
                className="btn btn--primary btn-wide btn--large full-width"
                type="button"
                value="Войти"
                onClick={(e) => {
                  login(e);
                }}
              />
            </fieldset>
          </form>
        </div>
      </div>
    </section>
  );
}

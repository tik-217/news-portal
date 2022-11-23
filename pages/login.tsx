export default function Login() {
  return (
    <section className="s-content s-content--top-padding s-content--narrow">
      <div className="row comment-respond">
        <div id="respond" className="col-full">
          <h3 className="h2 h3-custom">
            Login
          </h3>
          <form
            name="loginForm"
            id="loginForm"
            autoComplete="off"
          >
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
                  type="text"
                />
              </div>
              <input
                name="submit"
                id="submit"
                className="btn btn--primary btn-wide btn--large full-width"
                type="button"
                value="Войти"
              />
            </fieldset>
          </form>
        </div>
      </div>
    </section>
  );
}

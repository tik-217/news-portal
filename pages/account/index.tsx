import AccountSidebar from "../../components/accountSidebar";
import AccountArticle from "./articles";
import Marking from "./marking";

export default function Account() {
  return (
    <div className="account s-content">
      <AccountSidebar />
      <div className="account_main">
        <div className="s-content__header s-content--top-padding s-content--narrow">
          <h1 className="display-1">Edit Page.</h1>
          <p className="lead">You will be able to change articles and tags.</p>
        </div>
        <AccountArticle />
        <Marking />
      </div>
    </div>
  );
}

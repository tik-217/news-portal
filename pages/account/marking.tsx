import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import AccountCategories from "../../components/Account/AccountCategories";
import AccountTags from "../../components/Account/AccountTags";
import AccountSidebar from "../../components/Account/AccountSidebar";

export default function Marking() {
  const [visibleTags, setVisibleTags] = useState(false);
  const [childSwitchCreateCategories, setChildSwitchCreateCategories] =
    useState(false);

  const router = useRouter();
  const urlArticles = router.pathname.includes("marking");

  return (
    <div className={urlArticles ? "account s-content" : ""}>
      {urlArticles && <AccountSidebar />}

      <div className="account_main">
        <div className="account_main_title">
          <div>
            <h2>Categories</h2>
            {!childSwitchCreateCategories ? (
              <img
                src="/icons8-plus.svg"
                alt=""
                onClick={() => setChildSwitchCreateCategories(true)}
              />
            ) : (
              <p onClick={() => setChildSwitchCreateCategories(false)}>Отмена</p>
            )}
          </div>
          <div className="col-six md-six mob-full categories">
            <ul className="linklist">
              <AccountCategories
                switchCreateCategories={childSwitchCreateCategories}
              />
            </ul>
          </div>
        </div>
        <div className="account_main_title">
          <div>
            <h2>Tags</h2>
            {!visibleTags ? (
              <img
                src="/icons8-plus.svg"
                alt=""
                onClick={() => setVisibleTags(true)}
              />
            ) : (
              <p onClick={() => setVisibleTags(false)}>Отмена</p>
            )}
          </div>
          <div className="col-six md-six mob-full categories">
            <ul className="linklist">
              <AccountTags visibleTags={visibleTags} />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

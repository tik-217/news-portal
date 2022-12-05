import { useRouter } from "next/router";
import { useState } from "react";
import AccountSidebar from "../../components/accountSidebar";

export default function Marking() {
  const [addVisible, setAddVisible] = useState(false);
  
  const router = useRouter();

  const urlArticles = router.pathname.includes("marking");
  
  return (
    <div className={urlArticles ? "account s-content" : ""}>
      {urlArticles && <AccountSidebar />}

      <div className="account_main">
        <div className="account_main_title">
          <h2>Categories</h2>
          {!addVisible ? (
            <img
              src="/icons8-plus.svg"
              alt=""
              onClick={() => setAddVisible(true)}
            />
          ) : (
            <p onClick={() => setAddVisible(false)}>Отмена</p>
          )}
        </div>
        <div className="account_main_title">
          <h2>Tags</h2>
          {!addVisible ? (
            <img
              src="/icons8-plus.svg"
              alt=""
              onClick={() => setAddVisible(true)}
            />
          ) : (
            <p onClick={() => setAddVisible(false)}>Отмена</p>
          )}
        </div>
      </div>
    </div>
  )
}
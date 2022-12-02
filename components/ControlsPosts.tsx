import axios from "axios";
import { useRouter } from "next/router";
import { Dispatch, useState } from "react";
import { connect } from "react-redux";
import useSWR from "swr";
import accountChange from "../store/actionCreators/accountChange";
import { ArticlesElement, DispatchCreatorsAccount } from "../types";

const deleteFetch = (url: string) => axios.delete(url).then((res) => res.data);

function ControlsPosts({ el, changeArticle }: { el: ArticlesElement, changeArticle: (el: ArticlesElement) => void }) {
  const [deleteReq, setDeleteReq] = useState<number>();
  const rout = useRouter();

  useSWR(
    typeof deleteReq === "number" &&
      `http://localhost:3001/articles/?id=${deleteReq}`,
    deleteFetch
  );

  return (
    <>
      {rout.pathname === "/account" && (
        <div className="update_image">
          <img
            src="/icons8-edit.svg"
            alt=""
            onClick={() => el && changeArticle(el)}
          />
          <img
            src="/icons8-trash.svg"
            alt=""
            onClick={() => setDeleteReq(el.id)}
          />
        </div>
      )}
    </>
  );
}

function mapDispatchToProps(dispatch: Dispatch<DispatchCreatorsAccount>) {
  return {
    changeArticle: (value: ArticlesElement) => {
      dispatch(accountChange(value));
    },
  };
}

export default connect(null, mapDispatchToProps)(ControlsPosts);

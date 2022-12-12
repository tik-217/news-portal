// react
import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import { connect } from "react-redux";

// next
import useSWR from "swr";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

// axios
import axios from "axios";

// types
import {
  AccountArticleProps,
  ArticlesElement,
  EmptyObject,
  StateInterface,
  UpdateFetch,
} from "../../types";

// components
import AccountSidebar from "../../components/Account/AccountSidebar";
import ArticlesCard from "../../components/ArticlesCard/ArticlesCard";
import { dataArticles } from "../../components/services/apiDB";

const articleAddFetch = (url: string, addArticleArgs: ArticlesElement) =>
  axios({
    method: "post",
    url,
    params: addArticleArgs,
  })
    .then((res) => res.data)
    .catch((err) => console.log(err));

const updateFetch = async (url: string, updateArticle: UpdateFetch) =>
  await axios({
    method: "put",
    url,
    params: updateArticle,
  })
    .then((res) => res.data)
    .catch((err) => console.log(err));

function AccountArticle({
  article,
  changeMouseEvent,
}: {
  article: ArticlesElement | EmptyObject;
  changeMouseEvent: boolean;
}) {
  article = article ? article : {};

  const { data: session, status } = useSession();
  const router = useRouter();

  const urlArticles = router.pathname.includes("articles");

  if (status === "unauthenticated") router.push("/");

  const [addArticle, setAddArticle] = useState(false);
  const [closeAddArticleBtn, setCloseAddArticleBtn] = useState(false);
  const [updateVisible, setUpdateVisible] = useState<boolean>(false);
  const [newData, setNewData] = useState<object[]>();
  const [closeEditorBtn, setCloseEditorBtn] = useState<boolean>(changeMouseEvent);

  const title = useRef(null);
  const author = useRef(null);
  const author_title = useRef(null);
  const author_image = useRef(null);
  const category = useRef(null);
  const content = useRef(null);
  const main_photo = useRef(null);

  const updateArticle: UpdateFetch = {};
  const addArticleArgs = {
    title: title.current && (title.current as HTMLInputElement).value,
    author: author.current && (author.current as HTMLInputElement).value,
    author_title:
      author_title.current && (author_title.current as HTMLInputElement).value,
    author_image:
      author_image.current && (author_image.current as HTMLInputElement).value,
    category: category.current && (category.current as HTMLInputElement).value,
    content: content.current && (content.current as HTMLInputElement).value,
    main_photo:
      main_photo.current && (main_photo.current as HTMLInputElement).value,
  };

  // output articles
  useSWR(addArticle && `http://localhost:3001/articles/`, (url) =>
    articleAddFetch(url, addArticleArgs)
  );

  // filtering the addArticleArgs object for an update request
  // updateVisible &&
  //   Object.keys(addArticleArgs).forEach((el) => {
  //     const keys = addArticleArgs[el as keyof typeof addArticleArgs];
  //     if (keys && keys !== "") updateArticle[el] = keys;
  //   });

  // fetch to update
  const { data } = useSWR(
    updateVisible && `http://localhost:3001/articles?id=${article.id}`,
    (url: string) => updateFetch(url, updateArticle)
  );

  useEffect(() => {
    setNewData(data);
  }, [data]);

  return (
    <div className={urlArticles ? "account s-content" : ""}>
      {urlArticles && <AccountSidebar />}

      <div className="account_main">
        <div className="account_main_title">
          <div>
            <h2>Articles</h2>
            {closeAddArticleBtn === true ? (
              <p onClick={() => setCloseAddArticleBtn(false)}>Отмена</p>
            ) : (
              <img
                src="/icons8-plus.svg"
                alt=""
                onClick={() => setCloseAddArticleBtn(true)}
              />
            )}
          </div>
        </div>
        <div className="account_main_element">
          {changeMouseEvent && (
            <>
              <div>
                <h2>{article.title}</h2>
              </div>
              <form
                onKeyDown={(e) => e.code === "Enter" && setUpdateVisible(true)}
                className="item-entry aos-init aos-animate"
                data-aos="zoom-in"
              >
                <input
                  type="text"
                  ref={title}
                  placeholder={`Title ${
                    article.title !== null ? article.title : ""
                  }`}
                />
                <input
                  type="text"
                  ref={author}
                  placeholder={`Author ${
                    article.author !== null ? article.author : ""
                  }`}
                />
                <input
                  type="text"
                  ref={author_title}
                  placeholder={`Author title ${
                    article.author_title !== null ? article.author_title : ""
                  }`}
                />
                <input
                  type="text"
                  ref={author_image}
                  placeholder={`Author image ${
                    article.author_image !== null ? article.author_image : ""
                  }`}
                />
                <input
                  type="text"
                  ref={category}
                  placeholder={`Category ${
                    article.category !== null ? article.category : ""
                  }`}
                />
                <input
                  type="text"
                  ref={main_photo}
                  placeholder={`Main photo ${
                    article.main_photo !== null ? article.main_photo : ""
                  }`}
                />
                <textarea
                  ref={content}
                  placeholder={`Content ${
                    article.content !== null ? article.content : ""
                  }`}
                />
              </form>
            </>
          )}
          {closeAddArticleBtn && (
            <form onKeyDown={(e) => e.code === "Enter" && setAddArticle(true)}>
              <input type="text" ref={title} placeholder="Post title" />
              <input type="text" ref={author} placeholder="Author" />
              <input
                type="text"
                ref={author_title}
                placeholder="Author title"
              />
              <input
                type="text"
                ref={author_image}
                placeholder="Author image"
              />
              <input type="text" ref={category} placeholder="Category (123)" />
              <input type="text" ref={main_photo} placeholder="Main photo" />
              <textarea ref={content} placeholder="Content" />
            </form>
          )}
          <ArticlesCard trigerValue={newData} />
        </div>
      </div>
    </div>
  );
}

function mapStateToProps(state: StateInterface) {
  return {
    article: state.article.article,
    changeMouseEvent: state.article.changeMouseEvent,
  };
}

export default connect(mapStateToProps)(AccountArticle);

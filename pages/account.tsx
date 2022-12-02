import React, { useEffect, useRef, useState } from "react";
import ArticlesCard from "../components/ArticlesCard/ArticlesCard";
import useSWR from "swr";
import axios from "axios";
import { ArticlesElement, StateInterface } from "../types";
import { connect } from "react-redux";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

const articleAddFetch = (url: string, addArticleArgs: ArticlesElement) =>
  axios({
    method: "post",
    url,
    params: addArticleArgs,
  })
    .then((res) => res.data)
    .catch((err) => console.log(err));

const updateFetch = async (url: string, updateArticle: fetch) =>
  await axios({
    method: "put",
    url,
    params: updateArticle,
  })
    .then((res) => res.data)
    .catch((err) => console.log(err));

interface accountProp {
  dataArticle: {
    article: ArticlesElement;
  };
}

interface fetch {
  [index: string]: string;
}

function Account({ dataArticle }: accountProp) {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "unauthenticated") router.push("/");
  
  const article = dataArticle.article;

  const [addArticle, setAddArticle] = useState(false);
  const [addVisible, setAddVisible] = useState(false);
  const [updateVisible, setUpdateVisible] = useState<boolean>();
  const [newData, setNewData] = useState<object[]>();
  const [editor, setEditor] = useState<boolean>(false);

  const title = useRef(null);
  const author = useRef(null);
  const author_title = useRef(null);
  const author_image = useRef(null);
  const category = useRef(null);
  const content = useRef(null);
  const main_photo = useRef(null);

  const updateArticle: fetch = {};
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
  useSWR(addArticle && `http://localhost:3001/articles`, (url) =>
    articleAddFetch(url, addArticleArgs)
  );

  // filtering the addArticleArgs object for an update request
  updateVisible &&
    Object.keys(addArticleArgs).forEach((el) => {
      const keys = addArticleArgs[el as keyof typeof addArticleArgs];
      if (keys && keys !== "") updateArticle[el] = keys;
    });

  // fetch to update
  const { data } = useSWR(
    updateVisible && `http://localhost:3001/articles?id=${article.id}`,
    (url: string) => updateFetch(url, updateArticle)
  );

  useEffect(() => {
    setNewData(data);
    setUpdateVisible(false);
  }, [data])

  function closeEditor(e: React.KeyboardEvent<HTMLFormElement>) {
    e.preventDefault();
    setUpdateVisible(true);
    setEditor(true);
  }

  return (
    <div className="account s-content">
      <div className="account_sidebar">
        <div className="account_sidebar_managment">
          <h2>Managment</h2>
          <ul>
            <li>Articles</li>
            <li>Categories</li>
            <li>Tags</li>
          </ul>
        </div>
      </div>
      <div className="account_main">
        <div className="account_main_title">
          <h2>Articles</h2>
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
        <div className="account_main_element">
          {Object.keys(article).length !== 0 && editor === true &&(
            <form
              onKeyDown={(e) => e.code === "Enter" && closeEditor(e)}
              className="item-entry aos-init aos-animate"
              data-aos="zoom-in"
            >
              <input type="text" ref={title} placeholder={`Title ${article.title !== null ? article.title : ""}`} />
              <input type="text" ref={author} placeholder={`Author ${article.author !== null ? article.author : ""}`}/>
              <input
                type="text"
                ref={author_title}
                placeholder={`Author title ${article.author_title !== null ? article.author_title : ""}`}
              />
              <input
                type="text"
                ref={author_image}
                placeholder={`Author image ${article.author_image !== null ? article.author_image : ""}`}
              />
              <input type="text" ref={category} placeholder={`Category ${article.category !== null ? article.category : ""}`}/>
              <input type="text" ref={main_photo} placeholder={`Main photo ${article.main_photo !== null ? article.main_photo : ""}`}/>
              <textarea ref={content} placeholder={`Content ${article.content !== null ? article.content : ""}`}/>
            </form>
          )}
          {addVisible === true ? (
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
          ) : (
            <></>
          )}
          <ArticlesCard trigerValue={newData} />
        </div>
      </div>
    </div>
  );
}

function mapStateToProps(state: StateInterface) {
  return {
    dataArticle: state.article,
  };
}

export default connect(mapStateToProps)(Account);

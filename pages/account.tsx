import { useRef, useState } from "react";
import Link from "next/link";
import ArticlesCard from "../components/ArticlesCard";
import useSWR from "swr";
import axios from "axios";
import { ArticlesElement } from "../types";

const articleAddFetch = (url: string, addArticleArgs: ArticlesElement) => 
  axios({
    method: "post",
    url: url,
    params: addArticleArgs
  })
    .then((res) => res.data)
    .catch(err => console.log(err));

export default function Account() {
  const [addVisible, setAddVisible] = useState(false);
  const [addArticle, setAddArticle] = useState(false);

  const title = useRef(null);
  const author = useRef(null);
  const author_title = useRef(null);
  const author_image = useRef(null);
  const category = useRef(null);
  const content = useRef(null);
  const main_photo = useRef(null);

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
  
  useSWR(
    addArticle && `http://localhost:3001/articles`, url => articleAddFetch(url, addArticleArgs)
  );

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
          {addVisible === true ? (
            // <form onKeyDown={(e) => e.code === "Enter" && setAddArticle(true)}>
            <form>
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
              <button onClick={(e) => { e.preventDefault(); setAddArticle(true) }}>Jnghfdnbn</button>
            </form>
          ) : (
            <ArticlesCard />
          )}
        </div>
      </div>
    </div>
  );
}

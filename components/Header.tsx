import axios from "axios";
import React, { Dispatch, useState } from "react";

// next
import Link from "next/link";
import Route, { useRouter } from "next/router";
import useSWR from "swr";

// flexsearch
import { Index } from "flexsearch";

// types
import { ArticlesElement, DispatchFilterArticles } from "../types";
import { connect } from "react-redux";
import { SLCreators } from "../store/actionCreators/creatorsSearchList";
import { signOut, useSession } from "next-auth/react";

const fetcher = async (url: string) =>
  await axios.get(url).then((res) => res.data);

function Header({
  setFilteredArticles,
}: {
  setFilteredArticles: (searchList: ArticlesElement[]) => void;
}) {
  const [loadingPosts, setLoadingPosts] = useState<boolean>(false);
  const [searchList, setSearchList] = useState<ArticlesElement[]>();
  const searchField = React.createRef<HTMLInputElement>();

  const { data: session, status } = useSession();

  const rout = useRouter();

  const { data, error } = useSWR(
    loadingPosts ? "http://localhost:3001/articles" : null,
    fetcher
  );

  function searchLogic(e: React.KeyboardEvent<HTMLInputElement>) {
    e.preventDefault();

    const inputSearch =
      searchField && (searchField.current as HTMLInputElement).value;

    const index = new Index({ tokenize: "forward" });

    data &&
      data.forEach(({ content }: { content: string }, i: number) => {
        index.add(i, content);
      });

    const flex = index.search(inputSearch, {
      limit: 3,
    });

    const searchList: ArticlesElement[] = flex.map((i: number) => data[i]);

    setSearchList(searchList);

    setFilteredArticles(searchList);

    Route.push({
      pathname: "http://localhost:3000/search",
    });

    closeSearch();
  }

  function searchTriger(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    e.stopPropagation();

    setLoadingPosts(true);

    (document.querySelector("body") as HTMLBodyElement).classList.add(
      "search-is-visible"
    );

    setTimeout(function () {
      searchField.current?.focus();
    }, 100);
  }

  function closeSearch(e?: React.MouseEvent<HTMLElement>) {
    e?.stopPropagation();

    const body = document.querySelector("body") as HTMLBodyElement;

    if (body.classList.contains("search-is-visible")) {
      body.classList.remove("search-is-visible");
      setTimeout(function () {
        (document.querySelector(".search-field") as HTMLInputElement).blur();
      }, 100);
    }
  }

  function externalClick(e: React.MouseEvent<HTMLDivElement>) {
    if ((e.target as HTMLElement).classList[0] !== "search-field") {
      closeSearch(e);
    }
  }

  return (
    <header className="s-header header">
      <div className="header__logo">
        <Link className="logo" href="/">
          Three Word
        </Link>
      </div>

      <div>
        <Link
          className="header__search-trigger"
          href="/"
          onClick={(e) => searchTriger(e)}
        ></Link>
      </div>

      <div className="header__search" onClick={(e) => externalClick(e)}>
        <form
          role="search"
          method="get"
          className="header__search-form"
          action="#"
        >
          <label>
            <span className="hide-content">Search for:</span>
            <input
              type="search"
              className="search-field"
              placeholder="Type Keywords"
              name="s"
              title="Search for:"
              autoComplete="off"
              ref={searchField}
              onKeyDown={(e) => e.code === "Enter" && searchLogic(e)}
            />
          </label>
          <input type="submit" className="search-submit" />
        </form>

        <a
          href="#0"
          title="Close Search"
          className="header__overlay-close"
          onClick={(e) => closeSearch(e)}
        >
          Close
        </a>
      </div>

      <a className="header__toggle-menu" href="#0" title="Menu">
        <span>Menu</span>
      </a>
      <nav className="header__nav-wrap">
        <h2 className="header__nav-heading h6">Navigate to</h2>

        <ul className="header__nav">
          <li className="current">
            <Link href="/">Home</Link>
          </li>
          <li className="has-children">
            <Link href="/categories">Categories</Link>
            <ul className="sub-menu">
              <li>
                <Link href="/categories/lifestyle">Lifestyle</Link>
              </li>
              <li>
                <Link href="/categories/health">Health</Link>
              </li>
              <li>
                <Link href="/categories/family">Family</Link>
              </li>
              <li>
                <Link href="/categories/management">Managment</Link>
              </li>
              <li>
                <Link href="/categories/travel">Travel</Link>
              </li>
              <li>
                <Link href="/categories/work">Work</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contacts">Contacts</Link>
          </li>

          {status === "authenticated" ? (
            <>
              <li>
                <Link href="/account">Account</Link>
              </li>
              <li>
                <Link href="/" onClick={() => signOut()}>
                  Sign Out
                </Link>
              </li>
            </>
          ) : (
            <li>
              <Link href="/sign-in">Login</Link>
            </li>
          )}
        </ul>

        <a
          href="#0"
          title="Close Menu"
          className="header__overlay-close close-mobile-menu"
        >
          Close
        </a>
      </nav>
    </header>
  );
}

function mapDispatchToProps(dispatch: Dispatch<DispatchFilterArticles>) {
  return {
    setFilteredArticles: (value: ArticlesElement[]) =>
      dispatch(SLCreators(value)),
  };
}

export default connect(null, mapDispatchToProps)(Header);

import Link from "next/link";
import React, { useRef } from "react";

export default function Header() {
  const searchField = React.createRef<HTMLInputElement>();

  function searchTriger(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    e.stopPropagation();

    const body = (document
      .querySelector("body") as HTMLBodyElement)
      .classList.add("search-is-visible");

    setTimeout(function () {
      searchField.current?.focus();
    }, 100);
  }

  function closeSearch(e: React.MouseEvent<HTMLElement>) {
    e.stopPropagation();

    const body = document.querySelector("body") as HTMLBodyElement;

    if (body.classList.contains('search-is-visible')) {
        body.classList.remove('search-is-visible');
        setTimeout(function () {
          (document.querySelector('.search-field') as HTMLInputElement).blur();
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
        <a className="logo" href="/">
          Three Word
        </a>
      </div>

      <a
        className="header__search-trigger"
        href="/"
        onClick={(e) => searchTriger(e)}
      ></a>
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
            />
          </label>
          <input type="submit" className="search-submit" />
        </form>

        <a href="#0" title="Close Search" className="header__overlay-close" onClick={(e) => closeSearch(e)}>
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
            <Link href="/category/categories">Categories</Link>
            <ul className="sub-menu">
              <li>
                <Link href="/category/lifestyle">Lifestyle</Link>
              </li>
              <li>
                <Link href="/category/health">Health</Link>
              </li>
              <li>
                <Link href="/category/family">Family</Link>
              </li>
              <li>
                <Link href="/category/management">Managment</Link>
              </li>
              <li>
                <Link href="/category/travel">Travel</Link>
              </li>
              <li>
                <Link href="/category/work">Work</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contacts">Contacts</Link>
          </li>
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

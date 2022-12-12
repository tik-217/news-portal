import Link from "next/link";
import { connect } from "react-redux";
import ArticlesCard from "../components/ArticlesCard/ArticlesCard";
import { ArticlesElement, SearchProps, StateInterface } from "../types";

function Search({ searchList }: SearchProps) {
  const emptyProps = searchList && Object.keys(searchList).length === 0;
  const filterArticles: ArticlesElement[] | any = searchList && searchList.filterArticles;

  const emptySearchList =
    !emptyProps && filterArticles && filterArticles.length;
  const unActiveArticles = emptySearchList === 0 || emptySearchList === false;

  if (unActiveArticles) {
    return (
      <section className="s-content s-content--top-padding s-content--narrow">
        <div className="row narrow">
          <div className="col-full s-content__header">
            <h1 className="display-1 display-1--with-line-sep">
              There are no such articles
            </h1>
            <Link
              href="/"
              className="submit btn btn--primary btn--large full-width"
            >
              On main page
            </Link>
          </div>
        </div>
      </section>
    );
  }

  const newSearchList = unActiveArticles
    ? searchList
    : searchList && searchList.filterArticles;

  return (
    <section className="s-content s-content--top-padding">
      <div className="row narrow">
        <h2 className="display-1">On request: </h2>
      </div>
      {<ArticlesCard customArticles={newSearchList} />}
    </section>
  );
}

function mapStateToProps(state: StateInterface) {
  return {
    searchList: state.filterArticles,
  };
}

export default connect(mapStateToProps)(Search);

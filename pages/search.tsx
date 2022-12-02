import { connect } from "react-redux";
import ArticlesCard from "../components/ArticlesCard/ArticlesCard";
import { ArticlesElement } from "../types";

function Search({
  searchList,
}: {
  searchList: ArticlesElement[];
  }) {
  
  return (
    <section className="s-content s-content--top-padding">
      {searchList && <ArticlesCard searchArticles={searchList} />}
    </section>
  );
}

function mapStateToProps(state) {
  return {
    searchList: state.filterArticles.filterArticles
  }
}

export default connect(mapStateToProps)(Search);
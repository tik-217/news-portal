import { connect } from "react-redux";
import ArticlesCard from "../components/ArticlesCard";
import { ArticlesElement } from "../types";

function Search({
  searchList,
}: {
  searchList: ArticlesElement[];
  }) {
  
  console.log(searchList);
  
  return (
    <section className="s-content s-content--top-padding">
      {searchList && <ArticlesCard searchArticles={searchList} />}
    </section>
  );
}

function mapStateToProps(state) {
  return {
    searchList: state.filterArticles
  }
}

export default connect(mapStateToProps)(Search);
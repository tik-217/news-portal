import { NextRouter } from "next/router";
import { ArticlesElement, CategoriesElement } from "../../types";
import { dataArticles, dataCategories } from "./apiDB";

export default function GetCategoryName(slug: NextRouter) {
  const articles = dataArticles().data;
  const categories = dataCategories().data;

  const categoryBySlag =
    categories &&
    categories.filter((el: CategoriesElement) => {
      return el.name === String(slug.query.slug);
    });

  const categoryId =
    categoryBySlag && categoryBySlag[0] && categoryBySlag[0].id;

  const filterArticles =
    articles &&
    articles.filter((el: ArticlesElement) => {
      if (el.category === null) return;
      for (let iter of el.category.split("")) {
        if (+iter === categoryId) {
          return true;
        }
      }
    });

  return filterArticles;
}

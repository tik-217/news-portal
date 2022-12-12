// next
import Image from "next/image";
import Link from "next/link";

// types
import {
  ArticlesElement,
  CategoriesElement,
} from "../../types";

// services
import { dataArticles, dataCategories } from "../services/apiDB";

// coomponents
import GenerateCategoriesHTML from "../GenerateCategoriesHTML";
import ControlsPosts from "../Account/ControlsPosts";

// reducers
import articleChange from "../../store/actionCreators/accountChange";

export {
  Image,
  Link,
  dataArticles,
  dataCategories,
  GenerateCategoriesHTML,
  articleChange,
  ControlsPosts,
};
export type {
  ArticlesElement,
  CategoriesElement,
};

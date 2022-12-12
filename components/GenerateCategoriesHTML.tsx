import Link from "next/link";
import React from "react";
import { CategoriesElement } from "../types";
import { dataCategories } from "./services/apiDB";

export default function GenerateCategoriesHTML({
  category1,
  categoryString2,
}: {
  category1?: CategoriesElement[];
  categoryString2?: string | null;
}) {
  if (categoryString2 === null) return <></>;
  const categoriesNumberSplit = categoryString2?.split("");

  const categories = dataCategories().data;

  function getCategories() {
    return (
      categories &&
      categories.map((el: CategoriesElement) => {
        return el;
      })
    );
  }

  const categoriesArr = getCategories();

  return (
    <>
      {categoriesNumberSplit &&
        categoriesArr &&
        categoriesArr.map((element: CategoriesElement) => {
          for (const el of categoriesNumberSplit) {
            if (String(element.id) === el) {
              return (
                <Link key={element.id} href={`/categories/${element.name}`}>
                  {`${element.name} `}
                </Link>
              );
            }
          }
        })}
    </>
  );
}

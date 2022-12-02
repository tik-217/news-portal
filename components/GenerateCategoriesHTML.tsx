import Link from "next/link";
import React from "react";
import { CategoriesElement } from "../types";

export default React.memo(function GenerateCategoriesHTML({
  category1,
  categoryString2,
}: {
  category1: CategoriesElement[];
  categoryString2: string | null;
  }) {
  if (categoryString2 === null) return (<></>);
  const categoriesNumberSplit = categoryString2.split("");

  return (
    <>
      {category1 &&
        category1.map((element: CategoriesElement) => {
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
})
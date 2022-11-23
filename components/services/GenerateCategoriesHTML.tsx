import { CategoriesElement } from "../../types";

export default function GenerateCategoriesHTML({
  category1,
  categoryString2,
}: {
  category1: CategoriesElement[];
  categoryString2: string;
}) {
  const categoriesNumberSplit = categoryString2.split("");

  return (
    <>
      {category1 &&
        category1.map((element: CategoriesElement) => {
          for (const el of categoriesNumberSplit) {
            if (String(element.id) === el) {
              return (
                <a key={element.id} href={`/categories/${element.name}`}>
                  {`${element.name} `}
                </a>
              );
            }
          }
        })}
    </>
  );
}

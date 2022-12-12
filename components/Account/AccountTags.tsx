import axios, { AxiosRequestConfig } from "axios";

// react
import { Dispatch, SetStateAction, useEffect, useState } from "react";

// next
import useSWR, { useSWRConfig } from "swr";
import Image from "next/image";

// types
import { CategoriesElement } from "../../types";

// api
import { dataTags } from "../services/apiDB";
import { useRouter } from "next/router";

// fetching
const deleteFetch = async (url: string) =>
  await axios.delete(url).then((res) => res.config);

const updateFetch = async (url: string) =>
  await axios.put(url).then((res) => res.config);

const createFetch = async (url: string) =>
  await axios.post(url).then((res) => res.config);

export default function AccountCategories({
  visibleTags,
}: {
    visibleTags?: boolean,
}) {
  const router = useRouter();
  const { mutate } = useSWRConfig();

  const { data: categories } = dataTags();

  // state
  const [activationOfDeletion, setActivationOfDeletion] = useState(false);
  const [categoriesIndex, setCategoriesIndex] = useState<string | null>("");

  const [activationOfUpdating, setActivationOfUpdating] = useState(false);
  const [categoryInputValue, setCategoryInputValue] = useState("");

  const [inputReadonly, setInputReadonly] = useState(false);
  const [activationOfCreating, setActivationOfCreating] = useState(false);

  async function getCategoryIndex(e: React.MouseEvent<HTMLImageElement>) {
    const catIndex = (e.target as HTMLIFrameElement).attributes[1].value;
    setCategoriesIndex(catIndex);
    setActivationOfDeletion(true);
    // mutate(router.pathname);
  }

  // deleting
  const { data: deletingResponse } = useSWR(
    activationOfDeletion &&
      `http://localhost:3001/tags?id=${categoriesIndex}`,
    deleteFetch
  );

  const { data: updateResponse } = useSWR(
    activationOfUpdating &&
      `http://localhost:3001/tags?id=${categoriesIndex}&name=${categoryInputValue}`,
    updateFetch
  );

  const { data: createResponse } = useSWR(
    activationOfCreating &&
      `http://localhost:3001/tags?name=${categoryInputValue}`,
    createFetch
  );

  // useEffect
  useEffect(() => {
    setActivationOfDeletion(false);
  }, [deletingResponse?.url]);

  useEffect(() => {
    setActivationOfUpdating(false);
    mutate("/account/marking", updateResponse);
    console.log(1);
  }, [updateResponse?.url]);

  useEffect(() => {
    setActivationOfCreating(false);
  }, [createResponse?.url]);

  function getCategoriesWithIndex() {
    return (
      categories &&
      categories.map((el: CategoriesElement) => {
        return [el, el.id];
      })
    );
  }

  const categoriesArrAndIndex: [CategoriesElement | number][] =
    getCategoriesWithIndex();

  // handler
  function createCategories(e: React.KeyboardEvent<HTMLInputElement>) {
    const input = e.target as HTMLInputElement;

    if (e.code === "Enter") {
      setCategoryInputValue(input.value);
      setActivationOfCreating(true);
    }
  }

  function updateCategories(e: React.KeyboardEvent<HTMLInputElement>) {
    const input = e.target as HTMLInputElement;

    if (e.code === "Enter") {
      setCategoryInputValue(input.value);
      setCategoriesIndex(input.getAttribute("data-categories-index"));
      setActivationOfUpdating(true);
    }
  }

  function changeCategoryVisible(e: React.MouseEvent<HTMLLIElement>) {
    const input = e.target as HTMLInputElement;

    setInputReadonly(!inputReadonly);
    input.hasAttribute("readonly")
      ? input.removeAttribute("readonly")
      : input.setAttribute("readonly", "true");
  }

  return (
    <>
      {visibleTags ? (
        <li onDoubleClick={(e) => changeCategoryVisible(e)}>
          <input type="text" onKeyDown={(e) => createCategories(e)} />
        </li>
      ) : (
        categoriesArrAndIndex &&
        categoriesArrAndIndex.map((element: [CategoriesElement | number]) => {
          const categoriesObject = element[0] as CategoriesElement;
          return (
            <li
              onDoubleClick={(e) => changeCategoryVisible(e)}
              key={categoriesObject.id}
            >
              <input
                type="text"
                data-categories-index={categoriesObject.id}
                placeholder={`${categoriesObject.name} `}
                readOnly
                onKeyDown={(e) => updateCategories(e)}
              />
              <Image
                height="20"
                width="20"
                src="/garbage.svg"
                alt={""}
                data-categories-index={categoriesObject.id}
                onClick={(e) => getCategoryIndex(e)}
              />
            </li>
          );
        })
      )}
    </>
  );
}
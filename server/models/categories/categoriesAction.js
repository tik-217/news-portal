import Categories from "./categories.js";

export async function createCat(query) {
  await Categories.create({
    name: query.name,
    // id_article: query.id_article,
  });

  return Categories.findAll();
}

export async function readCat() {
  return Categories.findAll();
}

export async function updateCat({ id, ...query }) {
  await Categories.update(query, {
    where: {
      id,
    },
  });

  return Categories.findAll();
}

export async function deleteCat(id) {
  await Categories.destroy({
    where: {
      id,
    },
  });

  return Categories.findAll();
}

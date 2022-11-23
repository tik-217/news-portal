import Articles from "./articles.js";

export async function createArt(query) {
  await Articles.create({
    title: query.title,
    author: query.author,
    author_image: query.author_image,
    author_title: query.author_title,
    content: query.content,
    category: query.category,
    main_photo: query.main_photo,
  });

  return Articles.findAll();
}

export async function readArt() {
  return Articles.findAll();
}

export async function updateArt({ id, ...query }) {
  await Articles.update(query, {
    where: {
      id,
    },
  });

  return Articles.findAll();
}

export async function deleteArt(id) {
  await Articles.destroy({
    where: {
      id,
    },
  });

  return Articles.findAll();
}

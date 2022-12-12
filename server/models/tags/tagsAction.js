import Tags from "./tags.js";

export async function createTags(query) {
  await Tags.create({
    name: query.name,
  });

  return await Tags.findAll();
}

export async function readTags() {
  return await Tags.findAll();
}

export async function updateTags({ id, ...query }) {
  await Tags.update(query, {
    where: {
      id,
    },
  });

  return await Tags.findAll();
}

export async function deleteTags(id) {
  await Tags.destroy({
    where: {
      id,
    },
  });

  return await Tags.findAll();
}
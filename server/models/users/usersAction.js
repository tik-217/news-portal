import Users from "./users.js";

export async function createUsers() {
  return Users.findAll();
}

export async function deleteUsers(id) {
  await Users.destroy({
    where: {
      id,
    },
  });

  return Users.findAll();
}
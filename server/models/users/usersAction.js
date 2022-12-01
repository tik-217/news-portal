import Users from "./users.js";

export async function createUsers() {
  return Users.findAll();
}
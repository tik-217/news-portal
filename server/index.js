import express from 'express';
import cors from "cors";

import articles from "./routs/rout-articles.js";
import categories from "./routs/rout-categories.js";
import users from "./routs/rout-users.js";
import verifi from "./routs/rout-verificationToken.js";

const app = express();
app.use(cors());

app.use("/articles", articles);
app.use("/categories", categories);
app.use("/users", users);
app.use("/verifi", verifi);

app.listen(3001, () => {
  console.log("Соединение успешно");
})
import express from "express";
import asyncHandler from "express-async-handler";
const router = express.Router();

import {
  createUsers,
  deleteUsers,
} from "../models/users/usersAction.js";

router
  .route("/")
  .get(
    asyncHandler(async (req, res) => {
      res.json(await createUsers());

      res.end();
    })
  ).delete(
    asyncHandler(async (req, res) => {
      await deleteUsers(req.query.id);

      res.end();
    })
  );

export default router;

import express from "express";
import asyncHandler from "express-async-handler";
const router = express.Router();

import {
  createCat,
  readCat,
  updateCat,
  deleteCat,
} from "../models/categories/categoriesAction.js";

router
  .route("/")
  .post(
    asyncHandler(async (req, res) => {
      await createCat(req.query);

      res.end();
    })
  )
  .get(
    asyncHandler(async (req, res) => {
      res.json(await readCat());

      res.end();
    })
  )
  .put(
    asyncHandler(async (req, res) => {
      res.json(await updateCat(req.query));

      res.end();
    })
  )
  .delete(
    asyncHandler(async (req, res) => {
      await deleteCat(req.query.id);

      res.end();
    })
  );

export default router;

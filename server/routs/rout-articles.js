import express from "express";
import asyncHandler from "express-async-handler";

const router = express.Router();

import {
  createArt,
  readArt,
  updateArt,
  deleteArt,
} from "../models/articles/articlesAction.js";

router
  .route("/")
  .post(
    asyncHandler(async (req, res) => {
      await createArt(req.query);

      res.end();
    })
  )
  .get(
    asyncHandler(async (req, res) => {
      res.json(await readArt());

      res.end();
    })
  )
  .put(
    asyncHandler(async (req, res) => {
      res.json(await updateArt(req.query));

      res.end();
    })
  )
  .delete(
    asyncHandler(async (req, res) => {
      await deleteArt(req.query.id);

      res.end();
    })
  );

export default router;

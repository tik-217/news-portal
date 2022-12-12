import express from "express";
import asyncHandler from "express-async-handler";

const router = express.Router();

import {
  createTags,
  readTags,
  updateTags,
  deleteTags,
} from "../models/tags/tagsAction.js";

router
  .route("/")
  .post(
    asyncHandler(async (req, res) => {
      await createTags(req.query);

      res.end();
    })
  )
  .get(
    asyncHandler(async (req, res) => {
      res.json(await readTags(req.query.offset, req.query.limit));

      res.end();
    })
  )
  .put(
    asyncHandler(async (req, res) => {
      res.json(await updateTags(req.query));

      res.end();
    })
  )
  .delete(
    asyncHandler(async (req, res) => {
      await deleteTags(req.query.id);

      res.end();
    })
  );

export default router;

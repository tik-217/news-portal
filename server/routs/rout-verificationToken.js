import express from "express";
import asyncHandler from "express-async-handler";
const router = express.Router();

import {
  createVerifi,
} from "../models/verificationToken/verificationTokenActions.js";

router
  .route("/")
  .get(
    asyncHandler(async (req, res) => {
      res.json(await createVerifi());

      res.end();
    })
  );

export default router;

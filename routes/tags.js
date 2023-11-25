import express from "express";
const router = express.Router();

import getTags from "../controllers/tags/getTags.js";
import createTag from "../controllers/tags/createTag.js";
import getTagById from "../controllers/tags/getTagById.js";
import updateTag from "../controllers/tags/updateTag.js";
import deleteTag from "../controllers/tags/deleteTag.js";

router.get("/", getTags);

router.post("/", createTag);

router.get("/:tagId", getTagById);

router.put("/:tagId", updateTag);

router.delete("/:tagId", deleteTag);

export default router;
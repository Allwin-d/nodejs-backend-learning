import express from "express";
import { rootDir } from "../utils/pathUtils";
import path from "path";

const router = express.Router();

router.get("/", (req, res) => {
  res.sendFile(path.join(rootDir, "Frontend", "dist", "index.html"));
});

router.get("/players-list", (req, res) => {
  res.sendFile(path.join(rootDir, "Frontend", "dist", "index.html"));
});

export default router;

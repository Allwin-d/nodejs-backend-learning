import express from "express";

const router = express.Router();

router.get("/userData", (req, res) => {
  res.json({
    name: "Dinesh",
    hobby: "Sleeping",
    goodAt: "Eating",
  });
});

router.get("/", (req, res, next) => {
  res.send(`<h1>This is for the "/" route</h1>`);
});

export default router;

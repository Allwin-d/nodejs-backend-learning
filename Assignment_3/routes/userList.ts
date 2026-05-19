import express from "express";

const router = express.Router();

router.get("/users-data", (req, res, next) => {
  res.json({
    name: "Dinesh",
    hobby: "Sleeping",
    goodAt: "Eating",
  });
});

router.get("/", (req, res, next) => {
  res.send(`<h1>This is for the "/users" route</h1>`);
});

export default router;

const express = require("express");
const router = express.Router();
const menu = require("./menu");

router.get("/", async function (req, res, next) {
  try {
    res.json(await menu.get());
  } catch (err) {
    console.error(`Error while getting programming languages `, err.message);
    next(err);
  }
});

router.post("/", async function (req, res, next) {
  try {
    res.json(await menu.post(req.body));
  } catch (err) {
    console.error(`Error while creating programming language`, err.message);
    next(err);
  }
});

router.put("/:id", async function (req, res, next) {
  try {
    res.json(await menu.update(req.params.id, req.body));
  } catch (err) {
    console.error(`Error while updating programming language`, err.message);
    next(err);
  }
});

router.delete("/:id", async function (req, res, next) {
  try {
    res.json(await menu.remove(req.params.id));
  } catch (err) {
    console.error(`Error while deleting programming language`, err.message);
    next(err);
  }
});

module.exports = router;

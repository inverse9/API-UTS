const express = require("express");
const router = express.Router();
const user = require("../services/user");

router.get("/", async function (req, res, next) {
  try {
    res.json(await user.get());
  } catch (err) {
    console.error(`Error while getting user`, err.message);
    next(err);
  }
});

router.post("/", async function (req, res, next) {
  try {
    res.json(await user.post(req.body));
  } catch (err) {
    console.error(`Error while creating user`, err.message);
    next(err);
  }
});

router.put("/:id", async function (req, res, next) {
  try {
    res.json(await user.update(req.params.id, req.body));
  } catch (err) {
    console.error(`Error while updating user`, err.message);
    next(err);
  }
});

router.delete("/:id", async function (req, res, next) {
  try {
    res.json(await user.remove(req.params.id));
  } catch (err) {
    console.error(`Error while deleting user`, err.message);
    next(err);
  }
});
router.get("/:id", async function (req, res, next) {
  try {
    res.json(await user.get(req.params.id));
  } catch (err) {
    console.error(`Error while getting menu`, err.message);
    next(err);
  }
});

module.exports = router;

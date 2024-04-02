const express = require("express");
const router = express.Router();
const order = require("../services/order");

router.get("/", async function (req, res, next) {
  try {
    res.json(await order.get());
  } catch (err) {
    console.error(`Error while getting order`, err.message);
    next(err);
  }
});

router.post("/", async function (req, res, next) {
  try {
    res.json(await order.post(req.body));
  } catch (err) {
    console.error(`Error while creating order`, err.message);
    next(err);
  }
});

router.put("/:id", async function (req, res, next) {
  try {
    res.json(await order.update(req.params.id, req.body));
  } catch (err) {
    console.error(`Error while updating order`, err.message);
    next(err);
  }
});

router.delete("/:id", async function (req, res, next) {
  try {
    res.json(await order.remove(req.params.id));
  } catch (err) {
    console.error(`Error while deleting order`, err.message);
    next(err);
  }
});

router.get("/:id", async function (req, res, next) {
  try {
    res.json(await order.get(req.params.id));
  } catch (err) {
    console.error(`Error while getting order`, err.message);
    next(err);
  }
});

module.exports = router;

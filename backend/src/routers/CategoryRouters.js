const express = require("express");

const router = express.Router();

const {
  browse,
  read,
  edit,
  add,
  destroy,
} = require("../controllers/categoryControllers");

router.get("/", browse);
router.get("/:id", read);
router.post("/", add);
router.put("/:id", edit);
router.delete("/:id", destroy);

module.exports = router;

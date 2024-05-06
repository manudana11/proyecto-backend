const express = require("express");
const CategorieController = require("../controllers/CategorieController");
const router = express.Router();

router.post("/", CategorieController.create);
router.put("/id/:id", CategorieController.update);
router.delete("/id/:id", CategorieController.delete);
router.get("/", CategorieController.getAll);
router.get("/id/:id", CategorieController.getById);
router.get("/name/:name", CategorieController.getByName);

module.exports = router;
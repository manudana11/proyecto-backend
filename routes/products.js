const express = require("express");
const ProductController = require("../controllers/ProductController");
const { authentication } = require("../middleware/authentication");
const router = express.Router();

router.post("/", authentication, ProductController.create);
router.put("/id/:id", authentication, ProductController.update);
router.delete("/id/:id", authentication, ProductController.delete);
router.get("/", ProductController.getAll);
router.get("/id/:id", ProductController.getById);
router.get("/name/:name", ProductController.getByName);
router.get("/price/:price", ProductController.getByPrice);
router.get("/pricedesc", ProductController.getByPriceDesc);

module.exports = router;
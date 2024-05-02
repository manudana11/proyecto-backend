const express = require("express");
const UserController = require("../controllers/UserController");
const user = require("../models/user");
const router = express.Router();

router.post("/", UserController.create);
router.get("/", UserController.getAll);
router.put("/id/:id", UserController.update);
router.post("/login", UserController.login);

module.exports = router;
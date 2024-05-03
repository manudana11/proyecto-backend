const express = require("express");
const UserController = require("../controllers/UserController");
const user = require("../models/user");
const { authentication } = require("../middleware/authentication");
const router = express.Router();

router.post("/", UserController.create);
router.get("/", authentication, UserController.getAll);
router.put("/id/:id", authentication, UserController.update);
router.post("/login", UserController.login);
router.delete("/logout", authentication, UserController.logout);

module.exports = router;
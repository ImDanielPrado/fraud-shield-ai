const { Router } = require("express");

const alertController = require("../controllers/AlertController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = Router();

router.get("/", authMiddleware, alertController.getAll.bind(alertController));

module.exports = router;
const { Router } = require("express");
const transactionController = require("../controllers/TransactionController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = Router();

router.use(authMiddleware);

router.post("/", (req, res) => transactionController.create(req, res));
router.get("/", (req, res) => transactionController.getAll(req, res));

module.exports = router;
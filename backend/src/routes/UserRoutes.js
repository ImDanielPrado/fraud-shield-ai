const { Router } = require("express");
const userController = require("../controllers/UserController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = Router();

router.post("/", userController.create.bind(userController));

router.get("/", authMiddleware, (req, res) => {
  return res.json({
    message: "Rota protegida funcionando",
    user: req.user
  });
});

module.exports = router;
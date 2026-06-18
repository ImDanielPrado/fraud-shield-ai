const { Router } = require("express");
const userController = require("../controllers/UserController");

const router = Router();

router.post("/", (req, res) => userController.create(req, res));

router.get("/", (req, res) => {
  return res.json({
    message: "User routes funcionando"
  });
});

module.exports = router;
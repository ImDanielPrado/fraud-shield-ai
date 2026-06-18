const userService = require("../services/UserService");

class UserController {
  async create(req, res) {
    try {
      const user = await userService.create(req.body);

      return res.status(201).json(user);
    } catch (error) {
      console.error(error);

      return res.status(500).json({
        message: "Erro ao criar usuário"
      });
    }
  }
}

module.exports = new UserController();
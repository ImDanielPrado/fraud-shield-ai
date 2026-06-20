class UserController {
  async create(req, res) {
    try {
      const user = await userService.create(req.body);

      return res.status(201).json(user);
    } catch (error) {
      console.error(error.message);

      if (error.message === "Email já cadastrado") {
        return res.status(409).json({
          message: error.message
        });
      }

      return res.status(500).json({
        message: "Erro ao criar usuário"
      });
    }
  }
}
 const authService = require("../services/AuthService");

class AuthController {
  async login(req, res) {
    try {
      const { email, password } = req.body;

      const result = await authService.login(email, password);

      return res.json(result);
    } catch (error) {
      return res.status(401).json({
        message: error.message
      });
    }
  }
}

module.exports = new AuthController();
const alertService = require("../services/AlertService");

class AlertController {
  async getAll(req, res) {
    try {
      const alerts = await alertService.getAll();

      return res.json(alerts);
    } catch (error) {
      return res.status(500).json({
        message: error.message
      });
    }
  }
}

module.exports = new AlertController();
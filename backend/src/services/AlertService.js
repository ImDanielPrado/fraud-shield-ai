const alertRepository = require("../repositories/AlertRepository");

class AlertService {
  async create(transactionId) {
    return alertRepository.create({
      transactionId,
      status: "PENDING",
      comment: "High risk transaction detected"
    });
  }

  async getAll() {
    return alertRepository.findAll();
  }
}

module.exports = new AlertService();
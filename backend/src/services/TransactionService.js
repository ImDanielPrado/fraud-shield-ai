const calculateRisk = require("../utils/riskCalculator");
const transactionRepository = require("../repositories/TransactionRepository");

class TransactionService {
async create(data, userId) {
  const { riskScore, status } = calculateRisk(data);

  return transactionRepository.create({
    ...data,
    userId,
    riskScore,
    status
  });
}

  async getByUser(userId) {
    return transactionRepository.findByUserId(userId);
  }
}

module.exports = new TransactionService();
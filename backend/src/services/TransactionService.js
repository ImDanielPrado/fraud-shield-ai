const calculateRisk = require("../utils/riskCalculator");
const transactionRepository = require("../repositories/TransactionRepository");
const alertService = require("./AlertService");

class TransactionService {
async create(data, userId) {
  const { riskScore, status } = calculateRisk(data);

  const transaction = await transactionRepository.create({
    ...data,
    userId,
    riskScore,
    status
  });

  if (status === "FRAUD") {
    await alertService.create(transaction.id);
  }

  return transaction;
}

  async getByUser(userId) {
    return transactionRepository.findByUserId(userId);
  }
}

module.exports = new TransactionService();
const transactionService = require("../services/TransactionService");

class TransactionController {
  async create(req, res) {
    try {
      const userId = req.user.id;

      const transaction = await transactionService.create(req.body, userId);

      return res.status(201).json(transaction);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  async getAll(req, res) {
    try {
      const userId = req.user.id;

      const transactions = await transactionService.getByUser(userId);

      return res.json(transactions);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
}

module.exports = new TransactionController();
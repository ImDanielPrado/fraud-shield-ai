const prisma = require("../config/prisma");

class TransactionRepository {
  async create(data) {
    return prisma.transaction.create({
      data
    });
  }

  async findByUserId(userId) {
    return prisma.transaction.findMany({
      where: { userId }
    });
  }
}

module.exports = new TransactionRepository();
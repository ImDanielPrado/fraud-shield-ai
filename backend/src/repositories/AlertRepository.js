const prisma = require("../config/prisma");

class AlertRepository {
  async create(data) {
    return prisma.alert.create({
      data
    });
  }

  async findAll() {
    return prisma.alert.findMany({
      include: {
        transaction: true
      }
    });
  }
}

module.exports = new AlertRepository();
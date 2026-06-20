const prisma = require("../config/prisma");

class UserRepository {
  async create(userData) {
    return prisma.user.create({
      data: userData
    });
  }

  async findByEmail(email) {
    return prisma.user.findUnique({
      where: { email }
    });
  }
}

module.exports = new UserRepository();
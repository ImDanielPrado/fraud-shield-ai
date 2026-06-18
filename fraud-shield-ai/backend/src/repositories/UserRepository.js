const prisma = require("../config/prisma");

class UserRepository {
  async create(userData) {
    return prisma.user.create({
      data: userData
    });
  }
}

module.exports = new UserRepository();
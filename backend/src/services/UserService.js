const bcrypt = require("bcrypt");
const userRepository = require("../repositories/UserRepository");

class UserService {
  async create(userData) {
    const hashedPassword = await bcrypt.hash(userData.password, 10);

    return userRepository.create({
      ...userData,
      password: hashedPassword
    });
  }
}

module.exports = new UserService();
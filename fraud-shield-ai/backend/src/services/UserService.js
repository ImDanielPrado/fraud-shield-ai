const userRepository = require("../repositories/UserRepository");

class UserService {
  async create(userData) {
    return userRepository.create(userData);
  }
}

module.exports = new UserService();
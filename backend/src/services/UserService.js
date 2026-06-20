const bcrypt = require("bcrypt");
const userRepository = require("../repositories/UserRepository");

class UserService {
  async create(userData) {
    const { email, password } = userData;

    // 1. Verificar se email já existe
    const userExists = await userRepository.findByEmail(email);

    if (userExists) {
      throw new Error("Email já cadastrado");
    }

    // 2. Hash da senha
    const hashedPassword = await bcrypt.hash(password, 10);

    // 3. Criar usuário com senha criptografada
    return userRepository.create({
      ...userData,
      password: hashedPassword
    });
  }
}

module.exports = new UserService();
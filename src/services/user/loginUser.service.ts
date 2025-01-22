import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const SECRET_KEY = process.env.SECRET_KEY || "sua_chave_secreta";

interface User {
  id: number;
  email: string;
  password: string;
}

export class LoginUserService {
  private mockUsers: User[] = [
    { id: 1, email: "teste@example.com", password: "$2b$10$..." }, // Substitua pelo hash real
  ];

  async authenticateUser(email: string, password: string): Promise<string> {
    // Verificar se o usuário existe
    const user = this.mockUsers.find((user) => user.email === email);
    if (!user) {
      throw { status: 404, message: "Usuário não encontrado." };
    }

    // Validar a senha
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw { status: 401, message: "Credenciais inválidas." };
    }

    // Gerar token JWT
    const token = jwt.sign({ id: user.id }, SECRET_KEY, { expiresIn: "1d" });
    return token;
  }
}

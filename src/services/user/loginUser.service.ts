import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const SECRET_KEY = process.env.SECRET_KEY || "sua_chave_secreta";

export class LoginUserService {
  async authenticateUser(email: string, password: string): Promise<string> {
    // Verificar se o usuário existe no banco de dados
    const user = await prisma.user.findUnique({
      where: { email },
    });

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

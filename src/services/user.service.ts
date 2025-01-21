import { PrismaClient } from "@prisma/client"; // Correção na importação
import bcrypt from "bcryptjs";
import { CreateUserDTO } from "../dtos/create-user.dto";

// Criar uma instância do PrismaClient
const prisma = new PrismaClient();

export class UserService {
  // Método para criar um novo usuário
  async createUser(data: CreateUserDTO) {
    const { email, name, password } = data;

    // Verificar se o email já existe
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      throw new Error("Usuário já cadastrado.");
    }

    // Hash da senha
    const hashedPassword = await bcrypt.hash(password, 10);

    // Criar usuário no banco
    const newUser = await prisma.user.create({
      data: {
        email,
        name,
        password: hashedPassword,
      },
    });

    return newUser;
  }
}

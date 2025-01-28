import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import { CreateUserInterface } from "../../interfaces/create-user.interface";

const prisma = new PrismaClient();
export class UserService {
  async createUser(data: CreateUserInterface) {
    const { email, name, password, confirmPassword } = data;

    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      throw new Error("Usuário já cadastrado.");
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const confirmPasswordHashed = await bcrypt.hash(confirmPassword, 10);

    const newUser = await prisma.user.create({
      data: {
        email,
        name,
        password: hashedPassword,
        confirmPassword: confirmPasswordHashed,
      },
    });

    return newUser;
  }
}

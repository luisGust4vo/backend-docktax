import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import { CreateUserDTO } from "../../dtos/create-user.dto";

const prisma = new PrismaClient();
export class UserService {
  async createUser(data: CreateUserDTO) {
    const { email, name, password } = data;

    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      throw new Error("Usuário já cadastrado.");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

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

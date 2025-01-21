import { Request, Response } from "express";
import { CreateUserDTO } from "../dtos/create-user.dto";
import { UserService } from "../services/user.service";

export class UserController {
  private userService = new UserService();

  // Função de criação de usuário
  async createUser(req: Request, res: Response): Promise<Response> {
    const { email, password, name }: CreateUserDTO = req.body;

    // Verificar se o email e a senha foram fornecidos
    if (!email || !email.trim() || !password || !password.trim()) {
      return res.status(400).json({ error: "Email e senha são obrigatórios." });
    }

    try {
      // Criar o novo usuário
      const user = await this.userService.createUser({ email, password, name });
      return res.status(201).json(user); // Retorna o usuário criado com status 201
    } catch (error: unknown) {
      // Garantir que o erro tem uma propriedade 'message'
      if (error instanceof Error) {
        return res.status(400).json({ message: error.message });
      } else {
        return res.status(500).json({ message: "Erro interno do servidor." });
      }
    }
  }
}

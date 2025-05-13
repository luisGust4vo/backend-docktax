import { Request, Response } from "express";
import { LoginUserService } from "../../services/user/loginUser.service";
import { CreateUserInterface } from "../../interfaces/create-user.interface";

export class LoginUserController {
  private userService: LoginUserService;
  constructor() {
    this.userService = new LoginUserService();
  }
  async login(req: Request, res: Response): Promise<Response> {
    const { email, password }: CreateUserInterface = req.body;
    if (!email || !email.trim() || !password || !password.trim()) {
      return res.status(400).json({ error: "Email e senha são obrigatórios." });
    }

    try {
      const token = await this.userService.authenticateUser(email, password);
      return res
        .status(200)
        .json({ message: "Login realizado com sucesso.", token });
    } catch (error: any) {
      return res.status(error.status || 500).json({ error: error.message });
    }
  }
}

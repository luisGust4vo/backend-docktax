import express, { Request, Response } from "express";
import { UserController } from "../../controllers/user/createUser.controller";
import { authMiddleware } from "../../middlewares/authMiddleware";
import { LoginUserController } from "../../controllers/user/loginUser.controller";
import validateCreateUser from "../../middlewares/create-user.middleware";
const router = express.Router();
const userController = new UserController();
const loginUser = new LoginUserController();

router.post(
  "/createUser",
  validateCreateUser,
  async (req: Request, res: Response): Promise<void> => {
    try {
      const newUser = await userController.createUser(req, res);
      res.status(201).json({
        message: "Usuário criado com sucesso.",
        user: newUser, // Retornando o usuário criado na resposta
      });
    } catch (error) {
      console.error("Erro ao criar usuário:", error); // Log de erro
      res.status(500).json({ error: "Erro ao criar usuário." });
    }
  }
);

router.post("/login", async (req: Request, res: Response): Promise<void> => {
  try {
    await loginUser.login(req, res);
  } catch (error) {
    res.status(500).json({ error: "Erro ao realizar login." });
  }
});

// Rota protegida (precisa de autenticação)
router.get("/profile", authMiddleware, (req, res) => {
  // A partir daqui, você pode acessar o `req.user` que contém o ID do usuário
  res.json({ message: "Bem-vindo ao seu perfil." });
});

router.post("/test", async (req: Request, res: Response): Promise<void> => {
  res.json({ message: "Recebido", data: req.body });
});

export default router;

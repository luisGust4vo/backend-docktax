import express, { Request, Response } from "express";
import { UserController } from "../../controllers/user/createUser.controller";
import { authMiddleware } from "../../middlewares/authMiddleware";
import { LoginUserController } from "../../controllers/user/loginUser.controller";
const router = express.Router();
const userController = new UserController();
const loginUser = new LoginUserController();

router.post(
  "/createUser",
  async (req: Request, res: Response): Promise<void> => {
    try {
      const newUser = await userController.createUser(req, res);
      res.status(201).json({ message: "Usuário criado com sucesso." });
    } catch (error) {
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

// Rota protegida
// router.get("/protected", authMiddleware, (req, res) => {
//   res
//     .status(200)
//     .json({ message: "Rota protegida acessada com sucesso.", user: req.user });
// });

export default router;

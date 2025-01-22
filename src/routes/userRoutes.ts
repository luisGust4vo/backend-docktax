import express, { Request, Response } from "express";
import { UserController } from "../controllers/user.controller";

const router = express.Router();
const userController = new UserController();
router.post(
  "/createUser",
  async (req: Request, res: Response): Promise<void> => {
    try {
      const newUser = await userController.createUser(req, res);
      res.status(201).json({ message: "Usuário criado com sucesso." }); //
    } catch (error) {
      res.status(500).json({ error: "Erro ao criar usuário." });
    }
  }
);

export default router;

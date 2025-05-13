import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

interface CustomRequest extends Request {
  user?: { id: number };
}
const SECRET_KEY = process.env.SECRET_KEY || "sua_chave_secreta";

export const authMiddleware = (
  req: CustomRequest,
  res: Response,
  next: NextFunction
): void => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    res.status(401).json({ error: "Token não fornecido." });
    return;
  }

  try {
    const payload = jwt.verify(token, SECRET_KEY) as { id: number };
    req.user = payload; // Armazena o ID do usuário na requisição
    next();
  } catch (error) {
    res.status(401).json({ error: "Token inválido." });
  }
};

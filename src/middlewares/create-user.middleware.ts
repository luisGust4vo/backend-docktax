import { Request, Response, NextFunction } from "express";
import Joi from "joi";
import { createUserSchema } from "../schemas/create-user.schema"; // ajuste o caminho do arquivo

const validateCreateUser = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const { error } = createUserSchema.validate(req.body, { abortEarly: false });

  if (error) {
    const errors = error.details.map((err) => ({
      message: err.message,
      path: err.path,
    }));

    res.status(400).json({
      message: "Erro de validação",
      errors,
    });
  } else {
    next(); // Chama o próximo middleware se a validação passar
  }
};

export default validateCreateUser;

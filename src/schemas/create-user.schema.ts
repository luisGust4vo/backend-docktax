import Joi from "joi";

export const createUserSchema = Joi.object({
  name: Joi.string().min(3).required().messages({
    "string.base": "O nome deve ser uma string.",
    "string.min": "O nome deve ter pelo menos 3 caracteres.",
    "any.required": "O campo nome é obrigatório.",
  }),
  email: Joi.string().email().required().messages({
    "string.email": "O email deve ser válido.",
    "any.required": "O campo email é obrigatório.",
  }),
});

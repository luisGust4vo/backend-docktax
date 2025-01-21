import dotenv from "dotenv";
import app from "./app";

dotenv.config({ path: ".env.development" });

const PORT: number = parseInt(process.env.PORT as string, 10);

if (isNaN(PORT)) {
  throw new Error("PORT deve ser um número válido.");
}

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

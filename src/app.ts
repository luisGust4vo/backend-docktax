import express from "express";
import cors from "cors";
import userRoutes from "./routes/user/userRoutes";

// Configurações do CORS
const corsOptions = {
  origin: "http://localhost:3000", // URL do frontend
  methods: ["GET", "POST"], // Métodos permitidos
};

const app = express();

// Habilitar CORS com as opções configuradas
app.use(cors(corsOptions));

// Middleware para lidar com o corpo da requisição
app.use(express.json());

// Defina suas rotas
app.use("/api", userRoutes);

export default app;

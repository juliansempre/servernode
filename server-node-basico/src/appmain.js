import express from 'express';
import cors from 'cors';
import userRoutes from "./controller/rotaController.js";
import { fileURLToPath } from 'url'; // Importe a função fileURLToPath para converter import.meta.url em um caminho de arquivo.
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.json());
app.use(cors());

app.use(express.static(path.join(__dirname, '../public')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.use("/api", userRoutes);

app.listen(8800, () => {
  console.log("Servidor iniciado na porta 8800: http://localhost:8800");
  console.log("O json da api está em http://localhost:8800/api");
});

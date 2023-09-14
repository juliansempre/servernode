import express from 'express';
import cors from 'cors';
import userRoutes from "./controller/rotaController.js"; // Verifique o nome do arquivo e o caminho

const app = express();

app.use(express.json());
app.use(cors());

app.set('view engine', 'ejs');
app.use(express.static('view'));

app.get('/', function (req, res) {
  res.render('index');
});

app.use("/api", userRoutes);

app.listen(process.env.PORT || 8800, () => {
  console.log("Servidor iniciado na porta 8800: http://localhost:8800");
  console.log("O json da api está em http://localhost:8800/api");
});

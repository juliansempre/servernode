import express from 'express';
import cors from 'cors';
import userRoutes from "./controller/RotaController"; // Verify the file name and path

class Index {
  private app: express.Application;

  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  private config(): void {
    this.app.use(express.json());
    this.app.use(cors());

    this.app.set('view engine', 'ejs');
    this.app.use(express.static('view'));
  }

  private routes(): void {
    this.app.get('/', (_, res) => {
      res.render('index');
    });

    this.app.use("/api", userRoutes);
  }

  public start(): void {
    const port = process.env.PORT || 8800;
    this.app.listen(port, () => {
      console.log(`Server started on port ${port}: http://localhost:${port}`);
      console.log(`API JSON is available at http://localhost:${port}/api`);
    });
  }
}

const index = new Index();
index.start();
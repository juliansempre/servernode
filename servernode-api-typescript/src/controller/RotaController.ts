import express, { Router } from 'express';
import UserModel from "../model/userModel";

class RotaController {
  public router: Router;

  constructor() {
    this.router = express.Router();
    this.routes();
  }

  private routes(): void {
    this.router.get("/", UserModel.getUsers);
    this.router.post("/", UserModel.addUser);
    this.router.put("/:id", UserModel.updateUser);
    this.router.delete("/:id", UserModel.deleteUser);
  }
}

export default new RotaController().router;
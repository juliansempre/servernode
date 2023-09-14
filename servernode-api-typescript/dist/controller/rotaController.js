"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userModel_1 = __importDefault(require("../model/userModel"));
class RouteController {
    constructor() {
        this.router = express_1.default.Router();
        this.routes();
    }
    routes() {
        this.router.get("/", userModel_1.default.getUsers);
        this.router.post("/", userModel_1.default.addUser);
        this.router.put("/:id", userModel_1.default.updateUser);
        this.router.delete("/:id", userModel_1.default.deleteUser);
    }
}
exports.default = new RouteController().router;

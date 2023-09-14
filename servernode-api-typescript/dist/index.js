"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const rotaController_1 = __importDefault(require("./controller/rotaController")); // Verify the file name and path
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.routes();
    }
    config() {
        this.app.use(express_1.default.json());
        this.app.use((0, cors_1.default)());
        this.app.set('view engine', 'ejs');
        this.app.use(express_1.default.static('view'));
    }
    routes() {
        this.app.get('/', (_, res) => {
            res.render('index');
        });
        this.app.use("/api", rotaController_1.default);
    }
    start() {
        const port = process.env.PORT || 8800;
        this.app.listen(port, () => {
            console.log(`Server started on port ${port}: http://localhost:${port}`);
            console.log(`API JSON is available at http://localhost:${port}/api`);
        });
    }
}
const app = new App();
app.start();

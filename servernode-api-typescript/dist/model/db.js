"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const mysql_1 = __importDefault(require("mysql"));
class Database {
    constructor() {
        this.db = mysql_1.default.createConnection({
            host: "85.10.205.173",
            user: "rootportfolio1",
            password: "toor123@",
            database: "bancojulian1"
        });
        this.connect();
    }
    connect() {
        this.db.connect((err) => {
            if (err) {
                console.error('Error connecting to the database:', err);
            }
            else {
                console.log('Successful database connection!');
            }
        });
    }
}
exports.db = new Database().db;

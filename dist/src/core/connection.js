"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Connection = exports.sqlize = void 0;
const Sequelize = require('sequelize');
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const sqlize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    pool: {
        max: 10,
        min: 0,
        aquire: 3000,
        idle: 10000
    }
});
exports.sqlize = sqlize;
const databaseConfig = {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    dialect: process.env.DB_DIALECT,
};
class Connection {
    static dbconnection() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(databaseConfig);
            try {
                // const msgonconnection = sqlize.authenticate;
                const sequelize = new Sequelize(databaseConfig);
                yield sequelize.authenticate();
                console.log('Connection has been established successfully.');
            }
            catch (error) {
                console.error('Unable to connect to the database:', error);
            }
        });
    }
}
exports.Connection = Connection;
//# sourceMappingURL=connection.js.map
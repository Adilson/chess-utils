"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const configReader_1 = require("./config/configReader");
const tests_1 = require("./controllers/tests");
//import cors from 'cors';
const configReader = new configReader_1.ConfigReader();
const config = configReader.readConfig();
const app = (0, express_1.default)();
app.get('/', (req, res) => {
    res.send('Stockfish server!');
});
//Setup controllers
(0, tests_1.setTestsController)(app, config);
app.use((req, res) => {
    res.status(404);
});
app.listen(config.apiPort, () => {
    console.log(`Servidor rodando com sucesso ${config.apiHostname}:${config.apiPort}`);
    console.log(`Stockfish em ${config.stockfishHostname}:${config.stockfishPort}`);
});

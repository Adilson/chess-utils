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
Object.defineProperty(exports, "__esModule", { value: true });
exports.setTestsController = void 0;
const stockfishSocket_1 = require("../stockfish/stockfishSocket");
function setTestsController(app, config) {
    app.route('/tests')
        .get((req, res) => __awaiter(this, void 0, void 0, function* () {
        console.log(`Iniciando StockfishSocket constructor... ${config.stockfishHostname}:${config.stockfishPort} `);
        var socket = new stockfishSocket_1.StockfishSocket(config);
        var output = [];
        socket.on('data', (data) => {
            output.push(data.toString());
        });
        console.log('Enviando comando uci...');
        yield socket.send('uci\n');
        console.log('Enviando comando isready...');
        yield socket.send('isready\n');
        socket.once('data', (data) => {
            output.push(data.toString());
        });
    }));
}
exports.setTestsController = setTestsController;

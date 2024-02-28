"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StockfishSocket = void 0;
const net_1 = __importDefault(require("net"));
const events_1 = require("events");
class StockfishSocket extends events_1.EventEmitter {
    constructor(config) {
        super();
        this.socket = net_1.default.createConnection({ port: config.stockfishPort, host: config.stockfishHostname });
        console.log('Socket aberto...');
        this.socket.on('data', (data) => {
            this.emit('data', data);
        });
    }
    send(data) {
        return new Promise((resolve, reject) => {
            this.socket.write(data, (err) => err ? reject(err) : resolve());
        });
    }
}
exports.StockfishSocket = StockfishSocket;

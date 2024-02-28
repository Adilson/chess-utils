"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigReader = void 0;
class ConfigReader {
    readConfig() {
        const API_PORT = +(process.env.PORT || 4000);
        const API_SECURE = process.env.API_SECURE === 'true';
        const HOSTNAME = process.env.HOSTNAME || 'localhost';
        const STOCKFISH_PORT = +(process.env.STOCKFISH_PORT || 23249);
        const STOCKFISH_HOSTNAME = process.env.STOCKFISH_HOSTNAME || 'localhost';
        return {
            apiHostname: HOSTNAME,
            apiPort: API_PORT,
            apiSecure: API_SECURE,
            stockfishHostname: STOCKFISH_HOSTNAME,
            stockfishPort: STOCKFISH_PORT
        };
    }
}
exports.ConfigReader = ConfigReader;

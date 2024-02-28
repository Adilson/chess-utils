import { Express } from 'express';
import { StockfishSocket } from '../stockfish/stockfishSocket';

export function setTestsController(app: Express, config: any) {
    app.route('/tests')
        .get(async (req: any, res: any) => {
            console.log(`Iniciando StockfishSocket constructor... ${config.stockfishHostname}:${config.stockfishPort} `);
            var socket = new StockfishSocket(config);
            var output = [];
            socket.on('data', (data: any) => {
                output.push(data.toString());
            });
            console.log('Enviando comando uci...');
            await socket.send('uci\n');
            console.log('Enviando comando isready...');
            await socket.send('isready\n');
            socket.once('data', (data: any) => {
                output.push(data.toString());
            });
        });
}
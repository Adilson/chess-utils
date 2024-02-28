import net from 'net';
import { EventEmitter } from 'events';
import { Config } from '../config/config';

export class StockfishSocket extends EventEmitter {
    private socket: net.Socket;

    constructor(config: Config) {
        super();
        this.socket = net.createConnection({ port: config.stockfishPort, host: config.stockfishHostname });
        console.log('Socket aberto...');
        this.socket.on('data', (data) => {
            this.emit('data', data);
        });
    }

    send(data: string): Promise<void> {
        return new Promise((resolve, reject) => {
            this.socket.write(data, (err) => err ? reject(err) : resolve());
        });
    }
}

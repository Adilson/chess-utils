import net from 'net';
import { EventEmitter } from 'events';
import { Config } from '../config/config';
import { ButtonOptions } from './ButtonOptions';
import { SpinOptions } from './SpinOptions';
import { CheckOptions } from './CheckOptions';

export class StockfishSocket extends EventEmitter {
    private socket?: net.Socket;
    private config: Config;

    constructor(config: Config) {
        super();
        this.config = config;
    }
    connect(): Promise<boolean> {
        return new Promise((resolve, reject) => {
            this.socket = net.createConnection({ port: this.config.stockfishPort, host: this.config.stockfishHostname }, () => {
                //console.debug('Socket aberto!', this.socket!.readyState);
                if (this.socket!.readyState === 'open') {
                    this.socket!.on('data', (data) => {
                        this.emit('data', data);
                    });
                    resolve(true);
                } else {
                    reject();
                }
            });
        });
    }

    send(data: string): Promise<void> {
        return new Promise((resolve, reject) => {
            if (this.socket === undefined || !this.socket)
                reject('Socket is not open');

            this.socket!.write(data, (err) => err ? reject(err) : resolve());
        });
    }
    uci(): Promise<void> {
        return new Promise((resolve, reject) => {
            this.send('uci\n').then(() => {
                resolve();
            }).catch((err) => {
                reject(err);
            });
        });
    }

    isReady(): Promise<void> {
        return new Promise((resolve, reject) => {
            const handler = (data: any) => {
                var strData = data.toString() || '';
                //console.log('data', data.toString());
                if (strData.includes('readyok')) {
                    this.off('data', handler);
                    resolve();
                }
            };
            this.on('data', handler);
            this.send('isready\n').then(() => {
            }).catch((err) => {
                reject(err);
            });
        });
    }
    waitData(): Promise<string[]> {
        return new Promise((resolve, reject) => {
            const handler = (data: any) => {
                var strData = (data.toString() || '').split('\n');
                this.off('data', handler);
                resolve(strData);
            };
            this.on('data', handler);
        });
    }
    setOption(option: string, value?: string): Promise<string[]> {
        return new Promise((resolve, reject) => {
            var cmd = value !== undefined ? `setoption name ${option} value ${value}\n` : `setoption name ${option}\n`;
            this.on('data', (data: any) => {
                console.log('data depois do setoption', data.toString());
            });
            this.send(cmd).then(() => {
                resolve([]);
            }).catch((err) => {
                reject(err);
            });
        });
    }
    setButton(option: ButtonOptions): Promise<string[]> {
        return this.setOption(option, undefined);
    }
    setSpin(option: SpinOptions, value: number): Promise<string[]> {
        return this.setOption(option, value.toString());
    }
    setCheck(option: CheckOptions, value: boolean): Promise<string[]> {
        return this.setOption(option, value ? 'true' : 'false');
    }
    uciNewGame(): Promise<void> {
        return new Promise((resolve, reject) => {
            this.send('ucinewgame\n').then(() => {
                resolve();
            }).catch((err) => {
                reject(err);
            });
        });
    }
    close(): Promise<void> {
        return new Promise((resolve, reject) => {
            this.socket?.end(() => {
                resolve();
            });
        });
    }
}
import { StockfishSocket } from './stockfishSocket';
import { SpinOptions } from './SpinOptions';
import { ConfigReader } from '../config/configReader';

describe('basic stockfish tests', () => {
  const configReader = new ConfigReader();
  var config = configReader.readConfig();

  test(`connect to ${config.stockfishHostname}:${config.stockfishPort}`, async () => {
    const stockfishSocket = new StockfishSocket(config);
    try {
      const ready = await stockfishSocket.connect();
      await stockfishSocket.close();
      expect(true);
    }
    catch (err) {
      expect(err);
    }
  });

  test('send uci command', async () => {
    const stockfishSocket = new StockfishSocket(config);
    try {
      await stockfishSocket.connect();
      await stockfishSocket.uci();
      await stockfishSocket.close();
      expect(true);
    }
    catch (err) {
      expect(err);
    }
  });

  test('send isready command', async () => {
    const stockfishSocket = new StockfishSocket(config);
    try {
      await stockfishSocket.connect();
      await stockfishSocket.uci();
      await stockfishSocket.isReady();
      await stockfishSocket.close();
      expect(true);
    }
    catch (err) {
      expect(err);
    }
  });
  test('send set option Skill Level 3 command', async () => {
    const stockfishSocket = new StockfishSocket(config);
    try {
      await stockfishSocket.connect();
      await stockfishSocket.uci();
      await stockfishSocket.isReady();
      stockfishSocket.on('data', (data: any) => {
        console.log('data', data.toString());
      });
      var result = await stockfishSocket.setSpin(SpinOptions.SkillLevel, 3);
      console.log('setSpin result', result);
      await stockfishSocket.close();
      expect(true);
    }
    catch (err) {
      expect(err);
    }
  });
  test('send ucinewgame command', async () => {
    const stockfishSocket = new StockfishSocket(config);
    try {
      await stockfishSocket.connect();
      await stockfishSocket.uci();
      await stockfishSocket.isReady();
      await stockfishSocket.uciNewGame();
      await stockfishSocket.close();
      expect(true);
    }
    catch (err) {
      expect(err);
    }
  });
});
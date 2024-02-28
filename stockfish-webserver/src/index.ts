import express from 'express';
import { ConfigReader } from './config/configReader';
import { setTestsController } from './controllers/tests';
//import cors from 'cors';


const configReader = new ConfigReader();
const config = configReader.readConfig();
const app = express();


app.get('/', (req, res) => {
    res.send('Stockfish server 16!')
})

//Setup controllers
setTestsController(app, config);


app.use((req, res) => {
    res.status(404)
})

app.listen(config.apiPort, () => {
    console.log(`Servidor rodando com sucesso ${config.apiHostname}:${config.apiPort}`);
    console.log(`Stockfish em ${config.stockfishHostname}:${config.stockfishPort}`);
})
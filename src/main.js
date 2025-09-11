import express, { urlencoded } from 'express';
import { serverInit } from "./services/serverInit.js";


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(urlencoded({ extended: true }));

serverInit(app, PORT);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT} `)
})

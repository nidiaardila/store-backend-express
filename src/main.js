import express, { urlencoded } from 'express';
import dotev from 'dotenv';

dotev.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(urlencoded({ extended: true }));

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT} `)
})

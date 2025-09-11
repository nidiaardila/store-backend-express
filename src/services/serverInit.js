import { connectDb } from "../utils/connectDB.js";


export const serverInit = async(app, port) => {
    try {
        console.log('Verificando conexión con PostgreSQL');
        const { now } = await connectDb();
        console.log(`Conexión éxitosa a PostgreSQL realizada el ${now}`);

        app.listen(port, () => {
            console.log(`Servidor corriendo en el puerto: ${port} 👽`);
        });
    } catch (error) {
        console.error(error.message);
    }
}
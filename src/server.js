import express from 'express';
import { routes } from './routes'
import { db } from './db';

const app = express();
app.use(express.json())

routes.forEach(route => {
app[route.method](route.path, route.handler);
});

function runServer(port) {
    app.listen(port , () => {
        console.log('Server is listening on port: ' + port)
    })
}
const start = async () => {
    await db.connect('mongodb://localhost:27017');
    runServer(8080)
}
start()

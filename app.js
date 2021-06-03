import express from 'express';
import { morganMiddleware } from './middleware/morgan.js';
import { getSongs } from './routes/getSongs.js';
import { postSongs } from './routes/postSongs.js';
import { deleteSong } from './routes/deleteSong.js';

const app = express();
app.use(express.json())
app.use(morganMiddleware)
app.use(getSongs)
app.use(postSongs)
app.use(deleteSong)

const port = 3333;

app.get('/', (request, response) => {
      response.send('Hello world');
});

app.listen(port, () => {
      console.log('RUNNING')
});

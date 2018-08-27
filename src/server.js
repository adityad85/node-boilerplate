import dotenv from 'dotenv';
import express from 'express';
import debug from 'debug';

import config from './config/express';
// import get from './get';

dotenv.config();

const appDebug = debug('app');
const app = express();
config(app);

appDebug('heyaya');
// get(app);

app.get('/', (req, res) => {
  appDebug('A response by the server');
  res.send({ message: 'heya again' });
});

export default app;

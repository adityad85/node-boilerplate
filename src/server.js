import dotenv from 'dotenv';
import express from 'express';

import config from './config/express';

dotenv.config();

const app = express();
config(app);

app.get('/', (req, res) => {
  console.log('heya');
  res.send({ message: 'heya again' });
});

export default app;

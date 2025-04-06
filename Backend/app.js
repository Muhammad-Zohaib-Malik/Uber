import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import { connectDb } from './db/db.js';
export const app = express();

connectDb();

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World');
});

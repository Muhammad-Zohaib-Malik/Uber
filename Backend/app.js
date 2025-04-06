import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import { connectDb } from './db/db.js';
export const app = express();
import userRoute from './routes/user.js';

connectDb();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
  res.send('Hello World');
});


app.use('/api', userRoute);

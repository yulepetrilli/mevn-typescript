import express from "express";
import morgan from "morgan";
import cors from 'cors';

import actionRoutes from './routes';
import { connectDB } from "./db";

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use('/api', actionRoutes);

connectDB();
app.listen(3000);
console.log('Server running at port 3000')
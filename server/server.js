import express from 'express';
import 'dotenv/config';

import authRoutes from './routes/authRoutes.js';
import messageRoutes from './routes/messageRoutes.js';
import userRoutes from './routes/userRoutes.js';

import connectDB from './db/connectMongoDB.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';


const app = express();
const PORT = process.env.PORT || 5000;


//Middleware
app.use(express.json()); // to parse incoming request with JSON payload from the request body
app.use(express.urlencoded({ extended: true })); // to parse incoming request with url-encoded payload from the request body
app.use(cookieParser()); // to parse incoming request with
app.use(cors({ credentials: true})); // to allow cross-origin requests


//Routes
app.use('/api/auth', authRoutes);
app.use('/api/message', messageRoutes);
app.use('/api/users', userRoutes);

app.listen(PORT, () => {
  connectDB();
  console.info(`Server is running on port ${PORT}`);
});
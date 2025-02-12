import express from 'express';
import 'dotenv/config.js';
import authRoutes from './routes/authRoutes.js';

const app = express();
const PORT = process.env.PORT || 5000;

//Routes
app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
  console.info(`Server is running on port ${PORT}`);
});
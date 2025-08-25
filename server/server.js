import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.config.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

connectDB();
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

app.get('/', (req, res) => {
  res.send('server running');
});
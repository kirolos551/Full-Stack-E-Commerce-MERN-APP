const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config(); // يقرأ .env
const connectDB = require('./config/db');
const router = require('./routes');

const app = express();

// Middleware
app.use(
  cors({
    origin: process.env.FRONTEND_URL || 'http://localhost',
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());
app.use('/api', router);

// البورت مع فحص المتغير
const PORT = process.env.PORT || 8080;

// التحقق من MONGO_URI قبل الاتصال
console.log('MONGO_URI =', process.env.MONGO_URI);

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log('Connected to DB');
      console.log('Server is running on port ' + PORT);
    });
  })
  .catch((err) => {
    console.error('Failed to connect to DB:', err);
  });

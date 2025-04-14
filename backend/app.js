import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import sequelize from './config/db.js';
import userRoutes from './routes/userRoutes.js';

dotenv.config();
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(express.json());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Routes
app.use('/users', userRoutes);

// Test Route
app.get('/', (req, res) => {
  res.render('home', { title: 'Welcome to User API' });
});

// Sync DB and Start Server
const PORT = process.env.PORT || 3000;

sequelize.sync({ alter: true }).then(() => {
  app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
  });
}).catch((err) => {
  console.error('❌ DB Connection Failed:', err);
});
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/database');
const app = express();
const cookieParser = require('cookie-parser');


// Connect to MongoDB
connectDB();

// Middleware
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/uploads", express.static("src/uploads"));

// Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/products', require('./routes/productRoutes'));
app.use('/api/orders', require('./routes/orderRoutes'));
app.use('/api/admin', require('./routes/adminRoutes'));

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    message: 'Something went wrong',
    error: process.env.NODE_ENV === 'development' ? err.message : {}
  });
});



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

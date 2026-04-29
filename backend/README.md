# Backend - Swoo Tech Mart

Node.js + Express + MongoDB Backend with MVC Architecture

## Setup

```bash
npm install
npm run dev
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/profile` - Get user profile
- `PUT /api/auth/profile` - Update user profile

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get product by ID
- `POST /api/products` - Create product (admin)
- `PUT /api/products/:id` - Update product (admin)
- `DELETE /api/products/:id` - Delete product (admin)

### Orders
- `POST /api/orders` - Create order
- `GET /api/orders/my-orders` - Get user's orders
- `GET /api/orders/:id` - Get order by ID
- `PUT /api/orders/:id` - Update order status (admin)
- `DELETE /api/orders/:id` - Delete order (admin)

## Environment Variables

Update `.env` with your configuration:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/swoo-tech-mart
NODE_ENV=development
JWT_SECRET=your_secret_key
JWT_EXPIRE=7d
```

## MVC Architecture

- **Models**: Database schemas (User, Product, Order)
- **Controllers**: Business logic
- **Routes**: API endpoints
- **Middleware**: Authentication, error handling

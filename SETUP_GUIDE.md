# E-Commerce Project Setup Guide

A full-stack e-commerce application with:
- **Frontend**: Vite + React + Tailwind CSS + shadcn/ui
- **Backend**: Node.js + Express + MVC Architecture
- **Database**: MongoDB

## Project Structure

```
swoo-tech-mart/
├── frontend/              # Vite + React frontend
├── backend/               # Express backend
├── SETUP_GUIDE.md
└── README.md
```

---

## Part 1: Backend Setup (Node.js + Express + MongoDB)

### Step 1: Initialize Backend Project

```bash
cd backend
npm init -y
```

### Step 2: Install Dependencies

```bash
npm install express mongoose dotenv cors bcryptjs jsonwebtoken
npm install --save-dev nodemon
```

### Step 3: Environment Configuration

Create `.env` file in the backend folder:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/swoo-tech-mart
NODE_ENV=development
JWT_SECRET=your_jwt_secret_key_here
JWT_EXPIRE=7d
```

### Step 4: Update package.json

Add these scripts in backend's `package.json`:

```json
"scripts": {
  "start": "node src/index.js",
  "dev": "nodemon src/index.js"
}
```

### Step 5: Project Structure

```
backend/
├── src/
│   ├── config/
│   │   └── database.js        # MongoDB connection
│   ├── models/
│   │   ├── User.js
│   │   ├── Product.js
│   │   └── Order.js
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── productController.js
│   │   └── orderController.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── productRoutes.js
│   │   └── orderRoutes.js
│   ├── middleware/
│   │   ├── authMiddleware.js
│   │   └── errorHandler.js
│   ├── utils/
│   │   └── validators.js
│   └── index.js              # Main server file
├── .env
├── .gitignore
└── package.json
```

### Step 6: Configure MongoDB

**Local Setup:**
- Download and install MongoDB from: https://www.mongodb.com/try/download/community
- Start MongoDB service

**Cloud Setup (Recommended):**
- Sign up at: https://www.mongodb.com/cloud/atlas
- Create a cluster and get connection string
- Update `MONGODB_URI` in `.env`

---

## Part 2: Frontend Setup (Vite + React + Tailwind + shadcn/ui)

### Step 1: Create Vite Project

```bash
npm create vite@latest frontend -- --template react
cd frontend
```

### Step 2: Install Dependencies

```bash
npm install
npm install -D tailwindcss postcss autoprefixer
npm install clsx class-variance-authority
npm install @radix-ui/react-slot
```

### Step 3: Initialize Tailwind CSS

```bash
npx tailwindcss init -p
```

### Step 4: Configure Tailwind

Update `tailwind.config.js`:

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### Step 5: Update main.css

Replace content of `src/index.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Step 6: Setup shadcn/ui

```bash
npm install -D shadcn-ui
npx shadcn-ui@latest init
```

When prompted, use these settings:
- Style: Default
- Base color: Slate
- CSS variables: Yes

### Step 7: Add shadcn/ui Components

```bash
# Add commonly used components
npx shadcn-ui@latest add button
npx shadcn-ui@latest add card
npx shadcn-ui@latest add input
npx shadcn-ui@latest add form
npx shadcn-ui@latest add table
npx shadcn-ui@latest add dialog
npx shadcn-ui@latest add dropdown-menu
npx shadcn-ui@latest add toast
```

### Step 8: Install Additional Libraries

```bash
npm install axios react-router-dom zustand
npm install -D typescript @types/react @types/react-dom
```

### Step 9: Frontend Structure

```
frontend/
├── src/
│   ├── components/
│   │   ├── ui/               # shadcn/ui components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── ProductCard.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Products.jsx
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── Cart.jsx
│   │   └── Checkout.jsx
│   ├── api/
│   │   └── client.js         # Axios config
│   ├── store/
│   │   └── authStore.js      # Zustand store
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── public/
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

---

## Part 3: API Configuration

### Backend - CORS Setup

In `backend/src/index.js`:

```javascript
const cors = require('cors');

app.use(cors({
  origin: 'http://localhost:5173', // Vite dev server
  credentials: true
}));
```

### Frontend - Axios Client

Create `frontend/src/api/client.js`:

```javascript
import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api'
});

// Add auth token to requests
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default API;
```

---

## Part 4: Running the Project

### Terminal 1 - Backend

```bash
cd backend
npm run dev
```

Server runs at: `http://localhost:5000`

### Terminal 2 - Frontend

```bash
cd frontend
npm run dev
```

App runs at: `http://localhost:5173`

---

## Database Models (MongoDB Collections)

### User Model
```javascript
const userSchema = {
  name: String,
  email: String (unique),
  password: String (hashed),
  phone: String,
  address: {
    street: String,
    city: String,
    zip: String,
    country: String
  },
  role: String (user/admin),
  createdAt: Date
}
```

### Product Model
```javascript
const productSchema = {
  name: String,
  description: String,
  price: Number,
  category: String,
  stock: Number,
  image: String,
  rating: Number,
  reviews: Array,
  createdAt: Date,
  updatedAt: Date
}
```

### Order Model
```javascript
const orderSchema = {
  userId: ObjectId,
  products: [{
    productId: ObjectId,
    quantity: Number,
    price: Number
  }],
  totalAmount: Number,
  status: String (pending/confirmed/shipped/delivered),
  shippingAddress: Object,
  createdAt: Date,
  updatedAt: Date
}
```

---

## Important Notes

1. **Security**: 
   - Never commit `.env` file
   - Use environment variables for sensitive data
   - Implement JWT for authentication

2. **Database**:
   - MongoDB must be running before starting backend
   - Use MongoDB Compass for visual database management

3. **Development**:
   - Frontend hot-reloads on file changes
   - Backend requires restart (use nodemon)

4. **Git Setup**:
   Create `.gitignore` in root:
   ```
   node_modules/
   .env
   .DS_Store
   dist/
   build/
   ```

---

## Useful Commands

| Command | Purpose |
|---------|---------|
| `npm run dev` (backend) | Start backend dev server |
| `npm run dev` (frontend) | Start frontend dev server |
| `npm run build` (frontend) | Build for production |
| `npm start` (backend) | Start production server |

---

## Next Steps

1. Create User, Product, and Order models in MongoDB
2. Build API endpoints (Auth, Products, Orders)
3. Create frontend pages (Home, Products, Cart, etc.)
4. Implement shopping cart functionality
5. Add payment integration (Stripe, PayPal)
6. Deploy to production

Happy coding! 🚀

# Swoo Tech Mart - E-Commerce Platform

A full-stack e-commerce application with modern web technologies.

## 🚀 Tech Stack

### Frontend
- **Vite** - Fast build tool
- **React 18** - UI library
- **Tailwind CSS** - Utility-first CSS
- **shadcn/ui** - Component library
- **React Router** - Navigation
- **Zustand** - State management
- **Axios** - HTTP client

### Backend
- **Node.js** - Runtime environment
- **Express** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **JWT** - Authentication
- **bcryptjs** - Password hashing
- **CORS** - Cross-origin support

### Architecture
- **MVC Pattern** - Clean separation of concerns
- **RESTful API** - Standard API design
- **JWT Authentication** - Secure user sessions

---

## 📁 Project Structure

```
swoo-tech-mart/
├── frontend/                 # React + Vite frontend
│   ├── src/
│   │   ├── components/      # React components
│   │   ├── pages/          # Page components
│   │   ├── api/            # API client
│   │   ├── store/          # Zustand stores
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   ├── vite.config.js
│   └── tailwind.config.js
│
├── backend/                  # Express backend
│   ├── src/
│   │   ├── config/         # Database config
│   │   ├── models/         # MongoDB models
│   │   ├── controllers/    # Business logic
│   │   ├── routes/         # API routes
│   │   ├── middleware/     # Custom middleware
│   │   ├── utils/          # Utilities
│   │   └── index.js        # Entry point
│   ├── package.json
│   └── .env
│
├── SETUP_GUIDE.md           # Detailed setup guide
└── README.md                # This file
```

---

## 🔧 Installation & Setup

### Prerequisites
- Node.js (v14+)
- MongoDB (local or Atlas)
- npm or yarn

### Backend Setup

```bash
cd backend
npm install
```

Create `.env` file:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/swoo-tech-mart
NODE_ENV=development
JWT_SECRET=your_secret_key_here
JWT_EXPIRE=7d
```

Start backend:
```bash
npm run dev
```

Backend runs at: `http://localhost:5000`

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs at: `http://localhost:5173`

---

## 📚 API Endpoints

### Authentication
- `POST /api/auth/register` - Register user
- `POST /api/auth/login` - Login user
- `GET /api/auth/profile` - Get user profile
- `PUT /api/auth/profile` - Update profile

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get single product
- `POST /api/products` - Create product (admin)
- `PUT /api/products/:id` - Update product (admin)
- `DELETE /api/products/:id` - Delete product (admin)

### Orders
- `POST /api/orders` - Create order
- `GET /api/orders/my-orders` - Get user orders
- `GET /api/orders/:id` - Get order details
- `PUT /api/orders/:id` - Update order (admin)
- `DELETE /api/orders/:id` - Delete order (admin)

---

## 🗄️ Database Models

### User
```javascript
{
  name: String,
  email: String (unique),
  password: String (hashed),
  phone: String,
  address: Object,
  role: 'user' | 'admin',
  createdAt: Date
}
```

### Product
```javascript
{
  name: String,
  description: String,
  price: Number,
  category: String,
  stock: Number,
  image: String,
  rating: Number,
  reviews: Array,
  createdAt: Date
}
```

### Order
```javascript
{
  userId: ObjectId,
  products: Array,
  totalAmount: Number,
  status: 'pending' | 'confirmed' | 'shipped' | 'delivered',
  shippingAddress: Object,
  createdAt: Date
}
```

---

## 🛡️ Features

✅ User authentication with JWT  
✅ Product catalog with search  
✅ Shopping cart functionality  
✅ Order management  
✅ Admin panel for product management  
✅ Responsive design  
✅ Secure password hashing  
✅ CORS enabled  
✅ Error handling  
✅ Database validation  

---

## 🚀 Future Enhancements

- [ ] Payment gateway integration (Stripe/PayPal)
- [ ] Email notifications
- [ ] Product reviews and ratings
- [ ] Wishlist feature
- [ ] Admin dashboard
- [ ] Search filters
- [ ] Product recommendations
- [ ] Inventory management
- [ ] Deployment (AWS/Heroku)
- [ ] Performance optimization

---

## 📝 Environment Variables

### Backend `.env`
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/swoo-tech-mart
NODE_ENV=development
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRE=7d
```

---

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

---

## 📄 License

This project is licensed under MIT License - see LICENSE file for details.

---

## 👤 Author

**Swoo Tech Mart Team**

## 🙏 Acknowledgments

- Vite documentation
- React documentation
- Tailwind CSS documentation
- shadcn/ui components
- MongoDB documentation
- Express.js documentation

---

## 📞 Support

For support, email support@swootechmart.com or open an issue in the repository.

---

**Happy Coding! 🚀**

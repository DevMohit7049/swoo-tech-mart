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



## 📄 License

This project is licensed under MIT License - see LICENSE file for details.

---

## 👤 Author

**Mohit Tomar**

## 🙏 Acknowledgments

- Vite documentation
- React documentation
- Tailwind CSS documentation
- shadcn/ui components
- MongoDB documentation
- Express.js documentation

---

For support, email support@swootechmart.com or open an issue in the repository.

---

**Happy Coding! 🚀**

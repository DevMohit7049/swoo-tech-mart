const express = require('express');

const { authMiddleware, adminMiddleware } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/dashboard', authMiddleware, adminMiddleware, (req, res) => {
  res.json({ message: 'Admin Dashboard Data' });
});

const { getAllUsers, toggleUserRole, toggleBlockUser, deleteUser } = require("../controllers/adminController")

router.get('/');

// Get all users
router.get('/users', authMiddleware, adminMiddleware, getAllUsers);

// Change role
router.put('/user-role/:id', authMiddleware, adminMiddleware, toggleUserRole);

// Block / Unblock
router.put('/block-user/:id', authMiddleware, adminMiddleware, toggleBlockUser);

// Delete user
router.delete('/user/:id', authMiddleware, adminMiddleware, deleteUser);

module.exports = router;
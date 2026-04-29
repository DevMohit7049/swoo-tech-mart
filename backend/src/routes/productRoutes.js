const express = require('express');
const productController = require('../controllers/productController');
const { authMiddleware, adminMiddleware } = require('../middleware/authMiddleware');

const router = express.Router();
const upload = require("../uploads/upload");

router.get('/', productController.getAllProducts);
router.get('/:id', productController.getProductById);

router.post(
  '/',
  authMiddleware,
  adminMiddleware,
  upload.fields([
    { name: "image", maxCount: 1 },
    { name: "thumbnail", maxCount: 1 },
    { name: "thumbnails", maxCount: 10 },
  ]),
  productController.createProduct
);
router.put(
  '/:id',
  authMiddleware,
  adminMiddleware,
  upload.fields([
    { name: "image", maxCount: 1 },
    { name: "thumbnail", maxCount: 1 },
    { name: "thumbnails", maxCount: 10 },
  ]),
  productController.updateProduct
);
router.delete('/:id', authMiddleware, adminMiddleware, productController.deleteProduct);

module.exports = router;

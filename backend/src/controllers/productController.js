const Product = require('../models/Product');

const parseUrls = (input = "") => {
  if (!input || typeof input !== "string") return [];
  return input
    .split(",")
    .map((url) => url.trim())
    .filter(Boolean);
};

exports.getAllProducts = async (req, res) => {
  try {
    const { category, search, page = 1, limit = 12 } = req.query;
    let filter = { isActive: true };

    if (category) filter.category = category;
    if (search) filter.name = { $regex: search, $options: 'i' };

    const skip = (page - 1) * limit;

    const products = await Product.find(filter)
      .skip(skip)
      .limit(parseInt(limit));

    const total = await Product.countDocuments(filter);

    res.json({
      products,
      pagination: {
        total,
        page: parseInt(page),
        pages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createProduct = async (req, res) => {
  try {
    const {
      name,
      slug,
      description,
      price,
      category,
      stock,
      sku,
      discount,
      imageUrl,
      thumbnailUrl,
    } = req.body;
    const uploadedImage = req.files?.image?.[0]?.path;
    const uploadedThumbnail = req.files?.thumbnail?.[0]?.path;
    const uploadedThumbnails = (req.files?.thumbnails || []).map((file) => file.path);
    const thumbnailUrls = parseUrls(req.body.thumbnailUrls);
    const finalImage = uploadedImage || imageUrl;
    const finalThumbnail = uploadedThumbnail || thumbnailUrl || thumbnailUrls[0] || uploadedThumbnails[0] || finalImage;
    const images = [...new Set([finalThumbnail, ...uploadedThumbnails, ...thumbnailUrls].filter(Boolean))];

    if (!finalImage) {
      return res.status(400).json({ message: "Provide product image file or imageUrl" });
    }
    if (!finalThumbnail) {
      return res.status(400).json({ message: "Provide thumbnail file or thumbnailUrl" });
    }

    const product = new Product({
      name,
      slug,
      description,
      price,
      category,
      stock,
      image: finalImage,
      imageUrl: imageUrl || "",
      thumbnail: finalThumbnail,
      thumbnailUrl: thumbnailUrl || "",
      images,
      sku,
      discount: discount || 0,
    });


    await product.save();

    res.status(201).json({
      message: 'Product created successfully',
      product
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const uploadedImage = req.files?.image?.[0]?.path;
    const uploadedThumbnail = req.files?.thumbnail?.[0]?.path;
    const uploadedThumbnails = (req.files?.thumbnails || []).map((file) => file.path);
    const parsedThumbnailUrls = parseUrls(req.body.thumbnailUrls);

    const updateData = {
      name: req.body.name,
      slug: req.body.slug,
      description: req.body.description,
      price: req.body.price,
      category: req.body.category,
      stock: req.body.stock,
      sku: req.body.sku,
      discount: req.body.discount,
      imageUrl: req.body.imageUrl,
      thumbnailUrl: req.body.thumbnailUrl,
      ...(req.body.thumbnailUrls ? { images: parsedThumbnailUrls } : {}),
      updatedAt: Date.now(),
    };

    if (uploadedImage) {
      updateData.image = uploadedImage;
    } else if (req.body.imageUrl) {
      updateData.image = req.body.imageUrl;
    }

    if (uploadedThumbnail) {
      updateData.thumbnail = uploadedThumbnail;
    } else if (req.body.thumbnailUrl) {
      updateData.thumbnail = req.body.thumbnailUrl;
    }

    if (uploadedThumbnails.length > 0) {
      updateData.images = [...new Set([...(updateData.images || []), ...uploadedThumbnails])];
    }

    const product = await Product.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true }
    );

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json({
      message: "Product updated successfully",
      product,
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

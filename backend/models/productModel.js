import mongoose from "mongoose";

// Review Schema
const reviewSchema = new mongoose.Schema({
  rating: { type: Number, required: true },
  comment: { type: String, required: true },
  date: { type: Date, default: Date.now },
  reviewerName: { type: String, required: true },
  reviewerEmail: { type: String, required: true },
});

// Product Schema
const productSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    title: { type: String, required: true }, // Maps from "title"
    description: { type: String },
    image: { type: String }, // If you only use a main image
    images: [{ type: String }], // For multiple images
    thumbnail: { type: String },

    brand: { type: String },
    category: { type: String, required: true },
    tags: [{ type: String }],
    sku: { type: String },
    weight: { type: Number },

    dimensions: {
      width: { type: Number },
      height: { type: Number },
      depth: { type: Number },
    },

    warrantyInformation: { type: String },
    shippingInformation: { type: String },
    availabilityStatus: { type: String },
    returnPolicy: { type: String },
    minimumOrderQuantity: { type: Number, default: 1 },

    price: { type: Number, required: true, default: 0 },
    discountPercentage: { type: Number, default: 0 },

    rating: { type: Number, required: true, default: 0 },
    numReviews: { type: Number, required: true, default: 0 },

    reviews: [reviewSchema],

    meta: {
      createdAt: { type: Date },
      updatedAt: { type: Date },
      barcode: { type: String },
      qrCode: { type: String },
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);

export default Product;

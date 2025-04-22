const mongoose = require("mongoose");
const productsSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "ادخل اسم المنتج"],
        unique: [true, 'هذا الاسم موجود بالفعل، يجب أن يكون اسم المنتج مميز']

    },

    image: {
        type: String,
        required: [true, 'ادخل صورة المنتج']
    },

    price: {
        type: Number,
        rquired: [true, 'ادخل سعر المنتج']
    },

    priceAfterCoupon: {
        type: Number,
        default: function () {
            return this.price;

        }
    },

    quantity: {
        type: Number,
        required: [true, 'ادخل كمية هذا المنتج']
    },

    allowedToshowQuantity: {
        type: Boolean,
        default: true
    },

    safeLimit: {
        type: Number,
    },

    availableToBuy: {
        type: Boolean,
    },

    productType: {
        enum: ["اصلى", "بديل", "تجارى"],
        required: [true, "ادخل نوع المنتج سواء اصلى او بديل او تجارى"]
    },


    owner: {
        type: mongoose.Schema.ObjectId,
        ref: "user",
        required: [true, 'ادخل اسم مالك المنتج']
    },

    reviews: [{ type: mongoose.Schema.ObjectId, ref: "reviews" }],

    rating: { type: Number, default: 0 },

    activeCouponToApply: { type: mongoose.Schema.ObjectId, ref: "coupons" },

    carsModel: [{
        type: mongoose.Schema.ObjectId,
        ref: 'carModels',
    }]

}, { Collection: "products" }, { timestamps: true })

const productsMongoose = mongoose.model("products", productsSchema)

module.exports = productsMongoose
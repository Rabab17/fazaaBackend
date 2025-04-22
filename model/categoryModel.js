const mongoose = require("mongoose")

let categorySchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "ادخل اسم الفئة"],
        unique: [true, 'هذا الاسم موجود بالفعل، يجب أن يكون اسم الفئة مميز'],
        minLength: 3,
        maxLength: [25, " الحد الأقصى للأحرف هو 25 حرف"]
    },
    imageURL: {
        type: String,
        required: [true, "ادخل صورة مميزة للفئة"]
    },
    products: [{ type: mongoose.Schema.ObjectId, ref: "products" }]

}, { Collection: 'categorey' })

const categoryMongoose = mongoose.model('category', categorySchema)

module.exports = categoryMongoose;
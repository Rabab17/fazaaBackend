const productsModel = require("../model/prodectsModel")
const APIERROR = require("../utils/apiError")
getAllProducts = async (req, res, next) => {
    try {
        const products = await productsModel.find().populate([
            {
                path: "owner",

            }, {
                path: "reviews"
            }, {
                path: "rating",
            }, {
                path: "activeCouponToApply"
            }, {
                path: "carsModel"
            }

        ]);

        res.status(200).json({ status: "success", data: products })
    } catch (err) {
        next(new APIERROR(404, err.message));

    }
}

// -----------------------------------

getProductById = async (req, res, next) => {
    let { id } = req.params
    try {
        const product = await productsModel.findById(id).populate([
            {
                path: "owner",

            }, {
                path: "reviews"
            }, {
                path: "rating",
            }, {
                path: "activeCouponToApply"
            }, {
                path: "carsModel"
            }

        ]);

        res.status(200).json({ status: "success", data: product })

    } catch (err) {
        next(new APIERROR(404, err.message));

    }
}

// ------------------------------------

saveProduct = async (req, res, next) => {
    let newproduct = req.body
    req.body.owner = req.id
    console.log("the product to save is :", req.body)

    try {
        const savedProduct = await productsModel.create(newproduct)
        res.status(201).json({ status: "success", data: savedProduct })

    } catch (err) {
        next(new APIERROR(404, err.message));

    }
}

// --------------------------------------
patchProduct = async (req, res, next) => {
    let newProduct = req.body
    let { id } = req.params

    try {

        let product = await productsModel.findByIdAndUpdate(id, newProduct)

        if (!product) {
            return next(new APIERROR(404, `product with the ID : ${id} not found`));
        }
        res.status(200).json({ status: "success", data: product })

    } catch (err) {
        next(new APIERROR(404, err.message));

    }
}
// -------------------------------------
deleteProduct = async (req, res, next) => {
    let { id } = req.params
    try {
        let product = await categorylistModel.findByIdAndDelete(id)
        if (!product) {
            return next(new APIERROR(404, `product with ID : ${id} not found`));
        }
        res.status(200).json({ status: "success", message: "success delete" })

    } catch (err) {
        next(new APIERROR(404, err.message));

    }
}

// --------------------------------------
module.exports = { getAllProducts, saveProduct, getProductById, patchProduct, deleteProduct }
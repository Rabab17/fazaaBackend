const categorylistModel = require('../model/categoryModel');

const APIERROR = require("../utils/apiError");
// ==========================================

getCategory = async (req, res, next) => {

    try {
        let category = await categorylistModel.find()
        res.status(200).json({ status: 'success', data: category })
    } catch (err) {
        return next(new APIERROR(400, err.message))
    }
}

// ------------------------------------------

saveCategory = async (req, res, next) => {
    var newCategory = req.body;
    try {
        const savedCategory = await categorylistModel.create(newCategory)
        res.status(201).json({ status: 'success', data: savedCategory })
    } catch (err) {
        return next(new APIERROR(400, err.message))
    }


}

// ----------------------------------------

getCategoryById = async (req, res, next) => {
    let { id } = req.params

    let getCategory = await categorylistModel.findById(id)

    try {
        if (getCategory) {
            res.status(200).json({ status: "success", data: getCategory })
        }

        else {
            return next(new APIERROR(400, "not found"))

        }
    } catch (err) {
        return next(new APIERROR(404, err.message))

    }

}

// ------------------------------------------

deleteCategoryById = async (req, res, next) => {
    let { id } = req.params

    let getCategory = await categorylistModel.findByIdAndDelete(id)

    try {
        if (getCategory) {
            res.status(200).json({ status: "success", massage: `category with ID ${id} has been deleted` })
        }

        else {
            return next(new APIERROR(404, "category is not found"))

        }
    } catch (err) {
        return next(new APIERROR(404, err.message))
    }

}

// ----------------------------------------

patchCategoryById = async (req, res, next) => {
    let newCategory = req.body
    let { id } = req.params
    try {
        let getCategory = await categorylistModel.findByIdAndUpdate(id, { $set: newCategory })

        if (getCategory) {
            res.status(200).json({ status: "success", massage: `Document with ID ${id} has been updated`, data: getCategory })
        }

        else {
            return next(new APIERROR(404, "category is not found"))

        }
    } catch {
        return next(new APIERROR(404, err.message))

    }
}

//============= exporting methods to routes =====================

module.exports = { getCategory, saveCategory, getCategoryById, deleteCategoryById, patchCategoryById }

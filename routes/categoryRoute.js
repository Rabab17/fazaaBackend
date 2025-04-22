const express = require('express')

const router = express.Router()

const { getCategory, saveCategory, getCategoryById, deleteCategoryById, patchCategoryById } = require('../controller/categoryController')
// =====================================

router.get('/', getCategory)

router.post('/', saveCategory)

router.get('/:id', getCategoryById)

router.delete('/:id', deleteCategoryById)

router.patch('/:id', patchCategoryById)

module.exports = router
const express = require("express")

const router = express.Router()

const { getAllProducts, getProductById, saveProduct, patchProduct, deleteProduct, } = require("../controller/productsController")
// ===================================

router.get("/", getAllProducts)
router.get("/:id", getProductById)
router.post("/", saveProduct)
router.patch("/:id", patchProduct)
router.delete("/:id", deleteProduct)


module.exports = router
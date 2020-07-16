const path = require("path");

const express = require("express");

//const rootDir= require("../utils/path.js");

const adminController = require("../controllers/admin");

const router = express.Router();

router.get("/add-product", adminController.getAddProduct);

router.get("/products", adminController.getProducts); //gets page for admin/products

router.post("/add-product", adminController.postAddProduct);

module.exports = router;

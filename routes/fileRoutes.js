const express = require("express");
const fs = require("fs");

const path = require("path");
const router = express.Router();

// javascript files will be serves through this route
router.get("/js/:filename", (req, res) => {
    fs.createReadStream(path.join(__dirname, `../public/js/${req.params.filename}.js`)).pipe(res);
})

// css files will be servedthrough this route
router.get("/css/:filename", (req, res) => {
    fs.createReadStream(path.join(__dirname, "../public/css", `${req.params.filename}.css`)).pipe(res);
})

// fonts will be served through this route
router.get("/font/:fontname", (req, res) => {
    fs.createReadStream(path.join(__dirname, "../public/assets/fonts", req.params.fontname)).pipe(res);
})

//images will be served though these route
router.get("/images/:filename", (req, res) => {
    fs.createReadStream(path.join(__dirname, "../public/assets/images", `${req.params.filename}`)).pipe(res);
})

module.exports = router;
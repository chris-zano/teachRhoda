const express = require('express');
const router = express.Router();
const path = require("path");
const adminController = require("../controllers/adminControllers");

const multer = require('multer');
// const upload = multer({ dest: path.join(__dirname, "../DB/profile_images") });

router.get('/', adminController.renderHomePage);
router.get('/about', adminController.renderAboutPage)
router.get('/contact', adminController.renderContactPage)
router.get('/profile', adminController.renderProfilePage)

module.exports = router;
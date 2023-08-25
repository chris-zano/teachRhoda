const express = require("express");
const app = express()

const path = require("path");

const adminRoutes = require('./routes/adminRoutes');
const fileRoutes = require('./routes/fileRoutes');

app.use(express.urlencoded({extended: true}));
app.use("public", express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(adminRoutes);
app.use(fileRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
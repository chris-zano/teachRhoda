exports.renderHomePage =  (req, res) => {
    res.render("index", { title: "Home", userId: null})
}
exports.renderAboutPage =  (req, res) => {
    res.render("index", { title: "About", userId: null})
}
exports.renderContactPage =  (req, res) => {
    res.render("index", { title: "Contact", userId: null})
}
exports.renderProfilePage =  (req, res) => {
    res.render("index", { title: "Profile", userId: null})
}
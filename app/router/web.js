const express = require("express")
const Router = express.Router();
const homeController = require("../controller/homeController");
const errorController = require("../controller/errorController");
const InitWebRoute = (app) => {
    
    //Home Route
    Router.get("/",homeController.homeView);
    app.use(Router);


    //Middlezare en cas d'erreur , maintenir en bas des routes principaux
    app.use(errorController.errorView);
}

module.exports = InitWebRoute;
const express = require("express")
const Router = express.Router();
const formulaireController = require("../controller/formulaireController");
const errorController = require("../controller/errorController");
const InitWebRoute = (app) => {

    Router.get("/",formulaireController.homeView);
    Router.post("/save",formulaireController.homeSave);
    app.use(Router);


    //Middlezare en cas d'erreur , maintenir en bas des routes principaux
    app.use(errorController.errorView);
}

module.exports = InitWebRoute;
const express = require("express")
const Router = express.Router();
const formulaireController = require("../controller/formulaireController");
const errorController = require("../controller/errorController");
const InitWebRoute = (app) => {
    
    //Home Route
    Router.get("/",formulaireController.homeLogin);
    Router.get("/register",formulaireController.homeRegister);
    Router.post("/save",formulaireController.homeSave);
    Router.post("/login",formulaireController.homeLoginVerification);
    Router.get("/disconnect",formulaireController.homeDisconnect);
    app.use(Router);


    //Middlezare en cas d'erreur , maintenir en bas des routes principaux
    app.use(errorController.errorView);
}

module.exports = InitWebRoute;
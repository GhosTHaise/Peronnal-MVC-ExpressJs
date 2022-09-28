const express = require("express")
const Router = express.Router();
const formulaireController = require("../controller/formulaireController");

const InitWebRoute = (app) => {

    Router.get("/",formulaireController.homeView);

    app.use(Router);
}

module.exports = InitWebRoute;
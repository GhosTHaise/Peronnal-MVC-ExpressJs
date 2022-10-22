const express = require("express")
const Router = express.Router();
const homeController = require("../controller/homeController");
const errorController = require("../controller/errorController");
const InitWebRoute = (app) => {
    //https
    app.use((req,res,next)=>{
        console.log("Request is secure ? :"+req.secure)
        if(!req.secure){
            return res.redirect("https://"+req.headers.host+req.url)
        }
        next();
    })
    //Home Route
    Router.get("/",homeController.homeView);
    Router.get("/offline-service-worker-template",homeController.offlineView)
    //Home Route END

    app.use(Router);


    //Middlezare en cas d'erreur , maintenir en bas des routes principaux
    app.use(errorController.errorView);
}

module.exports = InitWebRoute;
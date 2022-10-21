const express = require("express");
const InitializeViewEngine = (app) => {
    app.set("view engine","ejs");
    app.set("views","./app/views");
    console.log(__dirname)
    //view styles
    app.use("/styles",express.static("./app/views/static/styles/css"));
    app.use("/scripts",express.static("./app/views/static/script"));
    app.use("/icons",express.static("./app/views/static/icons"));
    //serviceWorker
    app.use("/serviceWorker",express.static("./app/views/static/script/progressive/sw.js"));
    
}

module.exports = InitializeViewEngine
const express = require("express");
const InitializeViewEngine = (app) => {
    app.set("view engine","ejs");
    app.set("views","./app/views");
    console.log(__dirname)
    //view styles
    app.use("/styles",express.static("./app/views/static/styles/css"));
    
}

module.exports = InitializeViewEngine
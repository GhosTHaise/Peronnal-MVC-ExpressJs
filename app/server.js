const express = require("express");
const bodyParser = require("body-parser");
const InitializeViewEngine = require("./config/InitializeApp");
const InitWebRoute = require("./router/web");
const app = express(),
      PORT = process.env.PORT || 4001    
;

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//view template
InitializeViewEngine(app);
//Router
InitWebRoute(app);
app.listen(PORT,()=>{
    console.log("Server start on http://localhost:"+PORT);
});
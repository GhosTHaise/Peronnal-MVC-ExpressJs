const express = require("express");
const bodyParser = require("body-parser");
const InitializeViewEngine = require("./config/InitializeApp");
const InitWebRoute = require("./router/web");
require("dotenv").config();
const session = require("express-session");
const app = express(),
      PORT = process.env.PORT || 4001,
      HTTPS_PORT = process.HTTPS_PORT || 443
;

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
    secret : process.env.SESSION_SECRET,
    resave:false,
    saveUnitilized:true,
    cookie : {secure : false}
}));

//view template
InitializeViewEngine(app);
//Router
InitWebRoute(app);
app.listen(PORT,()=>{
    console.log("Server start on http://localhost:"+PORT);
});
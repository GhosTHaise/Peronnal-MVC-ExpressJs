const express = require("express");
const bodyParser = require("body-parser");
const InitializeViewEngine = require("./config/InitializeApp");
const InitWebRoute = require("./router/web");
const fs = require("fs");
const https = require("https")
require("dotenv").config();
const session = require("express-session");
const app = express(),
      PORT = process.env.PORT || 4001,
      HTTPS_PORT = process.HTTPS_PORT || 443
;

const key = fs.readFileSync("./certs/localhost.key");
const cert = fs.readFileSync("./certs/localhost.crt");

const server = https.createServer({key ,cert},app)
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
server.listen(PORT,()=>{
    console.log("Server start on http://localhost:"+PORT);
});
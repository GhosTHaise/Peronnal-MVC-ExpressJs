let mysql = require("mysql");
let mongoose = require("mongoose")

require("dotenv").config();

const auto_detect_bd = () => {
    const cnx = mysql?.createConnection?.({
    host : process.env.HOST,
    user : process.env.USER_DB,
    password : process.env.PASSWORD,
    database : process.env.DBNAME
    });
    if(cnx != "undefined"){
        return {
            type : "Mysql",
            connexion : cnx
        }
    }else{
        let status 
        mongoose?.connect(process.env.MONGODB_URI,
            { useNewUrlParser: true,
            useUnifiedTopology: true })
            .then(() => {type : "Mongodb"})
            .catch((e) => console.log('Connexion à MongoDB et Mysql échouée !',e));

        return status
    }
    

}
module.exports = auto_detect_bd() ?? console.log("Aucune base de donne disponible /?");


const cnx = require("./db");
const select = (table,colonne,others) => {
    let data_to_return = [];
    cnx.query(`SELECT ${String(champ)} FROM ${colonne} ${others}`,(err,data)=>{
        if(err){

        }else{
            data_to_return =  data;
        }
    });
    return data_to_return;
}

const insert = (table,data) => {
    cnx.query(`
            INSERT INTO ${String(Object.keys(data))} 
            VALUES (${String(Object.values(data))}
    `,(err,_) => {
        if(err){

        }else{
            console.log("Les informationd ont bien ete enregistre dans la table : "+table);
        }
    });
}

const remove = (table,others) => {
    cnx.query(`DELETE FROM ${table} WHERE ${others}`,(err,_) => {
        if(err){
            console.log("Les informations ont bien ete supprimer");
        }
    });
}

class ORM{
    //creation d'instance
    new(){
        return this;
    };
    //method propre
    supprimer = remove
    inserer = insert
    recuperer = select
}

module.exports = {
    ORM
}
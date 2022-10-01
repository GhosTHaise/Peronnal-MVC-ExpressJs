const cnx = require("./db");

const select = async(colonne,table,others) => {

    return new Promise((resolve,reject)=>{
        cnx.query(`SELECT ${String(colonne)} FROM ${table} ${others} `,(err,data)=>{
            //console.log(data);
            if(err){
                reject(err)
            }else{
               resolve(data)
            }
        });
    })
}

const insert = (table,data) => {
    cnx.query(`
            INSERT INTO ${String(Object.keys(data))} 
            VALUES (${String(Object.values(data))}
    `,(err,_) => {
        if(err){

        }else{
            console.log("Les informations ont bien ete enregistre dans la table : "+table);
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
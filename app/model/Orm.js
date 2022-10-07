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

const insert = async(table,data) => {
   return new Promise((resolve,reject)=>{
        cnx.query(`
            INSERT INTO ${table} (${String(Object.keys(data))})
            VALUES (${"?,".repeat((Object.values(data).length) - 1)}?)
        `,Object.values(data),(err,_) => {
            if(err){
                reject(err)
            }else{
                resolve("Les informations ont bien ete enregistre dans la table : "+table);
            }
        });
   })
}

const remove = async(table,others) => {
    return new Promise((resolve,reject) =>{
        cnx.query(`DELETE FROM ${table} WHERE ${others}`,(err,_) => {
            if(err){
                resolve({
                    message : "Les donnes ont bien ete supprimer."
                })
            }else{
                reject({
                    message : "Impossible de supprimer les donnees."
                })
            }
        });
    })
}

const update = async(table,values,other) => {
    return new Promise((resolve,reject)=>{
        cnx.query(`UPDATE ${table} SET ${values} WHERE ${other}`,(err,_)=>{
            if(err){
                resolve({
                    message : "Les donnes ont bien ete mis a jour."
                })
            }else{
                reject({
                    message : "Impossible de mette a jour les donnees."
                })
            }
        });
    });
}

class ORM{
    //creation d'instance
    new(){
        return this;
    };
    //methode propre
    supprimer = remove
    inserer = insert
    recuperer = select
    mettreAjour = update
}

module.exports = {
    ORM
}
const cnx = require("./db");


class ORM_MYSQL{
    //creation d'instance , Preciser le table name
    constructor(name){
        this.table_name = name
    }
    new = () =>{
        return this
    }
    //method propre
    supprimer = async(others) => {
        return new Promise((resolve,reject) =>{
            cnx?.connexion.query(`DELETE FROM ${this.table_name} WHERE ${others}`,(err,_) => {
                if(err){
                    reject({
                        message : "Impossible de supprimer les donnees."
                    })
                }else{
                    resolve({
                        message : "Les donnes ont bien ete supprimer."
                    })
                }
            });
        })
    }
    inserer = async(data) => {
        return new Promise((resolve,reject)=>{
             cnx?.connexion.query(`
                 INSERT INTO ${this.table_name} (${String(Object.keys(data))})
                 VALUES (?,?)
             `,Object.values(data),(err,_) => {
                 if(err){
                     reject(err)
                 }else{
                     resolve("Les informations ont bien ete enregistre dans la table : "+table);
                 }
             });
        })
     }
    recuperer = async(colonne,others) => {
        return new Promise((resolve,reject)=>{
            cnx?.connexion.query(`SELECT ${String(colonne)} FROM ${this.table_name} ${others} `,(err,data,fields)=>{
                //console.log(data);
                if(err){
                    reject(err)
                }else{
                //console.log("data : ",data,"fields :",fields);
                   resolve(data)
                }
            });
        })
    }
    mettreAjour = async(values,other) => {
        return new Promise((resolve,reject)=>{
            cnx?.connexion.query(`UPDATE ${this.table_name} SET ${values} WHERE ${other}`,(err,_)=>{
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
}
class ORM_MOMGO_DB {
    
}
module.exports = {
    ORM : (cnx.type) ? ((nx.type == "Mysql") ? ORM_MYSQL : ORM_MOMGO_DB) : () => {
        throw Error("Impossible de trouver l'ORM qui convient a votre base de donnees");
    }
}
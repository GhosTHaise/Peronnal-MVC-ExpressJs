const cnx = require("./db");

const update = async(table,values,other) => {
    return new Promise((resolve,reject)=>{
        cnx.query(`UPDATE ${this.table_name} SET ${values} WHERE ${other}`,(err,_)=>{
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
    constructor(model){
        this.table_name = model
    }
    new(){
        return this;
    };
    //methode propre
    //creation d'instance
    constructor(name){
        this.table_name = name
    }
    new = () =>{
        return this
    }
    //method propre
    supprimer = async(others) => {
        return new Promise((resolve,reject) =>{
            cnx.query(`DELETE FROM ${this.table_name} WHERE ${others}`,(err,_) => {
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
    inserer = async(table,data) => {
        return new Promise((resolve,reject)=>{
             cnx.query(`
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
            cnx.query(`SELECT ${String(colonne)} FROM ${this.table_name} ${others} `,(err,data,fields)=>{
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
    recuperer = async(colonne,table,others) => {
        return new Promise((resolve,reject)=>{
            cnx.query(`SELECT ${String(colonne)} FROM ${this.table_name} ${others} `,(err,data,fields)=>{
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
    mettreAjour = update
}

module.exports = {
    ORM
}
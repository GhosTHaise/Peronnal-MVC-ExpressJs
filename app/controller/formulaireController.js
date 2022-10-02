const model = require("../model/Orm")

const myOrm = new model.ORM().new();
const homeView = async(req,res) => {
    req.session.test = "GhosT"
    console.log(req.session);
    console.log(await myOrm.recuperer("*","User",""));
    res.render("home",{
        "message" : ""
    })
}

const homeSave = async (req,res) =>{
    console.log(req.body);
   myOrm.recuperer("Login","User",`WHERE Password LIKE '${req.body.password}'`).then( data =>{
        if(data.length > 0){
            res.render("home",{
                message : "Ce mot de passe existe deja."
            })
        }else{
            myOrm.inserer("User",{
                Login : req.body.login,
                Password : req.body.password
            }).then(_=>{
                console.log("success");
                res.render("home",{
                    message : "Votre compte a bien ete enregistre."
                })
            }).catch(err=>{
                console.log("error",err);
            })
        }
   });


}

module.exports = {
    homeView,
    homeSave
}
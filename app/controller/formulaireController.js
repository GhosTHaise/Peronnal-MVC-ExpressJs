const model = require("../model/Orm")

const myOrm = new model.ORM().new();

const homeView = async(req,res) => {
    res.render("home",{
        "message" : "",
         username : req.session.username || ""
    });
}

const homeLogin = async(req,res) => {
    //req.session.test = "GhosT"
    console.log(req.session.actifUser);
    //console.log(await myOrm.recuperer("*","User",""));
    if(!req.session.actifUser){
        res.render("login",{
            "message" : "",
             username : req.session.username || ""
        });
    }else{
        res.render("home",{
            "message" : "",
             username : req.session.username || ""
        });
    }
}

const homeRegister = (req,res) => {
    res.render("register",{
        "message" : "",
         username : req.session.username || ""
    })
}
const homeSave = async (req,res) =>{
   //console.log(req.body);
   req.session.username = req.body.login;
   myOrm.recuperer("Login","User",`WHERE Password LIKE '${req.body.password}'`).then( data =>{
        if(data.length > 0){
            res.render("register",{
                message : "Ce mot de passe existe deja.",
                username : req.session.username || ""
            })
        }else{
            myOrm.inserer("User",{
                Login : req.body.login,
                Password : req.body.password
            }).then(_=>{
                console.log("success");
                res.render("home",{
                    message : "Votre compte a bien ete enregistre.",
                    username : ""
                })
            }).catch(err=>{
                console.log("error",err);
            })
        }
   });
}

const homeLoginVerification = async(req,res) => {
    const {login,password} = req.body;
    //console.log(login,password)
    if(!req.session.actifUser){
        myOrm.recuperer("Login","User",`WHERE Login LIKE '${login}' AND Password LIKE '${password}'`)
        .then( result => {
            if(result.length == 1){
                req.session.actifUser = login
                console.log(req.session.actifUser)
                res.render("home",{

                })
            }else{
                res.render("login",{
                    message: "Check your password or username"
                });
            }
        }).catch( err => {
            console.log("Une erreur s'est produite : ",err);
        });
    }else{
        res.render("home",{    })
    }
}
const homeDisconnect = (req,res) => {
    if(req.session.actifUser){
        req.session.destroy();
        res.redirect("/");
    }
} 
module.exports = {
    homeView,
    homeSave,
    homeLogin,
    homeRegister,
    homeLoginVerification,
    homeDisconnect
}
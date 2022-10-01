const model = require("../model/Orm")
const homeView = async(req,res) => {
    req.session.test = "GhosT"
    const myOrm = new model.ORM().new();
    console.log(req.session);
    console.log(await myOrm.recuperer("*","clients",""));
    res.render("home",{
        
    })
}

module.exports = {
    homeView
}
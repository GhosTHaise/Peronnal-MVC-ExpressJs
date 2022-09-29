const homeView = (req,res) => {
    req.session.test = "GhosT"
    console.log(req.session);
    res.render("home",{
        
    })
}

module.exports = {
    homeView
}
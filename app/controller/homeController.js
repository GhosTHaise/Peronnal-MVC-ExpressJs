const homeView = (req,res) => {
    res.render("home",{
        
    })
}
const offlineView = (req,res) => {
    res.render("offline",{

    });
}
module.exports = {
    homeView,
    offlineView
}
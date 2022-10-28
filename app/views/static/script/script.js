console.table([
    {
        import : "script.js" 
    }
]);
const indexeds = new indexed("test",{},"readwrite");
indexeds.callMethod.save({id: 2,name : "GhosT",prenom : "Haise"});

window.addEventListener("online",()=>{
    history.go(-1);
})
window.addEventListener("offline",()=>{
    history.go(0);
    alert("You are offline")
})
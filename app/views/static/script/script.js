console.table([
    {
        import : "script.js" 
    }
]);
const indexeds = new indexed("test",{},"readwrite");
indexeds.callMethod.save({id: 2,name : "GhosT",prenom : "Haise"});
window.addEventListener("online",()=>{
    alert("You are online !");
})
window.addEventListener("offline",()=>{
    alert("You are offline !");
})
console.table([
    {
        import : "script.js" 
    }
]);
/* const indexeds = new indexed("test",{},"readwrite");
indexeds.callMethod.save({id: 2,name : "GhosT",prenom : "Haise"}); */
const refresh  = () => {
    location.reload();
}
window.addEventListener("online",()=>{
    refresh();
})
window.addEventListener("offline",()=>{
    refresh();
})
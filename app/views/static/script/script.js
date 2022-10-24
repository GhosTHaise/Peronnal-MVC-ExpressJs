console.table([
    {
        import : "script.js" 
    }
]);
const indexeds = new indexed("test",{},"readwrite");
indexeds.stocker({name : "Fitiavana",prenom : "sambatra"})
console.log(indexeds)
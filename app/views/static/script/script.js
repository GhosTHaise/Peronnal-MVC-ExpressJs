console.table([
    {
        import : "script.js" 
    }
]);
const indexeds = new indexed("test",{},"readwrite");
indexeds.callMethod.save({id: 2,name : "GhosT",prenom : "Haise"});
console.table([
    {
        import : "script.js" 
    }
]);
const refresh  = () => {
    location.reload();
}
/* const indexeds = new indexed("test",{},"readwrite");
indexeds.callMethod.save({id: 2,name : "GhosT",prenom : "Haise"}); */
//listen to offline and offline status
new activeOnlineOfflineListener(refresh,refresh)



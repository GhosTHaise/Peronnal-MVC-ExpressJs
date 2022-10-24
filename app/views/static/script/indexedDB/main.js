const VERSION = 1;
const indexedDb = 
    window.indexedDB ||
    window.mozIndexedDB ||
    window.webkitIndexedDV ||
    window.msIndexedDB || 
    window.shimIndexedDB;


class indexed{
    constructor(name,schema,mode){
        const request = indexedDb.open("data_Database",VERSION);
        request.onerror = (event) => {
            console.log("An arror occured with indexedDB");
            console.log(event);
        }
        request.onupgradeneeded = () => {
            const db = request.result,
            reference = db.createObjectStore(name,{keyPath : "id"}),
            transaction = reference.transaction(name,mode || "readonly"),
            store = transaction.objectStore(name);
            this.call = {
                stocker : (data) =>{
                     store.put(data)
                },
                fermer : () => {
                    db.close()
                }
            }
        }
    }
}

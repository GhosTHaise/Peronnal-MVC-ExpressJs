const VERSION = 1;
const indexedDb = 
    window.indexedDB ||
    window.mozIndexedDB ||
    window.webkitIndexedDV ||
    window.msIndexedDB || 
    window.shimIndexedDB;


class indexed{
    constructor(name,schema,mode){
        this.collection = indexedDb.open("data_Database",VERSION);
        this.name = name;
        this.mode = mode;

        this.collection.onerror = (event) => {
            console.log("An arror occured with indexedDB");
            console.log(event);
        }
        this.collection.onupgradeneeded = () => {
            console.log("Initilize indexedDb");
            const db = this.collection.result;
            const store = db.createObjectStore(name,{keyPath : "id"});
            store.createIndex("name",["name"],{unique : false});
        }
    }
    callMethod = {
        save : (data) => {
            this.collection.onsuccess = () => {
                const db = this.collection.result;
                const transaction = db.transaction(this.name,this.mode || "readonly");
                this.store = transaction.objectStore(this.name);
                this.store && this.store.put(data)
                console.log("The store object :",this.store);
            }
        },
        getAllValue : () => {
            
        }
    }
    
}

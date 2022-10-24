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
        this.store = "adasd" 
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
        this.collection.onsuccess = () => {
            console.log("success");
            const db = this.collection.result;
            const transaction = db.transaction(name,mode || "readonly");
            indexed.store = transaction.objectStore(name);
            console.log("intenceed :");
        }
    }
    stocker(data){
        console.log("The store object :",indexed.stores)
        this.store && this.store.put(data)
    }
}

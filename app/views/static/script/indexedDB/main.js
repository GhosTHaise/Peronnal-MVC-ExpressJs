const VERSION = 1;
const indexedDb = 
    window.indexedDB ||
    window.mozIndexedDB ||
    window.webkitIndexedDV ||
    window.msIndexedDB || 
    window.shimIndexedDB;

const request = indexedDb.open("data_Database",VERSION);
request.onerror = (event) => {
    console.log("An arror occured with indexedDB");
    console.log(event);
}
request.onupgradeneeded = () => {
    const db = request.result;
    const store = db.createObjectStore("cars",{keyPath : "id"});
    store.createIndex("cars_colour",["colour"],{unique: false});
    store.createIndex("colour_and_make",["colour","make"],{unique : false});
}
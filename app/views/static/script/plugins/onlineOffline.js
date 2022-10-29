

class activeOnlineOfflineListener {
    constructor(onlineCallback,offlineCallback){
        window.addEventListener("online",()=>{
            onlineCallback();
        })
        window.addEventListener("offline",()=>{
            offlineCallback();
        })
    }
}
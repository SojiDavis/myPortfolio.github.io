
if ("serviceWorker" in navigator) {
    
    navigator.serviceWorker.register('/sw.js',{scope:'/'})
    .then((reg) => {
            console.log("service worker is registered", reg);
        }).catch((err) => {
            console.log("service worker not registered", err);
        })
}

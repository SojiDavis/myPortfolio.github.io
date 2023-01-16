
if ("serviceWorker" in navigator) {
    console.log("inside register");
    navigator.serviceWorkerContainer.register('sw.js')
    .then((reg) => {
            console.log("service worker is registered", reg);
        }).catch((err) => {
            console.log("service worker not registered", err);
        })
}

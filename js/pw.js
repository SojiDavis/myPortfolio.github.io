
if ("serviceWorker" in navigator) {
    
    navigator.serviceWorker.register('https://github.com/SojiDavis/myPortfolio.github.io/sw.js',{scope:'/'})
    .then((reg) => {
            console.log("service worker is registered", reg);
        }).catch((err) => {
            console.log("service worker not registered", err);
        })
}
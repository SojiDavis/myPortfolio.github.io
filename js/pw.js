
if ("serviceWorker" in navigator) {
    
    navigator.serviceWorker.register('/myPortfolio.github.io/sw.js')
    .then((reg) => {
            console.log("service worker is registered", reg);
        }).catch((err) => {
            console.log("service worker not registered", err);
        })
}
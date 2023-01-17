
if ("serviceWorker" in navigator) {
    // console.log("inside register");
    navigator.serviceWorker.register("https://sojidavis.github.io/myPortfolio.github.io/sw.js")
    .then((reg) => {
            console.log("service worker is registered", reg);
        }).catch((err) => {
            console.log("service worker not registered", err);
        })
}
//install service worker
self.addEventListener('install', e =>{
       e.waitUntil(
            caches.open("static").then (cache=>{
                console.log("inside cache y");
                return cache.addAll(["https://sojidavis.github.io/myPortfolio.github.io/",
                "https://sojidavis.github.io/myPortfolio.github.io/css/style.css",
                "https://sojidavis.github.io/myPortfolio.github.io/css/academic.css",
                "https://sojidavis.github.io/myPortfolio.github.io/css/contact.css",
                "https://sojidavis.github.io/myPortfolio.github.io/css/curncy_style.css",
                "https://sojidavis.github.io/myPortfolio.github.io/css/forcast_style.css",
                "https://sojidavis.github.io/myPortfolio.github.io/css/testimonial.css",
                "https://sojidavis.github.io/myPortfolio.github.io/files/forcasting_value_table.csv",
                "https://sojidavis.github.io/myPortfolio.github.io/files/Resume_Soji_Davis.pdf",
                "https://sojidavis.github.io/myPortfolio.github.io/images/academic.png",
                "https://sojidavis.github.io/myPortfolio.github.io/images/Currency_converter.png",
                "https://sojidavis.github.io/myPortfolio.github.io/images/Fuel_forecaster.png",
                "https://sojidavis.github.io/myPortfolio.github.io/images/Resume_image.png",
                "https://sojidavis.github.io/myPortfolio.github.io/images/Currency_converter1.jpg",
                "https://sojidavis.github.io/myPortfolio.github.io/images/Fuel_forcaster1.jpg",
                "https://sojidavis.github.io/myPortfolio.github.io/images/soji.jpg",
                "https://sojidavis.github.io/myPortfolio.github.io/images/logo.svg",
                "https://sojidavis.github.io/myPortfolio.github.io/js/converter.js",
                "https://sojidavis.github.io/myPortfolio.github.io/js/forcast.js",
                "https://sojidavis.github.io/myPortfolio.github.io/js/pw.js",
                "https://sojidavis.github.io/myPortfolio.github.io/js/script.js",
                "https://sojidavis.github.io/myPortfolio.github.io/academic.html",
                "https://sojidavis.github.io/myPortfolio.github.io/contact.html",
                "https://sojidavis.github.io/myPortfolio.github.io/Curncy_cnvrter.html",
                "https://sojidavis.github.io/myPortfolio.github.io/forcasting.html",
                "https://sojidavis.github.io/myPortfolio.github.io/index.html",
                "https://sojidavis.github.io/myPortfolio.github.io/professional.html",
                "https://sojidavis.github.io/myPortfolio.github.io/Skill_pages.html",
                "https://sojidavis.github.io/myPortfolio.github.io/testimonial.html",
                "https://sojidavis.github.io/myPortfolio.github.io/manifest.json",
                "https://sojidavis.github.io/myPortfolio.github.io/sw.js"                     
                ]);
            })
       );

});

//activate Service Worker
self.addEventListener('activate', e =>{
    e.respondWith(
        caches.match(e.request).then(response=>{
            return response || fetch(e.request)
        })
    );
});

this.addEventListener('fetch',  {
    // it can be empty if you just want to get rid of that error
});
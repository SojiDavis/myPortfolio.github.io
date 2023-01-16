//install service worker
self.addEventListener('install', e =>{
       e.waitUntil(
            cashes.open("static").then (cache=>{
                return cache.addAll(["./",
                "./myPortfolio.github.io/css/style.css",
                "./myPortfolio.github.io/css/academic.css",
                "./myPortfolio.github.io/css/contact.css",
                "./myPortfolio.github.io/css/curncy_style.css",
                "./myPortfolio.github.io/css/forcast_style.css",
                "./myPortfolio.github.io/css/testimonial.css",
                "./myPortfolio.github.io/files/forcasting_value_table.csv",
                "./myPortfolio.github.io/files/Resume_Soji Davis.pdf",
                "./myPortfolio.github.io/images/academic.png",
                "./myPortfolio.github.io/images/Currency_converter.png",
                "./myPortfolio.github.io/images/Fuel_forecaster.png",
                "./myPortfolio.github.io/images/Resume_image.png",
                "./myPortfolio.github.io/images/Currency_converter1.jpg",
                "./myPortfolio.github.io/images/Fuel_forcaster1.jpg",
                "./myPortfolio.github.io/images/soji.jpg",
                "./myPortfolio.github.io/images/logo.svg",
                "./myPortfolio.github.io/js/converter.js",
                "./myPortfolio.github.io/js/forcast.js",
                "./myPortfolio.github.io/js/pw.js",
                "./myPortfolio.github.io/js/script.js",
                "./myPortfolio.github.io/academic.html",
                "./myPortfolio.github.io/contact.html",
                "./myPortfolio.github.io/Curncy_cnvrter.html",
                "./myPortfolio.github.io/forcasting.html",
                "./myPortfolio.github.io/index.html",
                "./myPortfolio.github.io/professional.html",
                "./myPortfolio.github.io/Skill_pages.html",
                "./myPortfolio.github.io/testimonial.html",
                "./myPortfolio.github.io/manifest.json",
                "./myPortfolio.github.io/sw.js"                     
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
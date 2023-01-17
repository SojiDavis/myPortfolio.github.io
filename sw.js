//install service worker
self.addEventListener('install', e =>{
       e.waitUntil(
            cashes.open("static").then (cache=>{
                console.log("inside cache");
                return cache.addAll(["./",
                "./css/style.css",
                "./css/academic.css",
                "./css/contact.css",
                "./css/curncy_style.css",
                "./css/forcast_style.css",
                "./css/testimonial.css",
                "./files/forcasting_value_table.csv",
                "./files/Resume_Soji Davis.pdf",
                "./images/academic.png",
                "./images/Currency_converter.png",
                "./images/Fuel_forecaster.png",
                "./images/Resume_image.png",
                "./images/Currency_converter1.jpg",
                "./images/Fuel_forcaster1.jpg",
                "./images/soji.jpg",
                "./images/logo.svg",
                "./js/converter.js",
                "./js/forcast.js",
                "./js/pw.js",
                "./js/script.js",
                "./academic.html",
                "./contact.html",
                "./Curncy_cnvrter.html",
                "./forcasting.html",
                "./index.html",
                "./professional.html",
                "./Skill_pages.html",
                "./testimonial.html",
                "./manifest.json",
                "./sw.js"                     
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
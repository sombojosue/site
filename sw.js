self.addEventListener('install', function(event) {
  console.log('service installed');
  event.waitUntil(
  caches.open('static').then(function(cache){
  cache.add('/');
  //images
  cache.add('images/about.jpg');
  cache.add('images/index.jpg');
  cache.add('images/android-chrome-192x192.png');
  cache.add('images/android-chrome-512x512.png');  
  cache.add('images/apple-touch-icon.png');
  cache.add('images/favicon.ico');
  cache.add('images/favicon-16x16.png');
  cache.add('images/favicon-32x32.png');
  //files
  cache.add('js/jquery.min.js');
  cache.add('js/jquery-migrate-3.0.1.min.js');
  cache.add('js/popper.min.js');
  cache.add('js/jquery.magnific-popup.min.js');
  cache.add('js/bootstrap.min.js');
  cache.add('js/jquery.easing.1.3.js');
  cache.add('js/jquery.waypoints.min.js');
  cache.add('js/jquery.stellar.min.js');
  cache.add('js/owl.carousel.min.js');
  cache.add('js/aos.js');
  cache.add('js/jquery.animateNumber.min.js');
  cache.add('js/bootstrap-datepicker.js');
  cache.add('js/scrollax.min.js');
  cache.add('js/main.js');
  cache.add('js/lightbox-plus-jquery.min.js');
  cache.add('js/jquery-ui.min.js');
  cache.add('js/french-lang.js');
  cache.add('js/timepicker.js');
  cache.add('css/jquery-ui.min.css');
  cache.add('css/open-iconic-bootstrap.min.css');
  cache.add('css/animate.css');
  cache.add('css/owl.carousel.min.css');
  cache.add('css/owl.theme.default.min.css');
  cache.add('css/magnific-popup.css');
  cache.add('css/aos.css');
  cache.add('css/ionicons.min.css');
  cache.add('css/bootstrap-datepicker.css');
  
  cache.add('css/icomoon.css');
  cache.add('css/style.css');
  cache.add('css/lightbox.min.css');

  cache.add('menu.html');
  cache.add('result.html');
  cache.add('about.html');
  cache.add('index.html');
  cache.add('singup.html');
  cache.add('contact.html');
  cache.add('check.html');
  cache.add('https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900');
  cache.add('https://fonts.googleapis.com/css?family=Great+Vibes&display=swap');
  cache.add('https://fonts.googleapis.com/css2?family=Merriweather:wght@700&display=swap');
  cache.add('https://use.fontawesome.com/releases/v5.0.13/css/all.css');
  cache.add('https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');
  cache.add('https://fonts.googleapis.com/css2?family=Lobster+Two&family=Playball&display=swap');
  })
 );
});

self.addEventListener('activate', function() {
  console.log('service activated');
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
     caches.match(event.request).then(function(res){
      if (res) {
        return res;
      }else{
        return fetch(event.request);
      }
     })
    );
});
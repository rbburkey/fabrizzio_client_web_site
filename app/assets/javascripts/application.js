// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require jquery.easing.min.js
//= require bootstrap.js
//= require carousel.js
//= require creative.js
//= require scrolling-nav.js
//= require_tree .


//
// document.createElement("section");
// $(document).ready(function(){
//
//    // cache the window object
//    $window = $(window);
//
//    $('section[data-type="background"]').each(function(){
//      // declare the variable to affect the defined data-type
//      var $scroll = $(this);
//
//       $(window).scroll(function() {
//         // HTML5 proves useful for helping with creating JS functions!
//         // also, negative value because we're scrolling upwards
//         var yPos = -($window.scrollTop() / $scroll.data('speed'));
//
//         // background position
//         var coords = '50% '+ yPos + 'px';
//
//         // move the background
//         $scroll.css({ backgroundPosition: coords });
//       }); // end window scroll
//    });  // end section function
//
//
//    new WOW().init();
//
//    $('a.page-scroll').bind('click', function(event) {
//        var $ele = $(this);
//        $('html, body').stop().animate({
//            scrollTop: ($($ele.attr('href')).offset().top - 60)
//        }, 1450, 'easeInOutExpo');
//        event.preventDefault();
//    });
//
//
//
//    jQuery(document).ready(function($) {
//
//          $('#myCarousel').carousel({
//                  interval: 5000
//          });
//
//          $('#carousel-text').html($('#slide-content-0').html());
//
//          //Handles the carousel thumbnails
//         $('[id^=carousel-selector-]').click( function(){
//              var id = this.id.substr(this.id.lastIndexOf("-") + 1);
//              var id = parseInt(id);
//              $('#myCarousel').carousel(id);
//          });
//
//
//          // When the carousel slides, auto update the text
//          $('#myCarousel').on('slid.bs.carousel', function (e) {
//                   var id = $('.item.active').data('slide-number');
//                  $('#carousel-text').html($('#slide-content-'+id).html());
//          });
//  });

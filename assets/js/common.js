$(document).ready(function(){
   
    $(window).scroll(function() {    
   var scroll = $(window).scrollTop();
   // var topNav =$(".main-header").height();

   if (scroll >= 60) {
       $(".header").addClass("fixed-nav");
   } else {
       $(".header").removeClass("fixed-nav");
   }
   });
    
});

$(".navbar-light").click(function(){
   $(this).toggleClass("open");
});
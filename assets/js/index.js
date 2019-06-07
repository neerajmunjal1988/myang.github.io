$(document).ready(function(){
   
    $(window).scroll(function() {    
   var scroll = $(window).scrollTop();
   // var topNav =$(".main-header").height();

   if (scroll >= 30) {
       $(".main-header").addClass("fixed-nav");
   } else {
       $(".main-header").removeClass("fixed-nav");
   }
 });
 $('#nav-icon1').click(function(){
   $(this).toggleClass('open');
});
 AOS.init();


 

      $('.team-carousel').owlCarousel({

    loop:true,

    margin:20,

    nav:true,

    smartSpeed:500,

    responsive:{

        0:{

            items:1

        },

        600:{

            items:3

        },

        1000:{

            items:4

        }

    }

    });

    



      $('.client-carousel').owlCarousel({

        loop:true,

        margin:20,

        nav:true,

        smartSpeed:500,

        responsive:{

            0:{

                items:1

            },

            600:{

                items:3

            },

            1000:{

                items:4

            }

        }

        });

   



      $('.serv-crousel').owlCarousel({

    loop:true,

    margin:20,

    smartSpeed:750,

    dots:true,

    autoplay:true,

    responsive:{

        0:{

            items:1

        },

        600:{

            items:1

        },

        1000:{

            items:1

        }

    }

    });

    

  $(".home").addClass("active");

});

  

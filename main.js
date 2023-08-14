let slider = tns({
    container : ".my-slider",
    "slideBy" : 1,
    "speed" : 400,
    "nav" : false,
    controlsContainer: "#controls",
    prevButton : ".previous",
    nextButton : ".next",
    autoplay : true,
    // controls : false,
    autoplayButtonOutput : false,
    Responsive: {
        1600: {
            items : 2,
            gutter: 20,
        },
        1024: {
            items : 2,
            gutter: 20
        },
        768: {
            items : 1,
            gutter: 20
        }, 
        480: {
            items : 1
        }

    }
});



// <!-- Initialize Swiper -->
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        slidesPerGroup: 3,
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        autoplay:{
            delay:2000,
        },
        breakpoints: {        
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
    1280: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
    });



// the nav links for sidemenu
let sidemeu = document.getElementById("sidemenu");/*getting the ID name from html file */

function openmenu(){ /* adding the functions we added in the icon*/
    sidemeu.style.right = "0"; /*whenever the right is "0" it will be visible */
}
function closemenu(){
    sidemeu.style.right = "-200px" /* if its close menu, it will be '-200'*/
}

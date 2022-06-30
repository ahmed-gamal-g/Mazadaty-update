



let title = document.querySelector(".title")
let downtwo = document.querySelector(".title-two")
// let titleI = document.querySelector(".title i")
let Ione = document.querySelector(".down-one")
let Itwo = document.querySelector(".down-two")
let Ithree = document.querySelector(".down-three")
let Ifour = document.querySelector(".down-four")
let Ifive = document.querySelector(".down-five")


let downthree = document.querySelector(".title-three")
let downfour = document.querySelector(".title-four")
let downfive = document.querySelector(".title-five")
let enwanSlide = document.querySelector(".enwan-slide")

let DisplayOne = document.querySelector(".div-diplay-one")
let Displaytwo = document.querySelector(".div-diplay-two")
let Displaythree = document.querySelector(".div-diplay-three")
let Displayfour = document.querySelector(".div-diplay-four")
let Displayfive = document.querySelector(".div-diplay-five")
let boxSlideAlllDisplay = document.querySelector(".box-slide-alll-display")


title.onclick = function () {
    DisplayOne.classList.toggle("active")
    Ione.classList.toggle("active")
}

downtwo.onclick = function () {
    Displaytwo.classList.toggle("active")
    Itwo.classList.toggle("active")
}

downthree.onclick = function () {
    Displaythree.classList.toggle("active")
    Ithree.classList.toggle("active")
}

downfour.onclick = function () {
    Displayfour.classList.toggle("active")
    Ifour.classList.toggle("active")
}

downfive.onclick = function () {
    Displayfive.classList.toggle("active")
    Ifive.classList.toggle("active")
}

// enwanSlide.onclick = function () {
//     boxSlideAlllDisplay.classList.toggle("active")
// }

$( ".enwan-slide" ).click(function() {
    $( ".box-slide-alll-display" ).toggle(800)
  });



  



// start swiber
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      // when window width is >= 320px
      1: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      // when window width is >= 640px
      991: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },
  });
  // end swiber



// start slider
$(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    // autoplay: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });
  // end slider
  




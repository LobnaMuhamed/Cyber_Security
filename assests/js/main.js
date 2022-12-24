
    // Initialize Swiper 
  // var swiper = new Swiper(".mySwiper", {
  //   slidesPerView: 3,
  //   loop: true,
  //   grabCursor: true,
  //   spaceBetween: 48,

  //   breakpoints: {
  //     0: {
  //       slidesPerView: 1,
  //     },
  //     600: {
  //       slidesPerView: 2,
  //     },
  //     1250: {
  //       slidesPerView: 3,
  //     },
  //   },
  //   pagination: {
  //     el: ".swiper-pagination",
  //     clickable: true,
  //   },
  // });
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 35,
  slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
      0: {
        slidesPerView: 1,
      },
      700: {
        slidesPerView: 2,
      },
      900: {
        slidesPerView: 3,
      },
  }
});



///////////////////////////////////////////////////////////////////
// START FEATURE SECTION
// allFeat = document.querySelectorAll(".feature .container .item");


// allFeat.forEach((ele) => {
//   ele.addEventListener("click", function () {
//     ele.classList.add("item_active");
//   });
// });

// $(".item__1").mouseover(function () {
//   $(".item__1").css("background-color", "rgb(140,24,215)");
//   $(".item__1").css("display", "flex");
//   $(".item__1").css("top", "-2rem");
//   $(".item__1 svg").css("fill", "var(--secondColor)");
//   $(".item__1 svg").css("margin-top", "3rem");
//   $(".item__1 svg").css("margin-right", "1rem");
//   $(".item__1 h3").css("margin-top", "4rem");
//   $(".item__1 h3").css("color", "var(--secondColor)");
// });



// $(".item__1").mouseleave(function () {
//   $(".item__1").css("background-color", "var(--secondColor)");
//   $(".item__1").css("display", "block");
//   $(".item__1").css("top", "0rem");
//   $(".item__1 svg").css("fill", "var(--mainColor)");
//   $(".item__1 svg").css("margin-top", "1.5rem");
//   $(".item__1 svg").css("margin-right", "0");
//   $(".item__1 h3").css("margin-top", "0");
//   $(".item__1 h3").css("color", "black");
// });

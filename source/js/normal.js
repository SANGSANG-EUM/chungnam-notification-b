/**
 * [공통] 모바일 브라우저 100vh 해결
 */
const mobileHeight = () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);

  window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });
}

/**
 * [메인] 메인 비주얼 슬라이드
 */
// const mainVisualSlide = () => {
//   let mvSwiper = new Swiper('.main_visual',{
//     slidesPerView : 1, // 한 슬라이드에 보여줄 갯수
//     loop : true,   // 슬라이드 반복 여부
//     loopAdditionalSlides : 1,
//     autoplay: {     //자동슬라이드 (false-비활성화)
//       delay: 5000, // 시간 설정
//       disableOnInteraction: false, // false-스와이프 후 자동 재생
//     },
//     pagination: {
//       el: ".main_slide_control .swiper-pagination",
//       type: "fraction",
//     },
//     on: {
//       init: function () {
//         mainVisualTimebar('ing')
//       },
//       slideChangeTransitionEnd: function () {
//         mainVisualTimebar('init')
//         mainVisualTimebar('ing')
//       },
//     },
//   });

//   let mainVisualStopBtn = $(".mv_stop");

//   mainVisualStopBtn.on("click", function(){
//     if($(this).hasClass('on')){
//       $(this).removeClass('on');
//       mainVisualTimebar('ing');
//       mvSwiper.autoplay.start();
//       $(this).find('img').attr('src','/source/img/icon-stop.png');
//     }else{
//       $(this).addClass('on');
//       mainVisualTimebar('init')
//       mvSwiper.autoplay.stop();
//       $(this).find('img').attr('src','/source/img/icon-play.png');
//     }
//   });
// }

/**
 * 사업개요 03 충남경기 상생협력과제 슬라이드
 */
const chListSlider = () => {
  let chListSwiper = new Swiper('.nt-challenge_pnavi-slider',{
    direction: "vertical",
    slidesPerView : 4, // 한 슬라이드에 보여줄 갯수
    spaceBetween : 20,
    loop : true,   // 슬라이드 반복 여부
    loopAdditionalSlides : 1,
    autoplay: {     //자동슬라이드 (false-비활성화)
      delay: 3000, // 시간 설정
      disableOnInteraction: false, // false-스와이프 후 자동 재생
    },
    navigation: {
      nextEl: ".nt-challenge_btn.next",
      prevEl: ".nt-challenge_btn.prev",
    },
    breakpoints: {
      767: {
        slidesPerView : 5,
      },
      1023: {
        slidesPerView : 6,
      },
      1290: {
        slidesPerView : 7,
      },
    },
  });
}

// document ready
$(document).ready(function(){
  mobileHeight();
  chListSlider();
}); // document ready end
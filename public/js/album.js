/**
 * 설명
 * 1. nas api 를 이용하여, `이미지 id` 값들을 가져온다.
 * 2. `이미지 id` 를 통해 이미지를 요청하는 url을 생성한다.
 * 3. DOM string 을 생성하여 return 한다.
 *
 *
 * 버그
 * - 왜인지는 모르겠으나, 현재 slick 과 jquery 가 resource 를 두번호출 하는 버그가 있다.
 *
 * 문제 제기
 * - https://github.com/kenwheeler/slick/issues/3822
 */

async function processAlbum() {
  const galleryContainer = document.querySelector(".swiper_wrap .your-class");
  if (galleryContainer != null) {
    $(".your-class").slick({
      infinite: true,
      variableWidth: true,
      lazyLoad: "ondemand",
      // adaptiveHeight: true,
      // centerMode: true,
      slidesToShow: 8, // lazy load시 넉넉하게 선언 필수
      slidesToScroll: 1,
      // responsive: [ // 반응형 웹 구현 옵션
      //     {
      //         breakpoint: 960, //화면 사이즈 960px
      //         settings: {
      //             //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
      //             // slidesToShow: 3,
      //             // slidesToScroll: 2,
      //         }
      //     },
      //     {
      //         breakpoint: 768, //화면 사이즈 768px
      //         settings: {
      //             //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
      //             // slidesToShow: 2,
      //             // slidesToScroll: 1,
      //         }
      //     }
      // ]
    });
  }
}

window.addEventListener("DOMContentLoaded", (event) => {
  console.log("processAlbum");
  processAlbum();
});

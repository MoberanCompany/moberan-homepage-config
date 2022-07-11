function makeGalleryImage(id){
    const url = wrapCors(`https://photo.moberan.com/photo/webapi/thumb.php?api=SYNO.PhotoStation.Thumb&method=get&version=1&size=large&id=${id}`)
    /**
     * 설명
     * - 왜인지는 모르겠으나, 현재 slick 과 jquery 가 resource 를 두번호출 하는 버그가 있다.
     * 
     * 문제 제기
     * - https://github.com/kenwheeler/slick/issues/3822
     */
    return `<div><img data-lazy="${url}" /></div>`;
}

function syncXhr(url){
    
    // var request = new XMLHttpRequest();
    // request.open('GET', url, false);  
    // request.send(null);

    // if (request.status === 200) {
    //     return request.response;
    // }
    // return null;

    fetch(url)
        .then(res => res.json())
        .then((data)=>{
            const resData = data.data.items;
            const photoList = resData.map((it)=>it.id);

            const galleryContainer = document.querySelector('.swiper_wrap .your-class');

            if(galleryContainer != null){
                const photoTags = photoList.map((it)=> makeGalleryImage(it));
                galleryContainer.innerHTML = photoTags.join('');
            }

            $('.your-class').slick({
                infinite: true,
                variableWidth: true,
                lazyLoad: 'ondemand',
                // adaptiveHeight: true,
                // centerMode: true,
                slidesToShow: 8, // lazy load시 넉넉하게 선언 필수
                // slidesToScroll: 3,
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
        });

    // if(response){
    //     return response;
    // }

    // return null;

}

function wrapCors(url){
    return `https://cors.bbear.workers.dev/?${encodeURIComponent(url)}`;
}

function fetchPhotoList(){
    const photoCount = 500;
    let data = syncXhr(wrapCors(`https://photo.moberan.com/photo/webapi/photo.php?version=1&method=list&limit=${photoCount}&offset=0&api=SYNO.PhotoStation.Photo&type=photo&sort_by=takendate&sort_direction=desc`));
    if(data != null){
        // data = JSON.parse(data);
        data = data.data.items;
        data = data.map((it)=> it.id);
    }
    return data;


}

async function galleryGenerate() {
    const photoList = fetchPhotoList();
    const galleryContainer = document.querySelector('.swiper_wrap .your-class');
    if(galleryContainer != null){
        const photoTags = photoList.map((it)=> makeGalleryImage(it));
        galleryContainer.innerHTML = photoTags.join('');
    }
}

(function () {
    document.addEventListener("DOMContentLoaded", () => {

        // galleryGenerate();

        syncXhr(wrapCors(`https://photo.moberan.com/photo/webapi/photo.php?version=1&method=list&limit=${photoCount}&offset=0&api=SYNO.PhotoStation.Photo&type=photo&sort_by=takendate&sort_direction=desc`));

    });
})();

function makeGalleryImage(id){
    const url = wrapCors(`https://photo.moberan.com/photo/webapi/thumb.php?api=SYNO.PhotoStation.Thumb&method=get&version=1&size=large&id=${id}`)
    return `<div><img loading="lazy" data-lazy="${url}" /></div>`;
}

function syncXhr(url){
    var request = new XMLHttpRequest();
    request.open('GET', url, false);  
    request.send(null);

    if (request.status === 200) {
        return request.response;
    }
    return null;
}

function wrapCors(url){
    return `https://cors.bbear.workers.dev/?${encodeURIComponent(url)}`;
}

function fetchPhotoList(){
    const photoCount = 500;
    let data = syncXhr(wrapCors(`https://photo.moberan.com/photo/webapi/photo.php?version=1&method=list&limit=${photoCount}&offset=0&api=SYNO.PhotoStation.Photo&type=photo&sort_by=takendate&sort_direction=desc`));
    if(data != null){
        data = JSON.parse(data);
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
        galleryGenerate();
    });
})();

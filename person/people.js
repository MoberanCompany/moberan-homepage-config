const peopleData = [
    {       
        "name": "백지훈",
        "image":"https://github.com/MoberanCompany/moberan-homepage-config/blob/main/person/jhbaik.png?raw=true", 
        "role": "대표",
        "bio": "개발은 모베란으로 통합니다.",
        "link":"https://github.com/zoops"
    },
    {       
        "name": "손민재",
        "image":"https://github.com/MoberanCompany/moberan-homepage-config/blob/main/person/minjae.jfif?raw=true", 
        "role": "Mobile Application",
        "bio":"전문가의 손길로 사용성 좋은 편리한 앱을 만들어 드리겠습니다!",
        "link":"https://github.com/bungabear"
    },
    {
        "name": "주해성",
        "image":"https://github.com/MoberanCompany/moberan-homepage-config/blob/main/person/haesung.jfif?raw=true", 
        "role": "Web Application",
        "bio":"사랑합니다 고객님❤",
        "link":"https://github.com/haesungjoo"
    },
    {
        "name": "왕재현",
        "image":"https://github.com/MoberanCompany/moberan-homepage-config/blob/main/person/jaehyun.png?raw=true", 
        "role": "Windows/Web Application",
        "bio":"먹이를 주지 마시오",
        "link":"https://github.com/aresmesboy"
    },
    {
        "name": "김민희",
        "image":"https://github.com/MoberanCompany/moberan-homepage-config/blob/main/person/minn.jpg?raw=true", 
        "role": "Excel, HWP",
        "bio":"제주살이 화이팅",
        "link":""
    },
    {
        "name": "유호단",
        "image":"https://github.com/MoberanCompany/moberan-homepage-config/blob/main/person/hodan.jpg?raw=true", 
        "role": "Team Leader",
        "bio":"어제보다 좋은 서비스를 위하여, 오늘도 개발!",
        "link":"https://github.com/idas4you"
    } 
];

function peopleGenerate(){
    let divs = peopleData.map((e)=>{
        let div = `
        <li class="fl" data-aos="flip-right" data-aos-offset="-400" data-aos-delay="200" data-aos-duration="600"
            data-aos-anchor-placement="top-center">
            <a href="${e.link}" target="_blank">
                <div class="staff_list">
                    <div class="staff_thumb">
                        <img src="${e.image}" stype="object-fit: cover;aspect-ratio: 1/1;">
                    </div>
                    <div class="staff_txt">
                        <h4 class="staff_tit">${e.name}</h4>
                        <p class="staff_pos">${e.role}</p>
                        <p class="staff_info">${e.bio}</p>
                    </div>
                </div>
            </a>
        </li>
        `;
        return div;
    });
    
    let target = document.querySelector(".right_box > ul");
    target.innerHTML = divs.join('\n');
}

(function(){
    document.addEventListener("DOMContentLoaded", () => {
        peopleGenerate();
    });
})();

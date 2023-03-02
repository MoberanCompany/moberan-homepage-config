const peopleData = [
    {       
        "name": "백지훈",
        "image":"https://github.com/MoberanCompany/moberan-homepage-config/blob/main/person/jhbaik.png?raw=true", 
        "role": "대표",
        "bio": "개발은 모베란으로 통합니다.",
        "link":"https://github.com/zoops"
    },
    {
        "name": "김민희",
        "image":"https://github.com/MoberanCompany/moberan-homepage-config/blob/main/person/minn.jpg?raw=true", 
        "role": "HR, Accounting",
        "bio":"Beautiful tomorrow",
        "link":""
    },
    {
        "name": "유호단",
        "image":"https://github.com/MoberanCompany/moberan-homepage-config/blob/main/person/hodan.jpg?raw=true", 
        "role": "Team Leader",
        "bio":"어제보다 좋은 서비스를 위하여, 오늘도 개발!",
        "link":"https://github.com/idas4you"
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
        "bio":"뭐든 꼼꼼히 보려 노력합니다.",
        "link":"https://github.com/haesungjoo"
    },
    {
        "name": "송준영",
        "image":"https://avatars.githubusercontent.com/u/35232655?raw=true", 
        "role": "Web Application",
        "bio":"저를 사람이라고 생각할 수 있지만 사실 인공지능입니다.",
        "link":"https://github.com/HamBP"
    },
    {
        "name": "김우중",
        "image":"https://github.com/MoberanCompany/moberan-homepage-config/blob/main/person/woojoong.jpg?raw=ture", 
        "role": "Web Application",
        "bio":"몸이 좋아서 머리가 덜 고생하는 사람입니다.",
        "link":"https://github.com/Identityless"
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
                        <img src="${e.image}" style="object-fit: cover;aspect-ratio: 1/1;">
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

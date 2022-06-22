function peopleGenerate(){
    const data = [
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
            "link":"https://github.com/lululalala"
        }
    ];
    let divs = data.map((e)=>{
        let div = `
        <li class="fl" data-aos="flip-right" data-aos-offset="-400" data-aos-delay="200" data-aos-duration="600"
            data-aos-anchor-placement="top-center">
            <a href="${e.link}">
                <div class="staff_list">
                    <div class="staff_thumb">
                        <img src="${e.image}">
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

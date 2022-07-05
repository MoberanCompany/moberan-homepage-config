const BTN_CLASS_SUFFIX = "_btn";

const productDatas = [
    {
        badgeYN: "N",
        badgeText: "",
        thumbNailImagePath: "https://github.com/MoberanCompany/moberan-homepage-config/blob/main/product/asset/rndhub.jpg?raw=true",
        productTitle: "INU 산학매칭",
        productContent: "인천대학교의 특허, 논문, R&D, 저서를 실시간으로 확인해 보세요. \n 산학매칭을 위해 대학교와 기업은 꾸준한 시간과 비용을 들여야 합니다. INU 산학 매칭을 통하면, 기업에 맞는 최신 정보만을 검색하고, 알림을 받아 볼 수 있습니다.",
        linkBtnGroup: [
            {
                text: "웹페이지",
                link: "http://rndhub.moberan.com/",
                type: "demo", // demo, down 순서 지켜야함
            },
            {
                text: "iOS",
                link: "https://apps.apple.com/kr/app/inu-%EC%82%B0%ED%95%99%EB%A7%A4%EC%B9%AD/id1552852977?itsct=apps_box_link&itscg=30200",
                type: "down", // demo, down 순서 지켜야함
            },
            {
                text: "Android",
                link: "https://play.google.com/store/apps/details?id=com.moberan.rndhub_flutter",
                type: "down", // demo, down 순서 지켜야함
            },
        ]
    },
    {
        badgeYN: "Y",
        badgeText: "근태 관리",
        thumbNailImagePath: "https://github.com/MoberanCompany/moberan-homepage-config/blob/main/product/asset/blueDogLogo.png?raw=true",
        productTitle: "블루독(Bluedog)",
        productContent: "Easiset way to manage Company!\n추가적인 하드웨어 없이 한눈에 회사를 관리할수 있다면!",
        linkBtnGroup: [
            {
                text: "웹페이지",
                link: "http://bluedog.moberan.com/#/",
                type: "demo", // demo, down 순서 지켜야함
            },
        ]
    }
    // {
    //     badgeYN: "N",
    //     badgeText: "",
    //     thumbNailImagePath: "",
    //     productTitle: "",
    //     productContent: "",
    //     linkBtnGroup: [
    //         {
    //             text: "",
    //             link: "",
    //             type: "", // demo, down
    //         },
    //     ]
    // },
];

const generateComponent = (data) => {

    newLineParsedContent = data.productContent.replaceAll("\n", "<br>");

    return `
    <li data-aos="fade-right" data-aos-offset="-400" data-aos-delay="200" data-aos-duration="800" data-aos-anchor-placement="top-center">
        ${data.badgeYN == "Y" ? `<div class="product_li_thumb" style="background-image: url('${data.thumbNailImagePath}'); background-size: cover; background-position: center;"><span>${data.badgeText}</span></div>`: `<div class="product_li_thumb" style="background-image: url('${data.thumbNailImagePath}'); background-size: cover; background-position: center;"></div>`}
        <div class="product_li_txt">
            <h3>${data.productTitle}</h3>
            <p class="txt">${newLineParsedContent}</p>
            <div class="btn_wrap">
                ${generateBtnGroup(data.linkBtnGroup)}
            </div>
        </div>
    </li>
    `;
}

const generateBtnGroup = (linkBtnGroup) => {
    return linkBtnGroup.map((linkBtnObj)=>{
        return `
            <a href="${linkBtnObj.link}" target="_blank" class="${linkBtnObj.type+BTN_CLASS_SUFFIX}">${linkBtnObj.text}</a>
        `
    }).join('');
}

(function(){
    document.addEventListener("DOMContentLoaded", () => {
        const productInfoContainer = document.querySelector("#section03 ul");
        
        const generatedHTML = productDatas.map((data)=>{
            return generateComponent(data);
        }).join('');

        productInfoContainer.innerHTML = generatedHTML;
    });
})();

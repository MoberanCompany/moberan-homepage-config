const BTN_CLASS_SUFFIX = "_btn";

const productDatas = [
    {
        badgeYN: "Y",
        badgeText: "NAVER",
        thumbNailImagePath: "https://github.com/MoberanCompany/moberan-homepage-config/blob/main/product/asset/naver.jfif?raw=true",
        productTitle: "네이버",
        productContent: "네이버로 가는 지름길",
        linkBtnGroup: [
            {
                text: "테스트",
                link: "www.naver.com",
                type: "demo", // demo, down
            },
        ]
    },
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
    return `
    <li data-aos="fade-right" data-aos-offset="-400" data-aos-delay="200" data-aos-duration="800" data-aos-anchor-placement="top-center">
        ${data.badgeYN == "Y" ? `<div class="product_li_thumb" style="background-image: url('${data.thumbNailImagePath}'); background-size: cover;"><span>${data.badgeText}</span></div>`: ""}
        <div class="product_li_txt">
            <h3>${data.productTitle}</h3>
            <p class="txt">${data.productContent}</p>
            <div class="btn_wrap">
                ${generateBtnGroup(data.linkBtnGroup)}
            </div>
        </div>
    </li>
    `;
}

const generateBtnGroup = (linkBtnGroup) => {
    linkBtnGroup.map((linkBtnObj)=>{
        return `
            <a href="${linkBtnObj.link}" class="${type+BTN_CLASS_SUFFIX}">${linkBtnObj.text}</a>
        `
    });

    return linkBtnGroup.join('');
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

const BTN_CLASS_SUFFIX = "_btn";
const alwaysShowCount = 3;

const productDatas = [
    
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
    
    {
        badgeYN: "Y",
        badgeText: "4K 버전 준비중",
        thumbNailImagePath: "https://github.com/MoberanCompany/moberan-homepage-config/blob/main/product/asset/topWeather.png?raw=true",
        productTitle: "topWeather",
        productContent: "topWeather는 다양한 기상 데이터를 방송에 활용하여 기상정보 그래픽을 생성하는 시스템으로 MBC, SBS등 다수의 방송사에서 사용하고 있습니다.\n천리안 위성 데이터, 레이더 데이터, 관측데이터, 예측데이터, 태풍 데이터 등 방송에서 사용하는 다양한 형식의 기상 그래픽을 사용자가 쉽고 빠르게 제작할 수 있습니다.",  
        linkBtnGroup: []
    },
    {
        badgeYN: "Y",
        badgeText: "5개 프로젝트",
        thumbNailImagePath: "https://github.com/MoberanCompany/moberan-homepage-config/blob/main/product/asset/NFTMarket.png?raw=true",
        productTitle: "NFT 서비스 개발",
        productContent: "\"블록체인 메인넷 개발 1건, NFT 마켓 3건, Dapp 개발 1건\"의 경험을 토대로\n블록체인 및 NFT 관련 서비스 개발에 적극 참여 가능합니다.",
        linkBtnGroup: []
    },

    {
        badgeYN: "Y",
        badgeText: "근태 관리",
        thumbNailImagePath: "https://github.com/MoberanCompany/moberan-homepage-config/blob/main/product/asset/blueDog2.svg?raw=true",
        productTitle: "블루독(Bluedog)",
        productContent: "Easiset way to manage Company!\n추가적인 하드웨어 없이 한눈에 회사 근태를 관리할수 있다면!",
        linkBtnGroup: [
            {
                text: "웹페이지",
                link: "http://bluedog.moberan.com/#/",
                type: "demo", // demo, down 순서 지켜야함
            },
        ]
    },
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
        badgeYN: "N",
        badgeText: "",
        thumbNailImagePath: "https://github.com/MoberanCompany/moberan-homepage-config/blob/main/product/asset/uremote.jpg?raw=true",
        productTitle: "uRemote",
        productContent: "uRmote는 Sony Rs-422 Protocol을 통해 Sony Remote Controller 장비들과 같이 방송 장비들을 컨트롤하는 프로그램 입니다. 최대 4대까지 장비를 지원하며, \"In and Out -point entry\", \"+ and - Trim\", \"Auto Edit\", \"Preview/Reveiw\", \"Go To\", \"All Stop\" 등의 다양한 편집기능,\n어셈블 및 인서트 모드를 지원합니다.",
        linkBtnGroup: [
        ]
    }
];

const generateComponent = (data, index) => {
    const isHidden = index >= alwaysShowCount;
    const isButtonEmpty = data.linkBtnGroup.length == 0;
    const conainerAttribute = isHidden ? `class="blind_li"` : `data-aos="fade-right" data-aos-offset="-400" data-aos-delay="200" data-aos-duration="800" data-aos-anchor-placement="top-center"`
    
    const txtMaxLine = isButtonEmpty ? 5 : 3;
    const overrideTxtStyle = `-webkit-line-clamp: ${txtMaxLine} !important;`
    
    newLineParsedContent = data.productContent.replaceAll("\n", "<br>");

    return `
    <li ${conainerAttribute} >
        ${data.badgeYN == "Y" ? `<div class="product_li_thumb" style="background-image: url('${data.thumbNailImagePath}'); background-size: cover; background-position: center;"><span>${data.badgeText}</span></div>`: `<div class="product_li_thumb" style="background-image: url('${data.thumbNailImagePath}'); background-size: cover; background-position: center;"></div>`}
        <div class="product_li_txt">
            <h3>${data.productTitle}</h3>
            <p class="txt" style="${overrideTxtStyle}">${newLineParsedContent}</p>
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
        
        if(productDatas.length < alwaysShowCount){
            document.querySelector('.arrow_ct').remove();
        }
        
        const generatedHTML = productDatas.map((data, index)=>{
            return generateComponent(data, index);
        }).join('');

        productInfoContainer.innerHTML = generatedHTML;
    });
})();

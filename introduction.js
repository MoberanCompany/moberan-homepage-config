const datas = [
    {
        "text": "5",
        "textSize": 48,
        "textUnitYN": "Y",
        "textUnit": "개",
        "textUnitSize": 16,
        "subTextYN": "Y",
        "subText": "방송사 납품",
        "subTextSize": 17
    },
    {
        "text": "11",
        "textSize": 48,
        "textUnitYN": "Y",
        "textUnit": "개",
        "textUnitSize": 16,
        "subTextYN": "Y",
        "subText": "2022년 프로젝트 완료",
        "subTextSize": 17
    },
    {
        "text": "%2B3700",
        // +3700
        "textSize": 48,
        "textUnitYN": "N",
        "textUnit": "",
        "textUnitSize": 16,
        "subTextYN": "Y",
        "subText": "회사 창립",
        "subTextSize": 17
    },
    {
        "text": "5",
        "textSize": 48,
        "textUnitYN": "Y",
        "textUnit": "회",
        "textUnitSize": 16,
        "subTextYN": "Y",
        "subText": "2022년 여행",
        "subTextSize": 17
    },
    {
        "text": "20",
        "textSize": 48,
        "textUnitYN": "Y",
        "textUnit": "건",
        "textUnitSize": 16,
        "subTextYN": "Y",
        "subText": "Flutter 프로젝트",
        "subTextSize": 17
    },
];

function generateInformation({text, textSize, textUnitYN, textUnit, textUnitSize, subTextYN, subText, subTextSize}){
    return `
        <li>
            <img src="https://mwidget.moberan.com/api/svg/text/info?text=${text}&textSize=${textSize}&textUnitYN=${textUnitYN}&textUnit=${textUnit}&textUnitSize=${textUnitSize}&subTextYN=${subTextYN}&subText=${subText}&subTextSize=${subTextSize}">
        </li>
    `;
} 

function generateCompanyInformationHtml(){

    const datasArr = [];

    datas.map((data)=>{
        datasArr.push(
            generateInformation(data)
        )
    });

    return datasArr.join('\n');
}

(function(){
    document.addEventListener("DOMContentLoaded", ()=>{
        const companyInformationHtml = generateCompanyInformationHtml();
        const informationDOM = document.querySelector("#section01 .about .about_list");

        informationDOM.innerHTML = companyInformationHtml;
    });
})();
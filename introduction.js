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
    // {
    //     "count": "11",
    //     "isUnit": true,
    //     "unit": "개",
    //     "content": "2022년 프로젝트 완료"
    // },
    // {
    //     "count": "+3700",
    //     "isUnit": false,
    //     "content": "회사 창립"
    // },
    // {
    //     "count": "5",
    //     "isUnit": true,
    //     "unit": "회",
    //     "content": "2022년 여행"
    // },
    // {
    //     "count": "20",
    //     "isUnit": true,
    //     "unit": "건",
    //     "content": "Flutter 프로젝트"
    // },
];

function generateInformation({text, textSize, textUnitYN, textUnit, textUnitSize, subTextYN, subText, subTextSize}){
    return `
        <li>
            <img src="https://mwidget.moberan.com/api/svg/text/info?text=${text}&textSize=${textSize}&textUnitYN=${textUnitYN}&textUnit=${textUnit}&textUnitSize=${textUnitSize}&subTextYN=${subTextYN}&subText=${subText}&subTextSize=${subTextSize}}">
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
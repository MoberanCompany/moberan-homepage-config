const datas = [
    {
        "url": "https://mwidget.moberan.com/api/widget/f5f7424d-4fce-4a74-8a5d-c650930232a8",
        "asset": "broadcast.png"
    },
    {
        "url": "https://mwidget.moberan.com/api/widget/422b2aa4-c979-4c45-8a35-2964fad083df",
        "asset": "document.png"
    },
    {
        "url": "https://mwidget.moberan.com/api/widget/9c81b828-cbb9-41eb-8fa3-9b39757e3d6e",
        "asset": "company.png"
    },
    {
        "url": "https://mwidget.moberan.com/api/widget/10a445c3-9939-4406-8dac-f73ec66459f2",
        "asset": "airplane.png"
    },
    {
        "url": "https://mwidget.moberan.com/api/widget/23b97bc9-c346-46fe-81f3-52dee99035a5",
        "asset": "idea.png"
    },
];

function generateInformation({url, text, textSize, textUnitYN, textUnit, textUnitSize, subTextYN, subText, subTextSize, asset}){

    if(url != null) {
       return `
            <li>
                <div style="display: flex; justify-content: center; align-items: center; height: 73px;">
                    <img src="${getRawAssetPath(asset)}">
                </div>
                <img src="${url}">
            </li>
        `;
    }
    else {
        text = encodeURIComponent(text);
        textUnit = encodeURIComponent(textUnit);
        subText = encodeURIComponent(subText);

        return `
            <li>
                <div style="display: flex; justify-content: center; align-items: center; height: 73px;">
                    <img src="${getRawAssetPath(asset)}">
                </div>
                <img src="https://mwidget.moberan.com/api/svg/text/info?text=${text}&textSize=${textSize}&textUnitYN=${textUnitYN}&textUnit=${textUnit}&textUnitSize=${textUnitSize}&subTextYN=${subTextYN}&subText=${subText}&subTextSize=${subTextSize}">
            </li>
        `;
    }
}

function getRawAssetPath(assetName) {
    return `https://github.com/MoberanCompany/moberan-homepage-config/blob/main/introduction/asset/info_ico/${assetName}?raw=true`
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

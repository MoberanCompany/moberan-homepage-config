const datas = [
    {
        "count": 5,
        "isUnit": true,
        "unit": "개",
        "content": "방송사 납품"
    },
    {
        "count": 5,
        "isUnit": true,
        "unit": "개",
        "content": "방송사 납품"
    },
    {
        "count": 5,
        "isUnit": true,
        "unit": "개",
        "content": "방송사 납품"
    },
    {
        "count": 5,
        "isUnit": true,
        "unit": "개",
        "content": "방송사 납품"
    },
    {
        "count": 5,
        "isUnit": true,
        "unit": "개",
        "content": "방송사 납품"
    },
];

function generateInformation({count, isUnit, unit, content}){
    return `
        <li>
            <p class="count">${count}${isUnit ? `<span><${unit}/span>`: ""}</p>
            <p class="ex_txt">${content}</p>
        </li>
    `;
} 

function generateCompanyInformationHtml(){

    const datasArr = [];

    datas.map((data)=>{
        datasArr.push(
            generateInformation(
                {
                    count: data.count,
                    isUnit: data.isUnit,
                    unit: data.unit,
                    content: data.content,
                }
            )
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
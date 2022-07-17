/**
 * 설명
 * - 프로젝트 스펙트럼 밑에 위치한 piechart 를 그려줍니다.
 * 
 * 특이사항
 * - 
 */
const pieChartData = {
    "values": [20, 10, 8, 32, 4, 6, 3, 17],
    "names": ["20%", "10%", "8%", "32%", "4%", "6%", "3%", "17%"],
    "colors": [9118463,
        5029045,
        9226459,
        5793520,
        3355443,
        14962511,
        15438919,
        15385881],
    "asDonut": true
};

async function createPieChart(){
    const res = await fetch("https://mwidget.moberan.com/api/svg/preview/pieChart", {
        method: "post",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(pieChartData)
    });
    // const resData = await res.text();
    const resData = await res.blob();
    
    return resData;
}

async function pieChartToDataURL(blobData){
    const reader = new FileReader();
    await new Promise((resolve, reject) => {
        reader.onload = resolve;
        reader.onerror = reject;
        reader.readAsDataURL(blobData);
    })

    return reader.result;
}

(function(){
    document.addEventListener("DOMContentLoaded", async ()=>{

        const pieChartContainerDOM = document.querySelector("#section02 .chart-left .pie-chart1");

        const resPieChartBlob = await createPieChart();
        const dataURL = await pieChartToDataURL(resPieChartBlob);

        const newImg = `<img src=${dataURL}/>`

        pieChartContainerDOM.innerHTML = newImg;

    })
}())
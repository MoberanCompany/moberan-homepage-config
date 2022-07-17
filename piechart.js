const data = {
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
        body: JSON.stringify(data)
    });
    const resData = await res.text();

    return resData;
}

(function(){
    document.addEventListener("DOMContentLoaded", async ()=>{

        const pieChartContainerDOM = document.querySelector("#section02 .chart-left .pie-chart1");

        const pieChartDOM = await createPieChart();

        pieChartContainerDOM.innerHTML = pieChartDOM;

    })
}())
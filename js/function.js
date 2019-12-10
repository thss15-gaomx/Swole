const timeCategory = ["6", "8", "10", "12", "14", "16", "18", "20", "22", "24"];
const cardioList = ["6", "17", "35", "21", "62", "75", "56", "97", "80", "21"];
const weightsList = ["10", "11", "62", "83", "65", "56", "47", "18", "19", "20"];
const poolList = ["8", "9", "52", "43", "54", "85", "69", "40", "21", "22"];
const basketballList = [ "7", "28", "19", "10", "22", "43", "14", "95", "37", "18", "20"];

const dataSource = {
    chart: {
      yaxisname: "% of all equipments",
      showhovereffect: "1",
      numbersuffix: "%",
      drawcrossline: "1",
      plottooltext: "<b>$dataValue</b> of youth were on $seriesName",
      theme: "fusion"
    },
    categories: [
      {
        category: timeCategory.map(x=>({label: x}))
      }
    ],
    dataset: [
      {
        seriesname: "Cardio",
        data: cardioList.map(x=>({value: x}))
      },
      {
        seriesname: "Weights",
        data: weightsList.map(x=>({value: x}))
      },
      {
        seriesname: "Swimming Pool",
        data: poolList.map(x=>({value: x}))
      },
      {
        seriesname: "Basketball Court",
        data: basketballList.map(x=>({value: x}))
      }
    ]
  };
  
  FusionCharts.ready(function() {
    var myChart = new FusionCharts({
      type: "msline",
      renderAt: "historical-chart",
      width: "100%",
      height: "400",
      dataFormat: "json",
      dataSource
    }).render();
  });
  

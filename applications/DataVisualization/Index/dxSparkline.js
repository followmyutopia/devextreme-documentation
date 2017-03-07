var silverCosts = [
    { arg: 1, val: 17 }, { arg: 2, val: 28 },
    { arg: 3, val: 34 }, { arg: 4, val: 37 },
    { arg: 5, val: 47 }, { arg: 6, val: 37 },
    { arg: 7, val: 34 }, { arg: 8, val: 40 },
    { arg: 9, val: 41 }, { arg: 10, val: 30 },
    { arg: 11, val: 34 }, { arg: 12, val: 32 }
];
$('#dxSparklineContainer').dxSparkline({
    dataSource: silverCosts,
    lineColor: '#E8C267',
    firstLastColor: '#E55253',
    type: 'steparea',
    tooltip: { color: '#A6C567' }
});
/**EVAL**/
var silverCosts = [
    { arg: 1, val: 17 }, { arg: 2, val: 28 },
    { arg: 3, val: 34 }, { arg: 4, val: 37 },
    { arg: 5, val: 47 }, { arg: 6, val: 37 },
    { arg: 7, val: 34 }, { arg: 8, val: 40 },
    { arg: 9, val: 41 }, { arg: 10, val: 30 },
    { arg: 11, val: 34 }, { arg: 12, val: 32 }
];
$(window).on("scroll", function () {
    chartInitializer.initChart("dxSparklineContainer", "dxSparkline", {
        dataSource: silverCosts,
        lineColor: '#E8C267',
        firstLastColor: '#E55253',
        type: 'steparea',
        tooltip: { color: '#A6C567' }
    });
});


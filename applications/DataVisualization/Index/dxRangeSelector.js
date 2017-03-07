var dataSource = [
    { t: new Date(2011, 11, 22), costs: 19, inc: 18 },
    { t: new Date(2011, 11, 29), costs: 27, inc: 12 },
    { t: new Date(2012, 0, 5), costs: 30, inc: 5 },
    { t: new Date(2012, 1, 9), costs: 14, inc: 25 }
];
$("#dxRangeSelectorContainer").dxRangeSelector({
    scale: {
        minorTickInterval: 'day',
        tickInterval: { days: 7 }
    },
    size: { height: 210 },
    dataSource: dataSource,
    chart: {
        commonSeriesSettings: {
            argumentField: 't', opacity: 0.4
        },
        series: [
            { valueField: 'costs', color: '#ff7700' },
            { valueField: 'inc', color: '#ffae00' }
        ]
    },
    value: [new Date(2011, 11, 25), new Date(2012, 0, 1)]
});
/**EVAL**/
var dataSource = [
    { t: new Date(2011, 11, 22), costs: 19, inc: 18 },
    { t: new Date(2011, 11, 29), costs: 27, inc: 12 },
    { t: new Date(2012, 0, 5), costs: 30, inc: 5 },
    { t: new Date(2012, 1, 9), costs: 14, inc: 25 }
];

$(window).on("scroll", function() {
    chartInitializer.initChart("dxRangeSelectorContainer", "dxRangeSelector", {
        scale: {
            minorTickInterval: 'day',
            tickInterval: { days: 7 }
        },
        size: { height: 210 },
        dataSource: dataSource,
        chart: {
            commonSeriesSettings: {
                argumentField: 't', opacity: 0.4
            },
            series: [
                { valueField: 'costs', color: '#ff7700' },
                { valueField: 'inc', color: '#ffae00' }
            ]
        },
        value: [new Date(2011, 11, 25), new Date(2012, 0, 1)]
    });
});
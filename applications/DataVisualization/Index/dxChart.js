var dataSource = [
    { season: 'Winter', val1: 10, val2: 86, val3: 48 },
    { season: 'Spring', val1: 25, val2: 38, val3: 30 },
    { season: 'Summer', val1: 73, val2: 23, val3: 48 },
    { season: 'Autumn', val1: 30, val2: 45, val3: 38 }];

$("#dxChartContainer").dxChart({
    dataSource: dataSource,
    palette: ['#ffae00', '#ff7700', '#fa6a63'],
    commonSeriesSettings: {
        argumentField: 'season',
        type: 'splinearea',
        splinearea: { opacity: 0.4 }
    },
    series: [{ valueField: 'val1', name: 'Europe' },
        { valueField: 'val2', name: 'Americas' },
        { valueField: 'val3', name: 'World', 
          type: 'line' }],
    argumentAxis: { valueMarginsEnabled: false },
    tooltip: {
        enabled: true
    }
});
/**EVAL**/
var dataSource = [
    { season: 'Winter', val1: 10, val2: 86, val3: 48 },
    { season: 'Spring', val1: 25, val2: 38, val3: 30 },
    { season: 'Summer', val1: 73, val2: 23, val3: 48 },
    { season: 'Autumn', val1: 30, val2: 45, val3: 38 }];

$(window).on("scroll", function() { 
    chartInitializer.initChart("dxChartContainer", "dxChart", {
        dataSource: dataSource,
        palette: ['#ffae00', '#ff7700', '#fa6a63'],
        commonSeriesSettings: {
            argumentField: 'season',
            type: 'splinearea',
            splinearea: { opacity: 0.4 }
        },
        series: [{ valueField: 'val1', name: 'Europe' },
            { valueField: 'val2', name: 'Americas' },
            { valueField: 'val3', name: 'World', type: 'line'}],
        argumentAxis: { valueMarginsEnabled: false },
        tooltip: {
            enabled: true
        }
    });
});
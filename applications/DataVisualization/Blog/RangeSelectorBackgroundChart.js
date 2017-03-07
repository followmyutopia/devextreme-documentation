$(function () {
    $("#rangeSelectorContainer").dxRangeSelector({
        size: {
            height: 105, width: 550
        },
        scale: {
            startValue: 0,
            endValue: 100000,
            minorTickInterval: 500,
            showMinorTicks: false,
            tickInterval: 25000,
            showMajorTicks: true
        },
        background: {
            color: '#EEF'
        },
        shutter: {
            opacity: 0.4
        },
        dataSource: [
            { t: 500, costs: 0, income: 18 },
            { t: 1000, costs: 1, income: 12 },
            { t: 5000, costs: 3, income: 5 },
            { t: 10000, costs: 10, income: 6 },
            { t: 20000, costs: 20, income: 10 },
            { t: 30000, costs: 25, income: 15 },
            { t: 40000, costs: 22, income: 15 },
            { t: 50000, costs: 15, income: 15 },
            { t: 70000, costs: 10, income: 21 },
            { t: 100000, costs: 1, income: 25 }
        ],
        chart: {
            series: [
              { argumentField: 't', valueField: 'costs', color: 'orange' }
            ],
            valueAxis: {
                min: 0
            }
        },
        sliderMarker: {
            visible: true,
            format: 'currency',
            placeholderSize: {
                width: 100
            }
        },
        value: [40000, 80000]
    });
});
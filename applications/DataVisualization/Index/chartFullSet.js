$(function() {

    var palette = ['#b4d34f', '#d3dc5a', '#f1e064', '#fad075', '#fa9a46', '#fa6b63'];

    var pointClickHandler = function () {
        var tag = this.series.name || this.tag;
        if (!tag)
            return;
        var point, series, title;

        var gauge = $("#gauge-sample").dxCircularGauge("instance");
        var pieChart = $("#pie-chart-sample").dxPieChart("instance");
        var chart = $("#stackedbar-chart-sample").dxChart("instance");
        var data = $.grep(dataSource, function (item) {
            return item.country === tag;
        })[0];

        if (!data)
            return;
        var action;

        if (pieChart) {
            series = pieChart.getAllSeries();
            point = series.getPointsByArg(tag)[0];
            if (point) {
                if (point.fullState & 2) {
                    action = 'clearSelection';
                } else {
                    action = 'select';
                }

                point[action]();
            }
        }

        if (gauge) {
            if (action === 'clearSelection') {
                title = "Advertisment Efficiency"
                gauge.value(60);
            } else {
                title = "Advertisment Efficiency (" + tag + ")";
                gauge.value(data.efficiency);
            }
            $("#gauge-sample-title").text(title);
        }


        if (chart) {
            series = chart.getSeriesByName(tag);
            if (series && action) {
                series[action]();
            }
        }

    };

    // Pie
    var dataSource = [
       { country: 'USA', count: 760, efficiency: 81 },
       { country: 'Canada', count: 459, efficiency: 75 },
       { country: 'Japan', count: 601, efficiency: 37 },
       { country: 'Germany', count: 381, efficiency: 64 },
       { country: 'Australia', count: 757, efficiency: 48 },
       { country: 'Others', count: 202, efficiency: 55 }
    ];

    var pieSettings = {
        dataSource: dataSource,
        legend: {
            visible: false
        },
        palette: palette,
        series: [{ argumentField: 'country', valueField: 'count', tagField: 'country', border: { color: '#ffffff', visible: true } }],
        tooltip: {
            enabled: true,
            format: {
                percentPrecision: 2
            },
            customizeTooltip: function () {
                return {
                    text: this.argumentText + ': ' + this.percentText + '<br/>Visits: ' + this.valueText
                };
            }
        },
        onPointClick: pointClickHandler
    };
    
    var gaugeSettings = {
        geometry: {
            startAngle: 180,
            endAngle: 90,
            radius: 250
        },
        scale: {
            customTicks: [0, 25, 50, 100]
        },
        rangeContainer: {
            backgroundColor: 'none',
            ranges: [
				{
				    startValue: 0,
				    endValue: 25,
				    color: '#f1e064'
				},
				{
				    startValue: 25,
				    endValue: 50,
				    color: '#d3dc5a'
				},
				{
				    startValue: 50,
				    endValue: 100,
				    color: '#b4d34f'
				}
            ]
        },
        value: 60
    };

    // Spline
    var dataSourceSpline = [
        { "hour": "12:00 AM", "y1": 0, "y2": 0, "y3": 0, "y4": 0, "y5": 0, "y6": 0 },
        { "hour": "4:00 AM", "y1": 106, "y2": 57, "y4": 82, "y5": 67, "y6": 63 },
        { "hour": "8:00 AM", "y1": 181, "y2": 111, "y4": 154, "y5": 145, "y6": 149 },
        { "hour": "12:00 PM", "y1": 271, "y2": 169, "y4": 243, "y5": 173, "y6": 217 },
        { "hour": "4:00 PM", "y1": 345, "y2": 232, "y4": 320, "y5": 219, "y6": 317 },
        { "hour": "8:00 PM", "y1": 457, "y2": 302, "y4": 418, "y5": 284, "y6": 396 }];

    var splineSettings = {
        palette: palette,
        commonAxisSettings: {
            valueMarginsEnabled: false,
            grid: {
                visible: true
                //,color: '#ECECEC'
            }
        },
        size: {
            width: 400
        },
        margin: {
            top: 16
        },
        commonSeriesSettings: {
            argumentField: 'hour',
            type: 'spline',
            point: { visible: false }
        },
        commonPaneSettings: {
            border: {
                visible: true
                //,color: '#ECECEC'
            }
        },
        argumentAxis: {
            label: {
                format: 'hour'
            },
            tickInterval: {
                hours: 4
            }
        },
        valueAxis: {
            min: 0,
            max: 500
        },
        legend: { visible: false },
        dataSource: dataSourceSpline,
        series: [{
            valueField: 'y1'
        }, {
            valueField: 'y2'
        }, {
            valueField: 'y3'
        }, {
            valueField: 'y4'
        }, {
            valueField: 'y5'
        }, {
            valueField: 'y6'
        }]
    };

    // Stackedbar
    var stackedbarDataSource = [
        { "day": "11/4", "y1": 21, "y2": 19, "y3": 17, "y4": 9, "y5": 22, "y6": 12 },
        { "day": "12/4", "y1": 20, "y2": 16, "y3": 9, "y4": 20, "y5": 15, "y6": 20 },
        { "day": "13/4", "y1": 12, "y2": 16, "y3": 8, "y4": 27, "y5": 14, "y6": 23 },
        { "day": "14/4", "y1": 12, "y2": 9, "y3": 22, "y4": 22, "y5": 13, "y6": 22 },
        { "day": "15/4", "y1": 10, "y2": 18, "y3": 20, "y4": 20, "y5": 10, "y6": 22 },
        { "day": "16/4", "y1": 9, "y2": 24, "y3": 22, "y4": 23, "y5": 14, "y6": 8 }];

    var stackedbarSettings = {
        palette: palette,
        commonSeriesSettings: {
            argumentField: 'day',
            type: 'stackedBar',
            point: {
                hoverMode: 'allSeriesPoints'
            }
        },
        valueAxis: {
            inverted: true,
            label: {
                customizeText: function() {
                    return 100 - this.value;
                }
            }
        },
        argumentAxis: {
            min: 0,
            max: 100,
            label: {
                indentFromAxis: -16
            }
        },
        legend: {
            margin: 30,
            rowItemSpacing: 10,
            markerSize: 20
        },
        margin: {
            top: 16,
            right: 41
        },
        dataSource: stackedbarDataSource,
        onPointClick: pointClickHandler,
        series: [{
            valueField: 'y1',
            name: 'USA'
        }, {
            valueField: 'y2',
            name: 'Canada'
        }, {
            valueField: 'y3',
            name: 'Japan'
        }, {
            valueField: 'y4',
            name: 'Germany'
        }, {
            valueField: 'y5',
            name: 'Australia'
        }, {
            valueField: 'y6',
            name: 'Others'
        }]
    };

    $(window).on("scroll", function() {
        chartInitializer.initChart("pie-chart-sample", "dxPieChart", pieSettings);
        chartInitializer.initChart("gauge-sample", "dxCircularGauge", gaugeSettings);
        chartInitializer.initChart("spline-chart-sample", "dxChart", splineSettings);
        chartInitializer.initChart("stackedbar-chart-sample", "dxChart", stackedbarSettings);
    });

});
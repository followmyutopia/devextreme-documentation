var dataSource = [
{ year: 1950, value: 227 },
{ year: 1960, value: 128 },
{ year: 1970, value: 365 },
{ year: 1980, value: 311 },
{ year: 1990, value: 633 },
{ year: 2000, value: 523 },
{ year: 2010, value: 1016 }
];
$(document).ready(function() {
    $("#chartContainer").dxChart({
        dataSource: dataSource,
        series: {
            argumentField: "year",
            valueField: "value",
            type: "spline",
            color: "#f17f21"
        },
        animation: {
            //enabled: false
            duration: 1500
        },
        argumentAxis: {
            grid: {
                visible: true
            }
        },
        tooltip: {
            enabled: true
        },
        title: "Sales Growth"
    });
});
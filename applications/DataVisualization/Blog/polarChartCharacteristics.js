$(function () {
    $("#chartContainer").dxPolarChart({
        dataSource: [{
            arg: "Experience",
            val1: 5,
            val2: 7
        }, {
            arg: "Punctuality",
            val1: 7,
            val2: 2
        }, {
            arg: "Discipline",
            val1: 5,
            val2: 9
        }, {
            arg: "Creativity",
            val1: 9,
            val2: 4
        }],
        palette: "bright",
        commonSeriesSettings: {
            type: "area",
            border: {
                visible: true
            }
        },
        argumentAxis: {
            label: {
                indentFromAxis: 20
            }
        },
        valueAxis: {
            categories: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        },
        series: [{
            name: "Dave",
            valueField: "val1"
        }, {
            name: "Nick",
            valueField: "val2"
        }]
    });
});
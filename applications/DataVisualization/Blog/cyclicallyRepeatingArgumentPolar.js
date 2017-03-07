$(function () {
    var dataSource2 = [
       {
           arg: new Date(2011, 0, 1),
           val: 100
       },
       {
           arg: new Date(2011, 1, 1),
           val: 130
       },
       {
           arg: new Date(2011, 2, 1),
           val: 120
       }, {
           arg: new Date(2011, 3, 1),
           val: 200
       }, {
           arg: new Date(2011, 4, 1),
           val: 250
       }, {
           arg: new Date(2011, 5, 1),
           val: 220
       }, {
           arg: new Date(2011, 6, 1),
           val: 230
       }, {
           arg: new Date(2011, 7, 1),
           val: 245
       }, {
           arg: new Date(2011, 8, 1),
           val: 280
       }, {
           arg: new Date(2011, 9, 1),
           val: 290
       }, {
           arg: new Date(2011, 10, 1),
           val: 300
       }, {
           arg: new Date(2011, 11, 1),
           val: 400
       }, {
           arg: new Date(2012, 0, 1),
           val: 390
       }, {
           arg: new Date(2012, 1, 1),
           val: 420
       }, {
           arg: new Date(2012, 2, 1),
           val: 440
       }, {
           arg: new Date(2012, 3, 1),
           val: 550
       }, {
           arg: new Date(2012, 4, 1),
           val: 600
       }, {
           arg: new Date(2012, 5, 1),
           val: 610
       }, {
           arg: new Date(2012, 6, 1),
           val: 620
       }, {
           arg: new Date(2012, 7, 1),
           val: 630
       }, {
           arg: new Date(2012, 8, 1),
           val: 640
       }, {
           arg: new Date(2012, 9, 1),
           val: 650
       }, {
           arg: new Date(2012, 10, 1),
           val: 700
       }, {
           arg: new Date(2012, 11, 1),
           val: 750
       }, {
           arg: new Date(2013, 0, 1),
           val: 740
       }, {
           arg: new Date(2013, 1, 1),
           val: 750
       }, {
           arg: new Date(2013, 2, 1),
           val: 755
       }, {
           arg: new Date(2013, 3, 1),
           val: 760
       }, {
           arg: new Date(2013, 4, 1),
           val: 800
       }, {
           arg: new Date(2013, 5, 1),
           val: 800
       }, {
           arg: new Date(2013, 6, 1),
           val: 810
       }, {
           arg: new Date(2013, 7, 1),
           val: 820
       }, {
           arg: new Date(2013, 8, 1),
           val: 840
       }, {
           arg: new Date(2013, 9, 1),
           val: 845
       }, {
           arg: new Date(2013, 10, 1),
           val: 810
       }, {
           arg: new Date(2013, 11, 1),
           val: 890
       },
    ];

    var index = 0;
    var dataSource3 = $.map(dataSource2, function (item) {
        index++;
        return { arg: index, val: item.val }
    });


    $("#chartContainer").dxPolarChart({
        dataSource: dataSource3,
        commonSeriesSettings: {
            type: "line",
            closed: false
        },
        series: [{}, {}, {}],
        argumentAxis: {
            period: 12,
            label: {
                customizeText: function () {
                    switch (this.valueText) {
                        case "1": {
                            return "January"
                        }
                        case "2": {
                            return "February"
                        }
                        case "3": {
                            return "March"
                        }
                        case "4": {
                            return "April"
                        }
                        case "5": {
                            return "May"
                        }
                        case "6": {
                            return "June"
                        }
                        case "7": {
                            return "July"
                        }
                        case "8": {
                            return "August"
                        }
                        case "9": {
                            return "September"
                        }
                        case "10": {
                            return "October"
                        }
                        case "11": {
                            return "November"
                        }
                        case "12": {
                            return "December"
                        }
                        default: {
                            return this.valueText
                        }
                    }
                }
            },
            grid: {
                visible: true
            },
            minorGrid: {
                visible: true
            }
        },
        valueAxis: {
            minorGrid: {
                visible: true
            }
        },
        palette: "bright",
        legend: {
            visible: false
        }
    });
});
$(function () {
    var dataSource4 = [
        { day: '1', temperature: 57 }, { day: '2', temperature: 58 },
        { day: '3', temperature: 57 }, { day: '4', temperature: 59 },
        { day: '5', temperature: 63 }, { day: '6', temperature: 63 },
        { day: '7', temperature: 63 }, { day: '8', temperature: 64 },
        { day: '9', temperature: 64 }, { day: '10', temperature: 64 },
        { day: '11', temperature: 69 }, { day: '12', temperature: 72 },
        { day: '13', temperature: 75 }, { day: '14', temperature: 78 },
        { day: '15', temperature: 76 }, { day: '16', temperature: 70 },
        { day: '17', temperature: 65 }, { day: '18', temperature: 65 },
        { day: '19', temperature: 68 }, { day: '20', temperature: 70 },
        { day: '21', temperature: 73 }, { day: '22', temperature: 73 },
        { day: '23', temperature: 75 }, { day: '24', temperature: 78 },
        { day: '25', temperature: 76 }, { day: '26', temperature: 76 },
        { day: '27', temperature: 80 }, { day: '28', temperature: 76 },
        { day: '29', temperature: 75 }, { day: '30', temperature: 75 },
        { day: '31', temperature: 74 }
    ];

    $("#chartContainer").dxChart({
        dataSource: dataSource4,
        commonSeriesSettings: {
            argumentField: "day",
            valueField: 'temperature',
            type: "bar"
        },

        customizePoint: function () {
            if (this.value > 77) {
                return { color: '#ff4500', hoverStyle: { color: '#ff4500' } };
            } else if (this.value < 58) {
                return { color: '#00ced1', hoverStyle: { color: '#00ced1' } };
            }
        },
        customizeLabel: function () {
            if (this.value > 77) {
                return {
                    visible: true,
                    backgroundColor: '#ff4500',
                    customizeText: function () {
                        return this.valueText + '&#176F'
                    }
                }
            }
        },
        valueAxis: {
            min: 40,
            maxValueMargin: 0.1,
            label: {
                customizeText: function () {
                    return this.valueText + '&#176F'
                }
            },
            constantLines: [{
                label: {
                    text: ''
                },
                width: 2,
                value: 58,
                color: '#00ced1',
                dashStyle: 'dash'
            }, {
                label: {
                    text: ''
                },
                width: 2,
                value: 77,
                color: '#ff4500',
                dashStyle: 'dash'
            }]
        },
        series: [{ color: "#f8ca00" }],
        title: {
            text: "Daily Temperature in May"
        },
        legend: {
            visible: false
        }
    });
});
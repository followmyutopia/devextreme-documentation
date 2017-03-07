pieChartOptions = {
                    series: {
                argumentField: 'category',
                valueField: 'value',
            label: {
                visible: true,
                connector: {
                    visible: true
                }
            }
        },
        tooltip: {
            enabled: true,
            format: { percentPrecision: 2 },
            customizeText: function (value) {
                return value.percentText;
            }
        },
        title: {
            text: 'Continental Population by 2010 (in millions)'
        },
        legend: {
            horizontalAlignment: 'center',
            verticalAlignment: 'bottom'
        },
        dataSource: [
            {category: 'Oceania', value: 35},
            {category: 'Africa', value: 1016},
            {category: 'Americas', value: 936},
            {category: 'Asia', value: 4149},
            {category: 'Europe', value: 728}
        ]
    }
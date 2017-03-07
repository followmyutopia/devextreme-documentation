var chartGallery = [
    function($container) {
        var dataSource = [
             { year: 2000, value1: 50, value2: 150, value3: 110 },
             { year: 2001, value1: 140, value2: 110, value3: 205 },
             { year: 2002, value1: 130, value2: 180, value3: 205 },
             { year: 2003, value1: 90, value2: 180, value3: 270 },
             { year: 2004, value1: 110, value2: 220, value3: 270 },
             { year: 2005, value1: 210, value2: 310, value3: 345 },
             { year: 2006, value1: 125, value2: 160, value3: 310 },
             { year: 2007, value1: 190, value2: 140, value3: 225 },
             { year: 2008, value1: 155, value2: 205, value3: 270 },
             { year: 2009, value1: 170, value2: 190, value3: 240 }
        ];
        $container.dxChart({
            dataSource: dataSource,
            commonSeriesSettings: {
                argumentField: 'year',
                type: 'area'
            },
            commonAxisSettings: {
                valueMarginsEnabled: false,
                label: {
                    font: { color: '#f17f21' }
                }
            },
            legend: {
                visible: false
            },
            series: [
                { valueField: 'value3', color: '#b0ec46', opacity: 0.6 },
                { valueField: 'value1', color: '#ff6600', opacity: 0.5 },
                { valueField: 'value2', color: '#ff6600', opacity: 0.5 }
            ]
        });
    }
];
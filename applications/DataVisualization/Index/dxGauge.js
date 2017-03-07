$("#dxGaugeContainer").dxCircularGauge({
    rangeContainer: {
        backgroundColor: 'none',
        ranges: [{
            startValue: 0,
            endValue: 30,
            color: '#A6C567'
        }, {
            startValue: 30,
            endValue: 70,
            color: '#FCBB69'
        }, {
            startValue: 70,
            endValue: 100,
            color: '#E19094'
        }]
    },
    value: 24,
    subvalues: [27]
});
/**EVAL**/
$(window).on("scroll", function() {
    chartInitializer.initChart("dxGaugeContainer", "dxCircularGauge", {
        rangeContainer: {
            backgroundColor: 'none',
            ranges: [{
                startValue: 0,
                endValue: 30,
                color: '#A6C567'
            }, {
                startValue: 30,
                endValue: 70,
                color: '#FCBB69'
            }, {
                startValue: 70,
                endValue: 100,
                color: '#E19094'
            }]
        },
        value: 24,
        subvalues: [27]
    });
});
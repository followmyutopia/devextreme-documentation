$(function () {
    $("#barGaugeContainer").dxBarGauge({
<!--//highlight-->
        startValue: -50,
        endValue: 50,
        values: [9, 2, 3, -9, 27]
<!--//highlight-->
    });
});

$("#dxBulletContainer").dxBullet({
    startScaleValue: 0, endScaleValue: 100,
    value: 84, target: 68,
    color: '#FCBB69', targetColor: '#FF7700',
    tooltip: { color: '#A6C567' }
});
/**EVAL**/
$(window).on("scroll", function () {
    chartInitializer.initChart("dxBulletContainer", "dxBullet", {
        startScaleValue: 0,
        endScaleValue: 100,
        target: 68,
        value: 84,
        color: '#FCBB69',
        targetColor: '#FF7700',
        tooltip: { color: '#A6C567' }
    });
});

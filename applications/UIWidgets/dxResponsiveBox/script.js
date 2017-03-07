setLayout = function (layout) {
    currentLayout = layout;
    $(".box").dxResponsiveBox("instance").repaint();
};
currentLayout = "xs";
boxOptions = {
    singleColumnScreen: "xs",
    rows: [
        { ratio: 1 },
        { ratio: 2 },
        { ratio: 2, screen: 'sm md' },
        { ratio: 1 }
    ],
    cols: [
        { ratio: 1 },
        { ratio: 2, screen: 'lg' },
        { ratio: 1 }
    ],
    screenByWidth: function (width) {
        return currentLayout;
    }
}
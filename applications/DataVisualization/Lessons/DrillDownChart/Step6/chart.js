var categoriesDataSource = new DevExpress.data.DataSource({
    store: {
        type: 'odata',
        url: 'https://services.odata.org/V4/Northwind/Northwind.svc/Categories'
    },
    map: function (item) {
        item.ProductCount = item.Products.length;
        return item;
    },
    expand: "Products"
});

//<!--//highlight-->
var softPalette = DevExpress.viz.getPalette('Soft');
var oceanPalette = DevExpress.viz.getPalette('Ocean');
//<!--//highlight-->

var topLevelCfg = {
    dataSource: categoriesDataSource,
    series: {
        argumentField: 'CategoryName',
        type: 'bar',
        valueField: 'ProductCount',
        tagField: 'Products'
    },
    pathModified: true,
    onPointClick: function (e) {
        e.component.option(drillDownLevelCfg(e));
    },
    legend: { visible: false },
    tooltip: {
        enabled: true,
        customizeTooltip: function (pointInfo) {
            return { text: pointInfo.argument + ' - ' + pointInfo.value }
        }
    },
//<!--//highlight-->
    argumentAxis: {
        label: { overlappingBehavior: 'stagger' }
    },
    valueAxis: { title: 'Product Varieties' },
    title: 'Product Categories',
    customizePoint: function (pointInfo) {
        return { color: oceanPalette.simpleSet[pointInfo.index % 7] }
    }
//<!--//highlight-->
};

var drillDownLevelCfg = function (e) {
    return {
        dataSource: e.target.tag,
        series: {
            argumentField: 'ProductName',
            valueField: 'UnitsInStock'
        },
        onPointClick: function () { },
        legend: {
            visible: true,
            markerSize: 0,
            position: 'inside',
            horizontalAlignment: 'left',
            hoverMode: 'none',
            customizeText: function () {
                return "&#8592; back"
            }
        },
        onLegendClick: function (e) {
            e.component.option(topLevelCfg);
        },
//<!--//highlight-->
        valueAxis: { title: 'Units in Stock' },
        title: e.target.argument,
        customizePoint: function (pointInfo) {
            return { color: softPalette.simpleSet[pointInfo.index % 7] }
        }
//<!--//highlight-->
    }
};

$(function () {
     $("#chartContainer").dxChart(topLevelCfg);
});

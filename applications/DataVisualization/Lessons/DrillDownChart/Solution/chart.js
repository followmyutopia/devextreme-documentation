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

var softPalette = DevExpress.viz.getPalette('Soft');
var oceanPalette = DevExpress.viz.getPalette('Ocean');

var topLevelCfg = {
    dataSource: categoriesDataSource,
    series: {
        argumentField: 'CategoryName',
        type: 'bar',
        valueField: 'ProductCount',
        tagField: 'Products'
    },
    argumentAxis: {
        label: { overlappingBehavior: 'stagger' }
    },
    valueAxis: { title: 'Product Varieties' },
    title: 'Product Categories',
    tooltip: {
        enabled: true, 
        customizeTooltip: function (pointInfo) {
            return { text: pointInfo.argument + ' - ' + pointInfo.value }
        }
    },
    customizePoint: function (pointInfo) {
        return { color: oceanPalette.simpleSet[pointInfo.index % 7] }
    },
    legend: { visible: false },
    onPointClick: function (e) {
        e.component.option(drillDownLevelCfg(e))
    },
    pathModified: true
};

var drillDownLevelCfg = function (e) {
    return {
        dataSource: e.target.tag,
        series: {
            argumentField: 'ProductName',
            valueField: 'UnitsInStock'
        },
        valueAxis: { title: 'Units in Stock' },
        title: e.target.argument,
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
        customizePoint: function (pointInfo) {
            return { color: softPalette.simpleSet[pointInfo.index % 7] }
        },
        onLegendClick: function (e) { 
            e.component.option(topLevelCfg);
        },
        onPointClick: function () { }
    }
};

$(function () {
     $("#chartContainer").dxChart(topLevelCfg);
});

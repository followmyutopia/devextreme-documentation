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
//<!--//highlight-->
    tooltip: {
        enabled: true,
        customizeTooltip: function (pointInfo) {
            return { text: pointInfo.argument + ' - ' + pointInfo.value }
        }
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
        }
    }
};

$(function () {
     $("#chartContainer").dxChart(topLevelCfg);
});

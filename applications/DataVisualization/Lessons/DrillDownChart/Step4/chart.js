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
//<!--//highlight-->
    legend: { visible: false }
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
//<!--//highlight-->
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
//<!--//highlight-->
    }
};

$(function () {
     $("#chartContainer").dxChart(topLevelCfg);
});

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
//<!--//highlight-->
    dataSource: categoriesDataSource,
    series: {
        argumentField: 'CategoryName',
        type: 'bar',
        valueField: 'ProductCount'
    },
//<!--//highlight-->
    pathModified: true
};

$(function () {
     $("#chartContainer").dxChart(topLevelCfg);
});

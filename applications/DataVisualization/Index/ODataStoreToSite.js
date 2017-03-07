var data = new DevExpress.data.ODataContext({
    url: "https://sampleservices.devexpress.com/Northwind.svc",
    errorHandler: function (error) {
        alert(error.message);
    },
    entities: {
        Products: { key: "ProductID" }
    }
});
$("#dxChart").dxChart({            
    dataSource: data.Products.toDataSource({ }),
    series: {
        argumentField: 'ProductName',
        valueField: 'UnitPrice', type: 'bar'
    },
    argumentAxis: {
        label: {
            overlappingBehavior: 'stagger'
        }
    },
    legend: { visible: false }
});

	


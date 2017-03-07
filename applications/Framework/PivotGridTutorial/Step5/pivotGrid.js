$(function () {
    $('#pivotGridContainer').dxPivotGrid({
        dataSource: {
            store: orders, 
            fields: [{
                area: 'column',
                dataField: "OrderDate",
                groupInterval: "year",
                dataType: "date",
                displayFolder: 'Date',
            }, {
                area: 'column',
                dataField: "OrderDate",
                groupInterval: "quarter",
                dataType: "date",
                displayFolder: 'Date'
            }, {
                area: 'column',
                dataField: "OrderDate",
                groupInterval: "month",
                dataType: "date",
                displayFolder: 'Date'
            },
            {
                area: 'row',
                dataField: "ShipCountry",
                dataType: "string",
                displayFolder: 'Shipped To'
            }, {
                area: 'row',
                dataField: "ShipCity",
                dataType: "string",
                displayFolder: 'Shipped To'
            }, {
                area: 'row',
                dataField: "ShipName",
                dataType: "string",
            },
            //<!--//highlight-->
            {
                area: 'data',
                summaryType: 'count',
                caption: 'Count',
                displayFolder: 'Measures'
            }, {
                area: 'data',
                dataField: 'Freight',
                dataType: 'number',
                summaryType: 'avg',
                caption: 'Avg Freight',
                format: {
                    type: 'fixedPoint',
                    precision: 2
                },
                displayFolder: 'Measures'
            }],
            //<!--//highlight-->
            retrieveFields: false
        }
    });
});

$(function() {
    $('#pivotGridContainer').dxPivotGrid({
        dataSource: {
            store: orders,
            //<!--//highlight-->     
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
            }],
            retrieveFields: false
            //<!--//highlight-->
        }
    });
});

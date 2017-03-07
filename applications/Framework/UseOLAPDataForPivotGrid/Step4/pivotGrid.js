$(function() {
    $('#pivotGridContainer').dxPivotGrid({
        dataSource: {
            store: {
                type: 'xmla',
                url: "https://demos.devexpress.com/Services/OLAP/msmdpump.dll",
                catalog: "Adventure Works DW Standard Edition",
                cube: "Adventure Works"
            },
            //<!--//highlight-->
            fields: [
                { dataField: "[Product].[Category]", area: "row" },
                { dataField: "[Product].[Subcategory]", area: "row" },
                { dataField: "[Product].[Product]", area: "row" },
                { dataField: "[Date].[Calendar]", area: "column" }
            ]
            //<!--//highlight-->
        }
    });
});

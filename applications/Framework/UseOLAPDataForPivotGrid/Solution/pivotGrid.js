$(function () {
    $('#pivotGridContainer').dxPivotGrid({
        dataSource: {
            store: {
                //<!--//highlight-->
                type: 'xmla',
                url: "https://demos.devexpress.com/Services/OLAP/msmdpump.dll",
                catalog: "Adventure Works DW Standard Edition",
                cube: "Adventure Works"
                //<!--//highlight-->
            },
            fields: [
                { dataField: "[Product].[Category]", area: "row" },
                { dataField: "[Product].[Subcategory]", area: "row" },
                { dataField: "[Product].[Product]", area: "row" },
                { dataField: "[Date].[Calendar]", area: "column" },
                { dataField: "[Measures].[Order Count]", area: "data" },
                { dataField: "[Measures].[Internet Order Count]", area: "data" }
            ]
        },
        allowExpandAll: true,
        allowFiltering: true,
        allowSorting: true,
        allowSortingBySummary: true
    });
});

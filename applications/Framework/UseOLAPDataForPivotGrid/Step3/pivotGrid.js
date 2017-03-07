$(function() {
    $('#pivotGridContainer').dxPivotGrid({
        //<!--//highlight-->
        dataSource: {
            store: {
                type: 'xmla',
                url: "https://demos.devexpress.com/Services/OLAP/msmdpump.dll",
                catalog: "Adventure Works DW Standard Edition",
                cube: "Adventure Works"
            }
        }
        //<!--//highlight-->
    });
});

$(function() {
    $('#pivotGridContainer').dxPivotGrid({
        //<!--//highlight-->
        dataSource: {
            store: orders
        }
        //<!--//highlight-->
    });
});

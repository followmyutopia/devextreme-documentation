$(function () {
    $('#mapContainer').dxVectorMap({
<!--//highlight-->
        layers: [{
            type: 'area',
            dataSource: DevExpress.viz.map.sources.usa
        }]
<!--//highlight-->
    });
});

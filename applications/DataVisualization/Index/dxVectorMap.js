var markers = [{
    coordinates: [-0.1262, 51.5002],
    attributes: {
        text: 'London'
    }
}, {
    coordinates: [139.6823, 35.6785],
    attributes: {
        text: 'Tokyo'
    }
}, {
    coordinates: [-77.0241, 38.8921],
    attributes: {
        text: 'Washington'
    }
}];
var i = 0;
$('#dxVectorMapContainer').dxVectorMap({
    layers: [{
        type: 'area',
        data: '/Content/data/vectorMap-sources/world.txt',
        palette: 'Harmony Light',
        paletteSize: 5,
        customize: function () {
            return { paletteIndex: i++ % 5 };
        }
    }, {
        type: 'marker',
        data: markers
    }]
});
/**EVAL**/
var markers = [{
    coordinates: [-0.1262, 51.5002],
    attributes: {
        text: 'London'
    }
}, {
    coordinates: [139.6823, 35.6785],
    attributes: {
        text: 'Tokyo'
    }
}, {
    coordinates: [-77.0241, 38.8921],
    attributes: {
        text: 'Washington'
    }
}];
var i = 0;
$(window).on("scroll", function () {
    chartInitializer.initChart("dxVectorMapContainer", "dxVectorMap", {
        layers: [{
            type: 'area',
            data: '/Content/data/vectorMap-sources/world.txt',
            palette: 'Harmony Light',
            paletteSize: 5,
            customize: function () {
                return { paletteIndex: i++ % 5 };
            }
        }, {
            type: 'marker',
            data: markers
        }]
    });
});

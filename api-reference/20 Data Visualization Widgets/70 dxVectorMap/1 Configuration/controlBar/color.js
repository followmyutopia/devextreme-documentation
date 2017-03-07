﻿var i = 0;

$(function () {
    $('#mapContainer').dxVectorMap({
        layers: [{
            type: 'area',
            dataSource: '/Content/data/vectorMap-sources/world.txt',
            palette: 'Violet',
            paletteSize: 10,
            customize: function () {
                return { paletteIndex: i++ % 10 };
            }
        }],
        controlBar: {
            color: 'mistyrose',
            opacity: 1
        }
    });
});
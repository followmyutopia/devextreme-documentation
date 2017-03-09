The size of all tiles in the widget is determined by the [baseItemHeight](/Documentation/ApiReference/UI_Widgets/dxTileView/Configuration/#baseItemHeight) and [baseItemWidth](/Documentation/ApiReference/UI_Widgets/dxTileView/Configuration/#baseItemWidth) options. If you need to set the size of a specific tile, use the [heightRatio](/Documentation/ApiReference/UI_Widgets/dxTileView/Default_Item_Template/#heightRatio) and [widthRatio](/Documentation/ApiReference/UI_Widgets/dxTileView/Default_Item_Template/#widthRatio) options of this tile. In this case, the size will be calculated according to the following formulas.

<span style="font-size:13px">height = baseItemHeight * heightRatio<br />
width = baseItemWidth * widthRatio</span>

For example, the following code makes the *"Massachusetts"* tile twice bigger than the other tiles.

    <!--JavaScript-->var tileViewData = [
        { text: "Maine", capital: "Augusta" },
        { text: "Maryland", capital: "Annapolis" },
        { text: "Massachusetts", capital: "Boston", height: 2, widthRatio: 2 }
        // . . .
    ];

    $(function() {
        $("#tileViewContainer").dxTileView({
            dataSource: tileViewData,
            baseItemHeight: 130,
            baseItemWidth: 180
        });
    });

#####See Also#####
- [TileView - Customize Tile Appearance](/Documentation/Guide/Widgets/TileView/Customize_Tile_Appearance)
- [TileView Demos](http://js.devexpress.com/Demos/WidgetsGallery/#demo/navigation-tile_view-overview)
- [TileView API Reference](/Documentation/ApiReference/UI_Widgets/dxTileView/)

[tags]tile view, tileView, tile size, customize
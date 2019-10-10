The size of all tiles in the widget is determined by the [baseItemHeight](/api-reference/10%20UI%20Widgets/dxTileView/1%20Configuration/baseItemHeight.md '/Documentation/ApiReference/UI_Widgets/dxTileView/Configuration/#baseItemHeight') and [baseItemWidth](/api-reference/10%20UI%20Widgets/dxTileView/1%20Configuration/baseItemWidth.md '/Documentation/ApiReference/UI_Widgets/dxTileView/Configuration/#baseItemWidth') options. If you need to set the size of a specific tile, use the [heightRatio](/api-reference/10%20UI%20Widgets/dxTileView/5%20Default%20Item%20Template/heightRatio.md '/Documentation/ApiReference/UI_Widgets/dxTileView/Default_Item_Template/#heightRatio') and [widthRatio](/api-reference/10%20UI%20Widgets/dxTileView/5%20Default%20Item%20Template/widthRatio.md '/Documentation/ApiReference/UI_Widgets/dxTileView/Default_Item_Template/#widthRatio') options of this tile. In this case, the size will be calculated according to the following formulas.

<span style="font-size:13px">height = baseItemHeight * heightRatio<br />
width = baseItemWidth * widthRatio</span>

For example, the following code makes the *"Massachusetts"* tile twice bigger than the other tiles.

---
#####jQuery

    <!--JavaScript-->var tileViewData = [
        { text: "Maine", capital: "Augusta" },
        { text: "Maryland", capital: "Annapolis" },
        { text: "Massachusetts", capital: "Boston", height: 2, widthRatio: 2 }
        // ...
    ];

    $(function() {
        $("#tileViewContainer").dxTileView({
            dataSource: tileViewData,
            baseItemHeight: 130,
            baseItemWidth: 180
        });
    });

##### Angular

    <!--HTML-->
    <dx-tile-view 
        [dataSource]="tileViewData"
        [baseItemHeight]="130"
        [baseItemWidth]="180">
    </dx-tile-view>

    <!--TypeScript-->
    import { DxTileViewModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        tileViewData = [
            { text: "Maine", capital: "Augusta" },
            { text: "Maryland", capital: "Annapolis" },
            { text: "Massachusetts", capital: "Boston", height: 2, widthRatio: 2 }
            // ...
        ];
    }
    @NgModule({
        imports: [
            // ...
            DxTileViewModule
        ],
        // ...
    })

---

#####See Also#####
- [TileView - Customize Tile Appearance](/concepts/05%20Widgets/TileView/05%20Customize%20Tile%20Appearance.md '/Documentation/Guide/Widgets/TileView/Customize_Tile_Appearance')
- [TileView Demos](/Demos/WidgetsGallery/#demo/navigation-tile_view-overview)
- [TileView API Reference](/api-reference/10%20UI%20Widgets/dxTileView/dxTileView.md '/Documentation/ApiReference/UI_Widgets/dxTileView/')

[tags]tile view, tileView, tile size, customize
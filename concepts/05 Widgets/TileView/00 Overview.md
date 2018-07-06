The **TileView** widget contains a collection of tiles. Tiles can store much more information than ordinary buttons, that is why they are very popular in apps designed for touch devices.

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/#demo/actions_and_lists-tileview-overview"
}

The following code adds a primitive **TileView** to your page.

---
#####jQuery

    <!--HTML--><div id="tileViewContainer"></div>

    <!--JavaScript-->$(function() {
        $("#tileViewContainer").dxTileView({
            dataSource: [
                { text: "Alabama" },
                { text: "Alaska" },
                { text: "Arizona" },
                // ...
            ]
        });
    });

##### Angular

    <!--HTML-->
    <dx-tile-view 
        [dataSource]="tileViewData">
    </dx-tile-view>

    <!--TypeScript-->
    import { DxTileViewModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        tileViewData = [
            { text: "Alabama" },
            { text: "Alaska" },
            { text: "Arizona" },
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

Note that all data source items in the code above follow the [Default Item Template](/Documentation/ApiReference/UI_Widgets/dxTileView/Default_Item_Template/) pattern. This provides a default tile appearance, which can be customized later. 

By default, the widget is oriented horizontally, but you can orient it vertically using the [direction](/Documentation/ApiReference/UI_Widgets/dxTileView/Configuration/#direction) option. 

---
#####jQuery

    <!--JavaScript-->$(function() {
        $("#tileViewContainer").dxTileView({
            // ...
            direction: "vertical"
        });
    });

##### Angular

    <!--HTML-->
    <dx-tile-view ...
        direction="vertical">
    </dx-tile-view>

    <!--TypeScript-->
    import { DxTileViewModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxTileViewModule
        ],
        // ...
    })

---

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/Tile_View/Directions/jQuery/Light/"
}

#####See Also#####
- **Widget Basics**: [jQuery](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/) | [Angular](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/) | [AngularJS](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/) | [Knockout](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/)
- [TileView - Specify the Size of Tiles](/Documentation/Guide/Widgets/TileView/Specify_the_Size_of_Tiles)
- [TileView - Customize Tile Appearance](/Documentation/Guide/Widgets/TileView/Customize_Tile_Appearance)
- [TileView API Reference](/Documentation/ApiReference/UI_Widgets/dxTileView/)

[tags]tile view, tileView, collection container, collection widget, navigation, overview
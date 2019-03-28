<!--widgettree-->
dataSource: [
    {text: ""},
    {text: ""},
    {text: ""},
    {text: ""},
    {text: ""},
    {text: ""},
    {text: ""}
],
height: 300
<!--/widgettree-->
===========================================================================
<!--module-->ui/tile_view<!--/module-->
<!--export-->default<!--/export-->
<!--inherits-->..\CollectionWidget\CollectionWidget.md<!--/inherits-->
<!--lib-->
dx.mobile.js, dx.web.js, dx.viz-web.js, dx.all.js
<!--/lib-->
===========================================================================

<!--shortDescription-->
The **TileView** widget contains a collection of tiles. Tiles can store much more information than ordinary buttons, that is why they are very popular in apps designed for touch devices.
<!--/shortDescription-->

<!--fullDescription-->
#include common-ref-roottopic-introduction

---
#####[**jQuery**](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/)  

    <!--JavaScript-->
    $(function() {
        $("#tileView").dxTileView({
            dataSource: [
                { text: "Tile 1 Text" },
                { text: "Tile 2 Text" },
                { text: "Tile 3 Text" }
            ],
            baseItemHeight: 130,
            baseItemWidth: 180
        });
    });

    <!--HTML-->
    <div id="tileView">

##### Angular

    <!--HTML-->
    <dx-tile-view
        [dataSource]="tileViewDataSource"
        [baseItemHeight]="130"
        [baseItemWidth]=180>
    </dx-tile-view>

    <!--TypeScript-->
    import { DxTileViewModule } from "devextreme-angular"
    // ...
    export class AppComponent {
        tileViewDataSource = [
            { text: "Tile 1 Text" },
            { text: "Tile 2 Text" },
            { text: "Tile 3 Text" }
        ];
    }
    @NgModule({
        imports: [
            // ...
            DxTileViewModule
        ],
        // ...
    })

#####[**AngularJS**](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/)  

    <!--HTML-->
    <div dx-tile-view="{
        dataSource: tileViewDataSource,
        baseItemHeight: 130,
        baseItemWidth: 180
    }"></div>

    <!--JavaScript-->angular.module("DemoApp", ["dx"])
        .controller("DemoController", function ($scope) {
            $scope.tileViewDataSource = [
                { text: "Tile 1 Text" },
                { text: "Tile 2 Text" },
                { text: "Tile 3 Text" }
            ];
        });

#####[**Knockout**](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/)  

    <!--HTML-->
    <div data-bind="dxTileView: {
        dataSource: tileViewDataSource,
        baseItemHeight: 130,
        baseItemWidth: 180
    }"></div>

    <!--JavaScript-->var viewModel = {
        tileViewDataSource: [
            { text: "Tile 1 Text" },
            { text: "Tile 2 Text" },
            { text: "Tile 3 Text" }
        ]
    };
    ko.applyBindings(viewModel);

#####[**ASP.NET MVC Controls**](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Creating_a_Widget)

    <!--Razor C#-->@(Html.DevExtreme().TileView()
        .ID("tileView")
        .DataSource(new[] {
            new { text = "Tile 1 Text" },
            new { text = "Tile 2 Text" },
            new { text = "Tile 3 Text" }
        })
        .BaseItemHeight(130)
        .BaseItemWidth(180)
    )

    <!--Razor VB-->@(Html.DevExtreme().TileView() _
            .ID("tileView") _
            .DataSource({
                New With { .text = "Tile 1 Text" },
                New With { .text = "Tile 2 Text" },
                New With { .text = "Tile 3 Text" }
            }) _
            .BaseItemHeight(130) _
            .BaseItemWidth(180)
    )

---

 

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/#demo/actionsandliststileviewtileviewtileview/"
}

#####See Also#####
- [TileView - Overview](/Documentation/Guide/Widgets/TileView/Overview/)
<!--/fullDescription-->
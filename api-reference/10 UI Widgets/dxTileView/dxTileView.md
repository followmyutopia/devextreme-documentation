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
#include common-ref-roottopic-introduction with { }

---
#####[**jQuery**](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/)  

    <!--HTML-->
    <div id="tileView">
        <div data-options="dxTemplate: { name: 'tile' }">
            <p style="font-size:larger"><b data-bind="text: state"></b></p>
            <p>Capital: <i data-bind="text: capital"></i></p>
            <p>Population: <i data-bind="text: population"></i></p>
        </div>
    </div>

    <!--JavaScript-->
    var states = [
        { state: "Alabama", capital: "Montgomery", population: 4822023 },
        { state: "Alaska", capital: "Juneau", population: 731449 },
        { state: "Arizona", capital: "Phoenix", population: 6553255 },
        // ...
    ];
    $(function() {
        $("#tileView").dxTileView({
            dataSource: states,
            itemTemplate: "tile"
        });
    });

#####[**Angular**](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Create_and_Configure_a_Widget/)  

    <!--HTML-->
    <dx-tile-view
        [dataSource]="states"
        itemTemplate="tile">
            <div *dxTemplate="let tileData of 'tile'">
                <p style="font-size:larger"><b> {{ tileData.state }} </b></p>
                <p>Capital: <i> {{ tileData.capital }} </i></p>
                <p>Population: <i> {{ tileData.population }} </i></p>
            </div>
    </dx-tile-view>

    <!--TypeScript-->
    export class AppComponent {
        states = [
            // ...
        ];
    }

#####[**AngularJS**](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/)  

    <!--HTML-->
    <div dx-tile-view="{
        dataSource: states,
        itemTemplate: 'tile'
    }" dx-item-alias="itemObj">
        <div data-options="dxTemplate: { name: 'tile' }">
            <p style="font-size:larger"><b> {{ itemObj.state }} </b></p>
            <p>Capital: <i> {{ itemObj.capital }} </i></p>
            <p>Population: <i> {{ itemObj.population }} </i></p>
        </div>
    </div>

    <!--JavaScript-->angular.module('DemoApp', ['dx'])
        .controller("DemoController", function ($scope) {
            $scope.states = [
                // ...   
            ];
        });

#####[**Knockout**](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/)  

    <!--HTML-->
    <div data-bind="dxTileView: {
        dataSource: states,
        itemTemplate: 'tile'
    }">
        <div data-options="dxTemplate: { name: 'tile' }">
            <p style="font-size:larger"><b data-bind="text: state"></b></p>
            <p>Capital: <i data-bind="text: capital"></i></p>
            <p>Population: <i data-bind="text: population"></i></p>
        </div>
    </div>

    <!--JavaScript-->var viewModel = {
        states: [
            // ...
        ]
    };
    ko.applyBindings(viewModel);

#####[**ASP.NET MVC Controls**](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Creating_a_Widget)

    <!--Razor C#-->@(Html.DevExtreme().TileView()
        .ID("tileView")
        .DataSource(States)
        .ItemTemplate(@<text>
            <p style="font-size:larger"><b> <%= state %> </b></p>
            <p>Capital: <i> <%= capital %> </i></p>
            <p>Population: <i> <%= population %> </i></p>
        </text>)
    )

    <!--Razor VB-->@Code
        Html.DevExtreme().TileView() _
            .ID("tileView") _
            .DataSource(States) _
            .ItemTemplate(Sub()
                @<text>
                    <p style="font-size:larger"><b> <%= state %> </b></p>
                    <p>Capital: <i> <%= capital %> </i></p>
                    <p>Population: <i> <%= population %> </i></p>
                </text>
            End Sub).Render()
    End Code

---

 

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/#demo/actionsandliststileviewtileviewtileview/"
}

#####See Also#####
- [TileView - Overview](/Documentation/Guide/Widgets/TileView/Overview/)
<!--/fullDescription-->
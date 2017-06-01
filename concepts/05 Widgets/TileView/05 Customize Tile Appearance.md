For a minor customization of tiles, you can use the default item template. This template defines the appearance of a tile depending on whether [specific fields](/Documentation/ApiReference/UI_Widgets/dxTileView/Default_Item_Template/) are present or absent from the tile's data object. For example, the following code generates three tiles: the first is disabled, the second is not customized, the third is hidden.

    <!--JavaScript-->$(function() {
        $("#tileViewContainer").dxTileView({
            dataSource: [
                { text: "Alabama", disabled: true },
                { text: "Alaska" },
                { text: "Arizona", visible: false }
            ]
        });
    });

Using the default item template is the easiest way to customize an item, but it lacks flexibility. Instead, you can define a custom template. For AngularJS and Knockout apps, DevExtreme provides a markup component called [dxTemplate](/Documentation/ApiReference/UI_Widgets/Markup_Components/dxTemplate/). The following code gives a simple example of how you can use **dxTemplate** to customize tiles.

---
#####**AngularJS**

    <!--HTML-->
    <div ng-controller="DemoController">
        <div dx-tile-view="{
            dataSource: tileViewData,
            itemMargin: 15,
            baseItemHeight: 80,
            baseItemWidth: 140,
            itemTemplate: 'tile'
        }" dx-item-alias="itemObj">
            <div class="tile" data-options="dxTemplate: { name: 'tile' }">
                <p style="font-size:larger"><b>{{ itemObj.name }}</b></p>
                <p>Capital: <i>{{ itemObj.capital }}</i></p>
            </div>
        </div>
    </div>

    <!--JavaScript-->angular.module('DemoApp', ['dx'])
        .controller('DemoController', function ($scope) {
            $scope.tileViewData =  [
                { name: "Alabama", capital: "Montgomery" },
                { name: "Alaska", capital: "Juneau" },
                { name: "Arizona", capital: "Phoenix" },
                // . . .
            ];
        });

    <!--CSS-->.tile {
        border-radius: .5em;
        text-align: center;
        color: white;
        background: gray;
    }

[note] The `dx-item-alias` directive specifies the variable that is used to access the item object.

#####**Knockout**

    <!--HTML-->
    <div data-bind="dxTileView: {
        dataSource: tileViewData,
        itemMargin: 15,
        baseItemHeight: 80,
        baseItemWidth: 140,
        itemTemplate: 'tile'
    }">
        <div class="tile" data-options="dxTemplate: { name: 'tile' }">
            <p style="font-size:larger"><b data-bind="text: name"></b></p>
            <p>Capital: <i data-bind="text: capital"></i></p>
        </div>
    </div>

    <!--JavaScript-->var viewModel = {
        tileViewData: [
            { name: "Alabama", capital: "Montgomery" },
            { name: "Alaska", capital: "Juneau" },
            { name: "Arizona", capital: "Phoenix" },
            // . . .
        ]
    };

    ko.applyBindings(viewModel);

    <!--CSS-->.tile {
        border-radius: .5em;
        text-align: center;
        color: white;
        background: gray;
    }

---

If you use jQuery alone, combine the HTML markup for items manually with jQuery [DOM manipulation methods](http://api.jquery.com/category/manipulation/). To apply this markup, use the [itemTemplate](/Documentation/ApiReference/UI_Widgets/dxTileView/Configuration/#itemTemplate) callback function.

    <!--JavaScript-->var tileViewData = [
        { name: "Alabama", capital: "Montgomery" },
        { name: "Alaska", capital: "Juneau" },
        { name: "Arizona", capital: "Phoenix" },
        // . . .
    ];

    $(function() {
        $("#tileViewContainer").dxTileView({
            dataSource: tileViewData,
            itemTemplate: function (itemData, itemIndex, itemElement) {
                itemElement.addClass("tile");
                itemElement.append(
                    "<p style='font-size:larger'><b>" + itemData.name + "</b></p>",
                    "<p>Capital: <i>" + itemData.capital + "</i></p>"
                )
            }
        });
    });

    <!--CSS-->.tile {
        border-radius: .5em;
        text-align: center;
        color: white;
        background: gray;
    }

You can also customize an individual tile. For this purpose, declare a template for this tile as a script and pass its `id` to the [template](/Documentation/ApiReference/UI_Widgets/dxTileView/Default_Item_Template/#template) field of the item's data object.

    <!--HTML-->
    <script id="individualTileTemplate" type="text/html">
        <!-- ... -->
    </script>

    <!--JavaScript-->var tileViewData = [
        { name: "Alabama", capital: "Montgomery" },
        { name: "Alaska", capital: "Juneau", template: $("#individualTileTemplate") },
        // . . .
    ];

In addition, you can use a 3rd-party template engine to customize widget appearance. For more information, see the [Use an Alternative Template Engine](/Documentation/Guide/Widgets/Common/UI_Widgets/Customize_Widget_Element_Appearance/#Use_an_Alternative_Template_Engine) article.

<a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/Tile_View/ItemTemplate/jQuery/Light/" class="button orange small fix-width-155" style="margin-right: 5px; width:240px" target="_blank">View Built-In Template Engine Demo</a>
<a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/Tile_View/Item3RdPartyEngineTemplate/jQuery/Light/" class="button orange small fix-width-155" style="margin-right: 20px; width:240px" target="_blank">View 3rd-Party Template Engine Demo</a>

#####See Also#####
- [Customize Widget Element Appearance](/Documentation/Guide/Widgets/Common/UI_Widgets/Customize_Widget_Element_Appearance/#Customize_Widget_Element_Appearance)
- [Customize Widget Element Appearance - MVVM Approach](/Documentation/Guide/Widgets/Common/UI_Widgets/Customize_Widget_Element_Appearance_-_MVVM_Approach/)
- [TileView - Specify the Size of Tiles](/Documentation/Guide/Widgets/TileView/Specify_the_Size_of_Tiles)
- [TileView Demos](http://js.devexpress.com/Demos/WidgetsGallery/#demo/navigation-tile_view-overview)
- [TileView API Reference](/Documentation/ApiReference/UI_Widgets/dxTileView/)

[tags]tile view, tileView, item appearance, tile appearance, customize, templates, template, custom template, default item, default template

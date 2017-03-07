<article data-show="Content/Applications/16_1/UIWidgets/dxTileView/markup.html,
        Content/Applications/16_1/UIWidgets/dxTileView/script.js,
        Content/Applications/16_1/UIWidgets/dxTileView/styles.css">

The [TileView](/Documentation/ApiReference/UI_Widgets/dxTileView/) widget displays data items as tiles.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/actionsandliststileviewtileviewtileview/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

The widget supports common Collection Container widget functionality and enables you to carry out the following common tasks described at the beginning of this article.

- [Specify data source](/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Collection_Container_Widgets/#Common_Tasks/Specify_Data_Source)  
- [Handle item events](/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Collection_Container_Widgets/#Common_Tasks/Handle_Item_Events)  
- [Customize item appearance](/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Collection_Container_Widgets/#Common_Tasks/Customize_an_Item_Appearance)  

In addition to common collection container functionality, the widget enables you to perform the following adjustments.

**Specify the size of a tile**

The base size of a tile is determined by the [baseItemHeight](/Documentation/ApiReference/UI_Widgets/dxTileView/Configuration/#baseItemHeight) and [baseItemWidth](/Documentation/ApiReference/UI_Widgets/dxTileView/Configuration/#baseItemWidth) options. The actual tile size depends on values of the [widthRatio](/Documentation/ApiReference/UI_Widgets/dxTileView/Default_Item_Template/#widthRatio) and [heightRatio](/Documentation/ApiReference/UI_Widgets/dxTileView/Default_Item_Template/#heightRatio) properties of an item object. The actual size of a tile is the base size multiplied by ratio.

    <!--JavaScript-->
    var states = [
        . . .
        { name: "Maine", capital: "Augusta" },
        { name: "Maryland", capital: "Annapolis" },
        { name: "Massachusetts", capital: "Boston", widthRatio:2 }
        . . .
    ]
    var tileViewOptions = {
        dataSource: states,
        baseItemHeight: 130,
        baseItemWidth: 180
    }

**Specify the margin of a tile**

The distance between tiles is specified by the [itemMargin](/Documentation/ApiReference/UI_Widgets/dxTileView/Configuration/#itemMargin) option.

    <!--JavaScript-->
    var tileViewOptions = {
        dataSource: states,
        itemMargin: 20
    }

**Display the scrollbar**

You can specify whether or not the widget displays the scrollbar. Assign *true* to the [showScrollbar](/Documentation/ApiReference/UI_Widgets/dxTileView/Configuration/#showScrollbar) option to display the scrollbar.

    <!--JavaScript-->
    var tileViewOptions = {
        dataSource: states,
        showScrollbar: true
    }

**Specify scrolling direction**

The widget size is specified using the [width](/Documentation/ApiReference/UI_Widgets/dxTileView/Configuration/#width) and [height](/Documentation/ApiReference/UI_Widgets/dxTileView/Configuration/#height) options. If the specified size is not enough to display all tiles, the widget enables scrolling. Scrolling direction is specified using the [direction](/Documentation/ApiReference/UI_Widgets/dxTileView/Configuration/#direction) option, which accepts "horizontal" and "vertical" values. By default, the widget places tiles horizontally.

**Keyboard support**

An end-user can use the following keys to interact with the widget.

- Up/down/left/right arrow  
 Move focus to a neighboring item.

- Home/End
 Move focus to the first/last item.

- Enter (Space)
 Select the focused item.
</article>
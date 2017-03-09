Items can be arranged in a row or in a column depending on the value of the [direction](/Documentation/ApiReference/UI_Widgets/dxBox/Configuration/#direction) option.

    <!--JavaScript-->$(function() {
        $("#boxContainer").dxBox({
            direction: "row", // or "col"
            height: 200,
            width: 200
        });
    });

<div class="documentation-gallery">
    <script type="text/template"> 
        {
            "options": {
                "width": 300,
                "height": 300
            },
            "images": [
                { "image": "/Content/images/doc/16_2/UiWidgets/Box/Box_direction_row.png", "text": "<b>direction</b>: <i>'row'</i>" },
                { "image": "/Content/images/doc/16_2/UiWidgets/Box/Box_direction_column.png", "text": "<b>direction</b>: <i>'col'</i>" }
            ]
        }
    </script>
</div>

If the **Box** items do not occupy the entire **Box**, you can align them along and crosswise the specified **direction**. For this purpose, use the [align](/Documentation/ApiReference/UI_Widgets/dxBox/Configuration/#align) and [crossAlign](/Documentation/ApiReference/UI_Widgets/dxBox/Configuration/#crossAlign) options, respectively.

    <!--JavaScript-->$(function() {
        $("#boxContainer").dxBox({
            direction: "col",
            height: 200,
            align: "center",
            crossAlign: "stretch"
        });
    });

#####See Also#####
- [Box - Nest One Box into Another](/Documentation/Guide/Widgets/Box/Nest_One_Box_into_Another/)
- [Box Demos](https://js.devexpress.com/Demos/WidgetsGallery/#demo/forms_and_multi-purpose-box-overview)
- [Box API Reference](/Documentation/ApiReference/UI_Widgets/dxBox/)

[tags]box, arrange items in a column, arrange items in a row, direction, items alignment, align items, crossAlign
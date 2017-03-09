The **RangeSlider** can display labels for the [min](/Documentation/ApiReference/UI_Widgets/dxRangeSlider/Configuration/#min) and [max](/Documentation/ApiReference/UI_Widgets/dxRangeSlider/Configuration/#max) values. To configure the labels, use the [label](/Documentation/ApiReference/UI_Widgets/dxRangeSlider/Configuration/label/) object.

    <!--JavaScript-->
    $(function(){
        $("#rangeSliderContainer").dxRangeSlider({
            // . . .
            label: {
                visible: true,
                position: "bottom", // or "top"
                format: function(value) {
                    return value + " units";
                }
            }
        });
    });

The **RangeSlider** can also display a tooltip for the slider handles. To configure it, use the [tooltip](/Documentation/ApiReference/UI_Widgets/dxRangeSlider/Configuration/tooltip/) object.

    <!--JavaScript-->
    $(function(){
        $("#rangeSliderContainer").dxRangeSlider({
            // . . .
            tooltip: {
                enabled: true,
                position: "bottom", // or "top"
                showMode: "always", // or "onHover"
                format: function(value) {
                    return value + " units";
                }
            }
        });
    });

To specify whether or not the selected range should be highlighted, use the **showRange** option.

    <!--JavaScript-->
    $(function(){
        $("#rangeSliderContainer").dxRangeSlider({
            // . . .
            showRange: false
        });
    });

#####See Also#####
- [RangeSlider - Handle the Value Change Event](/Documentation/Guide/Widgets/RangeSlider/Handle_the_Value_Change_Event)
- [RangeSlider Demos](https://js.devexpress.com/Demos/WidgetsGallery/#demo/forms_and_multi-purpose-range_slider-overview)
- [RangeSlider API Reference](/Documentation/ApiReference/UI_Widgets/dxRangeSlider/)

[tags]range slider, rangeSlider, editor, label, tooltip, showRange
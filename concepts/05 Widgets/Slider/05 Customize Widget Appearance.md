The **Slider** can display labels for the [min](/Documentation/ApiReference/UI_Widgets/dxSlider/Configuration/#min) and [max](/Documentation/ApiReference/UI_Widgets/dxSlider/Configuration/#max) values. To configure the labels, use the [label](/Documentation/ApiReference/UI_Widgets/dxSlider/Configuration/label/) object.

    <!--JavaScript-->
    $(function(){
        $("#sliderContainer").dxSlider({
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

The **Slider** can also display a tooltip for the slider handle. To configure it, use the [tooltip](/Documentation/ApiReference/UI_Widgets/dxSlider/Configuration/tooltip/) object.

    <!--JavaScript-->
    $(function(){
        $("#sliderContainer").dxSlider({
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

To specify whether or not the part of the scale from the beginning to the slider handle should be highlighted, use the **showRange** option.

    <!--JavaScript-->
    $(function(){
        $("#sliderContainer").dxSlider({
            // . . .
            showRange: false
        });
    });

#####See Also#####
- [Slider - Handle the Value Change Event](/Documentation/Guide/Widgets/Slider/Handle_the_Value_Change_Event)
- [Slider Demos](/Demos/WidgetsGallery/#demo/forms_and_multi-purpose-slider-overview/ios7)
- [Slider API Reference](/Documentation/ApiReference/UI_Widgets/dxSlider/)

[tags]slider, editor, label, tooltip, showRange
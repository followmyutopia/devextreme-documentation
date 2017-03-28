When the **Chart** is rotated, its axes are swapped around.

<img src="/Content/images/doc/17_1/ChartJS/visual_elements/axis_standard.png" alt="DevExtreme HTML5 JavaScript Charts" style="display:inline-block" />
<img src="/Content/images/doc/17_1/ChartJS/visual_elements/axis_rotated.png" alt="DevExtreme HTML5 JavaScript Charts RotatedChart" style="display:inline-block;margin-left:5px" />

To rotate the **Chart**, set the [rotated](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#rotated) option to *true*.

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
			// ...
			rotated: true
        });
    });

Besides being swapped around, chart axes can be inverted, or "mirrored".

<img src="/Content/images/doc/17_1/ChartJS/visual_elements/axis_standard.png" alt="DevExtreme HTML5 JavaScript Charts" style="display:inline-block" />
<img src="/Content/images/doc/17_1/ChartJS/visual_elements/axis_inverted_argument.png" alt="DevExtreme HTML5 JavaScript Charts InvertedArgumentAxis" style="display:inline-block" />
<img src="/Content/images/doc/17_1/ChartJS/visual_elements/axis_inverted_value.png" alt="DevExtreme HTML5 JavaScript Charts InvertedValueAxis" style="display:inline-block;margin-left:5px" />

To invert both argument and value axes, assign *true* to the [inverted](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonAxisSettings/#inverted) option of the [commonAxisSettings](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonAxisSettings/) object. The same option declared in the [argumentAxis](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/) or [valueAxis](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/valueAxis/) object inverts a specific axis.

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
			// ...
			commonAxisSettings: {
                inverted: true
            },
            // or for a specific axis
            argumentAxis: {
                inverted: true
            },
            valueAxis: {
                inverted: true
            }
        });
    });

#####See Also#####
- [Chart Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/AjaxRequest/jQuery/Light/)
- [Chart API Reference](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/)

[tags]chart, rotate, invert, mirror

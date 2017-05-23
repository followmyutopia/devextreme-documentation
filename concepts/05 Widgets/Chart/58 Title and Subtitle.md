Title and subtitle are textual elements that give an idea of what the **Chart** visualizes.

![DevExtreme HTML5 JavaScript Charts Title Subtitle](/Content/images/doc/17_1/ChartJS/visual_elements/chart_title.png)

The title is configured by the [title](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/title/) object. The subtitle is configured by the [subtitle](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/title/subtitle/) object nested in the **title** object.

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            title: {
                text: "I am the Title",
                subtitle: {
                    text: "I am the Subtitle"
                }
            }
        });
    });

You can set the title's text more concisely by assigning it directly to the **title** option. This is useful if you are satisfied with the default settings of the title and do not need a subtitle. 

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            title: "I am the Title"
        });
    });

For information about all options of the title and subtitle, visit the [title](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/title/) section of the API reference.

#####See Also#####
- [Chart Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/LocalDataSource/jQuery/Light/)

[tags]chart, title, subtitle, text

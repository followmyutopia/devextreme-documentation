Title and subtitle are textual elements that give an idea of what the **PieChart** visualizes.

![DevExtreme HTML5 JavaScript PieChart Title Subtitle](/Content/images/doc/17_2/PieChart/visual_elements/chart_title.png)

The title is configured by the [title](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/title/) object. The subtitle is configured by the [subtitle](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/title/subtitle/) object nested in the **title** object.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#pieChartContainer").dxPieChart({
            // ...
            title: {
                text: "I am the Title",
                subtitle: {
                    text: "I am the Subtitle"
                }
            }
        });
    });

##### Angular

    <!--HTML--><dx-pie-chart ... >
        <dxo-title
            text="I am the Title">
            <dxo-subtitle
                text="I am the Subtitle">
            </dxo-subtitle>
        </dxo-title>
    </dx-pie-chart>

---

<a href='/Demos/WidgetsGallery/Demo/Charts/PieWithMultipleSeries/jQuery/Light/' class='button orange small fix-width-155' target='_blank'>View Demo</a>

You can set the title's text more concisely by assigning it directly to the **title** option. This is useful if you are satisfied with the default settings of the title and do not need a subtitle. 

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#pieChartContainer").dxPieChart({
            // ...
            title: "I am the Title"
        });
    });

##### Angular

    <!--HTML--><dx-pie-chart ...
        text="I am the Title">
    </dx-pie-chart>

---

For information about all options of the title and subtitle, visit the [title](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/title/) section of the API reference.

#####See Also#####
- [Adaptive Layout](/Documentation/Guide/Widgets/PieChart/Adaptive_Layout/)
- [Equally-Sized Pies](/Documentation/Guide/Widgets/PieChart/Equally-Sized_Pies/)
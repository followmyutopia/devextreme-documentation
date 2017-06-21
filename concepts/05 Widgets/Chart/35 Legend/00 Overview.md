The legend is a chart component that helps a user identify series. It contains several colored items, one per series. 

![DevExtreme HTML5 JavaScript Charts Legend](/Content/images/doc/17_2/ChartJS/visual_elements/legend.png)

To configure the appearance, location, and content of the legend, use options collected in the [legend](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/legend/) object. 

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            legend: {
                // ...
            }
        });
    });

##### Angular

    <!--HTML--><dx-chart ... >
        <dxo-legend ... ></dxo-legend>
    </dx-chart>

---

#####See Also#####
- [Relocate the Legend](/Documentation/Guide/Widgets/Chart/Legend/Relocate_the_Legend/)
- [Rearrange Legend Items](/Documentation/Guide/Widgets/Chart/Legend/Rearrange_Legend_Items/)
- [User Interaction with the Legend](/Documentation/Guide/Widgets/Chart/Legend/User_Interaction/)
- [Chart Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/StepLine/jQuery/Light/)
- [Chart API Reference](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/)

[tags]chart, legend, overview
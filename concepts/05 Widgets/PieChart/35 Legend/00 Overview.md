The legend is a component that helps a user identify series points. It contains several colored items, one per point (or per several points with the same argument in a multi-series **PieChart**). 

![DevExtreme HTML5 JavaScript PieChart Legend](/Content/images/doc/17_2/PieChart/visual_elements/legend.png)

To configure the appearance, location, and content of the legend, use options collected in the [legend](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/legend/) object. 

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#pieChartContainer").dxPieChart({
            // ...
            legend: {
                // ...
            }
        });
    });

##### Angular

    <!--HTML--><dx-pie-chart ... >
        <dxo-legend ... ></dxo-legend>
    </dx-pie-chart>

---

#####See Also#####
- [Relocate the Legend](/Documentation/Guide/Widgets/PieChart/Legend/Relocate_the_Legend/)
- [Rearrange Legend Items](/Documentation/Guide/Widgets/PieChart/Legend/Rearrange_Legend_Items/)
- [User Interaction with the Legend](/Documentation/Guide/Widgets/PieChart/Legend/User_Interaction/)
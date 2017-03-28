Although the legend's layout is virtually universal, in some cases, you may need to slightly adjust it, for example, rearrange legend items. You can learn how to do it from the following instructions.

- **Choose legend orientation**        
Depending on whether the legend is oriented vertically or horizontally, the **Chart** arranges legend items in columns or in rows. To change the legend orientation, use the [orientation](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/legend/#orientation) option.

        <!--JavaScript-->$(function() {
            $("#chartContainer").dxChart({
                // ...
                legend: {
                    orientation: "vertical" // or "horizontal"
                }
            });
        });

    [note] To center a horizontally-oriented legend, assign *"center"* to the [horizontalAlignment](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/legend/#horizontalAlignment) option. For details on the location of the legend on a chart, refer to the [Relocate the Legend](/Documentation/Guide/Widgets/Chart/Legend/Relocate_the_Legend/) topic.

- **Set the number of columns or rows**     
To distribute all legend items between several columns (in a vertically-oriented legend) or rows (in a horizontally-oriented legend), set the [columnCount](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/legend/#columnCount) or [rowCount](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/legend/#rowCount) option respectively.

        <!--JavaScript-->$(function() {
            $("#chartContainer").dxChart({
                // ...
                legend: {
                    // ...
                    columnCount: 3
                    // rowCount: 2
                }
            });
        });

- **Adjust the empty space between columns and rows**         
Regardless the legend orientation, you can adjust the empty space between columns and rows using the [columnItemSpacing](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/legend/#columnItemSpacing) and [rowItemSpacing](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/legend/#rowItemSpacing) options respectively.

        <!--JavaScript-->$(function() {
            $("#chartContainer").dxChart({
                // ...
                legend: {
                    // ...
                    columnItemSpacing: 20,
                    rowItemSpacing: 30
                }
            });
        });

Below, you can try out all the mentioned options in action.

<div class="simulator-desktop-container" data-view="/Content/Applications/17_1/DataVisualization/Guides/Legend/rearrangeLegendItems.html, /Content/Applications/17_1/DataVisualization/Guides/Legend/rearrangeLegendItems.js, /Content/Applications/17_1/DataVisualization/Guides/Legend/rearrangeLegendItems.css"></div>

#####See Also#####
- [Relocate the Legend](/Documentation/Guide/Widgets/Chart/Legend/Relocate_the_Legend/)
- [Chart Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/StepLine/jQuery/Light/)
- [Chart API Reference](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/)

[tags]chart, legend, legend items, legend orientation, colum count, columnCount, row count, rowCount, empty space between legend items, columnItemSpacing, rowItemSpacing

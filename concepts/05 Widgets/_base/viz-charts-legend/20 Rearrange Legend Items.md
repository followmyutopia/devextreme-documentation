Although the legend's layout is virtually universal, in some cases, you may need to slightly adjust it, for example, rearrange legend items. You can learn how to do it from the following instructions.

- **Choose legend orientation**        
Depending on whether the legend is oriented vertically or horizontally, the **{WidgetName}** arranges legend items in columns or in rows. To change the legend orientation, use the [orientation](/Documentation/ApiReference/Data_Visualization_Widgets/dx{WidgetName}/Configuration/legend/#orientation) option.

    ---
    ##### jQuery

        <!--JavaScript-->$(function() {
            $("#{widgetName}Container").dx{WidgetName}({
                // ...
                legend: {
                    orientation: "vertical" // or "horizontal"
                }
            });
        });

    ##### Angular

        <!--HTML--><dx-{widget-name} ...>
            <dxo-legend
                orientation="vertical"> <!-- or "horizontal" -->
            </dxo-legend>
        </dx-{widget-name}>

        <!--TypeScript-->
        import { Dx{WidgetName}Module } from 'devextreme-angular';
        // ...
        export class AppComponent {
            // ...
        }
        @NgModule({
            imports: [
                // ...
                Dx{WidgetName}Module
            ],
            // ...
        })

    ---

    [note] To center a horizontally-oriented legend, assign *"center"* to the [horizontalAlignment](/Documentation/ApiReference/Data_Visualization_Widgets/dx{WidgetName}/Configuration/legend/#horizontalAlignment) option. For details on the legend's location, refer to the [Relocate the Legend](/Documentation/Guide/Widgets/{WidgetName}/Legend/Relocate_the_Legend/) topic.

- **Set the number of columns or rows**     
To distribute all legend items between several columns (in a vertically-oriented legend) or rows (in a horizontally-oriented legend), set the [columnCount](/Documentation/ApiReference/Data_Visualization_Widgets/dx{WidgetName}/Configuration/legend/#columnCount) or [rowCount](/Documentation/ApiReference/Data_Visualization_Widgets/dx{WidgetName}/Configuration/legend/#rowCount) option respectively.

    ---
    ##### jQuery

        <!--JavaScript-->$(function() {
            $("#{widgetName}Container").dx{WidgetName}({
                // ...
                legend: {
                    // ...
                    columnCount: 3
                    // rowCount: 2
                }
            });
        });

    ##### Angular

        <!--HTML--><dx-{widget-name} ...>
            <dxo-legend ...
                [columnCount]="3">
                <!-- [rowCount]="2"> -->
            </dxo-legend>
        </dx-{widget-name}>

        <!--TypeScript-->
        import { Dx{WidgetName}Module } from 'devextreme-angular';
        // ...
        export class AppComponent {
            // ...
        }
        @NgModule({
            imports: [
                // ...
                Dx{WidgetName}Module
            ],
            // ...
        })

    ---

- **Adjust the empty space between columns and rows**         
Regardless the legend orientation, you can adjust the empty space between columns and rows using the [columnItemSpacing](/Documentation/ApiReference/Data_Visualization_Widgets/dx{WidgetName}/Configuration/legend/#columnItemSpacing) and [rowItemSpacing](/Documentation/ApiReference/Data_Visualization_Widgets/dx{WidgetName}/Configuration/legend/#rowItemSpacing) options respectively.

    ---
    ##### jQuery

        <!--JavaScript-->$(function() {
            $("#{widgetName}Container").dx{WidgetName}({
                // ...
                legend: {
                    // ...
                    columnItemSpacing: 20,
                    rowItemSpacing: 30
                }
            });
        });

    ##### Angular

        <!--HTML--><dx-{widget-name} ...>
            <dxo-legend ...
                [columnItemSpacing]="20"
                [rowItemSpacing]="30">
            </dxo-legend>
        </dx-{widget-name}>

        <!--TypeScript-->
        import { Dx{WidgetName}Module } from 'devextreme-angular';
        // ...
        export class AppComponent {
            // ...
        }
        @NgModule({
            imports: [
                // ...
                Dx{WidgetName}Module
            ],
            // ...
        })

    ---

Below, you can try out all the mentioned options in action.

#if Chart
<div class="simulator-desktop-container" data-view="/Content/Applications/18_1/DataVisualization/Guides/Legend/rearrangeLegendItems.html, /Content/Applications/18_1/DataVisualization/Guides/Legend/rearrangeLegendItems.js, /Content/Applications/18_1/DataVisualization/Guides/Legend/rearrangeLegendItems.css"></div>
#endif

#if PieChart
<div class="simulator-desktop-container" data-view="/Content/Applications/18_1/DataVisualization/Guides/PieChartLegend/rearrangeLegendItems.html, /Content/Applications/18_1/DataVisualization/Guides/PieChartLegend/rearrangeLegendItems.js, /Content/Applications/18_1/DataVisualization/Guides/PieChartLegend/rearrangeLegendItems.css"></div>
#endif

#####See Also#####
- [Relocate the Legend](/Documentation/Guide/Widgets/{WidgetName}/Legend/Relocate_the_Legend/)
#if Chart
- [Chart Demos](/Demos/WidgetsGallery/Demo/Charts/StepLine/jQuery/Light/)
#endif
#if PieChart
- [PieChart Demos](/Demos/WidgetsGallery/Demo/Charts/PieWithMultipleSeries/jQuery/Light/)
#endif
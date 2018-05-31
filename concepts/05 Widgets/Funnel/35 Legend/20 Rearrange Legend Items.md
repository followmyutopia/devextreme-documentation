Although the legend's layout is virtually universal, in some cases, you may need to slightly adjust it, for example, rearrange legend items. You can learn how to do it from the following instructions.

- **Choose legend orientation**        
Depending on whether the legend is oriented vertically or horizontally, the **Funnel** arranges legend items in columns or in rows. To change the legend orientation, use the [orientation](/Documentation/ApiReference/Data_Visualization_Widgets/dxFunnel/Configuration/legend/#orientation) option.

    ---
    ##### jQuery

        <!--JavaScript-->$(function() {
            $("#funnelContainer").dxFunnel({
                // ...
                legend: {
                    orientation: "vertical" // or "horizontal"
                }
            });
        });

    ##### Angular

        <!--HTML--><dx-funnel ...>
            <dxo-legend
                orientation="vertical"> <!-- or "horizontal" -->
            </dxo-legend>
        </dx-funnel>

        <!--TypeScript-->
        import { DxFunnelModule } from 'devextreme-angular';
        // ...
        export class AppComponent {
            // ...
        }
        @NgModule({
            imports: [
                // ...
                DxFunnelModule
            ],
            // ...
        })

    ---

    [note] To center a horizontally-oriented legend, assign *"center"* to the [horizontalAlignment](/Documentation/ApiReference/Data_Visualization_Widgets/dxFunnel/Configuration/legend/#horizontalAlignment) option. For details on the legend's location, refer to the [Relocate the Legend](/Documentation/Guide/Widgets/Funnel/Legend/Relocate_the_Legend/) topic.

- **Set the number of columns or rows**     
To distribute all legend items between several columns (in a vertically-oriented legend) or rows (in a horizontally-oriented legend), set the [columnCount](/Documentation/ApiReference/Data_Visualization_Widgets/dxFunnel/Configuration/legend/#columnCount) or [rowCount](/Documentation/ApiReference/Data_Visualization_Widgets/dxFunnel/Configuration/legend/#rowCount) option respectively.

    ---
    ##### jQuery

        <!--JavaScript-->$(function() {
            $("#funnelContainer").dxFunnel({
                // ...
                legend: {
                    // ...
                    columnCount: 3
                    // rowCount: 2
                }
            });
        });

    ##### Angular

        <!--HTML--><dx-funnel ...>
            <dxo-legend ...
                [columnCount]="3">
                <!-- [rowCount]="2"> -->
            </dxo-legend>
        </dx-funnel>

        <!--TypeScript-->
        import { DxFunnelModule } from 'devextreme-angular';
        // ...
        export class AppComponent {
            // ...
        }
        @NgModule({
            imports: [
                // ...
                DxFunnelModule
            ],
            // ...
        })

    ---

- **Adjust the empty space between columns and rows**         
Regardless of the legend orientation, you can adjust the empty space between columns and rows using the [columnItemSpacing](/Documentation/ApiReference/Data_Visualization_Widgets/dxFunnel/Configuration/legend/#columnItemSpacing) and [rowItemSpacing](/Documentation/ApiReference/Data_Visualization_Widgets/dxFunnel/Configuration/legend/#rowItemSpacing) options respectively.

    ---
    ##### jQuery

        <!--JavaScript-->$(function() {
            $("#funnelContainer").dxFunnel({
                // ...
                legend: {
                    // ...
                    columnItemSpacing: 20,
                    rowItemSpacing: 30
                }
            });
        });

    ##### Angular

        <!--HTML--><dx-funnel ...>
            <dxo-legend ...
                [columnItemSpacing]="20"
                [rowItemSpacing]="30">
            </dxo-legend>
        </dx-funnel>

        <!--TypeScript-->
        import { DxFunnelModule } from 'devextreme-angular';
        // ...
        export class AppComponent {
            // ...
        }
        @NgModule({
            imports: [
                // ...
                DxFunnelModule
            ],
            // ...
        })

    ---

Below, you can try out all the mentioned options in action.

<div class="simulator-desktop-container" data-view="/Content/Applications/18_2/DataVisualization/Guides/FunnelLegend/rearrangeLegendItems.html, /Content/Applications/18_2/DataVisualization/Guides/FunnelLegend/rearrangeLegendItems.js, /Content/Applications/18_2/DataVisualization/Guides/FunnelLegend/rearrangeLegendItems.css"></div>

#####See Also#####
- [Relocate the Legend](/Documentation/Guide/Widgets/Funnel/Legend/Relocate_the_Legend/)
- [Funnel Demos](/Demos/WidgetsGallery/Demo/Charts/FunnelChart/jQuery/Light/)
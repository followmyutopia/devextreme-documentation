Smaller points on the **PieChart** can be collected in a single group in one of the following modes:

- **Top N**     
Top N points with the biggest values remain ungrouped; all other points form a group. The **smallValuesGrouping**.[topCount](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/series/smallValuesGrouping/#topCount) option specifies the N.

    ---
    ##### jQuery

        <!--JavaScript-->$(function() {
            $("#pieChartContainer").dxPieChart({
                smallValuesGrouping: {
                    mode: "topN",
                    topCount: 5
                }
            });
        });

    ##### Angular

        <!--HTML-->
        <dx-pie-chart>
            <dxo-small-values-grouping
                mode="topN"
                [topCount]="5">
            </dxo-small-values-grouping>
        </dx-pie-chart>

    ---

- **Threshold**         
Points that fall beyond a threshold establish a group. The **smallValuesGrouping**.[threshold](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/series/smallValuesGrouping/#threshold) option specifies the threshold.

    ---
    ##### jQuery

        <!--JavaScript-->$(function() {
            $("#pieChartContainer").dxPieChart({
                smallValuesGrouping: {
                    mode: "smallValueThreshold",
                    threshold: 3.5
                }
            });
        });

    ##### Angular

        <!--HTML-->
        <dx-pie-chart>
            <dxo-small-values-grouping
                mode="smallValueThreshold"
                [threshold]="3.5">
            </dxo-small-values-grouping>
        </dx-pie-chart>

    ---

The group for small points is called *"others"* by default. You can change this using the **smallValuesGrouping**.[groupName](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/series/smallValuesGrouping/#groupName) option.


---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#pieChartContainer").dxPieChart({
            smallValuesGrouping: {
                // ...
                groupName: "miscellaneous"
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-pie-chart>
        <dxo-small-values-grouping ...
            groupName="miscellaneous">
        </dxo-small-values-grouping>
    </dx-pie-chart>

---

<a href='https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/PieWithSmallValuesGrouped/jQuery/Light/' class='button orange small fix-width-155' target='_blank'>View Demo</a>

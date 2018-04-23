A series point is a visual representation of one or several data objects. Series points can have different shapes and sizes depending on the [series types](/Documentation/Guide/Widgets/Chart/Series_Types/). 

![DevExtreme HTML5 JavaScript Charts SeriesPoints](/Content/images/doc/18_1/ChartJS/visual_elements/series_points.png)

For those series whose points are simple dots ([Range Area](/Documentation/Guide/Widgets/Chart/Series_Types/Range_Series/) and [Scatter](/Documentation/Guide/Widgets/Chart/Series_Types/Scatter_Series/), all [line](/Documentation/Guide/Widgets/Chart/Series_Types/Line_Series/) and [area](/Documentation/Guide/Widgets/Chart/Series_Types/Area_Series/) series), point-related settings are collected in the [point](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/point/) object. This object can be declared as follows.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            series: [{
                point: {
                    // Settings for all points of an individual series
                }
            }, {
                // ...  
            }],
            commonSeriesSettings: {
                stackedline: { // or any other series type
                    point: {
                        // Settings for all points belonging to Stacked Line series
                    }
                },
                point: {
                    // Settings for all points of all series
                }
            }
        });
    });

##### Angular

    <!--HTML--><dx-chart ... >
        <dxi-series>
            <dxo-point ... >
                <!-- Settings for all points of an individual series -->
            </dxo-point>
        </dxi-series>
        <dxo-common-series-settings ... >
            <dxo-stackedline> <!-- or any other series type -->
                <dxo-point ... >
                    <!-- Settings for all points belonging to Stacked Line series -->
                </dxo-point>
            </dxo-stackedline>
            <dxo-point ... >
                <!-- Settings for all points of all series -->
            </dxo-point>
        </dxo-common-series-settings>
    </dx-chart>

    <!--TypeScript-->
    import { DxChartModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxChartModule
        ],
        // ...
    })

---

A dedicated object is not provided for series whose points have a distinctive appearance ([Range Bar](/Documentation/Guide/Widgets/Chart/Series_Types/Range_Series/) and [Bubble](/Documentation/Guide/Widgets/Chart/Series_Types/Bubble_Series/), all [bar](/Documentation/Guide/Widgets/Chart/Series_Types/Bar_Series/) and [financial](/Documentation/Guide/Widgets/Chart/Series_Types/Financial_Series/) series), and all point-related settings are declared directly in the **series**, ***%seriesType%***, or **commonSeriesSettings** object. Refer to the description of a particular series type in the [Series Types](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/) section of the API reference for more details on the available settings.

[note] Individual settings override type-specific settings which, in turn, override common settings.

Settings specified in the manner described above apply to a congregation of series points. If you need to customize an individual point, assign a function to the [customizePoint](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#customizePoint) option. This function must return an object with options for the point that you want to customize.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            series: {
                point: {
                    color: 'blue'
                }
            },
            // Assigns the red color to all series points with value more than 100
            // Other series points remain painted in blue
            customizePoint: function (pointInfo) {
                return pointInfo.value > 100 ? { color: 'red' } : { }
            }
        });
    });

##### Angular

    <!--HTML--><dx-chart
        [customizePoint]="customizePoint">
        <dxi-series>
            <dxo-point color="blue" ></dxo-point>
        </dxi-series>
    </dx-chart>

    <!--TypeScript-->
    import { DxChartModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        // Assigns the red color to all series points with value more than 100
        // Other series points remain painted in blue
        customizePoint (pointInfo: any) {
            return pointInfo.value > 100 ? { color: 'red' } : { }
        };
    }
    @NgModule({
        imports: [
            // ...
            DxChartModule
        ],
        // ...
    })

---

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/Charts/PointImage/jQuery/Light/"
}

#####See Also#####
- [Access a Series Point Using the API](/Documentation/Guide/Widgets/Chart/Series_Points/Access_a_Series_Point_Using_the_API/)
- [Series Overview](/Documentation/Guide/Widgets/Chart/Series/Overview/)
- [Data Aggregation](/Documentation/Guide/Widgets/Chart/Data_Aggregation/)
- [Chart Demos](/Demos/WidgetsGallery/Demo/Charts/CustomizePointsAndLabels/jQuery/Light/)
- [Chart API Reference](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/)

[tags]chart, overview, series points, common point settings

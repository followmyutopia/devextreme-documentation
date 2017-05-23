A series point is a visual representation of a data object. Series points come in many shapes and sizes because of the different nature of [series types](/Documentation/Guide/Widgets/Chart/Series_Types/). 

![DevExtreme HTML5 JavaScript Charts SeriesPoints](/Content/images/doc/17_1/ChartJS/visual_elements/series_points.png)

For those series whose points are simple dots ([Line-](/Documentation/Guide/Widgets/Chart/Series_Types/#Line) and [Area-like](/Documentation/Guide/Widgets/Chart/Series_Types/#Area), [Scatter](/Documentation/Guide/Widgets/Chart/Series_Types/#Scatter) and [Range Area](/Documentation/Guide/Widgets/Chart/Series_Types/#Range_Area) series), all point-related settings are collected in the [point](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/point/) object. This object can be declared as follows.

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

For those series whose points have distinctive appearance ([Bar-like](/Documentation/Guide/Widgets/Chart/Series_Types/#Bar), [financial](/Documentation/Guide/Widgets/Chart/Series_Types/#Candle_Stick), [Bubble](/Documentation/Guide/Widgets/Chart/Series_Types/#Bubble) and [Range Bar](/Documentation/Guide/Widgets/Chart/Series_Types/#Range_Bar) series), a dedicated object is not provided, and all point-related settings are declared directly in the **series**, ***%seriesType%***, or **commonSeriesSettings** object. For details on available settings, refer to the description of a particular series type in the [Series Types](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/) section of the API reference.

[note] Individual settings override type-specific settings which, in turn, override common settings.

Settings specified in the manner described above apply to a congregation of series points. If you need to customize an individual point, assign a function to the [customizePoint](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#customizePoint) option. This function must return an object with options for the point that you want to customize.

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

<a href='https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/PointImage/jQuery/Light/' class='button orange small fix-width-155' target='_blank'>View Demo</a>

#####See Also#####
- [Access a Series Point Using the API](/Documentation/Guide/Widgets/Chart/Series_Points/Access_a_Series_Point_Using_the_API/)
- [Series Overview](/Documentation/Guide/Widgets/Chart/Series/Overview/)
- [Chart Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/CustomizePointsAndLabels/jQuery/Light/)
- [Chart API Reference](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/)

[tags]chart, overview, series points, common point settings

[note] [Bar-like](/Documentation/Guide/Widgets/Chart/Series_Types/#Bar), [financial](/Documentation/Guide/Widgets/Chart/Series_Types/#Candle_Stick), [Bubble](/Documentation/Guide/Widgets/Chart/Series_Types/#Bubble) and [Range Bar](/Documentation/Guide/Widgets/Chart/Series_Types/#Range_Bar) series do not contain anything besides points. Therefore, configuring points in these series is, in fact, configuring the series itself. For this reason, follow the instructions given in the [Series Hover - User Interaction](/Documentation/Guide/Widgets/Chart/Series/Hover/#User_Interaction) topic when you configure hovering for points that belong to the aforementioned series.

When a user pauses on a series point, it changes its style to the one specified by the following objects.

- **series** | **point** | [hoverStyle](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/point/hoverStyle/)        
The hover style for all points of an individual series.

- **commonSeriesSettings** | **%seriesType%** | **point** | **hoverStyle**        		
The hover style for all points belonging to a series of a specific type ([line](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonSeriesSettings/#line), [area](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonSeriesSettings/#area), etc.).

- **commonSeriesSettings** | **point** | [hoverStyle](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonSeriesSettings/point/hoverStyle/) 		
The hover style for all series points in the **Chart**.

Note that individual settings override type-specific settings which, in turn, override common settings.

	<!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
			// ...
			series: {
                point: {
                    hoverStyle: {
                        // high priority
                    }
                }
			},
			area: {
                point: {
                    hoverStyle: {
                        // middle priority
                    }
                }
			},
			commonSeriesSettings: {
                point: {
                    hoverStyle: {
                        // low priority
                    }
                }
			}
        });
    });

To choose which series elements should be highlighted when a user pauses on a series point, specify the [hoverMode](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/point/#hoverMode) option. Just like **hoverStyle** above, this option can be specified for all points belonging to an individual series, or for all points belonging to a series of a specific type, or for all series points in the **Chart**.

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
			// ...
			commonSeriesSettings: {
                point: {
                    hoverMode: 'allArgumentPoints' // or 'onlyPoint' | 'allSeriesPoints' | 'none'
                }
			}
        });
    });

<a href='https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/HoverMode/jQuery/Light/' class='button orange small fix-width-155' target='_blank'>View Demo</a>

#####See Also#####
- [Series Hover](/Documentation/Guide/Widgets/Chart/Series/Hover/)
- [Chart API Reference](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/)

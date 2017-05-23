[note] [Bar-like](/Documentation/Guide/Widgets/Chart/Series_Types/#Bar), [financial](/Documentation/Guide/Widgets/Chart/Series_Types/#Candle_Stick), [Bubble](/Documentation/Guide/Widgets/Chart/Series_Types/#Bubble) and [Range Bar](/Documentation/Guide/Widgets/Chart/Series_Types/#Range_Bar) series do not contain anything besides points. Therefore, configuring points in these series is, in fact, configuring the series itself. For this reason, follow the instructions given in the [Series Selection - User Interaction](/Documentation/Guide/Widgets/Chart/Series/Selection/#User_Interaction) topic when configuring selection for points that belong to the aforementioned series.

When a user selects a series point, it changes its style to the one specified by the following objects.

- **series** | **point** | [selectionStyle](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/point/selectionStyle/)        
The selection style for all points of an individual series.

- **commonSeriesSettings** | **%seriesType%** | **point** | **selectionStyle**                
The selection style for all points belonging to a series of a specific type ([line](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonSeriesSettings/#line), [area](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonSeriesSettings/#area), etc.).

- **commonSeriesSettings** | **point** | [selectionStyle](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonSeriesSettings/point/selectionStyle/)         
The selection style for all series points in the **Chart**.

Note that individual settings override type-specific settings which, in turn, override common settings.

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            series: {
                point: {
                    selectionStyle: {
                        // high priority
                    }
                }
            },
            commonSeriesSettings: {
                area: {
                    point: {
                        selectionStyle: {
                            // middle priority
                        }
                    }
                },
                point: {
                    selectionStyle: {
                        // low priority
                    }
                }
            }
        });
    });

To choose which elements should be highlighted when a user selects a point, specify the [selectionMode](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/point/#selectionMode) option. Just like **selectionStyle**, this option can be specified for all points belonging to an individual series, or for all points belonging to a series of a specific type, or for all series points in the **Chart**.

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            commonSeriesSettings: {
                point: {
                    selectionMode: 'allArgumentPoints' // or 'onlyPoint' | 'allSeriesPoints' | 'none'
                }
            }
        });
    });

<a href='https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/Selection/jQuery/Light/' class='button orange small fix-width-155' target='_blank'>View Demo</a>

By default, only a single point can be in the selected state at a time. If you need to allow multiple points to be in this state, assign *"multiple"* to the [pointSelectionMode](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#pointSelectionMode) option.

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            pointSelectionMode: 'multiple' // or 'single'
        });
    });

<a href='https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/MultiplePointSelection/jQuery/Light/' class='button orange small fix-width-155' target='_blank'>View Demo</a>

#####See Also#####
- [Series Selection - User Interaction](/Documentation/Guide/Widgets/Chart/Series/Selection/#User_Interaction)

Error bars are used on charts to indicate an error or uncertainty in a reported measurement. They give a general idea of how precise the measurement is.

![DevExtreme HTML5 JavaScript Charts Error Bars](/Content/images/doc/17_2/ChartJS/visual_elements/error_bars.png)

Error bars can be generated either from concrete or calculated values. To generate one error bar, two values, high and low, are needed. If your data source provides concrete high and low values, assign the required data source fields to the [highValueField](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/valueErrorBar/#highValueField) and [lowValueField](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/valueErrorBar/#lowValueField) options of the [series](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/) | [valueErrorBar](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/valueErrorBar/) object.

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            dataSource: [
                { arg: 1, val: 200, highError: 5, lowError: 3 },
                // ...
            ],
            series: {
                // ...
                valueErrorBar: {
                    highValueField: 'highError',
                    lowValueField: 'lowError'
                }
            }
        });
    });

Alternatively, error bar values can be calculated according to an algorithm. In this case, choose the needed algorithm using the [type](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/valueErrorBar/#type) option and specify the value to be used in calculation using the [value](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/valueErrorBar/#value) option.

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            series: {
                // ...
                valueErrorBar: {
                    type: 'percent',
                    value: 5
                }
            }
        });
    });

If error bars should have uniform settings, you can specify them using one of the following objects.

- **commonSeriesSettings** | **%seriesType%** | **valueErrorBar**      
Settings for all error bars belonging to the series of a specific [type](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/#type) ([line](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonSeriesSettings/#line), [bar](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonSeriesSettings/#bar), etc.).
 
- **commonSeriesSettings** | [valueErrorBar](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonSeriesSettings/valueErrorBar/)      
Settings for all error bars in the **Chart**.

Note that settings for individual series override type-specific settings which, in turn, override common settings.

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            series: {
                valueErrorBar: {
                    // high priority
                }
            },
            commonSeriesSettings: {
                line: {
                    valueErrorBar: {
                        // middle priority
                    }
                },
                valueErrorBar: {
                    // low priority
                }
            }
        });
    });

For information about all options of the error bars, visit the [valueErrorBar](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/valueErrorBar/) section of the API reference.

<a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/ErrorBars/jQuery/Light/" class="button orange small fix-width-155" target="_blank">View Demo</a>

[tags]chart, error bar, valueErrorBar, highValueField, lowValueField

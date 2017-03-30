A series is a collection of related data points. 

![DevExtreme HTML5 JavaScript Charts Series](/Content/images/doc/17_1/ChartJS/visual_elements/series.png)

The most important characteristic of a series is its type. The **Chart** provides over 20 series types, and all of them are described in the [Series Types](/Documentation/Guide/Widgets/Chart/Series_Types/) article. You can specify the type of a series using its [type](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/#type) option.

	<!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
			// ...
			series: {
				// ...
				type: 'bar'
			}
        });
    });

A single **Chart** can contain several series at once. In this case, the [series](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/) option accepts an array of series objects. To enable a user to identify a series among others on the [chart legend](/Documentation/Guide/Widgets/Chart/Legend/Overview/), specify its [name](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/#name).

	<!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
			// ...
			series: [{
				// ...
				type: 'bar',
				name: 'Men'
			}, {
				// ...
				type: 'area',
				name: 'Women'
			}]
        });
    });

Objects in the **series** array specify individual settings for series. You can also specify common settings for series using the following objects.

- **commonSeriesSettings** | **%seriesType%** ([line](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonSeriesSettings/#line), [bar](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonSeriesSettings/#bar), etc.)  		
Settings for all series of a specific type.

- [commonSeriesSettings](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonSeriesSettings/) 		
Settings for all series in the **Chart**.

Note that individual settings override type-specific settings which, in turn, override common settings.

	<!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
			// ...
			series: {
				// high priority
			},
			bar: {
				// middle priority
			},
			commonSeriesSettings: {
				// low priority
			}
        });
    });

#####See Also#####
- [Bind Series to Data](/Documentation/Guide/Widgets/Chart/Data_Binding/Bind_Series_to_Data/)
- [Series Points](/Documentation/Guide/Widgets/Chart/Series_Points/Overview/)
- [Series Hover](/Documentation/Guide/Widgets/Chart/Series/Hover/)
- [Series Selection](/Documentation/Guide/Widgets/Chart/Series/Selection/)
- [Access a Series Using the API](/Documentation/Guide/Widgets/Chart/Series/Access_a_Series_Using_the_API/)

[tags]chart, overview, series type, series name, common series settings, inidividual series settings

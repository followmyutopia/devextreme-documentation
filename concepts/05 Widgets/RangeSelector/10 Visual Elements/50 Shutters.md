Shutters cover unselected ranges on a range selector. 

![ChartJS RangeSelector](/Content/images/doc/16_2/ChartJS/RangeSelectorShutters.png)

The appearance of shutters is being specified using the [shutter](/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/shutter/) configuration object. Within this object you can set a color and opacity for shutters.

	<!--JavaScript-->
	var rangeSelectorOptions = {
		// ...
		shutter: {
			color: 'powderblue',
			opacity: 0.7
		}
	};

When a color for shutters is not specified, the shutters are painted in the [color of the container](/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/#containerBackgroundColor).

[note] Shutters are available only when the [background](/Documentation/Guide/Widgets/RangeSelector/Visual_Elements/#Background) is set.

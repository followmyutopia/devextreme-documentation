For the purpose of more intelligible data visualization, scale values can be combined into ranges, each of which can be colored differently. For example, you can indicate the ranges of warm and cold temperatures.

<img src="/Content/images/doc/17_2/ChartJS/CircularGaugeRangeContainer.png" alt="DevExtreme HTML5 JavaScript Gauges  CircularGaugeRangeContainer" style="display:block; margin:0 auto" />

 To specify the ranges, assign an array of objects defining these ranges to the [ranges](/Documentation/ApiReference/Data_Visualization_Widgets/dxCircularGauge/Configuration/rangeContainer/ranges/) option of the **rangeContainer** configuration object.

	<!--JavaScript-->var gaugeOptions = {
        rangeContainer: {
            ranges: [
				{ startValue: -50, endValue: -30, color: 'midnightblue' },
				{ startValue: -30, endValue: -15, color: 'blue' }
				// ...
			]
        }
    };

As you can see from the code above, each range is defined by its start and end values and, additionally, a color.

Besides the options that apply to ranges, there are several options that apply to the range container itself. They can be configured within the **rangeContainer** object. A brief overview of them is explained below.

- **Appearance**		
If you do not need to specify a particular color for each range, you can apply one of the [predefined palettes](/Documentation/Guide/Widgets/Common/Data_Visualization_Widgets/Appearance_Customization/#Palettes) using the [palette](/Documentation/ApiReference/Data_Visualization_Widgets/dxCircularGauge/Configuration/rangeContainer/#palette) option. However, when a specific color is assigned to a range, it overrides the color specified by the palette. If a range container does not have any ranges, or the ranges do not cover the whole range container, you can specify a color for the range container itself. For this purpose, use the [backgroundColor](/Documentation/ApiReference/Data_Visualization_Widgets/dxCircularGauge/Configuration/rangeContainer/#backgroundColor) option. In addition, you can change the [width](/Documentation/ApiReference/Data_Visualization_Widgets/dxCircularGauge/Configuration/rangeContainer/#width) of the range container or its [offset](/Documentation/ApiReference/Data_Visualization_Widgets/dxCircularGauge/Configuration/rangeContainer/#offset) from a scale using the corresponding options.

- **Geometry**	
You can specify how to locate the range container relatively to the scale. To do this, specify the [orientation](/Documentation/ApiReference/Data_Visualization_Widgets/dxCircularGauge/Configuration/rangeContainer/#orientation) option.

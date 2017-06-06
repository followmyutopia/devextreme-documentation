Gauge bars display [values](/Documentation/ApiReference/Data_Visualization_Widgets/dxBarGauge/Configuration/#values) on a bar gauge. Each bar is located on a separate circular track and indicates one value.

<img src="/Content/images/doc/17_2/ChartJS/GaugeBars.png" alt="DevExtreme HTML5 JavaScript Gauges dxBarGauge BarGauge GaugeBars" style="display:block; margin:0 auto" />

There are several options for customizing the bar's appearance and arrangement. A brief overview of them is explained below.

- **Color**		
Although you cannot color each bar explicitly, you can use a palette instead. A number of [predefined palettes](/Documentation/Guide/Widgets/Common/Data_Visualization_Widgets/Appearance_Customization/#Palettes) are available for this purpose. In addition, you can specify your own palette by assigning an array of colors to the [palette](/Documentation/ApiReference/Data_Visualization_Widgets/dxBarGauge/Configuration/#palette) option. The background color can be specified in addition to the bar color. The bar's background is the remaining segment of the bar's track. It can be colored using the [backgroundColor](/Documentation/ApiReference/Data_Visualization_Widgets/dxBarGauge/Configuration/#backgroundColor) option.

- **Geometry and Arrangement**	
You can change the shape of a gauge using the [geometry](/Documentation/ApiReference/Data_Visualization_Widgets/dxBarGauge/Configuration/geometry/) option. The radius of the gauge can also be changed. Use the [relativeInnerRadius](/Documentation/ApiReference/Data_Visualization_Widgets/dxBarGauge/Configuration/#relativeInnerRadius) option to do this. In addition, you can separate the distance between gauge bars using the [barSpacing](/Documentation/ApiReference/Data_Visualization_Widgets/dxBarGauge/Configuration/#barSpacing) option.
Values and subvalues are indicated on the gauge scale that is divided by scale ticks. These ticks can be major or minor.

<img src="/Content/images/doc/19_2/ChartJS/CircularGaugeScaleTicks.png" alt="DevExtreme HTML5 JavaScript Gauges  CircularGaugeScaleTicks" style="display:block; margin:0 auto" />

To configure major and minor scale ticks, use the **scale**.[tick](/Documentation/ApiReference/Data_Visualization_Widgets/dxCircularGauge/Configuration/scale/tick/) and **scale**.[minorTick](/Documentation/ApiReference/Data_Visualization_Widgets/dxCircularGauge/Configuration/scale/minorTick/) configuration objects, respectively.

	<!--JavaScript-->var gaugeOptions = {
		scale: {
			tick: {
				// ...
			},
			minorTick: {
				// ...
			}
		}
    };

Major ticks are visible by default. To display minor ticks, you need to set the **minorTick**.**visible** option to **true**. You can change the visibility of the major ticks using the same option within the **tick** configuration object.

By default, scale ticks are generated automatically. If you are not satisfied with the automatically generated ticks, you can specify a custom interval for major and minor ticks. To do this, use the [tickInterval](/Documentation/ApiReference/Data_Visualization_Widgets/dxCircularGauge/Configuration/scale/#tickInterval) and [minorTickInterval](/Documentation/ApiReference/Data_Visualization_Widgets/dxCircularGauge/Configuration/scale/#minorTickInterval) options, respectively.

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/Gauges/ScaleMinorTicks/jQuery/Light/"
}

If neither automatically generated ticks nor ticks with a custom interval fit your requirements, you can place major and minor ticks at specific scale values. Assign an array of required values to the [customTicks](/Documentation/ApiReference/Data_Visualization_Widgets/dxCircularGauge/Configuration/scale/#customTicks) or [customMinorTicks](/Documentation/ApiReference/Data_Visualization_Widgets/dxCircularGauge/Configuration/scale/#customMinorTicks) option.

	<!--JavaScript-->var gaugeOptions = {
		scale: {
			customTicks: [4, 42, 85, 36, 14],
			customMinorTicks: [24, 61, 9, 12, 95]
		}
    };

In addition, you can specify the color, length and width of major and minor ticks using the corresponding options of the **tick** or **minorTick** configuration objects.
Values and subvalues are indicated on the gauge scale that is divided by scale ticks. These ticks can be major or minor.

<img src="/Content/images/doc/17_1/ChartJS/LinearGaugeScaleTicks.png" alt="DevExtreme HTML5 JavaScript Gauges LinearGaugeScaleTicks" style="display:block; margin:0 auto" />

To configure major and minor scale ticks, use the **scale** | [tick](/Documentation/ApiReference/Data_Visualization_Widgets/dxLinearGauge/Configuration/scale/tick/) and **scale** | [minorTick](/Documentation/ApiReference/Data_Visualization_Widgets/dxLinearGauge/Configuration/scale/minorTick/) configuration objects, respectively.

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

Major ticks are visible by default. To display minor ticks, you need to set the **minorTick** | **visible** option to *true*. You can change the visibility of the major ticks using the same option within the **tick** configuration object.

By default, scale ticks are generated automatically. Since ticks are accompanied by [scale labels](/Documentation/Guide/Widgets/LinearGauge/Visual_Elements/#Scale_Labels), an optimum tick interval is selected so that the labels do not overlap each other. To turn off automatic tick arrangement, set the **scale** | **label** | **overlappingBehavior** | [useAutoArrangement](/Documentation/ApiReference/Data_Visualization_Widgets/dxLinearGauge/Configuration/scale/label/overlappingBehavior/#useAutoArrangement) option to *false*. 

If you are not satisfied with the automatically generated ticks, you can specify a custom interval for major and minor ticks. To do this, use the [tickInterval](/Documentation/ApiReference/Data_Visualization_Widgets/dxLinearGauge/Configuration/scale/#tickInterval) and [minorTickInterval](/Documentation/ApiReference/Data_Visualization_Widgets/dxLinearGauge/Configuration/scale/#minorTickInterval) options, respectively.

[note] To arrange ticks precisely with a specified tick interval, set the **useAutoArrangement** option to *false*. Otherwise, the specified tick interval will be ignored, but only if arranging ticks with this interval leads to label overlap.

	<!--JavaScript-->var gaugeOptions = {
		scale: {
			tickInterval: 10,
			minorTickInterval: 2,
			label: {
				overlappingBehavior: {
					useAutoArrangement: false
				}
			}
		}
    };

<a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/Gauges/ScaleCustomTickInterval/jQuery/Light/" class="button orange small fix-width-155" style="margin-right:5px;" target="_blank">View Demo</a>

If neither automatically generated ticks nor ticks with a custom interval fit your requirements, you can place major and minor ticks at specific scale values. Assign an array of required values to the [customTicks](/Documentation/ApiReference/Data_Visualization_Widgets/dxLinearGauge/Configuration/scale/#customTicks) or [customMinorTicks](/Documentation/ApiReference/Data_Visualization_Widgets/dxLinearGauge/Configuration/scale/#customMinorTicks) option.

	<!--JavaScript-->var gaugeOptions = {
		scale: {
			customTicks: [4, 42, 85, 36, 14],
			customMinorTicks: [24, 61, 9, 12, 95]
		}
    };

<a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/Gauges/ScaleCustomTickValues/jQuery/Light/" class="button orange small fix-width-155" style="margin-right:5px;" target="_blank">View Demo</a>

In addition, you can specify the color, length and width of major and minor ticks using the corresponding options of the **tick** or **minorTick** configuration objects.
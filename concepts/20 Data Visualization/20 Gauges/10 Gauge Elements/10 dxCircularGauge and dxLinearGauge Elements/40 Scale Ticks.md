Values and subvalues are indicated on a gauge scale that is divided by scale ticks. These ticks can be major or minor.

<img src="/Content/images/doc/16_1/ChartJS/GaugesScaleTicks.png" alt="ChartJS GaugesScaleTicks" style="display:block; margin:0 auto" />

To configure major and minor scale ticks, use the **scale** | [tick](/Documentation/ApiReference/Data_Visualization_Widgets/dxCircularGauge/Configuration/scale/tick/) and **scale** | [minorTick](/Documentation/ApiReference/Data_Visualization_Widgets/dxCircularGauge/Configuration/scale/minorTick/) configuration objects, respectively.

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

By default, scale ticks are generated automatically. Since ticks are accompanied by [scale labels](/Documentation/Guide/Data_Visualization/Gauges/Gauge_Elements/#Gauges_Gauge_Elements_dxCircularGauge_and_dxLinearGauge_Elements_Scale_Labels), an optimum tick interval is selected so that the labels do not overlap each other. To turn off automatic tick arrangement, set the [useTicksAutoArrangement](/Documentation/ApiReference/Data_Visualization_Widgets/dxLinearGauge/Configuration/scale/tick/#useTicksAutoArrangement) option to *false*. 

If you are not satisfied with the automatically generated ticks, you can specify a custom interval for major and minor ticks. To do this, use the **tickInterval** option of the **tick** or **minorTick** objects, respectively.

[note] To arrange ticks precisely with a specified tick interval, set the **useTicksAutoArrangement** option to *false*. Otherwise, the specified tick interval will be ignored, but only if arranging ticks with this interval leads to label overlap.

	<!--JavaScript-->var gaugeOptions = {
		scale: {
			tickInterval: 10,
			minorTickInterval: 2
		}
    };

If neither automatically generated ticks nor ticks with a custom interval fit your requirements, you can place major and minor ticks at specific scale values. Assign an array of required values to the **customTicks** or **customMinorTicks** option.

	<!--JavaScript-->var gaugeOptions = {
		scale: {
			customTicks: [4, 42, 85, 36, 14],
			customMinorTicks: [24, 61, 9, 12, 95]
		}
    };

In addition, you can specify the color, length and width of major and minor ticks using the corresponding options of the **tick** or **minorTick** configuration objects.
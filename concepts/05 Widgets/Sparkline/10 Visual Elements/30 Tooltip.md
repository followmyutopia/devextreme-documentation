A tooltip is a small popup rectangle that contains information about values represented by a sparkline. The tooltip appears when a user hovers the mouse pointer over a sparkline.

![DevExtreme ChartJS Sparkline](/Content/images/doc/16_2/ChartJS/SparklineTooltip.png)

Tooltips are configured using fields of the [tooltip](/Documentation/ApiReference/Data_Visualization_Widgets/dxSparkline/Configuration/tooltip/) object. By default, they are enabled. However, if your scenario requires you to change the visibility of the tooltip, use the [enabled](/Documentation/ApiReference/Data_Visualization_Widgets/dxSparkline/Configuration/tooltip/#enabled) field of the **tooltip** object.

	<!--JavaScript-->var sparklineOptions = {
		tooltip: {
			enabled: true // false
		},
		// ...
	};

Although by default the tooltip displays information about extreme sparkline values, you can configure it to present any information you may find useful. To customize the contents of a tooltip, implement the [customizeTooltip](/Documentation/ApiReference/Data_Visualization_Widgets/dxSparkline/Configuration/tooltip/#customizeTooltip) function. This function must return an object with the **text** field specified.

	<!--JavaScript-->var sparklineOptions = {
		tooltip: {
			customizeTooltip: function (info) {
				return {
					text: '...' // the required text is specified here
				}
			},
			// ...
		},
		// ...
	};

Furthermore, there is a number of additional options specifying the appearance of the tooltip. All of them are set in the **tooltip** configuration object. A structured overview of these options is given in the following list.

* **Color**			
You can specify the color of the tooltip using the [color](/Documentation/ApiReference/Data_Visualization_Widgets/dxSparkline/Configuration/tooltip/#color) option.

* **Font Settings**			
To change the font of the text displayed by the tooltip, use fields of the [font](/Documentation/ApiReference/Data_Visualization_Widgets/dxSparkline/Configuration/tooltip/font/) object.

* **Border Appearance**		
You can change the visibility, color, width and other settings of the tooltip border using fields of the [border](/Documentation/ApiReference/Data_Visualization_Widgets/dxSparkline/Configuration/tooltip/border/) configuration object.

* **Shadow**		
The tooltip is displayed casting a small shadow. To specify its blurriness, opacity, color and other settings, use [shadow](/Documentation/ApiReference/Data_Visualization_Widgets/dxSparkline/Configuration/tooltip/shadow/) object fields.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/charts-sparklines-simple_sparklines" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>
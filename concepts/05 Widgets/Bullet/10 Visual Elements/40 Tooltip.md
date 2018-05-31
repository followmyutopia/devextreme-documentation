A tooltip is a small popup rectangle containing information about the values of a bullet graph. The tooltip appears when a user hovers the mouse pointer over the bullet graph.

![DevExtreme ChartJS BulletChart BulletGraph](/Content/images/doc/18_2/ChartJS/BulletTooltip.png)

Tooltips are configured using fields of the [tooltip](/Documentation/ApiReference/Data_Visualization_Widgets/dxBullet/Configuration/tooltip/) object. By default, they are enabled. However, if your scenario requires you to change the visibility of the tooltip, use the [enabled](/Documentation/ApiReference/Data_Visualization_Widgets/dxSparkline/Configuration/tooltip/#enabled) field of the **tooltip** object.

	<!--JavaScript-->var bulletOptions = {
		tooltip: {
			enabled: true // false
		},
		// ...
	};

Although by default the tooltip displays information about primary and the target values, you can configure it to represent any information you may find useful. To customize the contents of the tooltip, implement the [customizeTooltip](/Documentation/ApiReference/Data_Visualization_Widgets/dxBullet/Configuration/tooltip/#customizeTooltip) function. This function must return an object with the **text** field specified.

	<!--JavaScript-->var bulletOptions = {
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
You can specify the color of the tooltip using the [color](/Documentation/ApiReference/Data_Visualization_Widgets/dxBullet/Configuration/tooltip/#color) option.

* **Font Settings**			
To change the font of the text displayed by the tooltip, use fields of the [font](/Documentation/ApiReference/Data_Visualization_Widgets/dxBullet/Configuration/tooltip/font/) object.

* **Border Appearance**		
You can change the visibility, color, width and other settings of the tooltip border using fields of the [border](/Documentation/ApiReference/Data_Visualization_Widgets/dxBullet/Configuration/tooltip/border/) configuration object.

* **Shadow**		
The tooltip is displayed casting a small shadow. To specify its blurriness, opacity, color and other settings, use [shadow](/Documentation/ApiReference/Data_Visualization_Widgets/dxBullet/Configuration/tooltip/shadow/) object fields.
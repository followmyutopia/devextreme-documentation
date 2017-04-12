A zero level line indicates zero on a bullet graph. It serves as a starting point to the [bullet bar](/Documentation/Guide/Widgets/Bullet/Visual_Elements/#Bullet_Bar).

![DevExtreme ChartJS BulletChart BulletGraph](/Content/images/doc/17_1/ChartJS/BulletZeroLine.png)

By default, the zero level line is visible. However, in certain scenarios, you may need to change its visibility. For this purpose, use the [showZeroLevel](/Documentation/ApiReference/Data_Visualization_Widgets/dxBullet/Configuration/#showZeroLevel) option.

	<!--JavaScript-->var bulletOptions = {
		showZeroLevel: true // false
		// ...
	};

[note]For the zero level line to be displayed, the zero value must fall in the scale range specified by the [startScaleValue](/Documentation/ApiReference/Data_Visualization_Widgets/dxBullet/Configuration/#startScaleValue) and [endScaleValue](/Documentation/ApiReference/Data_Visualization_Widgets/dxBullet/Configuration/#endScaleValue) options.

When visible, the zero level line has the same color as the [target line](/Documentation/Guide/Widgets/Bullet/Visual_Elements/#Target_Line). This color is specified by the [targetColor](/Documentation/ApiReference/Data_Visualization_Widgets/dxBullet/Configuration/#targetColor) option.

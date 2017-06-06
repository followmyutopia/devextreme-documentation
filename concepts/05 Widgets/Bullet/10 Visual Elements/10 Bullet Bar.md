A bullet bar is a horizontal bar that indicates a bullet chart's primary value.

![DevExtreme ChartJS BulletChart BulletGraph](/Content/images/doc/17_2/ChartJS/BulletBar.png)

To specify the value indicated by the bullet bar, assign it to the [value](/Documentation/ApiReference/Data_Visualization_Widgets/dxBullet/Configuration/#value) option.

	<!--JavaScript-->var bulletOptions = {
		value: 42
		// ...
	};

This value must belong to a range determined by the [startScaleValue](/Documentation/ApiReference/Data_Visualization_Widgets/dxBullet/Configuration/#startScaleValue) and [endScaleValue](/Documentation/ApiReference/Data_Visualization_Widgets/dxBullet/Configuration/#endScaleValue) options. When you arrange several **Bullet** widgets in a column, set the same range for them so that their bullet bars can be compared visually.

    <!--JavaScript-->var bulletOptions = {
        value: 42,
        startScaleValue: -100,
        endScaleValue: 50,
        // ...
    };

[note]If you do not specify the scale range, the start scale value is 0 and the end scale value is calculated automatically depending on [primary](/Documentation/ApiReference/Data_Visualization_Widgets/dxBullet/Configuration/#value) and [target](/Documentation/ApiReference/Data_Visualization_Widgets/dxBullet/Configuration/#target) values.

To distinguish positive and negative values visually, the **Bullet** widget features a [zero level line](/Documentation/Guide/Widgets/Bullet/Visual_Elements/#Zero_Level_Line). Positive values are drawn to the right from this line; negative ones - to the left.

You can change the bar color using the [color](/Documentation/ApiReference/Data_Visualization_Widgets/dxBullet/Configuration/#color) option.
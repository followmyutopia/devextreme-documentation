A target line is a vertical line that indicates a target value. According to the concept of a bullet chart, the target value is supposed to be reached by the primary value, which is indicated on a bullet chart by the [bullet bar](/Documentation/Guide/Widgets/Bullet/Visual_Elements/#Bullet_Bar).

![DevExtreme ChartJS BulletChart BulletGraph](/Content/images/doc/17_1/ChartJS/BulletTargetLine.png)

To specify the target value, set the [target](/Documentation/ApiReference/Data_Visualization_Widgets/dxBullet/Configuration/#target) option of the main configuration object.

	<!--JavaScript-->var bulletOptions = {
		target: 50,
		// ...
	};

Additionally, you can customize the appearance of the target line. Particularly, you can specify its color using the [targetColor](/Documentation/ApiReference/Data_Visualization_Widgets/dxBullet/Configuration/#targetColor) option, and its width using the [targetWidth](/Documentation/ApiReference/Data_Visualization_Widgets/dxBullet/Configuration/#targetWidth) option.
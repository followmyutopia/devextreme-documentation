Ticks divide an axis into sections by a step that is determined automatically, or by the [tickInterval](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/argumentAxis/tickInterval/) and [axisDivisionFactor](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/argumentAxis/#axisDivisionFactor) options of an axis. Ticks improve the comprehension of chart data. 

![Axis Ticks](/Content/images/doc/19_1/ChartJS/Polar_Ticks.png)

Ticks are child elements of the argument and value axes. To change their settings, define the [tick](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/commonAxisSettings/tick/) object within the **argumentAxis**, **valueAxis** or **commonAxisSettings** configuration object.

	<!--JavaScript-->var polarChartOptions = {
		commonAxisSettings: {
			tick: {
				visible: true,
			    color: 'black'
			}
		},
		// ...
	};


The following list provides an overview of tick options.

* **Visibility**		
To make ticks visible/invisible, use the [tick](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/commonAxisSettings/tick/) object's [visible](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/commonAxisSettings/tick/#visible) property.

* **Appearance**		
You can change the ticks' default dimensions, color and opacity using the [width](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/commonAxisSettings/tick/#width), [length](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/commonAxisSettings/tick/#length), [color](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/commonAxisSettings/tick/#color) and [opacity](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/commonAxisSettings/tick/#opacity) properties of the [tick](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/commonAxisSettings/tick/) object.

The **Chart** widget can include a legend - an explanatory component that helps a user distinguish and identify series. Each series is represented by an item on the legend. An item marker identifies the series color. An item label displays the series title.

![Legend](/Content/images/doc/16_1/ChartJS/Legend.png)

To change the default legend appearance, use the properties of the [legend](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/legend/) configuration object. The following code demonstrates how to access it.

	<!--JavaScript-->var chartOptions = {
		legend: {
			//...
		},
		//...
	};

The following list provides an overview of the **legend** object options.

* **Visibility**		
To change the legend's visibility, use the **legend** | [visible](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/legend/#visible) property.

* **Location**		
You can place a legend inside or outside the chart's plot. To specify the required place, use the legend's [position](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/legend/#position) property. To specify the location of the legend, use its [verticalAlignment](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/legend/?#verticalAlignment) and [horizontalAlignment](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/legend/#horizontalAlignment) properties. In addition, you can change the interval between the legend and neighboring chart elements using the [margin](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/legend/margin/) property.

* **Border**		
Make the legend's border visible by setting the **visible** property of the legend's [border](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/legend/border/) object. In addition, you can change the border's width, corner radius and color, using the **width**, **cornerRadius** and **color** properties of the **border** configuration object.

* **Items Layout**		
Items can be placed in a row or a column. To specify how to arrange legend items, use the [orientation](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/legend/#orientation) option. There can also be several rows and columns in a legend. To set the number of rows and columns to be used, use the legend's [rowCount](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/legend/#rowCount) and [columnCount](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/legend/#columnCount) properties. These rows and columns must be placed within a legend separated by a space between each other, and from the legend's border. To specify the spacing parameters, use the legend's [rowItemSpacing](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/legend/#rowItemSpacing), [columnItemSpacing](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/legend/#columnItemSpacing), [paddingLeftRight](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/legend/#paddingLeftRight) and [paddingTopBottom](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/legend/#paddingTopBottom) properties. In addition, you can specify how item labels must be located relative to item markers. For this purpose, change the **legend** |  [itemTextPosition](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/legend/#itemTextPosition) property.

* **Items Appearance**		
You can enlarge or shrink item markers. To do this, use the [markerSize](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/legend/#markerSize) property. In addition, you can specify the required font for item labels. For this purpose, use the legend's [font](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/legend/font/) property, which represents an object that allows you to set font options such as **color**, **opacity**, **family** and **size**.

* **Hover Mode**		
You can specify whether or not to highlight the corresponding series when a legend item is hovered over. To do this, use the legend's [hoverMode](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/legend/#hoverMode) property.
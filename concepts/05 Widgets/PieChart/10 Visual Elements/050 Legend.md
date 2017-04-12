The **PieChart** widget can include a legend - an explanatory component, which helps you distinguish one series from another on the chart plot. Each series is represented on a legend by an item. An item marker identifies the color of a pie slice. An item label represents the argument of the corresponding point.

![PieChartLegend](/Content/images/doc/17_1/ChartJS/PieChartLegend.png)

You can tune the legend options within the [legend](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/legend/) configuration object. See the list below to learn information on some of these options.

* **Legend Appearance**    
To change the legend's visibility, use the [visible](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/legend/#visible) option. Set the [backgroundColor](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/legend/#backgroundColor) option to change the color of the legend background.

* **Items Arrangement**    
Legend items are displayed in columns and rows. To specify how to arrange legend items use the [orientation](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/legend/#orientation) option. To set the number of the items in a column or a row, use the [columnCount](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/legend/#columnCount) or [rowCount](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/legend/#rowCount) options. The rows and columns must be placed within a legend separated by a space from one another and from the legend's border. To specify this spacing, use the [columnItemSpacing](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/legend/#columnItemSpacing), [rowItemSpacing](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/legend/#rowItemSpacing), [paddingLeftRight](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/legend/#paddingLeftRight) and [paddingTopBottom](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/legend/#paddingTopBottom) options.

* **Items Appearance**    
Change the [itemTextPosition](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/legend/#itemTextPosition) option to set a suitable location of the item text relative to the item marker. Specify the [markerSize](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/legend/#markerSize) option to make an item marker smaller or bigger.

* **Location**    
A legend can be located in different places on a chart. You can adjust a legend's position using the [horizontaAlignment](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/legend/#horizontalAlignment) and [verticalAlignment](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/legend/#verticalAlignment) options. Also, spacing between a legend and neighboring chart elements can be specified with the [margin](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/legend/#margin) option.

* **Border**    
Change the visibility of the legend borders by specifying the **visible** field within the **legend** | [border](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/legend/border/) object. You can round border corners with the **cornerRadius** option and alter the dash style of the legend border using the **dashStyle** option. In addition, a custom color and width can be set using the border's **color** and **width** options.

* **Font Settings**    
To customize the appearance of the legend text, define the font options within the [font](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/legend/font/) configuration object.

* **Hover Options**    
Pie slices can be highlighted when the corresponding legend item is hovered over. To manage this behaviour, use the legend's [hoverMode](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/legend/#hoverMode) option.

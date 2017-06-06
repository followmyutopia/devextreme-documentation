A tooltip is a small pop-up rectangle that, by default, displays the value of the series point hovered over. It is, however, possible to display other information in a tooltip by customizing the text of a tooltip or its appearance as required.

![PieChartTooltip](/Content/images/doc/17_2/ChartJS/PieChartTooltip.png)

Tooltips are not enabled by default. To enable them, set the **enabled** option of the [tooltip](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/tooltip/) object to *true*.

    <!--JavaScript-->var pieChartOptions = {
        // ...
		tooltip: {
			enabled: true
		}
    };

You can change the default tooltip settings by defining the options within the **tooltip** configuration object. Some of these options are categorized and listed below.

* **Appearance**    
You can paint a tooltip in the color of your choice with the tooltip's [color](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/tooltip/#color) option. To set the distance between the text and borders of a tooltip, use the [paddingLeftRight](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/tooltip/#paddingLeftRight) and [paddingTopBottom](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/tooltip/#paddingTopBottom) options. In addition, you can alter the length of the tooltip's arrow by changing the [arrowLength](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/tooltip/#arrowLength) option.

* **Text Customization and Formatting**    
By default, tooltips show the point values without formatting. Set the [argumentFormat](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/tooltip/#argumentFormat) option to format the argument, and the [format](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/tooltip/#format) option to format the value. In addition, you can display the slice value as a percentage with a specified precision. For this purpose, use the **format** | **percentPrecision** option. When text customizing is required, assign a function specifying the text to be shown to the [customizeTooltip](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/tooltip/#customizeTooltip) option. Learn more in the [Data Formatting](/Documentation/Guide/Widgets/Common/Data_Visualization_Widgets/Data_Formatting/) topic.

* **Font Settings**    
To customize the appearance of the tooltip text, define the font options within the [font](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/tooltip/font/) configuration object.

* **Tooltip Event Related Functions**    
You can perform specific actions when showing/hiding a tooltip. For this purpose, assign a function to the [onTooltipShown](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/#onTooltipShown) and/or [onTooltipHidden](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/#onTooltipHidden) options. Note that these options are located in the root of the chart's configuration object

You can force a point's tooltip to show or hide using the [showTooltip()](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Chart_Elements/Point/Methods/#showTooltip) or [hideTooltip()](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Chart_Elements/Point/Methods/#hideTooltip) method. To hide the tooltip without accessing a point, call the [hideTooltip()](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Methods/#hideTooltip) method of the chart's [instance](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Methods/#instance).

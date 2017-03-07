A tooltip is a small pop-up rectangle that displays information about a [series point](/Documentation/Guide/Data_Visualization/Charts/Chart_Elements/#Series_Points) when a user hovers the cursor over it. By default, a tooltip indicates the point's value. However, it is possible to display other information. In addition, you can customize the appearance of a tooltip or its text.

![Tooltip](/Content/images/doc/16_1/ChartJS/Tooltip.png)

To set tooltip options, use the [tooltip](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/tooltip/) configuration object of your chart. If tooltips are disabled, enable them by setting the tooltip's [enabled](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/tooltip/#enabled) property to _true_.

	<!--JavaScript-->var chartOptions = {
        // ...
		tooltip: {
			enabled: true
		}
	};

You can specify the tooltip appearance by changing options listed below.

* **Color**		
By default, a tooltip has the color of the series that is currently hovered over. You can set a custom color for all tooltips in the chart. For this purpose, use the [color](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/tooltip/#color) property of the **tooltip** configuration object.

* **Size**		
The tooltip's size is determined based on the text size and text padding values (see below). However, the size of the tooltip's arrow can be changed directly, using the [arrowLength](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/tooltip/#arrowLength) property of the **tooltip** configuration object.

* **Text Positioning**		
Align text within tooltips as required using the [paddingLeftRight](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/tooltip/#paddingLeftRight) and [paddingTopBottom](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/tooltip/#paddingTopBottom) properties of the **tooltip** configuration object.

* **Text Customization and Formatting**		
By default, tooltips represent point values. You can change the way these values are shown. For this purpose, use [format](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/tooltip/#format) tooltip property. If required, you can set a custom text to be displayed by tooltips. For this purpose, assign a function specifying the text to be shown to the [customizeTooltip](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/tooltip/#customizeTooltip) option of the **tooltip** object. For details on formatting, refer to the [Data Formatting](/Documentation/Guide/Data_Visualization/Common/Data_Formatting/) help section.

* **Font Settings**		
Use the **tooltip** object's [font](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/tooltip/font/) property to specify the required font for the tooltip text.

* **Tooltip API**		
You can show and hide tooltips in code using [showTooltip()](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Chart_Elements/Point/Methods/#showTooltip) and [hideTooltip()](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Methods/#hideTooltip) methods.

In [multi-series charts](/Documentation/Guide/Data_Visualization/Charts/Chart_Elements/#Series), you can use a shared tooltip. See the [shared](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/tooltip/#shared) option description for more information.
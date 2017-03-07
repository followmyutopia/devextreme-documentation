You can handle the click on a data point of any type (point, bar, pie slice, etc.). To do this, implement a callback function and assign it to the [onPointClick](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#onPointClick) option of the chart's configuration object.

	<!--JavaScript-->var chartOptions = {
		onPointClick: function(info){
			//...
		}
	};

The **onPointClick** callback function accepts an object that contains information on the click event. Fields of this object are described in the **onPointClick** option description of [Chart](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#onPointClick) and [PieChart](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/#onPointClick). Among these fields, you can find the clicked point. An object that represents this point is described in the [Point](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Chart_Elements/Point/) section.
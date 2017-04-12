A control bar is a map element that supplies a user with the capability of navigating a map. This element resides on the left side of the map. The control bar consists of a pan control and a zoom bar, which provide the [panning](/Documentation/Guide/Widgets/VectorMap/End-User_Interaction/#Panning) and [zooming](/Documentation/Guide/Widgets/VectorMap/End-User_Interaction/#Zooming) capabilities to the user.

![DevExtreme ChartJS VectorMap](/Content/images/doc/17_1/ChartJS/ControlBar.png)

Control bar settings are specified using fields of the [controlBar](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/controlBar/) object.

	<!--JavaScript-->var vectorMapOptions = {
		// ...
		controlBar: {
			// control bar settings are specified here
		}
	};

The following list provides an overview of control bar properties configurable within this object.

* **Visibility**		
The control bar is visible by default, but if you need to hide it, set the [enabled](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/controlBar/#enabled) option to *false*.

* **Color**		
You can specify individual colors for the outline and the inner area of the control bar elements using the [borderColor](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/controlBar/#borderColor) and [color](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/controlBar/#color) options respectively.
You can perform specific actions when the zoom factor has been changed. Implement a callback function performing these actions and assign it to the **onZoomFactorChanged** option. When implementing the function, use the object passed to it as the parameter. Fields of this object are described in the [onZoomFactorChanged](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/#onZoomFactorChanged) option description. Among these fields, you can find the updated zoom factor.

	<!--JavaScript-->var vectorMapCfg = {
		// ...
		onZoomFactorChanged: function (info) {
			// specify required actions here
		}
	};
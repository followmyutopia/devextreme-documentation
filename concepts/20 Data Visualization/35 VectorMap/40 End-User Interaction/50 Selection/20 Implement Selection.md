In a common scenario, a map element must become selected when a user clicks it. Selection in this scenario is implemented using the **onClick** callback function. For more information on handling the click event for map elements, refer to the [Area Click](/Documentation/Guide/Data_Visualization/VectorMap/End-User_Interaction/#Click_Handling/Area_Click) and [Marker Click](/Documentation/Guide/Data_Visualization/VectorMap/End-User_Interaction/#Click_Handling/Marker_Click) topics. The following code shows how to enable a user to select/deselect map elements by a click.

	<!--JavaScript-->var vectorMapCfg = {
		// ...
        onClick: function (info) {
            var clickedElement = info.target;
            if (clickedElement != null)
                clickedElement.selected(!clickedElement.selected());
        }
	};

In this code snippet, the **selected** method of a map element is first called without arguments to obtain the current selection state. Then, the same method is called once more, this time with the reverted value of the selection state passed as the argument.
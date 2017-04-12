A filter row is a grid element that enables users to [filter](/Documentation/Guide/Widgets/DataGrid/Filtering/) grid records. The filter row consists of cells that correspond to a grid column. A filter row cell contains a filter operation chooser represented by a magnifying glass icon. Hovering over this element opens a list that permits users to change the filter applied to a column. Operations available in this list are specified by the [filterOperations](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#filterOperations) property of a particular column.

![DevExtreme DataGrid FilterRow](/Content/images/doc/17_1/DataGrid/FilterRow.png)

To configure the filter row, use [filterRow](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/filterRow/) object fields.


	<!--JavaScript-->$("#gridContainer").dxDataGrid({
		// ...
		filterRow: {
			// Filter row is configured here
		}
    });

By default, the filter row is hidden. To make it visible, set the [visible](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/filterRow/#visible) property of the **filterRow** object to *true*.

	<!--JavaScript-->$("#gridContainer").dxDataGrid({
		// ...
		filterRow: {
			visible: true
		}
    });

A filter row can have additional elements, e.g., when a column has a *'date'* or *'boolean'* [dataType](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#dataType), or a column is declared as a [lookup](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/lookup/) column. The image below illustrates a filter row with a date and a boolean cell. The date cell contains a calendar that helps choose a date value, while the boolean cell is a select box containing two items: *true* and *false*.

![DevExtreme DataGrid FilterRow](/Content/images/doc/17_1/DataGrid/FilterRow_SpecificCells.png)

Configurable features of the filter row, which can be specified within the **filterRow** object, are listed below.

* **Visibility**		
In addition to the visibility of the whole filter row, which is mentioned earlier, you can individually specify the visibility of operation choosers using the [showOperationChooser](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/filterRow/#showOperationChooser) property.

* **Behavior**		
By default, a filter applies automatically when a user finishes typing a string in a filter row cell. Alternatively, you can give a user the opportunity to apply a filter at the required time. To do this, assign *'onClick'* to the [applyFilter](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/filterRow/#applyFilter) option. In this case, a filter will be applied by a click on the *"Apply Filter"* button.

* **Texts**		 
You can specify required descriptions for the items appearing in the filter list using the [operationDescriptions](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/filterRow/#operationDescriptions) property. A description for the reset operation should be specified separately using the [resetOperationText](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/filterRow/#resetOperationText) property.
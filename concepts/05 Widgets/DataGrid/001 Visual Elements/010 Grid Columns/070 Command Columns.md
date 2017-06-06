Command columns are columns used for interaction with an end-user. There are three types of command columns: **editing column**, **selection column** and **adaptive column**. The **editing column** appears when the **editing** | [mode](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/editing/#mode) option is set to *"batch"* or *"form"*. The **selection column** appears when the **selection** | [mode](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/selection/#mode) option is set to *'multiple'*, provided that the [showCheckBoxesMode](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/selection/#showCheckBoxesMode) option is not *'none'*. The **adaptive column** appears when the [columnHidingEnabled](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#columnHidingEnabled) option is set to *true* and the total column width does not fit into the screen or container size.

![](/Content/images/doc/17_2/DataGrid/Command_Columns.png)

You can modify the position and width of a command column using its [visibleIndex](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#visibleIndex) and [width](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#width) options respectively. These options can be modified at runtime using the [columnOption(id, optionName, optionValue)](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#columnOptionid_optionName_optionValue). To modify options of the **selection**, **editing** or **adaptive** column, pass the "command:select", "command:edit", or "command:adaptive" string respectively to the **id** argument of this method.

[note] The default **visibleIndex** value of the **selection column** is -1. To place a column before the **selection column**, use indexes lower than -1.

The example below demonstrates how to swap command columns.

	<!--JavaScript-->dataGrid.columnOption("command:select", "visibleIndex", 999);
	dataGrid.columnOption("command:edit", "visibleIndex", -2);
	dataGrid.columnOption("command:adaptive", "visibleIndex", -1)

You can also modify cells of command columns using the [onCellPrepared](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onCellPrepared) event. If the event fires for a cell of the **selection**, **editing**, or **adaptive** column, the **column** field of the event argument object contains the **command** field holding the "select", "edit", or "adaptive" value respectively.

    <!--JavaScript-->var dataGridOptions = {
		// ...
		onCellPrepared: function(e){
			if (e.rowType == "data")
				switch(e.column.command){
					case "select":
						// Selection column cells
						break;
					case "edit":
						// Editing column cells
						break;
					case "adaptive":
						// Adaptive column cells
						break;	
				}      
		}
	}

<a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/Data_Grid/CustomizeCommandColumns/jQuery/Light/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>
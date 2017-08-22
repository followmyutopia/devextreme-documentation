A search panel is a grid element that allows a user to [search](/Documentation/Guide/Widgets/DataGrid/Filtering/#Searching) records by a search string. The search string is highlighted in the found records. The search panel can be thought of as a [filter row](/Documentation/Guide/Widgets/DataGrid/Visual_Elements/#Filter_Row) cell that applies a filter to all grid columns at once.

![DevExtreme DataGrid SearchPanel](/Content/images/doc/17_2/DataGrid/SearchPanel.png)

Searching is performed differently in columns with different [data types](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#dataType). To find a record by a numeric, boolean or date value, a user must enter the full value into the search panel. To find a record by a string value, entering a part of this value is sufficient.

To configure the search panel, use [searchPanel](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/searchPanel/) object fields.

	<!--JavaScript-->$("#gridContainer").dxDataGrid({
		// ...
		searchPanel: {
			// Search panel is configured here
		}
    });

By default, the search panel is hidden. To make it visible, set the [visible](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/searchPanel/#visible) property of the **searchPanel** object to **true**.

	<!--JavaScript-->$("#gridContainer").dxDataGrid({
		// ...
		searchPanel: {
			visible: true
		}
    });

Configurable features of the search panel are listed below. Options that control them must be specified within the **searchPanel** object. 

* **Text Highlighting**		
By default, the search string is highlighted in matched records. To disable this feature, assign **false** to the [highlightSearchText](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/searchPanel/#highlightSearchText) property.

* **Appearance**		
The width of the search panel can be adjusted using the [width](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/searchPanel/#width) property. Additionally, you can change the text displayed by an empty search panel. For this purpose, use the [placeholder](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/searchPanel/#placeholder) property.
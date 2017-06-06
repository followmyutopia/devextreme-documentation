Along with [grid columns](/Documentation/Guide/Widgets/DataGrid/Visual_Elements/#Grid_Columns), grid rows are a fundamental element in the **DataGrid** widget. A grid row is a grid element representing a structured data item. In fact, a grid can be thought of as consisting of rows and columns.

![DevExtreme DataGrid GridRows](/Content/images/doc/17_2/DataGrid/GridRows.png)

In **DataGrid**, you specify data for grid columns mostly, while grid rows are formed automatically based on the contents of data source objects. Normally, a grid row is generated for each data source object.

To identify a row, a row index is used. If [paging](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/paging/) is enabled (that is, data is divided into portions), grid rows are indexed beginning with 0 on each page. Otherwise, grid rows are indexed beginning with 0 continuously. Note that [group rows](/Documentation/Guide/Widgets/DataGrid/Visual_Elements/#Group_Rows) are counted too and thus have row indexes.

![DevExtreme DataGrid GridRows](/Content/images/doc/17_2/DataGrid/GridRows_RowIndexes.png)

There are several features of grid rows that you can configure. They are listed below.

* **Appearance**		
By default, all grid rows are displayed on a monochrome area without visual distinctions between them. If you need to distinguish one row from its neighboring rows visually, set the [rowAlternationEnabled](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#rowAlternationEnabled) option to *true*. In this case, ordinary-looking rows will alternate with slightly shaded ones. Also, grid rows can be highlighted when the mouse pointer moves over them. To enable this capability, set the [hoverStateEnabled](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#hoverStateEnabled) property to *true*. Additionally, you can change the visibility of row lines using the [showRowLines](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#showRowLines) property.

* **Customization**		
After a row has been rendered, you can apply final customizations to it. For this purpose, implement a function that handles the [rowPrepared](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Events/#rowPrepared) event and assign it to the [onRowPrepared](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onRowPrepared) property. Usually, handling the **rowPrepared** event is sufficient for grid rows to appear according to your needs. However, some scenarios require defining grid rows in full. In such a case, implement a row template and assign it to the grid's [rowTemplate](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#rowTemplate) property.
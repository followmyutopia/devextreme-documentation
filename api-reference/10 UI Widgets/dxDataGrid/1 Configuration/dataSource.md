<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--default-->null<!--/default-->
<!--type-->string | array | DataSource | DataSource configuration<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies a data source for the grid.
<!--/shortDescription-->

<!--fullDescription-->
This option accepts one of the following.

- Array of objects      
 A simple JavaScript array containing a collection of plain objects.

- URL       
 A URL to JSON data or to a service returning data in JSON format.

- [DataSource](/Documentation/ApiReference/Data_Layer/DataSource/) or its [configuration object](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/)      
 A DataSource is an object that provides a handy API for data processing. A DataSource is a stateful object, which means that it saves data processing settings and applies them each time data is loaded. All underlying data access logic of a DataSource is isolated in a Store. A Store provides an API for reading and modifying data. Unlike the DataSource, a Store is a stateless object.
    [note]If you use [data mapping](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#map) and [export](/Documentation/Guide/Widgets/DataGrid/Client-Side_Export/) data to a file, the changes made to data by the map function are ommitted in the exported file. The same occurs while [getting data of the selected rows](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#getSelectedRowsData). It is better to use [calculated columns](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#calculateCellValue) instead of mapping.


By default, a column is generated for each field of data source objects, although you can specify a custom array of columns using the [columns](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/) option. To get more information about specifying grid columns, see the [Specifying Grid Columns](/Documentation/Guide/Widgets/DataGrid/Visual_Elements/#Grid_Columns/Specifying_Grid_Columns) topic.

When using a data source that changes dynamically, the **DataGrid** widget cannot track changes. To update the widget in this case, call its [refresh()](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#refresh) method.

For more information on how to implement a data source and bind it to your grid, refer to the [Data Binding](/Documentation/Guide/Widgets/DataGrid/Data_Binding/) topic.
<!--/fullDescription-->
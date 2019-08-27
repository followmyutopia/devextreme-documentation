---
id: GridBase.Options.dataSource
type: String | Array<Object> | DataSource | DataSource_Options
default: null
---
---
##### shortDescription
Binds the widget to data.

---
#include common-dataSource-description with {
    widget_works_with: "The **DataGrid** works with collections of objects.",

    array_key_note: " and specify the [keyExpr](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#keyExpr)",

    array_view_demo: "[View Demo](/Demos/WidgetsGallery/Demo/DataGrid/BatchEditing/jQuery/Light/)",

    json_view_demo: "[View Demo](/Demos/WidgetsGallery/Demo/DataGrid/AjaxRequest/jQuery/Light/)",

    odata_key_note: " Make sure to specify the [key](/Documentation/ApiReference/Data_Layer/ODataStore/Configuration/#key).",

    odata_view_demo: "[View Demo](/Demos/WidgetsGallery/Demo/DataGrid/ODataService/jQuery/Light/)", 

    create_store_view_demo: "[View Demo](/Demos/WidgetsGallery/Demo/DataGrid/WebAPIService/jQuery/Light/)",

    custom_store_view_demo: "[View Demo](/Demos/WidgetsGallery/Demo/DataGrid/CustomDataSource/jQuery/Light/)",

    remote_operations_note: "- If the **DataGrid** widget gets data from a server, configure [remoteOperations](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/remoteOperations/) to notify the widget about data operations the server performs.",

    calculated_columns_note: "- Features like [export](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/export/) and [selection](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/selection/) work incorrectly with [mapped data objects](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#map). Use [calculated columns](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#calculateCellValue) instead of mapping."

}
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

    array_key_note: " and specify the [keyExpr](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/keyExpr.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#keyExpr')",

    array_view_demo: "[View Demo](/Demos/WidgetsGallery/Demo/DataGrid/BatchEditing/jQuery/Light/)",

    json_view_demo: "[View Demo](/Demos/WidgetsGallery/Demo/DataGrid/AjaxRequest/jQuery/Light/)",

    odata_key_note: " Make sure to specify the [key](/api-reference/30%20Data%20Layer/Store/1%20Configuration/key.md '/Documentation/ApiReference/Data_Layer/ODataStore/Configuration/#key').",

    odata_view_demo: "[View Demo](/Demos/WidgetsGallery/Demo/DataGrid/ODataService/jQuery/Light/)", 

    create_store_view_demo: "[View Demo](/Demos/WidgetsGallery/Demo/DataGrid/WebAPIService/jQuery/Light/)",

    custom_store_view_demo: "[View Demo](/Demos/WidgetsGallery/Demo/DataGrid/CustomDataSource/jQuery/Light/)",

    remote_operations_note: "- If the **DataGrid** widget gets data from a server, configure [remoteOperations](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/remoteOperations/remoteOperations.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/remoteOperations/') to notify the widget about data operations the server performs.",

    calculated_columns_note: "- Features like [export](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/export/export.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/export/') and [selection](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/selection/selection.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/selection/') work incorrectly with [mapped data objects](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/map.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#map'). Use [calculated columns](/api-reference/_hidden/GridBaseColumn/calculateCellValue.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#calculateCellValue') instead of mapping."

}
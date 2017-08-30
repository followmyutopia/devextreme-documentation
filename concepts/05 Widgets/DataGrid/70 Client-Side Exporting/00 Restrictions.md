When exporting data on the client side, the following restrictions naturally apply:

- Only XLSX files are supported.
- Exported files omit modifications made by the [cell](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#cellTemplate) and [row](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#rowTemplate) templates, [master-detail interface](/Documentation/Guide/Widgets/DataGrid/Master-Detail_Interface/), and [data mapping](/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Data_Transformation/Item_Mapping). You can use [calculated columns](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#calculateCellValue) instead of the latter.
- Excel limits the number of grouping levels to 7, while in the **DataGrid** it is unlimited.
- Excel's data format support is limited to the [predefined formats](/Documentation/ApiReference/Common/Object_Structures/format/#type) with exception of *"largeNumber", "quarterAndYear", "second", "millisecond", "quarter", "hour"*, and *"minute"*.
- Client-side exporting in **IE9** and **Safari on MacOS** is possible only through a [proxy on the server](/Documentation/Guide/Widgets/DataGrid/Client-Side_Export/#Set_Up_a_Server-Side_Proxy).


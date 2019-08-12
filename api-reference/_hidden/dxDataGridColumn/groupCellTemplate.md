<!--id-->dxDataGridColumn.groupCellTemplate<!--/id-->
===========================================================================
<!--type-->template<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies a custom template for group cells (group rows).
<!--/shortDescription-->

<!--fullDescription-->
The **cellInfo** object has the following fields:

- **data**        
Contains a data object that represents data items matching a grouping key. For example, if you group grid records by country, the following object can be obtained from the **data** field.

        <!--JavaScript-->{
            key: "Spain", // The name of a country
            items: [      // Data source objects corresponding to the key
                { ... }, 
                { ... },
                // ...
            ]
        }

#####See Also#####
- [Custom Templates](/Documentation/Guide/Widgets/Common/Templates/#Custom_Templates)
- [Default Templates](/Documentation/Guide/Widgets/Common/Templates/#Default_Templates)
<!--/fullDescription-->
<!--typeFunctionParamName1-->cellElement<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->dxElement<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
#include common-ref-elementparam with { element: "current group cell" }
<!--/typeFunctionParamDescription1-->

<!--typeFunctionParamName2-->cellInfo<!--/typeFunctionParamName2-->
<!--typeFunctionParamType2-->Object<!--/typeFunctionParamType2-->
<!--typeFunctionParamDescription2-->
The current group cell's properties.
<!--/typeFunctionParamDescription2-->
<!--typeFunctionParamName2_field1-->component<!--/typeFunctionParamName2_field1-->
<!--typeFunctionParamType2_field1-->dxDataGrid<!--/typeFunctionParamType2_field1-->
<!--typeFunctionParamDescription2_field1-->
The widget's instance.
<!--/typeFunctionParamDescription2_field1-->
<!--typeFunctionParamName2_field2-->value<!--/typeFunctionParamName2_field2-->
<!--typeFunctionParamType2_field2-->any<!--/typeFunctionParamType2_field2-->
<!--typeFunctionParamDescription2_field2-->
The group cell's value as it is specified in a data source.
<!--/typeFunctionParamDescription2_field2-->
<!--typeFunctionParamName2_field3-->text<!--/typeFunctionParamName2_field3-->
<!--typeFunctionParamType2_field3-->String<!--/typeFunctionParamType2_field3-->
<!--typeFunctionParamDescription2_field3-->
The group cell's value with applied [format](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#format).
<!--/typeFunctionParamDescription2_field3-->
<!--typeFunctionParamName2_field4-->displayValue<!--/typeFunctionParamName2_field4-->
<!--typeFunctionParamType2_field4-->any<!--/typeFunctionParamType2_field4-->
<!--typeFunctionParamDescription2_field4-->
The value displayed in the group cell. Differs from the **value** field only when the column to which the cell belongs uses [lookup](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/lookup/).
<!--/typeFunctionParamDescription2_field4-->
<!--typeFunctionParamName2_field5-->columnIndex<!--/typeFunctionParamName2_field5-->
<!--typeFunctionParamType2_field5-->Number<!--/typeFunctionParamType2_field5-->
<!--typeFunctionParamDescription2_field5-->
The index of the column the cell belongs to.        
Refer to the [Column and Row Indexes](/Documentation/Guide/Widgets/DataGrid/Columns/Column_and_Row_Indexes/) topic for more information on how this index is calculated.
<!--/typeFunctionParamDescription2_field5-->
<!--typeFunctionParamName2_field6-->rowIndex<!--/typeFunctionParamName2_field6-->
<!--typeFunctionParamType2_field6-->Number<!--/typeFunctionParamType2_field6-->
<!--typeFunctionParamDescription2_field6-->
The index of the row the cell belongs to. Begins with 0 on each page. Group rows are included.      
Refer to the [Column and Row Indexes](/Documentation/Guide/Widgets/DataGrid/Columns/Column_and_Row_Indexes/) topic for more information on row indexes.
<!--/typeFunctionParamDescription2_field6-->
<!--typeFunctionParamName2_field7-->column<!--/typeFunctionParamName2_field7-->
<!--typeFunctionParamType2_field7-->dxDataGridColumn<!--/typeFunctionParamType2_field7-->
<!--typeFunctionParamDescription2_field7-->
The settings of the column the cell belongs to.
<!--/typeFunctionParamDescription2_field7-->
<!--typeFunctionParamName2_field8-->row<!--/typeFunctionParamName2_field8-->
<!--typeFunctionParamType2_field8-->dxDataGridRowObject<!--/typeFunctionParamType2_field8-->
<!--typeFunctionParamDescription2_field8-->

<!--/typeFunctionParamDescription2_field8-->
<!--typeFunctionParamName2_field9-->summaryItems<!--/typeFunctionParamName2_field9-->
<!--typeFunctionParamType2_field9-->Array<any><!--/typeFunctionParamType2_field9-->
<!--typeFunctionParamDescription2_field9-->
[Group summary items](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/groupItems/) displayed in the group row. Objects in this array have the structure of the group summary items extended by the **value** (the summary item value) and **columnCaption** (usually used to present a summary value) fields.
<!--/typeFunctionParamDescription2_field9-->
<!--typeFunctionParamName2_field10-->groupContinuesMessage<!--/typeFunctionParamName2_field10-->
<!--typeFunctionParamType2_field10-->String<!--/typeFunctionParamType2_field10-->
<!--typeFunctionParamDescription2_field10-->
Contains the **grouping**.[groupContinuesMessage](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/grouping/#groupContinuesMessage) if the current group continues on the next page. Otherwise, this field is **undefined**.
<!--/typeFunctionParamDescription2_field10-->
<!--typeFunctionParamName2_field11-->groupContinuedMessage<!--/typeFunctionParamName2_field11-->
<!--typeFunctionParamType2_field11-->String<!--/typeFunctionParamType2_field11-->
<!--typeFunctionParamDescription2_field11-->
Contains the **grouping**.[groupContinuedMessage](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/grouping/#groupContinuesMessage) if the current group is continued from the previous page. Otherwise, this field is **undefined**.
<!--/typeFunctionParamDescription2_field11-->

<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--EventForAction-->..\4 Events\cellPrepared.md<!--/EventForAction-->
===========================================================================
<!--default-->null<!--/default-->
<!--type-->function(e)<!--/type-->
===========================================================================

<!--shortDescription-->
A handler for the **cellPrepared** event. Executed after the widget creates a cell.
<!--/shortDescription-->

<!--fullDescription-->

<!--/fullDescription-->
<!--typeFunctionParamName1-->e<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Information about the event.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->component<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->object<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
The widget's [instance](/Documentation/ApiReference/UI_Widgets/dxTreeList/Methods/#instance).
<!--/typeFunctionParamDescription1_field1-->
<!--typeFunctionParamName1_field2-->element<!--/typeFunctionParamName1_field2-->
<!--typeFunctionParamType1_field2-->dxElement<!--/typeFunctionParamType1_field2-->
<!--typeFunctionParamDescription1_field2-->
The widget's container.
<!--/typeFunctionParamDescription1_field2-->
<!--typeFunctionParamName1_field3-->model<!--/typeFunctionParamName1_field3-->
<!--typeFunctionParamType1_field3-->object<!--/typeFunctionParamType1_field3-->
<!--typeFunctionParamDescription1_field3-->
The model data. Available only if you use Knockout.
<!--/typeFunctionParamDescription1_field3-->
<!--typeFunctionParamName1_field4-->data<!--/typeFunctionParamName1_field4-->
<!--typeFunctionParamType1_field4-->object<!--/typeFunctionParamType1_field4-->
<!--typeFunctionParamDescription1_field4-->
Data of the row to which the cell belongs. Available if the **rowType** is *'data'*, *'detail'* or *'detailAdaptive'*.
<!--/typeFunctionParamDescription1_field4-->
<!--typeFunctionParamName1_field5-->key<!--/typeFunctionParamName1_field5-->
<!--typeFunctionParamType1_field5-->any<!--/typeFunctionParamType1_field5-->
<!--typeFunctionParamDescription1_field5-->
The key of the row. Available if the **rowType** is *'data'*, *'detail'* or *'detailAdaptive'*.       
For plain data, the key value depends on the [keyExpr](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#keyExpr) option. For hierarchical data, the key is generated automatically or set in the underlying **Store** of the [data source](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#dataSource). 
<!--/typeFunctionParamDescription1_field5-->
<!--typeFunctionParamName1_field6-->value<!--/typeFunctionParamName1_field6-->
<!--typeFunctionParamType1_field6-->any<!--/typeFunctionParamType1_field6-->
<!--typeFunctionParamDescription1_field6-->
The cell value. Available if the **rowType** is *'data'*.
<!--/typeFunctionParamDescription1_field6-->
<!--typeFunctionParamName1_field7-->displayValue<!--/typeFunctionParamName1_field7-->
<!--typeFunctionParamType1_field7-->string<!--/typeFunctionParamType1_field7-->
<!--typeFunctionParamDescription1_field7-->
The value displayed in the cell. Available if the **rowType** is *'data'*.       
Differs from the **value** field only when the cell belongs to the [lookup](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/lookup/) column.
<!--/typeFunctionParamDescription1_field7-->
<!--typeFunctionParamName1_field8-->text<!--/typeFunctionParamName1_field8-->
<!--typeFunctionParamType1_field8-->string<!--/typeFunctionParamType1_field8-->
<!--typeFunctionParamDescription1_field8-->
The cell value in the string format. Available if the **rowType** is *'data'*.       
Use to get the value with the applied [format](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#format). 
<!--/typeFunctionParamDescription1_field8-->
<!--typeFunctionParamName1_field9-->columnIndex<!--/typeFunctionParamName1_field9-->
<!--typeFunctionParamType1_field9-->number<!--/typeFunctionParamType1_field9-->
<!--typeFunctionParamDescription1_field9-->
The index of the column to which the cell belongs.
<!--/typeFunctionParamDescription1_field9-->
<!--typeFunctionParamName1_field10-->column<!--/typeFunctionParamName1_field10-->
<!--typeFunctionParamType1_field10-->object<!--/typeFunctionParamType1_field10-->
<!--typeFunctionParamDescription1_field10-->
[Configuration](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/) of this column.
<!--/typeFunctionParamDescription1_field10-->
<!--typeFunctionParamName1_field11-->rowIndex<!--/typeFunctionParamName1_field11-->
<!--typeFunctionParamType1_field11-->number<!--/typeFunctionParamType1_field11-->
<!--typeFunctionParamDescription1_field11-->
The visible index of the row.
<!--/typeFunctionParamDescription1_field11-->
<!--typeFunctionParamName1_field12-->rowType<!--/typeFunctionParamName1_field12-->
<!--typeFunctionParamType1_field12-->string<!--/typeFunctionParamType1_field12-->
<!--typeFunctionParamDescription1_field12-->
The [type of the row](/Documentation/ApiReference/UI_Widgets/dxTreeList/Row/#rowType).
<!--/typeFunctionParamDescription1_field12-->
<!--typeFunctionParamName1_field13-->row<!--/typeFunctionParamName1_field13-->
<!--typeFunctionParamType1_field13-->dxTreeListRowObject<!--/typeFunctionParamType1_field13-->
<!--typeFunctionParamDescription1_field13-->
The properties of the row. Available if the **rowType** is *'data'*, *'detail'* or *'detailAdaptive'*.
<!--/typeFunctionParamDescription1_field13-->
<!--typeFunctionParamName1_field14-->isSelected<!--/typeFunctionParamName1_field14-->
<!--typeFunctionParamType1_field14-->boolean<!--/typeFunctionParamType1_field14-->
<!--typeFunctionParamDescription1_field14-->
Indicates whether the row is selected. Available if **rowType** is *'data'* or *'detail'*.
<!--/typeFunctionParamDescription1_field14-->
<!--typeFunctionParamName1_field15-->isExpanded<!--/typeFunctionParamName1_field15-->
<!--typeFunctionParamType1_field15-->boolean<!--/typeFunctionParamType1_field15-->
<!--typeFunctionParamDescription1_field15-->
Indicates whether the row is expanded or collapsed. Available if **rowType** is *'data'* or *'detail'*.
<!--/typeFunctionParamDescription1_field15-->
<!--typeFunctionParamName1_field16-->cellElement<!--/typeFunctionParamName1_field16-->
<!--typeFunctionParamType1_field16-->jQuery<!--/typeFunctionParamType1_field16-->
<!--typeFunctionParamDescription1_field16-->
The cell's container.
<!--/typeFunctionParamDescription1_field16-->

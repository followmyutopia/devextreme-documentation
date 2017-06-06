<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--EventForAction-->..\4 Events\cellHoverChanged.md<!--/EventForAction-->
===========================================================================
<!--default-->null<!--/default-->
<!--type-->function(e)<!--/type-->
===========================================================================

<!--shortDescription-->
A handler for the **cellHoverChanged** event. Executed after the pointer enters or leaves a cell.
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
The widget's <a href="/Documentation/17_2/ApiReference/UI_Widgets/dxTreeList/Methods/#instance">instance</a>.
<!--/typeFunctionParamDescription1_field1-->
<!--typeFunctionParamName1_field2-->element<!--/typeFunctionParamName1_field2-->
<!--typeFunctionParamType1_field2-->jQuery<!--/typeFunctionParamType1_field2-->
<!--typeFunctionParamDescription1_field2-->
The widget's container.
<!--/typeFunctionParamDescription1_field2-->
<!--typeFunctionParamName1_field3-->model<!--/typeFunctionParamName1_field3-->
<!--typeFunctionParamType1_field3-->object<!--/typeFunctionParamType1_field3-->
<!--typeFunctionParamDescription1_field3-->
The model data. Available only if you use Knockout.
<!--/typeFunctionParamDescription1_field3-->
<!--typeFunctionParamName1_field4-->eventType<!--/typeFunctionParamName1_field4-->
<!--typeFunctionParamType1_field4-->string<!--/typeFunctionParamType1_field4-->
<!--typeFunctionParamDescription1_field4-->
Indicates whether the pointer entered or left the cell. Can be either <i>'mouseover'</i> or <i>'mouseout'</i>.
<!--/typeFunctionParamDescription1_field4-->
<!--typeFunctionParamName1_field5-->data<!--/typeFunctionParamName1_field5-->
<!--typeFunctionParamType1_field5-->object<!--/typeFunctionParamType1_field5-->
<!--typeFunctionParamDescription1_field5-->
Data of the row to which the cell belongs. Available if the <b>rowType</b> is <i>'data'</i>, <i>'detail'</i> or <i>'detailAdaptive'</i>.
<!--/typeFunctionParamDescription1_field5-->
<!--typeFunctionParamName1_field6-->key<!--/typeFunctionParamName1_field6-->
<!--typeFunctionParamType1_field6-->any<!--/typeFunctionParamType1_field6-->
<!--typeFunctionParamDescription1_field6-->
The row key. Available if the <b>rowType</b> is <i>'data'</i>, <i>'detail'</i> or <i>'detailAdaptive'</i>. <br /> 
For plain data, the key value depends on the <a href="/Documentation/17_2/ApiReference/UI_Widgets/dxTreeList/Configuration/#keyExpr">keyExpr</a> option. For hierarchical data, the key is generated automatically or set in the underlying <b>Store</b> of the <a href="/Documentation/17_2/ApiReference/UI_Widgets/dxTreeList/Configuration/#dataSource">data source</a>. 
<!--/typeFunctionParamDescription1_field6-->
<!--typeFunctionParamName1_field7-->value<!--/typeFunctionParamName1_field7-->
<!--typeFunctionParamType1_field7-->any<!--/typeFunctionParamType1_field7-->
<!--typeFunctionParamDescription1_field7-->
The cell value. Available if the <b>rowType</b> is <i>'data'</i>.
<!--/typeFunctionParamDescription1_field7-->
<!--typeFunctionParamName1_field8-->text<!--/typeFunctionParamName1_field8-->
<!--typeFunctionParamType1_field8-->string<!--/typeFunctionParamType1_field8-->
<!--typeFunctionParamDescription1_field8-->
The cell value in the string format. Available if the <b>rowType</b> is <i>'data'</i>.  <br /> 
Use to get the value with the applied <a href="/Documentation/17_2/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#format">format</a>. 
<!--/typeFunctionParamDescription1_field8-->
<!--typeFunctionParamName1_field9-->displayValue<!--/typeFunctionParamName1_field9-->
<!--typeFunctionParamType1_field9-->string<!--/typeFunctionParamType1_field9-->
<!--typeFunctionParamDescription1_field9-->
The value displayed in the cell. Available if the <b>rowType</b> is <i>'data'</i>.  <br /> 
Differs from the <b>value</b> field only when the cell belongs to the <a href="/Documentation/17_2/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/lookup/">lookup</a> column. 
<!--/typeFunctionParamDescription1_field9-->
<!--typeFunctionParamName1_field10-->columnIndex<!--/typeFunctionParamName1_field10-->
<!--typeFunctionParamType1_field10-->number<!--/typeFunctionParamType1_field10-->
<!--typeFunctionParamDescription1_field10-->
The index of the column to which the cell belongs.
<!--/typeFunctionParamDescription1_field10-->
<!--typeFunctionParamName1_field11-->rowIndex<!--/typeFunctionParamName1_field11-->
<!--typeFunctionParamType1_field11-->number<!--/typeFunctionParamType1_field11-->
<!--typeFunctionParamDescription1_field11-->
The visible index of the row to which the cell belongs.
<!--/typeFunctionParamDescription1_field11-->
<!--typeFunctionParamName1_field12-->column<!--/typeFunctionParamName1_field12-->
<!--typeFunctionParamType1_field12-->object<!--/typeFunctionParamType1_field12-->
<!--typeFunctionParamDescription1_field12-->
<a href="/Documentation/17_2/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/">Configuration</a> of the column.
<!--/typeFunctionParamDescription1_field12-->
<!--typeFunctionParamName1_field13-->rowType<!--/typeFunctionParamName1_field13-->
<!--typeFunctionParamType1_field13-->string<!--/typeFunctionParamType1_field13-->
<!--typeFunctionParamDescription1_field13-->
The <a href="/Documentation/17_2/ApiReference/UI_Widgets/dxTreeList/Row/#rowType">type of the row</a>.
<!--/typeFunctionParamDescription1_field13-->
<!--typeFunctionParamName1_field14-->cellElement<!--/typeFunctionParamName1_field14-->
<!--typeFunctionParamType1_field14-->jQuery<!--/typeFunctionParamType1_field14-->
<!--typeFunctionParamDescription1_field14-->
The cell's container.
<!--/typeFunctionParamDescription1_field14-->
<!--typeFunctionParamName1_field15-->row<!--/typeFunctionParamName1_field15-->
<!--typeFunctionParamType1_field15-->dxTreeListRowObject<!--/typeFunctionParamType1_field15-->
<!--typeFunctionParamDescription1_field15-->
The row properties. Available if the <b>rowType</b> is <i>'data'</i>, <i>'detail'</i> or <i>'detailAdaptive'</i>.
<!--/typeFunctionParamDescription1_field15-->

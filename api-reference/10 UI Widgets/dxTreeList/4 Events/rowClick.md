<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--type-->EVENT<!--/type-->
===========================================================================

<!--shortDescription-->
Raised when a user clicks a row.
<!--/shortDescription-->

<!--fullDescription-->
Main article: [onRowClick](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#onRowClick)

#####See Also#####
- **Handle Events**: [jQuery](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Handle_Events/) | [Angular](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Handle_Events/) | [AngularJS](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Handle_Events/) | [Knockout](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Handle_Events/)
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
<!--typeFunctionParamName1_field4-->jQueryEvent<!--/typeFunctionParamName1_field4-->
<!--typeFunctionParamType1_field4-->jQuery-event object<!--/typeFunctionParamType1_field4-->
<!--typeFunctionParamDescription1_field4-->
The original jQuery event.
<!--/typeFunctionParamDescription1_field4-->
<!--typeFunctionParamName1_field5-->data<!--/typeFunctionParamName1_field5-->
<!--typeFunctionParamType1_field5-->object<!--/typeFunctionParamType1_field5-->
<!--typeFunctionParamDescription1_field5-->
The row data.
<!--/typeFunctionParamDescription1_field5-->
<!--typeFunctionParamName1_field6-->key<!--/typeFunctionParamName1_field6-->
<!--typeFunctionParamType1_field6-->any<!--/typeFunctionParamType1_field6-->
<!--typeFunctionParamDescription1_field6-->
The row key. Available if the <b>rowType</b> is <i>'data'</i>, <i>'detail'</i> or <i>'detailAdaptive'</i>.  <br /> 
For plain data, the key value depends on the <a href="/Documentation/17_2/ApiReference/UI_Widgets/dxTreeList/Configuration/#keyExpr">keyExpr</a> option. For hierarchical data, the key is generated automatically or set in the underlying <b>Store</b> of the <a href="/Documentation/17_2/ApiReference/UI_Widgets/dxTreeList/Configuration/#dataSource">data source</a>. 
<!--/typeFunctionParamDescription1_field6-->
<!--typeFunctionParamName1_field7-->values<!--/typeFunctionParamName1_field7-->
<!--typeFunctionParamType1_field7-->array<!--/typeFunctionParamType1_field7-->
<!--typeFunctionParamDescription1_field7-->
Values displayed in the row cells.
<!--/typeFunctionParamDescription1_field7-->
<!--typeFunctionParamName1_field8-->columns<!--/typeFunctionParamName1_field8-->
<!--typeFunctionParamType1_field8-->array<!--/typeFunctionParamType1_field8-->
<!--typeFunctionParamDescription1_field8-->
<a href="/Documentation/17_2/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/">Configurations</a> of all columns.
<!--/typeFunctionParamDescription1_field8-->
<!--typeFunctionParamName1_field9-->rowIndex<!--/typeFunctionParamName1_field9-->
<!--typeFunctionParamType1_field9-->number<!--/typeFunctionParamType1_field9-->
<!--typeFunctionParamDescription1_field9-->
The row's visible index.
<!--/typeFunctionParamDescription1_field9-->
<!--typeFunctionParamName1_field10-->rowType<!--/typeFunctionParamName1_field10-->
<!--typeFunctionParamType1_field10-->string<!--/typeFunctionParamType1_field10-->
<!--typeFunctionParamDescription1_field10-->
The <a href="/Documentation/17_2/ApiReference/UI_Widgets/dxTreeList/Row/#rowType">type of the row</a>.
<!--/typeFunctionParamDescription1_field10-->
<!--typeFunctionParamName1_field11-->isSelected<!--/typeFunctionParamName1_field11-->
<!--typeFunctionParamType1_field11-->boolean<!--/typeFunctionParamType1_field11-->
<!--typeFunctionParamDescription1_field11-->
Indicates whether the row is selected. Available if <b>rowType</b> is <i>'data'</i> or <i>'detail'</i>.
<!--/typeFunctionParamDescription1_field11-->
<!--typeFunctionParamName1_field12-->isExpanded<!--/typeFunctionParamName1_field12-->
<!--typeFunctionParamType1_field12-->boolean<!--/typeFunctionParamType1_field12-->
<!--typeFunctionParamDescription1_field12-->
Indicates whether the row is expanded or collapsed. Available if <b>rowType</b> is <i>'data'</i> or <i>'detail'</i>.
<!--/typeFunctionParamDescription1_field12-->
<!--typeFunctionParamName1_field13-->rowElement<!--/typeFunctionParamName1_field13-->
<!--typeFunctionParamType1_field13-->jQuery<!--/typeFunctionParamType1_field13-->
<!--typeFunctionParamDescription1_field13-->
The row's container.
<!--/typeFunctionParamDescription1_field13-->
<!--typeFunctionParamName1_field14-->handled<!--/typeFunctionParamName1_field14-->
<!--typeFunctionParamType1_field14-->boolean<!--/typeFunctionParamType1_field14-->
<!--typeFunctionParamDescription1_field14-->
Indicates whether internal widget handlers have already handled the event.
<!--/typeFunctionParamDescription1_field14-->

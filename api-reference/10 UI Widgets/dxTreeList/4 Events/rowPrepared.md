<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--type-->event<!--/type-->
===========================================================================

<!--shortDescription-->
Raised after a row is created.
<!--/shortDescription-->

<!--fullDescription-->
Main article: [onRowPrepared](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#onRowPrepared)

#####See Also#####
- **Handle Events**: [jQuery](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Handle_Events/) | [Angular](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Handle_Events/) | [AngularJS](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Handle_Events/) | [Knockout](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Handle_Events/) | [ASP.NET MVC](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Handling_Events_and_Defining_Callbacks)
<!--/fullDescription-->
<!--typeFunctionParamName1-->e<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Information about the event.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->component<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->object<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
The [widget's instance](/Documentation/ApiReference/UI_Widgets/dxTreeList/Methods/#instance).
<!--/typeFunctionParamDescription1_field1-->
<!--typeFunctionParamName1_field2-->element<!--/typeFunctionParamName1_field2-->
<!--typeFunctionParamType1_field2-->Element<!--/typeFunctionParamType1_field2-->
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
The row data. Available if the **rowType** is *'data'*, *'detail'* or *'detailAdaptive'*.
<!--/typeFunctionParamDescription1_field4-->
<!--typeFunctionParamName1_field5-->key<!--/typeFunctionParamName1_field5-->
<!--typeFunctionParamType1_field5-->any<!--/typeFunctionParamType1_field5-->
<!--typeFunctionParamDescription1_field5-->
The row key. Available if the **rowType** is *'data'*, *'detail'* or *'detailAdaptive'*.       
For plain data, the key value depends on the [keyExpr](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#keyExpr) option. For hierarchical data, the key is generated automatically or set in the underlying **Store** of the [data source](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#dataSource). 
<!--/typeFunctionParamDescription1_field5-->
<!--typeFunctionParamName1_field6-->values<!--/typeFunctionParamName1_field6-->
<!--typeFunctionParamType1_field6-->Array<Object><!--/typeFunctionParamType1_field6-->
<!--typeFunctionParamDescription1_field6-->
Values displayed in the row cells.
<!--/typeFunctionParamDescription1_field6-->
<!--typeFunctionParamName1_field7-->columns<!--/typeFunctionParamName1_field7-->
<!--typeFunctionParamType1_field7-->Array<Object><!--/typeFunctionParamType1_field7-->
<!--typeFunctionParamDescription1_field7-->
[Configurations](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/) of all columns.
<!--/typeFunctionParamDescription1_field7-->
<!--typeFunctionParamName1_field8-->rowIndex<!--/typeFunctionParamName1_field8-->
<!--typeFunctionParamType1_field8-->number<!--/typeFunctionParamType1_field8-->
<!--typeFunctionParamDescription1_field8-->
The row's visible index. 
<!--/typeFunctionParamDescription1_field8-->
<!--typeFunctionParamName1_field9-->rowType<!--/typeFunctionParamName1_field9-->
<!--typeFunctionParamType1_field9-->string<!--/typeFunctionParamType1_field9-->
<!--typeFunctionParamDescription1_field9-->
The [type of the row](/Documentation/ApiReference/UI_Widgets/dxTreeList/Row/#rowType).
<!--/typeFunctionParamDescription1_field9-->
<!--typeFunctionParamName1_field10-->isSelected<!--/typeFunctionParamName1_field10-->
<!--typeFunctionParamType1_field10-->boolean<!--/typeFunctionParamType1_field10-->
<!--typeFunctionParamDescription1_field10-->
Indicates whether the row is selected. Available if **rowType** is *'data'* or *'detail'*.
<!--/typeFunctionParamDescription1_field10-->
<!--typeFunctionParamName1_field11-->isExpanded<!--/typeFunctionParamName1_field11-->
<!--typeFunctionParamType1_field11-->boolean<!--/typeFunctionParamType1_field11-->
<!--typeFunctionParamDescription1_field11-->
Indicates whether the row is expanded or collapsed. Available if **rowType** is *'data'* or *'detail'*.
<!--/typeFunctionParamDescription1_field11-->
<!--typeFunctionParamName1_field12-->rowElement<!--/typeFunctionParamName1_field12-->
<!--typeFunctionParamType1_field12-->jQuery<!--/typeFunctionParamType1_field12-->
<!--typeFunctionParamDescription1_field12-->
The row's container.
<!--/typeFunctionParamDescription1_field12-->

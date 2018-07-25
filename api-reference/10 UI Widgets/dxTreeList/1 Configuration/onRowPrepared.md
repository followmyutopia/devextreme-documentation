<!--EventForAction-->..\4 Events\rowPrepared.md<!--/EventForAction-->
===========================================================================
<!--default-->null<!--/default-->
<!--type-->function(e)<!--/type-->
===========================================================================

<!--shortDescription-->
A function that is executed after a row is created.
<!--/shortDescription-->

<!--fullDescription-->

<!--/fullDescription-->
<!--typeFunctionParamName1-->e<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->Object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Information about the event that caused the function's execution.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->component<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->{WidgetName}<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
The widget's instance.
<!--/typeFunctionParamDescription1_field1-->
<!--typeFunctionParamName1_field2-->element<!--/typeFunctionParamName1_field2-->
<!--typeFunctionParamType1_field2-->dxElement<!--/typeFunctionParamType1_field2-->
<!--typeFunctionParamDescription1_field2-->
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](http://api.jquery.com/Types/#jQuery) when you use jQuery.
<!--/typeFunctionParamDescription1_field2-->
<!--typeFunctionParamName1_field3-->model<!--/typeFunctionParamName1_field3-->
<!--typeFunctionParamType1_field3-->Object<!--/typeFunctionParamType1_field3-->
<!--typeFunctionParamDescription1_field3-->
The model data. Available only if you use Knockout.
<!--/typeFunctionParamDescription1_field3-->
<!--typeFunctionParamName1_field4-->data<!--/typeFunctionParamName1_field4-->
<!--typeFunctionParamType1_field4-->Object<!--/typeFunctionParamType1_field4-->
<!--typeFunctionParamDescription1_field4-->
The row's data. Available if the **rowType** is *'data'*, *'detail'* or *'detailAdaptive'*.
<!--/typeFunctionParamDescription1_field4-->
<!--typeFunctionParamName1_field5-->key<!--/typeFunctionParamName1_field5-->
<!--typeFunctionParamType1_field5-->any<!--/typeFunctionParamType1_field5-->
<!--typeFunctionParamDescription1_field5-->
The row's key. Available if the **rowType** is *'data'*, *'detail'* or *'detailAdaptive'*.      
For plain data, the value of the key depends on the [keyExpr](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#keyExpr) option. For hierarchical data, the key is generated automatically or set in the underlying **Store** of the [data source](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#dataSource). 
<!--/typeFunctionParamDescription1_field5-->
<!--typeFunctionParamName1_field6-->values<!--/typeFunctionParamName1_field6-->
<!--typeFunctionParamType1_field6-->Array<Object><!--/typeFunctionParamType1_field6-->
<!--typeFunctionParamDescription1_field6-->
Values displayed in the row cells.
<!--/typeFunctionParamDescription1_field6-->
<!--typeFunctionParamName1_field7-->columns<!--/typeFunctionParamName1_field7-->
<!--typeFunctionParamType1_field7-->Array<dxTreeListColumn><!--/typeFunctionParamType1_field7-->
<!--typeFunctionParamDescription1_field7-->
All column [configurations](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/).
<!--/typeFunctionParamDescription1_field7-->
<!--typeFunctionParamName1_field8-->rowIndex<!--/typeFunctionParamName1_field8-->
<!--typeFunctionParamType1_field8-->Number<!--/typeFunctionParamType1_field8-->
<!--typeFunctionParamDescription1_field8-->
The row's visible index. 
<!--/typeFunctionParamDescription1_field8-->
<!--typeFunctionParamName1_field9-->rowType<!--/typeFunctionParamName1_field9-->
<!--typeFunctionParamType1_field9-->String<!--/typeFunctionParamType1_field9-->
<!--typeFunctionParamDescription1_field9-->
The row's [type](/Documentation/ApiReference/UI_Widgets/dxTreeList/Row/#rowType).
<!--/typeFunctionParamDescription1_field9-->
<!--typeFunctionParamName1_field10-->isSelected<!--/typeFunctionParamName1_field10-->
<!--typeFunctionParamType1_field10-->Boolean<!--/typeFunctionParamType1_field10-->
<!--typeFunctionParamDescription1_field10-->
Indicates whether the row is selected. Available if **rowType** is *'data'* or *'detail'*.
<!--/typeFunctionParamDescription1_field10-->
<!--typeFunctionParamName1_field11-->isExpanded<!--/typeFunctionParamName1_field11-->
<!--typeFunctionParamType1_field11-->Boolean<!--/typeFunctionParamType1_field11-->
<!--typeFunctionParamDescription1_field11-->
Indicates whether the row is expanded or collapsed. Available if **rowType** is *'data'* or *'detail'*.
<!--/typeFunctionParamDescription1_field11-->
<!--typeFunctionParamName1_field12-->rowElement<!--/typeFunctionParamName1_field12-->
<!--typeFunctionParamType1_field12-->dxElement<!--/typeFunctionParamType1_field12-->
<!--typeFunctionParamDescription1_field12-->
The row's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](http://api.jquery.com/Types/#jQuery) when you use jQuery.
<!--/typeFunctionParamDescription1_field12-->

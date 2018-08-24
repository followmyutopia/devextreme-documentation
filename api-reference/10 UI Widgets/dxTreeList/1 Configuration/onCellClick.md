<!--EventForAction-->..\4 Events\cellClick.md<!--/EventForAction-->
===========================================================================
<!--default-->null<!--/default-->
<!--type-->function(e) | String<!--/type-->
===========================================================================

<!--shortDescription-->
A function that is executed when a cell is clicked or tapped. Executed before [onRowClick](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onRowClick).
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
<!--typeFunctionParamName1_field4-->jQueryEvent<!--/typeFunctionParamName1_field4-->
<!--typeFunctionParamType1_field4-->jQuery.Event<!--/typeFunctionParamType1_field4-->
<!--typeFunctionParamDescription1_field4-->
The jQuery event that caused the function's execution. Deprecated in favor of the **event** field.
<!--/typeFunctionParamDescription1_field4-->
<!--typeFunctionParamDeprecated1_field4-->Use 'event' instead.<!--/typeFunctionParamDeprecated1_field4-->
<!--typeFunctionParamName1_field5-->event<!--/typeFunctionParamName1_field5-->
<!--typeFunctionParamType1_field5-->event<!--/typeFunctionParamType1_field5-->
<!--typeFunctionParamDescription1_field5-->
The event that caused the function's execution. It is a [dxEvent](/Documentation/ApiReference/Common/Object_Structures/dxEvent/) or a [jQuery.Event](http://api.jquery.com/category/events/event-object/) when you use jQuery.
<!--/typeFunctionParamDescription1_field5-->
<!--typeFunctionParamName1_field6-->data<!--/typeFunctionParamName1_field6-->
<!--typeFunctionParamType1_field6-->Object<!--/typeFunctionParamType1_field6-->
<!--typeFunctionParamDescription1_field6-->
The data of the row to which the cell belongs. Available if the **rowType** is *"data"*, *"detail"* or *"detailAdaptive"*.
<!--/typeFunctionParamDescription1_field6-->
<!--typeFunctionParamName1_field7-->key<!--/typeFunctionParamName1_field7-->
<!--typeFunctionParamType1_field7-->any<!--/typeFunctionParamType1_field7-->
<!--typeFunctionParamDescription1_field7-->
The row's key. Available if the **rowType** is *"data"*, *"detail"* or *"detailAdaptive"*.       
For plain data, the key value depends on the [keyExpr](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#keyExpr) option. For hierarchical data, the key is generated automatically or set in the underlying **Store** of the [data source](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#dataSource). 
<!--/typeFunctionParamDescription1_field7-->
<!--typeFunctionParamName1_field8-->value<!--/typeFunctionParamName1_field8-->
<!--typeFunctionParamType1_field8-->any<!--/typeFunctionParamType1_field8-->
<!--typeFunctionParamDescription1_field8-->
The cell's raw value. Available if the **rowType** is *"data"*.
<!--/typeFunctionParamDescription1_field8-->
<!--typeFunctionParamName1_field9-->displayValue<!--/typeFunctionParamName1_field9-->
<!--typeFunctionParamType1_field9-->String<!--/typeFunctionParamType1_field9-->
<!--typeFunctionParamDescription1_field9-->
The cell's displayed value. Available if the **rowType** is *"data"*.      
Differs from the **value** field only when the cell belongs to the [lookup](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/lookup/) column. 
<!--/typeFunctionParamDescription1_field9-->
<!--typeFunctionParamName1_field10-->text<!--/typeFunctionParamName1_field10-->
<!--typeFunctionParamType1_field10-->String<!--/typeFunctionParamType1_field10-->
<!--typeFunctionParamDescription1_field10-->
The cell's [formatted](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#format) value converted to a string. Available if the **rowType** is *"data"*.     
<!--/typeFunctionParamDescription1_field10-->
<!--typeFunctionParamName1_field11-->columnIndex<!--/typeFunctionParamName1_field11-->
<!--typeFunctionParamType1_field11-->Number<!--/typeFunctionParamType1_field11-->
<!--typeFunctionParamDescription1_field11-->
The index of the column to which the cell belongs.
<!--/typeFunctionParamDescription1_field11-->
<!--typeFunctionParamName1_field12-->column<!--/typeFunctionParamName1_field12-->
<!--typeFunctionParamType1_field12-->Object<!--/typeFunctionParamType1_field12-->
<!--typeFunctionParamDescription1_field12-->
This column's [configuration](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/).
<!--/typeFunctionParamDescription1_field12-->
<!--typeFunctionParamName1_field13-->rowIndex<!--/typeFunctionParamName1_field13-->
<!--typeFunctionParamType1_field13-->Number<!--/typeFunctionParamType1_field13-->
<!--typeFunctionParamDescription1_field13-->
The visible index of the row to which the cell belongs.
<!--/typeFunctionParamDescription1_field13-->
<!--typeFunctionParamName1_field14-->rowType<!--/typeFunctionParamName1_field14-->
<!--typeFunctionParamType1_field14-->String<!--/typeFunctionParamType1_field14-->
<!--typeFunctionParamDescription1_field14-->
The row's [type](/Documentation/ApiReference/UI_Widgets/dxTreeList/Row/#rowType).
<!--/typeFunctionParamDescription1_field14-->
<!--typeFunctionParamName1_field15-->cellElement<!--/typeFunctionParamName1_field15-->
<!--typeFunctionParamType1_field15-->dxElement<!--/typeFunctionParamType1_field15-->
<!--typeFunctionParamDescription1_field15-->
The cell's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](http://api.jquery.com/Types/#jQuery) when you use jQuery.
<!--/typeFunctionParamDescription1_field15-->
<!--typeFunctionParamName1_field16-->row<!--/typeFunctionParamName1_field16-->
<!--typeFunctionParamType1_field16-->dxTreeListRowObject<!--/typeFunctionParamType1_field16-->
<!--typeFunctionParamDescription1_field16-->
The row [properties](/Documentation/ApiReference/UI_Widgets/dxTreeList/Row/). Available if the **rowType** is *"data"*, *"detail"* or *"detailAdaptive"*.
<!--/typeFunctionParamDescription1_field16-->

<!--EventForAction-->..\4 Events\cellDblClick.md<!--/EventForAction-->
===========================================================================
<!--default-->null<!--/default-->
<!--type-->function(e)<!--/type-->
===========================================================================

<!--shortDescription-->
A function that is executed when a cell is double-clicked or double-tapped. Executed before [onRowDblClick](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#onRowDblClick).
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
<!--typeFunctionParamName1_field4-->event<!--/typeFunctionParamName1_field4-->
<!--typeFunctionParamType1_field4-->event<!--/typeFunctionParamType1_field4-->
<!--typeFunctionParamDescription1_field4-->
The event that caused the function's execution. It is a [dxEvent](/Documentation/ApiReference/Common/Object_Structures/dxEvent/) or a [jQuery.Event](http://api.jquery.com/category/events/event-object/) when you use jQuery.
<!--/typeFunctionParamDescription1_field4-->
<!--typeFunctionParamName1_field5-->data<!--/typeFunctionParamName1_field5-->
<!--typeFunctionParamType1_field5-->Object<!--/typeFunctionParamType1_field5-->
<!--typeFunctionParamDescription1_field5-->
The data of the row the cell belongs to. Available if the **rowType** is *"data"*, *"detail"* or *"detailAdaptive"*.
<!--/typeFunctionParamDescription1_field5-->
<!--typeFunctionParamName1_field6-->key<!--/typeFunctionParamName1_field6-->
<!--typeFunctionParamType1_field6-->any<!--/typeFunctionParamType1_field6-->
<!--typeFunctionParamDescription1_field6-->
The row's [key](/Documentation/ApiReference/UI_Widgets/dxTreeList/Row/#key). Available if the **rowType** is *"data"*, *"detail"* or *"detailAdaptive"*.       
<!--/typeFunctionParamDescription1_field6-->
<!--typeFunctionParamName1_field7-->value<!--/typeFunctionParamName1_field7-->
<!--typeFunctionParamType1_field7-->any<!--/typeFunctionParamType1_field7-->
<!--typeFunctionParamDescription1_field7-->
The cell's raw value. Available if the **rowType** is *"data"*.
<!--/typeFunctionParamDescription1_field7-->
<!--typeFunctionParamName1_field8-->displayValue<!--/typeFunctionParamName1_field8-->
<!--typeFunctionParamType1_field8-->any<!--/typeFunctionParamType1_field8-->
<!--typeFunctionParamDescription1_field8-->
The value displayed in the cell. Available if the **rowType** is *"data"*.      
Differs from the **value** field only when the cell belongs to a [lookup](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/lookup/) column. 
<!--/typeFunctionParamDescription1_field8-->
<!--typeFunctionParamName1_field9-->text<!--/typeFunctionParamName1_field9-->
<!--typeFunctionParamType1_field9-->String<!--/typeFunctionParamType1_field9-->
<!--typeFunctionParamDescription1_field9-->
The cell's [formatted](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#format) value converted to a string. Available if the **rowType** is *"data"*.  
<!--/typeFunctionParamDescription1_field9-->
<!--typeFunctionParamName1_field10-->columnIndex<!--/typeFunctionParamName1_field10-->
<!--typeFunctionParamType1_field10-->Number<!--/typeFunctionParamType1_field10-->
<!--typeFunctionParamDescription1_field10-->
The index of the column the cell belongs to.
<!--/typeFunctionParamDescription1_field10-->
<!--typeFunctionParamName1_field11-->column<!--/typeFunctionParamName1_field11-->
<!--typeFunctionParamType1_field11-->dxTreeListColumn<!--/typeFunctionParamType1_field11-->
<!--typeFunctionParamDescription1_field11-->
The column's configuration.
<!--/typeFunctionParamDescription1_field11-->
<!--typeFunctionParamName1_field12-->rowIndex<!--/typeFunctionParamName1_field12-->
<!--typeFunctionParamType1_field12-->Number<!--/typeFunctionParamType1_field12-->
<!--typeFunctionParamDescription1_field12-->
The index of the row the cell belongs to. Refer to [Column and Row Indexes](/Documentation/Guide/Widgets/TreeList/Columns/Column_and_Row_Indexes/) for more information.
<!--/typeFunctionParamDescription1_field12-->
<!--typeFunctionParamName1_field13-->rowType<!--/typeFunctionParamName1_field13-->
<!--typeFunctionParamType1_field13-->String<!--/typeFunctionParamType1_field13-->
<!--typeFunctionParamDescription1_field13-->
The row's [type](/Documentation/ApiReference/UI_Widgets/dxTreeList/Row/#rowType).
<!--/typeFunctionParamDescription1_field13-->
<!--typeFunctionParamName1_field14-->cellElement<!--/typeFunctionParamName1_field14-->
<!--typeFunctionParamType1_field14-->dxElement<!--/typeFunctionParamType1_field14-->
<!--typeFunctionParamDescription1_field14-->
The cell's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](http://api.jquery.com/Types/#jQuery) when you use jQuery.
<!--/typeFunctionParamDescription1_field14-->
<!--typeFunctionParamName1_field15-->row<!--/typeFunctionParamName1_field15-->
<!--typeFunctionParamType1_field15-->dxTreeListRowObject<!--/typeFunctionParamType1_field15-->
<!--typeFunctionParamDescription1_field15-->
The row's properties. Available if the **rowType** is *"data"*, *"detail"* or *"detailAdaptive"*.
<!--/typeFunctionParamDescription1_field15-->

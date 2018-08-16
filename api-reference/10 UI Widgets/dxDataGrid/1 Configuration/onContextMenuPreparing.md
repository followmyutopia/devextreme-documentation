<!--EventForAction-->..\4 Events\contextMenuPreparing.md<!--/EventForAction-->
===========================================================================
<!--default-->null<!--/default-->
<!--type-->function(e)<!--/type-->
===========================================================================

<!--shortDescription-->
A function that is executed before the context menu is rendered.
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
<!--typeFunctionParamName1_field4-->items<!--/typeFunctionParamName1_field4-->
<!--typeFunctionParamType1_field4-->Array<Object><!--/typeFunctionParamType1_field4-->
<!--typeFunctionParamDescription1_field4-->
Items to be displayed in the context menu. Their structure is described in the [Default Item Template](/Documentation/ApiReference/UI_Widgets/dxContextMenu/Default_Item_Template/) section.
<!--/typeFunctionParamDescription1_field4-->
<!--typeFunctionParamName1_field5-->target<!--/typeFunctionParamName1_field5-->
<!--typeFunctionParamType1_field5-->String<!--/typeFunctionParamType1_field5-->
<!--typeFunctionParamDescription1_field5-->
The name of the grid element on which the context menu is invoked: "headerPanel", "header", "content" or "footer".
<!--/typeFunctionParamDescription1_field5-->
<!--typeFunctionParamName1_field6-->targetElement<!--/typeFunctionParamName1_field6-->
<!--typeFunctionParamType1_field6-->dxElement<!--/typeFunctionParamType1_field6-->
<!--typeFunctionParamDescription1_field6-->
This element's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](http://api.jquery.com/Types/#jQuery) when you use jQuery.
<!--/typeFunctionParamDescription1_field6-->
<!--typeFunctionParamName1_field7-->columnIndex<!--/typeFunctionParamName1_field7-->
<!--typeFunctionParamType1_field7-->Number<!--/typeFunctionParamType1_field7-->
<!--typeFunctionParamDescription1_field7-->
The index of the column on which the context menu is invoked. For details on indexes, see the [Column and Row Indexes](/Documentation/Guide/Widgets/DataGrid/Columns/Column_and_Row_Indexes/) topic.
<!--/typeFunctionParamDescription1_field7-->
<!--typeFunctionParamName1_field8-->column<!--/typeFunctionParamName1_field8-->
<!--typeFunctionParamType1_field8-->dxDataGridColumn<!--/typeFunctionParamType1_field8-->
<!--typeFunctionParamDescription1_field8-->
This column's [configuration](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/).
<!--/typeFunctionParamDescription1_field8-->
<!--typeFunctionParamName1_field9-->rowIndex<!--/typeFunctionParamName1_field9-->
<!--typeFunctionParamType1_field9-->Number<!--/typeFunctionParamType1_field9-->
<!--typeFunctionParamDescription1_field9-->
The visible index of the row on which the context menu is invoked. For details on indexes, see the [Column and Row Indexes](/Documentation/Guide/Widgets/DataGrid/Columns/Column_and_Row_Indexes/) topic.
<!--/typeFunctionParamDescription1_field9-->
<!--typeFunctionParamName1_field10-->row<!--/typeFunctionParamName1_field10-->
<!--typeFunctionParamType1_field10-->dxDataGridRowObject<!--/typeFunctionParamType1_field10-->
<!--typeFunctionParamDescription1_field10-->
The row [properties](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Row/). 
<!--/typeFunctionParamDescription1_field10-->

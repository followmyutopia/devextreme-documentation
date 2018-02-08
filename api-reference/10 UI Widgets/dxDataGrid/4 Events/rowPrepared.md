===========================================================================
<!--type-->eventType<!--/type-->
===========================================================================

<!--shortDescription-->
Fires after a row has been rendered.
<!--/shortDescription-->

<!--fullDescription-->
Instead, you can use the [onRowPrepared](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onRowPrepared) option to handle the event.

When implementing a handling function for this event, use the object passed to this function as its parameter. Among the fields of this object, you can find data relating to the prepared row.

#####See Also#####
#include common-link-handleevents
<!--/fullDescription-->
<!--typeFunctionParamName1-->e<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Information about the event.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->component<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->DOMComponent<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
The widget's instance.
<!--/typeFunctionParamDescription1_field1-->
<!--typeFunctionParamName1_field2-->element<!--/typeFunctionParamName1_field2-->
<!--typeFunctionParamType1_field2-->dxElement<!--/typeFunctionParamType1_field2-->
<!--typeFunctionParamDescription1_field2-->
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](http://api.jquery.com/Types/#jQuery) when you use jQuery.
<!--/typeFunctionParamDescription1_field2-->
<!--typeFunctionParamName1_field3-->model<!--/typeFunctionParamName1_field3-->
<!--typeFunctionParamType1_field3-->object<!--/typeFunctionParamType1_field3-->
<!--typeFunctionParamDescription1_field3-->
The model data. Available only if Knockout is used.
<!--/typeFunctionParamDescription1_field3-->
<!--typeFunctionParamName1_field4-->data<!--/typeFunctionParamName1_field4-->
<!--typeFunctionParamType1_field4-->object<!--/typeFunctionParamType1_field4-->
<!--typeFunctionParamDescription1_field4-->
The row's raw data. Unavailable if **rowType** is *"header"*, *"filter"* or *"totalFooter"*.
<!--/typeFunctionParamDescription1_field4-->
<!--typeFunctionParamName1_field5-->key<!--/typeFunctionParamName1_field5-->
<!--typeFunctionParamType1_field5-->any<!--/typeFunctionParamType1_field5-->
<!--typeFunctionParamDescription1_field5-->
The row's key.     
If a field providing keys is not specified in the [data source](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#dataSource), the whole data object is considered the key. 
<!--/typeFunctionParamDescription1_field5-->
<!--typeFunctionParamName1_field6-->values<!--/typeFunctionParamName1_field6-->
<!--typeFunctionParamType1_field6-->Array<Object><!--/typeFunctionParamType1_field6-->
<!--typeFunctionParamDescription1_field6-->
Values displayed in the row cells.
<!--/typeFunctionParamDescription1_field6-->
<!--typeFunctionParamName1_field7-->columns<!--/typeFunctionParamName1_field7-->
<!--typeFunctionParamType1_field7-->Array<dxDataGridColumn><!--/typeFunctionParamType1_field7-->
<!--typeFunctionParamDescription1_field7-->
All column [configurations](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/).
<!--/typeFunctionParamDescription1_field7-->
<!--typeFunctionParamName1_field8-->rowIndex<!--/typeFunctionParamName1_field8-->
<!--typeFunctionParamType1_field8-->number<!--/typeFunctionParamType1_field8-->
<!--typeFunctionParamDescription1_field8-->
The row's visible index. For details on indexes, see the [Column and Row Indexes](/Documentation/Guide/Widgets/DataGrid/Columns/Column_and_Row_Indexes/) topic.
<!--/typeFunctionParamDescription1_field8-->
<!--typeFunctionParamName1_field9-->rowType<!--/typeFunctionParamName1_field9-->
<!--typeFunctionParamType1_field9-->string<!--/typeFunctionParamType1_field9-->
<!--typeFunctionParamDescription1_field9-->
The row's [type](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Row/#rowType). Can have one of the following values: *"data"*, *"detail"*, *"group"*, *"groupFooter"*, *"header"*, *"filter"* or *"totalFooter"*. 
<!--/typeFunctionParamDescription1_field9-->
<!--typeFunctionParamName1_field10-->groupIndex<!--/typeFunctionParamName1_field10-->
<!--typeFunctionParamType1_field10-->number<!--/typeFunctionParamType1_field10-->
<!--typeFunctionParamDescription1_field10-->
The row's [group index](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#groupIndex). Available if **rowType** is *'group'*.
<!--/typeFunctionParamDescription1_field10-->
<!--typeFunctionParamName1_field11-->isSelected<!--/typeFunctionParamName1_field11-->
<!--typeFunctionParamType1_field11-->boolean<!--/typeFunctionParamType1_field11-->
<!--typeFunctionParamDescription1_field11-->
Indicates whether the prepared row is [selected](/Documentation/Guide/Widgets/DataGrid/Selection/). Available only if **rowType** is *"data"*.
<!--/typeFunctionParamDescription1_field11-->
<!--typeFunctionParamName1_field12-->isExpanded<!--/typeFunctionParamName1_field12-->
<!--typeFunctionParamType1_field12-->boolean<!--/typeFunctionParamType1_field12-->
<!--typeFunctionParamDescription1_field12-->
Indicates whether the row is expanded or collapsed. Unavailable if **rowType** is *"header"*, *"filter"* or *"totalFooter"*.
<!--/typeFunctionParamDescription1_field12-->
<!--typeFunctionParamName1_field13-->rowElement<!--/typeFunctionParamName1_field13-->
<!--typeFunctionParamType1_field13-->dxElement<!--/typeFunctionParamType1_field13-->
<!--typeFunctionParamDescription1_field13-->
The row's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](http://api.jquery.com/Types/#jQuery) when you use jQuery.
<!--/typeFunctionParamDescription1_field13-->

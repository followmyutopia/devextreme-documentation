<!--id-->dxFileUploader.Options.onProgress<!--/id-->
<!--EventForAction-->..\4 Events\progress.md<!--/EventForAction-->
===========================================================================
<!--default-->null<!--/default-->
<!--type-->function(e)<!--/type-->
===========================================================================

<!--shortDescription-->
A function that is executed when a file segment is uploaded.
<!--/shortDescription-->

<!--fullDescription-->

<!--/fullDescription-->
<!--typeFunctionParamName1-->e<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->Object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Information about the event.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->component<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->{WidgetName}<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
The widget's instance.
<!--/typeFunctionParamDescription1_field1-->
<!--typeFunctionParamName1_field2-->element<!--/typeFunctionParamName1_field2-->
<!--typeFunctionParamType1_field2-->dxElement<!--/typeFunctionParamType1_field2-->
<!--typeFunctionParamDescription1_field2-->
#include common-ref-elementparam with { element: "widget" }
<!--/typeFunctionParamDescription1_field2-->
<!--typeFunctionParamName1_field3-->model<!--/typeFunctionParamName1_field3-->
<!--typeFunctionParamType1_field3-->Object<!--/typeFunctionParamType1_field3-->
<!--typeFunctionParamDescription1_field3-->
The model data. Available only if Knockout is used.
<!--/typeFunctionParamDescription1_field3-->
<!--typeFunctionParamName1_field4-->file<!--/typeFunctionParamName1_field4-->
<!--typeFunctionParamType1_field4-->File<!--/typeFunctionParamType1_field4-->
<!--typeFunctionParamDescription1_field4-->
An uploaded file.
<!--/typeFunctionParamDescription1_field4-->
<!--typeFunctionParamName1_field5-->segmentSize<!--/typeFunctionParamName1_field5-->
<!--typeFunctionParamType1_field5-->Number<!--/typeFunctionParamType1_field5-->
<!--typeFunctionParamDescription1_field5-->
The size of the uploaded file segment.
<!--/typeFunctionParamDescription1_field5-->
<!--typeFunctionParamName1_field6-->bytesLoaded<!--/typeFunctionParamName1_field6-->
<!--typeFunctionParamType1_field6-->Number<!--/typeFunctionParamType1_field6-->
<!--typeFunctionParamDescription1_field6-->
The total count of the uploaded bytes.
<!--/typeFunctionParamDescription1_field6-->
<!--typeFunctionParamName1_field7-->bytesTotal<!--/typeFunctionParamName1_field7-->
<!--typeFunctionParamType1_field7-->Number<!--/typeFunctionParamType1_field7-->
<!--typeFunctionParamDescription1_field7-->
The total count of bytes in the XMLHttpRequest.
<!--/typeFunctionParamDescription1_field7-->
<!--typeFunctionParamName1_field8-->jQueryEvent<!--/typeFunctionParamName1_field8-->
<!--typeFunctionParamType1_field8-->jQuery.Event<!--/typeFunctionParamType1_field8-->
<!--typeFunctionParamDescription1_field8-->
The jQuery event that caused the handler execution. Deprecated in favor of the **event** field.
<!--/typeFunctionParamDescription1_field8-->
<!--typeFunctionParamDeprecated1_field8-->Use 'event' instead.<!--/typeFunctionParamDeprecated1_field8-->
<!--typeFunctionParamName1_field9-->event<!--/typeFunctionParamName1_field9-->
<!--typeFunctionParamType1_field9-->event<!--/typeFunctionParamType1_field9-->
<!--typeFunctionParamDescription1_field9-->
#include common-ref-eventparam
<!--/typeFunctionParamDescription1_field9-->
<!--typeFunctionParamName1_field10-->request<!--/typeFunctionParamName1_field10-->
<!--typeFunctionParamType1_field10-->XMLHttpRequest<!--/typeFunctionParamType1_field10-->
<!--typeFunctionParamDescription1_field10-->
An XMLHttpRequest for the file.
<!--/typeFunctionParamDescription1_field10-->

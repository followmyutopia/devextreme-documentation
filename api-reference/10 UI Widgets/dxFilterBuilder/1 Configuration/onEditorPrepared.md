<!--id-->dxFilterBuilder.Options.onEditorPrepared<!--/id-->
<!--EventForAction-->..\4 Events\editorPrepared.md<!--/EventForAction-->
===========================================================================
<!--default-->null<!--/default-->
<!--type-->function(e)<!--/type-->
===========================================================================

<!--shortDescription-->
A function that is executed after an editor is created.
<!--/shortDescription-->

<!--fullDescription-->
The widget offers a user a different editor for entering a value depending on the field's [dataType](/Documentation/ApiReference/UI_Widgets/dxFilterBuilder/Field/#dataType): [Calendar](/Documentation/Guide/Widgets/Calendar/Overview/), [TextBox](/Documentation/Guide/Widgets/TextBox/Overview/), [SelectBox](/Documentation/Guide/Widgets/SelectBox/Overview/), etc. You can customize automatically created editors using this function.

[note]This function is not executed for fields that use the [editorTemplate](/Documentation/ApiReference/UI_Widgets/dxFilterBuilder/Field/#editorTemplate).
<!--/fullDescription-->
<!--typeFunctionParamName1-->e<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->Object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Information about the event.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->component<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->{WidgetName}<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
The widget's [instance](/Documentation/ApiReference/UI_Widgets/dxFilterBuilder/Methods/#instance).
<!--/typeFunctionParamDescription1_field1-->
<!--typeFunctionParamName1_field2-->element<!--/typeFunctionParamName1_field2-->
<!--typeFunctionParamType1_field2-->dxElement<!--/typeFunctionParamType1_field2-->
<!--typeFunctionParamDescription1_field2-->
#include common-ref-elementparam with { element: "widget" }
<!--/typeFunctionParamDescription1_field2-->
<!--typeFunctionParamName1_field3-->model<!--/typeFunctionParamName1_field3-->
<!--typeFunctionParamType1_field3-->Object<!--/typeFunctionParamType1_field3-->
<!--typeFunctionParamDescription1_field3-->
The model data. Available only if you use Knockout.
<!--/typeFunctionParamDescription1_field3-->
<!--typeFunctionParamName1_field4-->value<!--/typeFunctionParamName1_field4-->
<!--typeFunctionParamType1_field4-->any<!--/typeFunctionParamType1_field4-->
<!--typeFunctionParamDescription1_field4-->
The editor's value.
<!--/typeFunctionParamDescription1_field4-->
<!--typeFunctionParamName1_field5-->setValue(newValue)<!--/typeFunctionParamName1_field5-->
<!--typeFunctionParamType1_field5-->any<!--/typeFunctionParamType1_field5-->
<!--typeFunctionParamDescription1_field5-->
A method that you need to call to change the field's value after the editor's value changes.
<!--/typeFunctionParamDescription1_field5-->
<!--typeFunctionParamName1_field6-->editorElement<!--/typeFunctionParamName1_field6-->
<!--typeFunctionParamType1_field6-->dxElement<!--/typeFunctionParamType1_field6-->
<!--typeFunctionParamDescription1_field6-->
#include common-ref-elementparam with { element: "editor" }
<!--/typeFunctionParamDescription1_field6-->
<!--typeFunctionParamName1_field7-->editorName<!--/typeFunctionParamName1_field7-->
<!--typeFunctionParamType1_field7-->String<!--/typeFunctionParamType1_field7-->
<!--typeFunctionParamDescription1_field7-->
The editor's name.
<!--/typeFunctionParamDescription1_field7-->
<!--typeFunctionParamName1_field8-->dataField<!--/typeFunctionParamName1_field8-->
<!--typeFunctionParamType1_field8-->String<!--/typeFunctionParamType1_field8-->
<!--typeFunctionParamDescription1_field8-->
The data field's name.
<!--/typeFunctionParamDescription1_field8-->
<!--typeFunctionParamName1_field9-->filterOperation<!--/typeFunctionParamName1_field9-->
<!--typeFunctionParamType1_field9-->String<!--/typeFunctionParamType1_field9-->
<!--typeFunctionParamDescription1_field9-->
The applied filter operation.
<!--/typeFunctionParamDescription1_field9-->
<!--typeFunctionParamName1_field10-->updateValueTimeout<!--/typeFunctionParamName1_field10-->
<!--typeFunctionParamType1_field10-->Number<!--/typeFunctionParamType1_field10-->
<!--typeFunctionParamDescription1_field10-->
Gets and sets the delay between when a user stops typing the field's value and when it is applied.
<!--/typeFunctionParamDescription1_field10-->
<!--typeFunctionParamName1_field11-->width<!--/typeFunctionParamName1_field11-->
<!--typeFunctionParamType1_field11-->Number<!--/typeFunctionParamType1_field11-->
<!--typeFunctionParamDescription1_field11-->
The editor's width.
<!--/typeFunctionParamDescription1_field11-->
<!--typeFunctionParamName1_field12-->readOnly<!--/typeFunctionParamName1_field12-->
<!--typeFunctionParamType1_field12-->Boolean<!--/typeFunctionParamType1_field12-->
<!--typeFunctionParamDescription1_field12-->
Indicates whether the editor is read-only.
<!--/typeFunctionParamDescription1_field12-->
<!--typeFunctionParamName1_field13-->disabled<!--/typeFunctionParamName1_field13-->
<!--typeFunctionParamType1_field13-->Boolean<!--/typeFunctionParamType1_field13-->
<!--typeFunctionParamDescription1_field13-->
Indicates whether the editor is disabled.
<!--/typeFunctionParamDescription1_field13-->
<!--typeFunctionParamName1_field14-->rtlEnabled<!--/typeFunctionParamName1_field14-->
<!--typeFunctionParamType1_field14-->Boolean<!--/typeFunctionParamType1_field14-->
<!--typeFunctionParamDescription1_field14-->
Indicates whether the editor uses right-to-left representation.
<!--/typeFunctionParamDescription1_field14-->

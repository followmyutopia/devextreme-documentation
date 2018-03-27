<!--EventForAction-->..\4 Events\adaptiveDetailRowPreparing.md<!--/EventForAction-->
===========================================================================
<!--default-->null<!--/default-->
<!--type-->function(e)<!--/type-->
===========================================================================

<!--shortDescription-->
A function that is executed before an adaptive detail row is rendered.
<!--/shortDescription-->

<!--fullDescription-->
Adaptive detail rows display information from columns that were hidden when the widget adapted to the screen or container size. Each adaptive detail row contains the [Form](/Documentation/Guide/Widgets/Form/Overview/) widget that you can customize within the **onAdaptiveDetailRowPreparing** function using the **formOptions** object. Refer to the [Form Configuration](/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/) section for details on options of the **Form** widget.

[note]

The following **Form** options cannot be specified using **formOptions**:

- [template](/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/SimpleItem/#template)        
- [editorType](/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/SimpleItem/#editorType)        
- any [event](/Documentation/ApiReference/UI_Widgets/dxForm/Events/) handler ([options](/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/#onContentReady) whose name starts with *"on..."*)

[/note]

#####See Also#####
- [columnHidingEnabled]({basewidgetpath}/Configuration/#columnHidingEnabled)
- **columns[]**.[hidingPriority]({basewidgetpath}/Configuration/columns/#hidingPriority)
<!--/fullDescription-->
<!--typeFunctionParamName1-->e<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->Object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Information about the event that caused the function's execution.
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
<!--typeFunctionParamType1_field3-->Object<!--/typeFunctionParamType1_field3-->
<!--typeFunctionParamDescription1_field3-->
The model data. Available only if you use Knockout.
<!--/typeFunctionParamDescription1_field3-->
<!--typeFunctionParamName1_field4-->formOptions<!--/typeFunctionParamName1_field4-->
<!--typeFunctionParamType1_field4-->Object<!--/typeFunctionParamType1_field4-->
<!--typeFunctionParamDescription1_field4-->
The options of the [Form](/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/) widget.
<!--/typeFunctionParamDescription1_field4-->

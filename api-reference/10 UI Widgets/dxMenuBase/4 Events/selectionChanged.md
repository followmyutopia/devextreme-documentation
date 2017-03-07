<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->An action performed when a widget selection is changed.<!--/d-->
===========================================================================
<!--type-->EVENT<!--/type-->
<!--fp1d-->Provides function parameters<!--/fp1d-->
<!--fp1_field1d-->Returns the component instance<!--/fp1_field1d-->
<!--fp1_field2d-->Returns an html representing the component<!--/fp1_field2d-->
<!--fp1_field3d-->Returns the data that is available for binding against the element<!--/fp1_field3d-->
<!--fp1_field4d-->Returns the just selected items.<!--/fp1_field4d-->
<!--fp1_field5d-->Returns the just unselected items.<!--/fp1_field5d-->
===========================================================================

<!--shortDescription-->
Fires after a collection item is selected or unselected.
<!--/shortDescription-->

<!--fullDescription-->
Instead, you can use the [onSelectionChanged]({basewidgetpath}/Configuration/#onSelectionChanged) option to handle the event.

This event fires only if the [selectionMode]({basewidgetpath}/Configuration/#selectionMode) option is set to *'single'* and the [selectByClick]({basewidgetpath}/Configuration/#selectByClick) option is set to *true*.

#####See Also#####
- [Handle Events - jQuery](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Handle_Events/)
- [Handle Events - AngularJS](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Handle_Events/)
- [Handle Events - Knockout](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Handle_Events/)
<!--/fullDescription-->
<!--typeFunctionParamName1-->e<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Provides function parameters.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->component<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->object<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
Provides access to the widget instance.
<!--/typeFunctionParamDescription1_field1-->
<!--typeFunctionParamName1_field2-->element<!--/typeFunctionParamName1_field2-->
<!--typeFunctionParamType1_field2-->jQuery<!--/typeFunctionParamType1_field2-->
<!--typeFunctionParamDescription1_field2-->
An HTML element of the widget.
<!--/typeFunctionParamDescription1_field2-->
<!--typeFunctionParamName1_field3-->model<!--/typeFunctionParamName1_field3-->
<!--typeFunctionParamType1_field3-->object<!--/typeFunctionParamType1_field3-->
<!--typeFunctionParamDescription1_field3-->
Provides access to the data that is available for binding against the element. Available only in the Knockout approach.
<!--/typeFunctionParamDescription1_field3-->
<!--typeFunctionParamName1_field4-->addedItems<!--/typeFunctionParamName1_field4-->
<!--typeFunctionParamType1_field4-->array<!--/typeFunctionParamType1_field4-->
<!--typeFunctionParamDescription1_field4-->
An array of items added to selection.
<!--/typeFunctionParamDescription1_field4-->
<!--typeFunctionParamName1_field5-->removedItems<!--/typeFunctionParamName1_field5-->
<!--typeFunctionParamType1_field5-->array<!--/typeFunctionParamType1_field5-->
<!--typeFunctionParamDescription1_field5-->
An array of items removed from selection.
<!--/typeFunctionParamDescription1_field5-->

<!--handmade-->
<!--/handmade-->
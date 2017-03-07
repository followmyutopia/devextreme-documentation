<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->An action performed when a widget item is selected.<!--/d-->
===========================================================================
<!--type-->EVENT<!--/type-->
<!--fp1d-->Provides function parameters<!--/fp1d-->
<!--fp1_field1d-->Returns the component instance<!--/fp1_field1d-->
<!--fp1_field2d-->Returns an html representing the component<!--/fp1_field2d-->
<!--fp1_field3d-->Returns the data that is available for binding against the element<!--/fp1_field3d-->
<!--fp1_field7d-->Returns an object representing the node<!--/fp1_field7d-->
===========================================================================

<!--shortDescription-->
Fires when a tree view item is selected.
<!--/shortDescription-->

<!--fullDescription-->
Instead, you can use the [onItemSelectionChanged](/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#onItemSelectionChanged) option to handle the event.

This event fires in one of the following cases.  

1. The [selectByClick](/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#selectByClick) option is set to *true*.  
2. The [showCheckBoxesMode](/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#showCheckBoxesMode) option is not set to *'none'*.  
3. You use one of the methods: [selectAll](/Documentation/ApiReference/UI_Widgets/dxTreeView/Methods/#selectAll), [unselectAll](/Documentation/ApiReference/UI_Widgets/dxTreeView/Methods/#unselectAll), [selectItem](/Documentation/ApiReference/UI_Widgets/dxTreeView/Methods/#selectItemitemElement), [unselectItem](/Documentation/ApiReference/UI_Widgets/dxTreeView/Methods/#unselectItemitemElement).  

#####See Also#####
- [Handle Events - jQuery](/Documentation/Guide/UI_Widgets/Basics/Widget_Basics_-_jQuery/#Handle_Events)
- [Handle Events - AngularJS](/Documentation/Guide/UI_Widgets/Basics/Widget_Basics_-_AngularJS/#Handle_Events)
- [Handle Events - Knockout](/Documentation/Guide/UI_Widgets/Basics/Widget_Basics_-_Knockout/#Handle_Events)
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
<!--typeFunctionParamName1_field7-->node<!--/typeFunctionParamName1_field7-->
<!--typeFunctionParamType1_field7-->object<!--/typeFunctionParamType1_field7-->
<!--typeFunctionParamDescription1_field7-->
A node of the selected item.
<!--/typeFunctionParamDescription1_field7-->

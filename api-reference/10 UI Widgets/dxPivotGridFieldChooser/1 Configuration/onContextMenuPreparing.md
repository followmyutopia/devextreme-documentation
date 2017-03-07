<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->Customize context menu<!--/d-->
<!--EventForAction-->..\4 Events\contextMenuPreparing.md<!--/EventForAction-->
===========================================================================
<!--default-->null<!--/default-->
<!--type-->function(e)<!--/type-->
<!--fp1d-->The options of the current context menu.<!--/fp1d-->
<!--fp1_field1d-->Returns the component instance<!--/fp1_field1d-->
<!--fp1_field2d-->Returns an html representing the component<!--/fp1_field2d-->
<!--fp1_field3d-->Returns the data that is available for binding against the element<!--/fp1_field3d-->
<!--fp1_field4d-->An array of items to be displayed by the context menu. The item objects must have the fields that are used by the dxContextMenu default item template<!--/fp1_field4d-->
<!--fp1_field5d-->The area name.<!--/fp1_field5d-->
<!--fp1_field6d-->The PivotGridDataSource field option. clicked field.<!--/fp1_field6d-->
<!--fp1_field7d-->Returns a jQuery event that caused the action's execution<!--/fp1_field7d-->
===========================================================================

<!--shortDescription-->
A handler for the **contextMenuPreparing** event.
<!--/shortDescription-->

<!--fullDescription-->
Assign a function to perform a custom action before a context menu is displayed in the field chooser. For instance, you can change the set of items in the menu.
<!--/fullDescription-->
<!--typeFunctionParamName1-->e<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Information about the event.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->component<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->object<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
The widget <a href="/Documentation/16_1/ApiReference/UI_Widgets/dxPivotGrid/Methods/#instance">instance</a>.
<!--/typeFunctionParamDescription1_field1-->
<!--typeFunctionParamName1_field2-->element<!--/typeFunctionParamName1_field2-->
<!--typeFunctionParamType1_field2-->jQuery<!--/typeFunctionParamType1_field2-->
<!--typeFunctionParamDescription1_field2-->
The widget's container.
<!--/typeFunctionParamDescription1_field2-->
<!--typeFunctionParamName1_field3-->model<!--/typeFunctionParamName1_field3-->
<!--typeFunctionParamType1_field3-->object<!--/typeFunctionParamType1_field3-->
<!--typeFunctionParamDescription1_field3-->
Data that is available for binding against the element. Available only in the Knockout approach.
<!--/typeFunctionParamDescription1_field3-->
<!--typeFunctionParamName1_field4-->items<!--/typeFunctionParamName1_field4-->
<!--typeFunctionParamType1_field4-->array<!--/typeFunctionParamType1_field4-->
<!--typeFunctionParamDescription1_field4-->
An array of items to be displayed by the context menu. The item objects must have the fields that are used by the <b>ContextMenu</b> <a href="/Documentation/16_1/ApiReference/UI_Widgets/dxContextMenu/Default_Item_Template">default item template</a>.
<!--/typeFunctionParamDescription1_field4-->
<!--typeFunctionParamName1_field5-->area<!--/typeFunctionParamName1_field5-->
<!--typeFunctionParamType1_field5-->string<!--/typeFunctionParamType1_field5-->
<!--typeFunctionParamDescription1_field5-->
The clicked <a href="/Documentation/16_1/ApiReference/Data_Library/PivotGridDataSource/Configuration/fields/#area">area</a> type.
<!--/typeFunctionParamDescription1_field5-->
<!--typeFunctionParamName1_field6-->field<!--/typeFunctionParamName1_field6-->
<!--typeFunctionParamType1_field6-->object<!--/typeFunctionParamType1_field6-->
<!--typeFunctionParamDescription1_field6-->
Options of the clicked field.
<!--/typeFunctionParamDescription1_field6-->
<!--typeFunctionParamName1_field7-->jQueryEvent<!--/typeFunctionParamName1_field7-->
<!--typeFunctionParamType1_field7-->jQueryEvent<!--/typeFunctionParamType1_field7-->
<!--typeFunctionParamDescription1_field7-->
The jQuery event.
<!--/typeFunctionParamDescription1_field7-->

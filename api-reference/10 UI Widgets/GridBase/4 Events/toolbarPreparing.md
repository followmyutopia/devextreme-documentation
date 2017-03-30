<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--type-->EVENT<!--/type-->
===========================================================================

<!--shortDescription-->
Fires before the toolbar is created.
<!--/shortDescription-->

<!--fullDescription-->
Instead, you can use the [onToolbarPreparing]({basewidgetpath}/Configuration/#onToolbarPreparing) option to handle the event.

This event allows you to customize the toolbar. When implementing a handling function for this event, use the object passed to this function as its parameter. Among the fields of this object, you can find data related to the toolbar options.

<a href=" https://js.devexpress.com/Demos/WidgetsGallery/#demo/data_grid-templates-toolbar_customization" class="button orange small fix-width-155" style="margin-right:5px;" target="_blank">View Demo</a> 
<a href="https://www.youtube.com/watch?v=oWWL6iILMPM&index=1&list=PL8h4jt35t1wjGvgflbHEH_e3b23AA30-z&t=3s" class="button orange small fix-width-155" target="_blank">Watch Video</a>
<!--/fullDescription-->
<!--typeFunctionParamName1-->e<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Information about the event.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->component<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->object<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
The widget <a href="/Documentation/16_2/ApiReference/UI_Widgets/dxDataGrid/Methods/#instance">instance</a>.
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
<!--typeFunctionParamName1_field4-->toolbarOptions<!--/typeFunctionParamName1_field4-->
<!--typeFunctionParamType1_field4-->Object<!--/typeFunctionParamType1_field4-->
<!--typeFunctionParamDescription1_field4-->
An object containing <a href="/Documentation/16_2/ApiReference/UI_Widgets/dxToolbar/Configuration/">options of the toolbar</a>. 
<!--/typeFunctionParamDescription1_field4-->

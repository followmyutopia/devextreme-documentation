<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--default-->null<!--/default-->
<!--type-->template<!--/type-->
===========================================================================

<!--shortDescription-->
The template to be used for rendering table cells.
<!--/shortDescription-->

<!--fullDescription-->
A binding context of a cell template is the object that corresponds to the currently rendered table cell.

So, in **Knockout approach**, you can bind template elements to the cell object fields. To access another binding context within a template, use [Knockout](http://knockoutjs.com/documentation/binding-context.html) binding variables.

In **AngularJS approach**, if you need to access cell object fields within a template, use a variable whose name is assigned to the **dx-item-alias** directive. Add the directive to the widget element to specify an alias to the root object. Without this directive, the fields of cell object  are unavailable. To access another binding context within a table cell template, use [Angular](https://docs.angularjs.org/guide/scope) binding variables.

[note]There is no **dataCellTemplate** in the [agenda](/Documentation/Guide/Widgets/Scheduler/Views/View_Types/#Agenda_View) view.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/forms_and_multi-purpose-scheduler-cell_templates" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

#####See Also#####
- [Customize Widget Element Appearance](/Documentation/Guide/Widgets/Common/UI_Widgets/Customize_Widget_Element_Appearance/)
- [Customize Widget Element Appearance - MVVM Approach](/Documentation/Guide/Widgets/Common/UI_Widgets/Customize_Widget_Element_Appearance_-_MVVM_Approach/)

<!--/fullDescription-->
<!--typeFunctionParamName1-->itemData<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
The table cell object to be rendered.
<!--/typeFunctionParamDescription1-->

<!--typeFunctionParamName2-->itemIndex<!--/typeFunctionParamName2-->
<!--typeFunctionParamType2-->number<!--/typeFunctionParamType2-->
<!--typeFunctionParamDescription2-->
The index of the table cell to be rendered.
<!--/typeFunctionParamDescription2-->

<!--typeFunctionParamName3-->itemElement<!--/typeFunctionParamName3-->
<!--typeFunctionParamType3-->Element<!--/typeFunctionParamType3-->
<!--typeFunctionParamDescription3-->
An HTML element of the table cell to be rendered.
<!--/typeFunctionParamDescription3-->

<!--typeFunctionReturnType-->string|Node|jQuery<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
A template name or a template container.
<!--/typeFunctionReturnDescription-->
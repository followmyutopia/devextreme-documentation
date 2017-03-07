<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->A template name or a template container or a function returning one of them, which is used to render title. Or a function creating the title item. Has following signature titleTemplate(titleElement). Returns htmlString or Element or jQuery representing content of the title item.<!--/d-->
===========================================================================
<!--default-->'title'<!--/default-->
<!--type-->template<!--/type-->
<!--fp1d-->An HTML element containing the rendered title.<!--/fp1d-->
<!--frd-->A template name or a template container. Or an HTML string, Element, or jQuery object representing the rendered title.<!--/frd-->
===========================================================================

<!--shortDescription-->
A template to be used for rendering the widget title.
<!--/shortDescription-->

<!--fullDescription-->
This option enables you to render the widget title depending on field values of the bound data model.

    <!--HTML-->
    <div data-options="dxTemplate: { name:'myTitle' }">
        <h3><span data-bind="text: title"></span> info</h3>
    </div>

[note]A binding context of a title template is the bound view model. So, you can bind template elements to the view model's fields directly (see the code above). To access another binding context within a title template, use the [Knockout](http://knockoutjs.com/documentation/binding-context.html)/[Angular](https://docs.angularjs.org/guide/scope) binding variables.

[note] The **titleTemplate** option makes sense if the [title](/Documentation/ApiReference/UI_Widgets/dxPopup/Configuration/#title) option is undefined.


<!--/fullDescription-->
<!--typeFunctionParamName1-->titleElement<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->jQuery<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
An HTML element containing the rendered title.
<!--/typeFunctionParamDescription1-->

<!--typeFunctionReturnType-->string|Node|jQuery<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
A template name or a template container.
<!--/typeFunctionReturnDescription-->
<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--default-->'title'<!--/default-->
<!--type-->template<!--/type-->
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

[note]A binding context of a title template is the bound view model. So, you can bind template elements to the view model's fields directly (see the code above). To access another binding context within a title template, use the [Knockout](http://knockoutjs.com/documentation/binding-context.html)/[AngularJS](https://docs.angularjs.org/guide/scope) binding variables.

[note] The **titleTemplate** option makes sense if the [title](/Documentation/ApiReference/UI_Widgets/dxPopup/Configuration/#title) option is undefined.


<!--/fullDescription-->
<!--typeFunctionParamName1-->titleElement<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->Element<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
An HTML element containing the rendered title.
<!--/typeFunctionParamDescription1-->

<!--typeFunctionReturnType-->string|Node|jQuery<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
A template name or a template container.
<!--/typeFunctionReturnDescription-->
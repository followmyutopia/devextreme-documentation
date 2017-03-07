<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->A template name or a template container or a function returning one of them, which is used to render content. Or a function creating the content item. Has following signature contentTemplate(contentElement). Returns htmlString or Element or jQuery representing content of the content item.<!--/d-->
===========================================================================
<!--default-->'content'<!--/default-->
<!--type-->template<!--/type-->
<!--fp1d-->An HTML element containing the rendered content.<!--/fp1d-->
<!--frd-->A template name or a template container.<!--/frd-->
===========================================================================

<!--shortDescription-->
A template to be used for rendering widget content.
<!--/shortDescription-->

<!--fullDescription-->
This option enables you to render widget contents depending on field values of the bound data model.

    <!--HTML-->
    <div data-options="dxTemplate: { name:'myContent' }">
        <h1 data-bind="text: title"></h1>
        <p>Full name: <span data-bind="text: fullName"></span></p>
    </div>

[note]A binding context of a content template is the bound view model. So, you can bind template elements to the view model's fields directly (see the code above). To access another binding context within a content template, use the [Knockout](http://knockoutjs.com/documentation/binding-context.html)/[Angular](https://docs.angularjs.org/guide/scope) binding variables.


<!--/fullDescription-->
<!--typeFunctionParamName1-->contentElement<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->jQuery<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
The jQuery object of the widget content element.
<!--/typeFunctionParamDescription1-->

<!--typeFunctionReturnType-->string|jQuery<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
A template name or a template container.
<!--/typeFunctionReturnDescription-->
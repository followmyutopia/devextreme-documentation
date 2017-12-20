===========================================================================
<!--default-->'content'<!--/default-->
<!--type-->template<!--/type-->
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

[note]A binding context of a content template is the bound view model. So, you can bind template elements to the view model's fields directly (see the code above). To access another binding context within a content template, use the [Knockout](http://knockoutjs.com/documentation/binding-context.html)/[AngularJS](https://docs.angularjs.org/guide/scope) binding variables.


<!--/fullDescription-->
<!--typeFunctionParamName1-->contentElement<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->dxElement<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
The widget content's container.
<!--/typeFunctionParamDescription1-->

<!--typeFunctionReturnType-->String|jQuery<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
A template name or container.
<!--/typeFunctionReturnDescription-->
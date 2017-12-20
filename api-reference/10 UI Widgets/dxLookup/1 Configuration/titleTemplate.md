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
        <h3><span data-bind="text: fullName"></span> info</h3>
    </div>

[note]A binding context of a title template is the bound view model. So, you can bind template elements to the view model's fields directly (see the code above). To access another binding context within a title template, use the [Knockout](http://knockoutjs.com/documentation/binding-context.html)/[AngularJS](https://docs.angularjs.org/guide/scope) binding variables.


<!--/fullDescription-->
<!--typeFunctionParamName1-->titleElement<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->dxElement<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
The title's container.
<!--/typeFunctionParamDescription1-->

<!--typeFunctionReturnType-->String|Node|jQuery<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
A template name or container.
<!--/typeFunctionReturnDescription-->
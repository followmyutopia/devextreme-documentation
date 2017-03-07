<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--default-->'content'<!--/default-->
<!--type-->template<!--/type-->
===========================================================================

<!--shortDescription-->
A template to be used for rendering the **Button** widget.
<!--/shortDescription-->

<!--fullDescription-->
This option enables you to render a widget depending on the values of the field of the template context object or view model fields.

    <!--HTML-->
    <div data-bind="dxButton: { template: 'myButton'}">
        <div data-options="dxTemplate: { name:'myButton' }">
            <span data-bind="dxLoadIndicator: { visible: $parent.isLoading }"></span>
            <span>Load</span>
        </div>
    </div>

[note]A binding context of a template contains only fields listed in the [Default Template](/Documentation/ApiReference/UI_Widgets/dxButton/Default_Template/) topic. So, you can bind template elements to these fields directly. To access another binding context within a template, use the [Knockout](http://knockoutjs.com/documentation/binding-context.html)/[AngularJS](https://docs.angularjs.org/guide/scope) binding variables.


<!--/fullDescription-->
<!--typeFunctionParamName1-->buttonData<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
An object holding the button text and icon.
<!--/typeFunctionParamDescription1-->

<!--typeFunctionParamName2-->contentElement<!--/typeFunctionParamName2-->
<!--typeFunctionParamType2-->jQuery<!--/typeFunctionParamType2-->
<!--typeFunctionParamDescription2-->
The jQuery object of the button content element.
<!--/typeFunctionParamDescription2-->

<!--typeFunctionReturnType-->string|jQuery<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
A template name or a template container.
<!--/typeFunctionReturnDescription-->
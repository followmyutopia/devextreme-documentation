<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--default-->'appointmentTooltip'<!--/default-->
<!--type-->template<!--/type-->
===========================================================================

<!--shortDescription-->
The template to be used for rendering an appointment tooltip.
<!--/shortDescription-->

<!--fullDescription-->
A binding context of an appointment tooltip template is the data source object that corresponds to the currently rendered appointment.

So, in **Knockout approach**, you can bind template elements to the appointment object's fields directly. To access another binding context within an appointment tooltip template, use [Knockout](http://knockoutjs.com/documentation/binding-context.html) binding variables.

In **AngularJS approach**, if you need to access appointment object fields within a template, use a variable whose name is assigned to the **dx-item-alias** directive. Add the directive to the widget element to specify an alias to the root object. Without this directive, appointment object fields are beyond reach. To access another binding context within an appointment tooltip template, use [Angular](https://docs.angularjs.org/guide/scope) binding variables.

#####See Also#####
- [Customize Widget Element Appearance](/Documentation/Guide/Widgets/Common/UI_Widgets/Customize_Widget_Element_Appearance/)
- [Customize Widget Element Appearance - MVVM Approach](/Documentation/Guide/Widgets/Common/UI_Widgets/Customize_Widget_Element_Appearance_-_MVVM_Approach/)

<!--/fullDescription-->
<!--typeFunctionParamName1-->appointmentData<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
The appointment object whose tooltip should be rendered.
<!--/typeFunctionParamDescription1-->

<!--typeFunctionParamName2-->contentElement<!--/typeFunctionParamName2-->
<!--typeFunctionParamType2-->jQuery<!--/typeFunctionParamType2-->
<!--typeFunctionParamDescription2-->
An HTML element of the appointment tooltip to be rendered.
<!--/typeFunctionParamDescription2-->

<!--typeFunctionReturnType-->string|jQuery<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
A template name or a template container.
<!--/typeFunctionReturnDescription-->
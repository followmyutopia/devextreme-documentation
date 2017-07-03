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
The template to be used for rendering the widget text field.
<!--/shortDescription-->

<!--fullDescription-->
This option enables you to render the widget text field depending on selected item values.

A binding context of an item template is the data source object that corresponds to the currently selected item.

So, in **Knockout approach**, you can bind template elements to the item's fields directly (see the code below). To access another binding context within a field template, use the [Knockout](http://knockoutjs.com/documentation/binding-context.html) binding variables.

In **AngularJS approach**, if you need to access item object's fields within a template, use a variable whose name is assigned to the `dx-item-alias` directive (see the code below). Add the directive to the widget element to specify an alias to the root object of an item. Without this directive, item object fields are beyond reach. To access another binding context within a field template, use [AngularJS](https://docs.angularjs.org/guide/scope) binding variables.

---
#####AngularJS#####

    <!--HTML-->
    <div data-options="dxTemplate: { name:'myField' }" dx-item-alias="itemObj">
        <div dx-text-box=" { value: itemObj.name + ' (' + itemObj.capital + ')' } "></div>
    </div>

#####Knockout#####

    <!--HTML-->
    <div data-options="dxTemplate: { name:'myField' }">
        <div data-bind="dxTextBox: { value: name + ' (' + capital + ')' } "></div>
    </div>

---

#####See Also#####
- [template](/Documentation/ApiReference/Common/Object_Structures/template/)
- [Customize Widget Element Appearance](/Documentation/Guide/Widgets/Common/UI_Widgets/Customize_Widget_Element_Appearance/)
- [Customize Widget Element Appearance - MVVM Approach](/Documentation/Guide/Widgets/Common/UI_Widgets/Customize_Widget_Element_Appearance_-_MVVM_Approach/)


<!--/fullDescription-->
<!--typeFunctionParamName1-->selectedItem<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
The data that is bound to the selected item.
<!--/typeFunctionParamDescription1-->

<!--typeFunctionParamName2-->fieldElement<!--/typeFunctionParamName2-->
<!--typeFunctionParamType2-->object<!--/typeFunctionParamType2-->
<!--typeFunctionParamDescription2-->
An HTML element of the field to be rendered.
<!--/typeFunctionParamDescription2-->

<!--typeFunctionReturnType-->string|Node|jQuery<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
A template name or a template container.
<!--/typeFunctionReturnDescription-->
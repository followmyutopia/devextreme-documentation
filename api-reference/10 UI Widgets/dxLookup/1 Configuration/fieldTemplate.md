===========================================================================
<!--default-->null<!--/default-->
<!--type-->template | function(selectedItem, fieldElement)<!--/type-->
===========================================================================

<!--shortDescription-->
The template to be used for rendering the widget text field.
<!--/shortDescription-->

<!--fullDescription-->
This option enables you to render the widget text field depending on selected item values.

A binding context of a field template is the data source object that corresponds to the currently rendered item.

So, in the **Knockout approach**, you can bind template elements to the item's fields directly (see the code below). To access another binding context within a field template, use the [Knockout](http://knockoutjs.com/documentation/binding-context.html) binding variables.

In the **AngularJS approach**, if you need to access the item object's fields within a template, use a variable whose name is assigned to the `dx-item-alias` directive (see the code below). Add the directive to the widget element to specify an alias to the root object of an item. Without this directive, item object fields are beyond reach. To access another binding context within a field template, use [AngularJS](https://docs.angularjs.org/guide/scope) binding variables.

---
#####AngularJS#####

    <!--HTML-->
    <div data-options="dxTemplate: { name:'myField' }" dx-item-alias="itemObj">
        <div dx-text-box: { value: itemObj.name + ' (' + itemObj.capital + ')' } "></div>
    </div>

#####Knockout#####

    <!--HTML-->
    <div data-options="dxTemplate: { name:'myField' }">
        <div data-bind="dxTextBox: { value: name + ' (' + capital + ')' } "></div>
    </div>

---

<a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/Lookup/Templates/jQuery/Light/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

#####See Also#####
- [Custom Templates](/Documentation/Guide/Widgets/Common/Templates/#Custom_Templates)
<!--/fullDescription-->
<!--typeFunctionParamName1-->selectedItem<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->Object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
The selected item's data.
<!--/typeFunctionParamDescription1-->

<!--typeFunctionParamName2-->fieldElement<!--/typeFunctionParamName2-->
<!--typeFunctionParamType2-->dxElement<!--/typeFunctionParamType2-->
<!--typeFunctionParamDescription2-->
The field's container.
<!--/typeFunctionParamDescription2-->

<!--typeFunctionReturnType-->String|Node|jQuery<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
A template name or container.
<!--/typeFunctionReturnDescription-->
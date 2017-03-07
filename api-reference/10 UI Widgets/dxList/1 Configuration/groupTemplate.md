<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--default-->'group'<!--/default-->
<!--type-->template<!--/type-->
===========================================================================

<!--shortDescription-->
The template to be used for rendering item groups.
<!--/shortDescription-->

<!--fullDescription-->
[note]A binding context of a group template is the data source object that corresponds to the currently rendered group. 

So, in **Knockout approach**, you can bind template elements to the group object fields directly. To access another binding context within a group template, use [Knockout](http://knockoutjs.com/documentation/binding-context.html) binding variables.

In **AngularJS approach**, if you need to access group object fields within a template, use a variable whose name is assigned to the `dx-item-alias` directive. Add the directive to the widget element to specify an alias to the root object of a group. Without this directive, group object fields are beyond reach. To access another binding context within a group template, use [AngularJS](https://docs.angularjs.org/guide/scope) binding variables.

#####See Also#####
- [List - Customize Group Headers](/Documentation/Guide/Widgets/List/Grouping/Customize_Group_Headers/)
- [template](/Documentation/ApiReference/Common/Object_Structures/template/)
- [Customize Widget Element Appearance](/Documentation/Guide/Widgets/Common/UI_Widgets/Customize_Widget_Element_Appearance/)
- [Customize Widget Element Appearance - MVVM Approach](/Documentation/Guide/Widgets/Common/UI_Widgets/Customize_Widget_Element_Appearance_-_MVVM_Approach/)

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/actionsandlistslistlistgroupedlist/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>
<!--/fullDescription-->
<!--typeFunctionParamName1-->groupData<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
The group object to be rendered.
<!--/typeFunctionParamDescription1-->

<!--typeFunctionParamName2-->groupIndex<!--/typeFunctionParamName2-->
<!--typeFunctionParamType2-->number<!--/typeFunctionParamType2-->
<!--typeFunctionParamDescription2-->
The index of the group to be rendered.
<!--/typeFunctionParamDescription2-->

<!--typeFunctionParamName3-->groupElement<!--/typeFunctionParamName3-->
<!--typeFunctionParamType3-->object<!--/typeFunctionParamType3-->
<!--typeFunctionParamDescription3-->
An HTML element of the group to be rendered.
<!--/typeFunctionParamDescription3-->

<!--typeFunctionReturnType-->string|Node|jQuery<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
A template name or a template container.
<!--/typeFunctionReturnDescription-->
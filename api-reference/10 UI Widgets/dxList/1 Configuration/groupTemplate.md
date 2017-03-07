<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->A template name or a template container or a function returning one of them, which is used to render list groups. Or a function creating the group header. Has following signature groupTemplate(groupData, groupIndex, groupElement). Returns htmlString or Element or jQuery representing content of the group header.<!--/d-->
===========================================================================
<!--default-->'group'<!--/default-->
<!--type-->template<!--/type-->
<!--fp1d-->An object representing the item to be rendered.<!--/fp1d-->
<!--fp2d-->The index of the item to be rendered.<!--/fp2d-->
<!--fp3d-->An HTML element containing the rendered item.<!--/fp3d-->
<!--frd-->A template name or a template container. Or an HTML string, Element, or jQuery object representing the rendered item.<!--/frd-->
===========================================================================

<!--shortDescription-->
The template to be used for rendering item groups.
<!--/shortDescription-->

<!--fullDescription-->
[note]A binding context of a group template is the data source object that corresponds to the currently rendered group. 

So, in **Knockout approach**, you can bind template elements to the group object fields directly. To access another binding context within a group template, use [Knockout](http://knockoutjs.com/documentation/binding-context.html) binding variables.

In **AngularJS approach**, if you need to access group object fields within a template, use a variable whose name is assigned to the `dx-item-alias` directive. Add the directive to the widget element to specify an alias to the root object of a group. Without this directive, group object fields are beyond reach. To access another binding context within a group template, use [Angular](https://docs.angularjs.org/guide/scope) binding variables.

#####See Also#####
- [Customize Item Template](/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Collection_Container_Widgets/#Common_Tasks/Customize_an_Item_Appearance)
- [Customize Widget Element Appearance](/Documentation/Guide/UI_Widgets/Common/Customize_Widget_Element_Appearance/)
- [Customize Widget Element Appearance - MVVM Approach](/Documentation/Guide/UI_Widgets/Common/Customize_Widget_Element_Appearance_-_MVVM_Approach/)


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
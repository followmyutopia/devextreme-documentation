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
The template to be used for rendering date scale items.
<!--/shortDescription-->

<!--fullDescription-->
A binding context of a date template is the object that corresponds to the currently rendered item of the date scale.

So, in the **Knockout approach**, you can bind template elements to the date scale item fields. To access another binding context within a template, use [Knockout](http://knockoutjs.com/documentation/binding-context.html) binding variables.

In the **AngularJS approach**, if you need to access date scale item fields within a template, use a variable whose name is assigned to the **dx-item-alias** directive. Add the directive to the widget element to specify an alias to the root object. Without this directive, object fields are beyond reach. To access another binding context within a date scale template, use [Angular](https://docs.angularjs.org/guide/scope) binding variables.

#####AngularJS Approach#####

    <!--HTML-->
    <div dx-scheduler="{
        dataSource: schedulerData,
        currentDate: currentDate,
        dateCellTemplate: 'dateTemplate',
    }" dx-item-alias="item">
        <div data-options="dxTemplate: {name: 'dateTemplate'}">
            <div class="date">{{ item.text }}</div>
        </div>
    </div>

[note]There is no **dateCellTemplate** in such views as 'day' and 'timelineDay'.

#####See Also#####
- [Visual Elements of Views](/Documentation/Guide/Widgets/Scheduler/Views/#Views)
- [Customize Widget Element Appearance](/Documentation/Guide/Widgets/Common/UI_Widgets/Customize_Widget_Element_Appearance/)
- [Customize Widget Element Appearance - MVVM Approach](/Documentation/Guide/Widgets/Common/UI_Widgets/Customize_Widget_Element_Appearance_-_MVVM_Approach/)
<!--/fullDescription-->
<!--typeFunctionParamName1-->itemData<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
The currently rendered object that represents a date scale item.
<!--/typeFunctionParamDescription1-->

<!--typeFunctionParamName2-->itemIndex<!--/typeFunctionParamName2-->
<!--typeFunctionParamType2-->number<!--/typeFunctionParamType2-->
<!--typeFunctionParamDescription2-->
The index of the date scale item to be rendered.
<!--/typeFunctionParamDescription2-->

<!--typeFunctionParamName3-->itemElement<!--/typeFunctionParamName3-->
<!--typeFunctionParamType3-->jQuery<!--/typeFunctionParamType3-->
<!--typeFunctionParamDescription3-->
An HTML element of the date scale item to be rendered.
<!--/typeFunctionParamDescription3-->

<!--typeFunctionReturnType-->string|Node|jQuery<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
A template name or a template container.
<!--/typeFunctionReturnDescription-->
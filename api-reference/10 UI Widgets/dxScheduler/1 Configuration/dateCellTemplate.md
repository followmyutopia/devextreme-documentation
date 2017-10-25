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
The template used for rendering day scale items.
<!--/shortDescription-->

<!--fullDescription-->
A binding context of a date template is an object that corresponds to a currently rendered item of the day scale.

---

#####Angular

Use a variable that is declared in the template via the `let` keyword to access day scale item fields in **Angular** apps. 

    <!--HTML-->
    <dx-scheduler ...
        dateCellTemplate="dateTemplate">
        <div *dxTemplate="let date of 'dateTemplate'">
            <div class="date">{{date.text}}</div>
        </div>
    </dx-scheduler>

    <!--TypeScript-->
    import { DxSchedulerModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxSchedulerModule
        ],
        // ...
    })

#####AngularJS#####

In the **AngularJS** apps, if you need to access day scale item fields within a template, use a variable whose name is assigned to the **dx-item-alias** directive. Add the directive to the widget element to specify an alias to the root object. Without this directive, object fields are unavailable. To access another binding context within a date scale template, use [Angular](https://docs.angularjs.org/guide/scope) binding variables.

    <!--HTML-->
    <div dx-scheduler="{ 
        ...
        dateCellTemplate: 'dateTemplate'
    }" dx-item-alias="item">
        <div data-options="dxTemplate: {name: 'dateTemplate'}">
            <div class="date">{{item.text}}</div>
        </div>
    </div>

---

[note]There is no **dateCellTemplate** in such views as 'day' and 'timelineDay'.

#####See Also#####
- [Customize Widget Element Appearance](/Documentation/Guide/Widgets/Common/UI_Widgets/Customize_Widget_Element_Appearance/)
- [Customize Widget Element Appearance - MVVM Approach](/Documentation/Guide/Widgets/Common/UI_Widgets/Customize_Widget_Element_Appearance_-_MVVM_Approach/)
<!--/fullDescription-->
<!--typeFunctionParamName1-->itemData<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
A currently rendered object that represents a date scale item.
<!--/typeFunctionParamDescription1-->

<!--typeFunctionParamName2-->itemIndex<!--/typeFunctionParamName2-->
<!--typeFunctionParamType2-->number<!--/typeFunctionParamType2-->
<!--typeFunctionParamDescription2-->
The index of the date scale item to be rendered.
<!--/typeFunctionParamDescription2-->

<!--typeFunctionParamName3-->itemElement<!--/typeFunctionParamName3-->
<!--typeFunctionParamType3-->dxElement<!--/typeFunctionParamType3-->
<!--typeFunctionParamDescription3-->
An HTML element of the date scale item to be rendered.
<!--/typeFunctionParamDescription3-->

<!--typeFunctionReturnType-->string|Node|jQuery<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
A template name or a template container.
<!--/typeFunctionReturnDescription-->
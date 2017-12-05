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
- [Timetable](/Documentation/Guide/Widgets/Scheduler/Timetable/)
<!--/fullDescription-->
<!--typeFunctionParamName1-->itemData<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
The data of the current date scale item.
<!--/typeFunctionParamDescription1-->

<!--typeFunctionParamName2-->itemIndex<!--/typeFunctionParamName2-->
<!--typeFunctionParamType2-->number<!--/typeFunctionParamType2-->
<!--typeFunctionParamDescription2-->
The item's index.
<!--/typeFunctionParamDescription2-->

<!--typeFunctionParamName3-->itemElement<!--/typeFunctionParamName3-->
<!--typeFunctionParamType3-->dxElement<!--/typeFunctionParamType3-->
<!--typeFunctionParamDescription3-->
The item's container.
<!--/typeFunctionParamDescription3-->

<!--typeFunctionReturnType-->string|Node|jQuery<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
A template name or container.
<!--/typeFunctionReturnDescription-->
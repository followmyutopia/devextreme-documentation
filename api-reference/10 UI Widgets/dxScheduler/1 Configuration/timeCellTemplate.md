===========================================================================
<!--default-->null<!--/default-->
<!--type-->template<!--/type-->
===========================================================================

<!--shortDescription-->
The template to be used for rendering time scale items.
<!--/shortDescription-->

<!--fullDescription-->
A binding context of a time template is the object that corresponds to the currently rendered item of the time scale.

---

#####Angular

Use a variable that is declared in the template via the `let` keyword to access time scale item fields in **Angular** apps.

    <!--HTML-->
    <dx-scheduler ...
        timeCellTemplate="timeCellTemplate">
        <div *dxTemplate="let time of 'timeCellTemplate'">
            <div class="time">{{time.text}}</div>
        </div>
    </div>
    
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

In the **AngularJS** apps, if you need to access time scale item fields within a template, use a variable whose name is assigned to the **dx-item-alias** directive. Add the directive to the widget element to specify an alias to the root object. Without this directive, the fields of time scale item are unavailable. To access another binding context within a time scale template, use [Angular](https://docs.angularjs.org/guide/scope) binding variables.

    <!--HTML-->
    <div dx-scheduler="{ 
        ...
        timeCellTemplate: 'timeTemplate'
    }" dx-item-alias="item">
        <div data-options="dxTemplate: {name: 'timeTemplate'}">
            <div class="time">{{item.text}}</div>
        </div>
    </div>

---

[note]There is no **timeCellTemplate** in such views as 'month', 'timelineMonth' and 'agenda'.

#####See Also#####
- [Timetable](/Documentation/Guide/Widgets/Scheduler/Timetable/)
<!--/fullDescription-->
<!--typeFunctionParamName1-->itemData<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
The data of the current time scale item.
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
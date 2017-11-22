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

---

#####Angular

Use a variable that is declared in the template via the `let` keyword to access day scale item fields in **Angular** apps. 

    <!--HTML-->
    <dx-scheduler ...
        [views]="views">
        <div *dxTemplate="let date of 'dateTemplate'">
            <div class="date">{{date.text}}</div>
        </div>
    </dx-scheduler>

    <!--TypeScript-->
    import { DxSchedulerModule } from 'devextreme-angular';
    // ...
    export class AppComponent  { 
        // ...
        views = [
            "day",
            { type: "workWeek", dateCellTemplate: "dateTemplate" }
        ];
    }
    @NgModule({
        imports: [
            // ...
            DxSchedulerModule
        ],
        // ...
    })

#####AngularJS#####

In **AngularJS** apps, if you need to access date scale item fields within a template, use a variable whose name is assigned to the **dx-item-alias** directive. Add the directive to the widget element to specify an alias to the root object. Without this directive, object fields are unavailable. To access another binding context within a date scale template, use [Angular](https://docs.angularjs.org/guide/scope) binding variables.

    <!--HTML-->
    <div ng-controller="DemoController">
        <div dx-scheduler="{ 
            ...
            views: views
        }" dx-item-alias="item">
            <div data-options="dxTemplate: { name: 'dateTemplate' }">
                <div class="date">{{ item.text }}</div>
            </div>
        </div>
    </div>

    <!--JavaScript-->
    var DemoApp = angular.module('DemoApp', ['dx']);
    DemoApp.controller('DemoController', function DemoController($scope) {
        // ...
        $scope.views = [
            "day",
            { type: "workWeek", dateCellTemplate: "dateTemplate" }
        ];
    });

---

[note]There is no **dateCellTemplate** in such views as 'day' and 'timelineDay'.

#####See Also#####
- [Timetable](/Documentation/Guide/Widgets/Scheduler/Timetable/)
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
<!--typeFunctionParamType3-->dxElement<!--/typeFunctionParamType3-->
<!--typeFunctionParamDescription3-->
The container of the date scale item to be rendered.
<!--/typeFunctionParamDescription3-->

<!--typeFunctionReturnType-->string|Node|jQuery<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
A template name or a template container.
<!--/typeFunctionReturnDescription-->
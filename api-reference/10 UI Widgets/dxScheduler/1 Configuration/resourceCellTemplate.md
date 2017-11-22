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
The template to be used for rendering resource headers.
<!--/shortDescription-->

<!--fullDescription-->
A binding context of a resource template is the data source object that corresponds to the currently rendered resource header.

---

#####Angular

Use a variable that is declared in the template via the `let` keyword to access resource object fields in **Angular** apps. 

    <!--HTML-->
    <dx-scheduler ...
        [groups]="['priorityId']"
        [resources]="resources"
        resourceCellTemplate="resourceTemplate">
        <div *dxTemplate="let resource of 'resourceTemplate'">
            <img [src]="resource.image">
            <div class="resource-header">{{resource.text}}</div>
        </div>
    </dx-scheduler>

    <!--TypeScript-->
    import { DxSchedulerModule } from 'devextreme-angular';
    // ...
    export class AppComponent  { 
        // ...
        priorityData = [
            { text: "Low Priority", image: "img1.png", id: 1, color: "#1e90ff" },
            { text: "High Priority", image: "img2.png", id: 2, color: "#ff9747" }
        ];
        resources = [{ 
            field: "priorityId", 
            allowMultiple: false, 
            dataSource: this.priorityData, 
            label: "Priority" 
        }];
    }
    @NgModule({
        imports: [
            // ...
            DxSchedulerModule
        ],
        // ...
    })

#####AngularJS#####

In the **AngularJS** apps, if you need to access resource object fields within a template, use a variable whose name is assigned to the **dx-item-alias** directive. Add the directive to the widget element to specify an alias to the root object. Without this directive, the fields of resource object are unavailable. To access another binding context within a resource template, use [Angular](https://docs.angularjs.org/guide/scope) binding variables.

    <!--HTML-->
    <div dx-scheduler="options" dx-item-alias="item">
        <div data-options="dxTemplate: { name: 'resource' }">
            <img src="{{item.image}}">
            <div class="resource-header">{{item.text}}</div>
        </div>
    </div>

    <!--JavaScript-->
    var priorityData = [
        { text: "Low Priority", image: "img1.png", id: 1, color: "#1e90ff" },
        { text: "High Priority", image: "img2.png", id: 2, color: "#ff9747" }
    ];

    var DemoApp = angular.module('DemoApp', ['dx']);
    DemoApp.controller('DemoController', function DemoController($scope) {
        $scope.options = { 
            // ...
            groups: ["priorityId"],
            resources: [{ 
                field: "priorityId", 
                allowMultiple: false, 
                dataSource: priorityData, 
                label: "Priority" 
            }],
            resourceCellTemplate: 'resource'
        };
    });
    
---

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/forms_and_multi-purpose-scheduler-cell_templates" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

#####See Also#####
- [Customize Resource Headers](/Documentation/Guide/Widgets/Scheduler/Resources/Customize_Resource_Headers/)
<!--/fullDescription-->
<!--typeFunctionParamName1-->itemData<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
The resource header object to be rendered.
<!--/typeFunctionParamDescription1-->

<!--typeFunctionParamName2-->itemIndex<!--/typeFunctionParamName2-->
<!--typeFunctionParamType2-->number<!--/typeFunctionParamType2-->
<!--typeFunctionParamDescription2-->
The index of the resource header to be rendered.
<!--/typeFunctionParamDescription2-->

<!--typeFunctionParamName3-->itemElement<!--/typeFunctionParamName3-->
<!--typeFunctionParamType3-->dxElement<!--/typeFunctionParamType3-->
<!--typeFunctionParamDescription3-->
The container of the resource header to be rendered.
<!--/typeFunctionParamDescription3-->

<!--typeFunctionReturnType-->string|Node|jQuery<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
A template name or a template container.
<!--/typeFunctionReturnDescription-->
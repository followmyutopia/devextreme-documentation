<!--widgettree-->
dataSource: ["Prepare 2013 Financial","Prepare 3013 Marketing Plan","Update Personnel Files","Review Health Insurance Options Under the Affordable Care Act","Choose between PPO and HMO Health Plan",
    "Google AdWords Strategy","New Brochures","2013 Brochure Designs","Brochure Design Review","Website Re-Design Plan","Rollout of New Website and Marketing Brochures",
    "Update Sales Strategy Documents","Create 2012 Sales Report","Direct vs Online Sales Comparison Report"]
<!--/widgettree-->
===========================================================================
<!--module-->ui/lookup<!--/module-->
<!--export-->default<!--/export-->
<!--inherits-->..\dxDropDownList\dxDropDownList.md<!--/inherits-->
<!--lib-->
dx.mobile.js, dx.web.js, dx.viz-web.js, dx.all.js
<!--/lib-->
===========================================================================

<!--shortDescription-->
The **Lookup** is a widget that allows an end user to search for an item in a collection shown in a drop-down menu.
<!--/shortDescription-->

<!--fullDescription-->
#include common-ref-roottopic-introduction

---
#####[**jQuery**](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/)  

    <!--JavaScript-->$(function () {
        $("#lookup").dxLookup({
            dataSource: employees,
            displayExpr: 'name',
            title: 'Employees'
        });
    });

    <!--HTML-->
    <div id="lookup"></div>

#####[**Angular**](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Create_and_Configure_a_Widget/)  

    <!--HTML-->
    <dx-lookup
        [dataSource]="employees"
        displayExpr="name"
        title="Employees">
    </dx-lookup>

    <!--TypeScript-->
    export class AppComponent {
        employees = [
            // ...   
        ];
    }

#####[**AngularJS**](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/)  

    <!--HTML--><div ng-controller="DemoController">
        <div dx-lookup="{
            dataSource: employees,
            displayExpr: 'name',
            title: 'Employees'
        }"></div>
    </div>

    <!--JavaScript-->angular.module('DemoApp', ['dx'])
        .controller("DemoController", function ($scope) {
            $scope.employees = [
                // ...   
            ];
        });

#####[**Knockout**](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/)  

    <!--HTML-->
    <div data-bind="dxLookup: {
        dataSource: employees,
        displayExpr: 'name',
        title: 'Employees'
    }"></div>

    <!--JavaScript-->var viewModel = {
        employees: [
            // ...
        ]
    };
    ko.applyBindings(viewModel);

#####[**ASP.NET MVC Controls**](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Creating_a_Widget)

    <!--Razor C#-->@(Html.DevExtreme().Lookup()
        .ID("lookup")
        .DataSource(Employees)
        .DisplayExpr("name")
        .Title("Employees")
    )

    <!--Razor VB-->@(Html.DevExtreme().Lookup() _
        .ID("lookup") _
        .DataSource(Employees) _
        .DisplayExpr("name") _
        .Title("Employees")
    )

---

 

#####See Also#####
- [Lookup - Overview](/Documentation/Guide/Widgets/Lookup/Overview/)

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/#demo/actionsandlistslookuplookuplookup/"
}
<!--/fullDescription-->
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
            dataSource: [ "Item 1", "Item 2", "Item 3" ],
            placeholder: "Select an item"
        });
    });

    <!--HTML-->
    <div id="lookup"></div>

#####[**Angular**](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Create_and_Configure_a_Widget/)  

    <!--HTML-->
    <dx-lookup
        [dataSource]="lookupDataSource"
        placeholder="Select an item">
    </dx-lookup>

    <!--TypeScript-->
    import { DxLookupModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        lookupDataSource = [ "Item 1", "Item 2", "Item 3" ];
    }
    @NgModule({
        imports: [
            // ...
            DxLookupModule
        ],
        // ...
    })

#####[**AngularJS**](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/)  

    <!--HTML--><div ng-controller="DemoController">
        <div dx-lookup="{
            dataSource: lookupDataSource,
            placeholder: 'Select an item'
        }"></div>
    </div>

    <!--JavaScript-->angular.module('DemoApp', ['dx'])
        .controller("DemoController", function ($scope) {
            $scope.lookupDataSource = [ "Item 1", "Item 2", "Item 3" ];
        });

#####[**Knockout**](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/)  

    <!--HTML-->
    <div data-bind="dxLookup: {
        dataSource: lookupDataSource,
        placeholder: 'Select an item'
    }"></div>

    <!--JavaScript-->var viewModel = {
        lookupDataSource: [ "Item 1", "Item 2", "Item 3" ]
    };
    ko.applyBindings(viewModel);

#####[**ASP.NET MVC Controls**](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Creating_a_Widget)

    <!--Razor C#-->@(Html.DevExtreme().Lookup()
        .ID("lookup")
        .DataSource(new[] { "Item 1", "Item 2", "Item 3" })
        .Placeholder("Select an item")
    )

    <!--Razor VB-->@(Html.DevExtreme().Lookup() _
        .ID("lookup") _
        .DataSource({ "Item 1", "Item 2", "Item 3" }) _
        .Placeholder("Select an item")
    )

---

 

#####See Also#####
- [Lookup - Overview](/Documentation/Guide/Widgets/Lookup/Overview/)

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/#demo/actionsandlistslookuplookuplookup/"
}
<!--/fullDescription-->
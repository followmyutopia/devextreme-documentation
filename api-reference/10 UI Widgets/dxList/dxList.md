<!--widgettree-->
dataSource: ["Prepare 2013 Financial","Prepare 3013 Marketing Plan","Update Personnel Files","Review Health Insurance Options Under the Affordable Care Act","Choose between PPO and HMO Health Plan",
    "Google AdWords Strategy","New Brochures","2013 Brochure Designs","Brochure Design Review","Website Re-Design Plan","Rollout of New Website and Marketing Brochures",
    "Update Sales Strategy Documents","Create 2012 Sales Report","Direct vs Online Sales Comparison Report"]
<!--/widgettree-->
===========================================================================
<!--module-->ui/list<!--/module-->
<!--export-->default<!--/export-->
<!--inherits-->..\CollectionWidget\CollectionWidget.md,..\SearchBoxMixin\SearchBoxMixin.md<!--/inherits-->
<!--lib-->
dx.mobile.js, dx.web.js, dx.viz-web.js, dx.all.js
<!--/lib-->
===========================================================================

<!--shortDescription-->
The **List** is a widget that represents a collection of items in a scrollable list.
<!--/shortDescription-->

<!--fullDescription-->
#include common-ref-roottopic-introduction

---
#####[**jQuery**](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/)  

    <!--JavaScript-->$(function () {
        $("#list").dxList({
            dataSource: [ "Item 1", "Item 2", "Item 3" ],
            searchEnabled: true
        });
    });

    <!--HTML--><div id="list"></div>

#####[**Angular**](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Create_and_Configure_a_Widget/)  

    <!--HTML-->
    <dx-list
        [dataSource]="listData"
        [searchEnabled]="true">
    </dx-list>

    <!--TypeScript-->
    import { DxListModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        listData = [ "Item 1", "Item 2", "Item 3" ];
    }
    @NgModule({
        imports: [
            // ...
            DxListModule
        ],
        // ...
    })

#####[**AngularJS**](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/)  

    <!--HTML--><div ng-controller="DemoController">
        <div dx-list="{
            dataSource: listData,
            searchEnabled: true
        }"></div>
    </div>

    <!--JavaScript-->angular.module("DemoApp", ["dx"])
        .controller("DemoController", function ($scope) {
            $scope.listData = [ "Item 1", "Item 2", "Item 3" ];
        });

#####[**Knockout**](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/)  

    <!--HTML--><div data-bind="dxList: {
        dataSource: listData,
        searchEnabled: true
    }"></div>

    <!--JavaScript-->var viewModel = {
        listData: [ "Item 1", "Item 2", "Item 3" ]
    };
    ko.applyBindings(viewModel);

#####[**ASP.NET MVC Controls**](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Creating_a_Widget)

    <!--Razor C#-->@(Html.DevExtreme().List()
        .ID("list")
        .DataSource(new[] { "Item 1", "Item 2", "Item 3" })
        .SearchEnabled(true)
    )

    <!--Razor VB-->@(Html.DevExtreme().List() _
        .ID("list") _
        .DataSource({ "Item 1", "Item 2", "Item 3" }) _
        .SearchEnabled(True)
    )

---

 

#####See Also#####
- [List - Overview](/Documentation/Guide/Widgets/List/Overview)
- [ASP.NET MVC Controls - Data Binding](/Documentation/Guide/ASP.NET_MVC_Controls/Data_Binding/)

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/#demo/actionsandlistslistlistlisteditingandapi/"
}
<!--/fullDescription-->
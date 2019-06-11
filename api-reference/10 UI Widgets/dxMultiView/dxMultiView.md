<!--id-->dxMultiView<!--/id-->
<!--widgettree-->
dataSource: [
    { text: "Super Mart of the West" },
    { text: "Electronics Depot" },
    { text: "Tom's Club" }
],
height: 300,
loop: true
<!--/widgettree-->
===========================================================================
<!--module-->ui/multi_view<!--/module-->
<!--export-->default<!--/export-->
<!--inherits-->..\CollectionWidget\CollectionWidget.md<!--/inherits-->
<!--lib-->
dx.web.js, dx.viz-web.js, dx.all.js
<!--/lib-->
===========================================================================

<!--shortDescription-->
The **MultiView** is a widget that contains several views. An end user navigates through the views by swiping them in the horizontal direction. 
<!--/shortDescription-->

<!--fullDescription-->
#include common-ref-roottopic-introduction

---
#####[**jQuery**](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/)  

    <!--JavaScript-->
    $(function () {
        $("#multiView").dxMultiView({
            items: [
                { text: "View 1" },
                { text: "View 2" },
                { text: "View 3" }
            ]
        });
    });

    <!--HTML-->
    <div id="multiView"></div>

##### Angular

    <!--HTML-->
    <dx-multi-view [items]="multiViewItems"></dx-multi-view>

    <!--TypeScript-->
    import { DxMultiViewModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        multiViewItems = [
            { text: "View 1" },
            { text: "View 2" },
            { text: "View 3" }
        ];
    }
    @NgModule({
        imports: [
            // ...
            DxMultiViewModule
        ],
        // ...
    })

#####[**AngularJS**](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/)  

    <!--HTML--><div ng-controller="DemoController">
        <div dx-multi-view="{
            items: multiViewItems
        }"></div>
    </div>

    <!--JavaScript-->angular.module("DemoApp", ["dx"])
        .controller("DemoController", function ($scope) {
            $scope.multiViewItems = [
                { text: "View 1" },
                { text: "View 2" },
                { text: "View 3" }
            ];
        });

#####[**Knockout**](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/)  

    <!--HTML-->
    <div data-bind="dxMultiView: {
        items: multiViewItems
    }"></div>

    <!--JavaScript-->var viewModel = {
        multiViewItems: [
            { text: "View 1" },
            { text: "View 2" },
            { text: "View 3" }
        ]
    };
    ko.applyBindings(viewModel);

#####[**ASP.NET MVC Controls**](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Creating_a_Widget)
    
    <!--Razor C#-->@(Html.DevExtreme().MultiView()
        .ID("multiView")
        .Items(items => {
            items.Add().Text("View 1");
            items.Add().Text("View 2");
            items.Add().Text("View 3");
        })
    )

    <!--Razor VB-->@(Html.DevExtreme().MultiView() _
        .ID("multiView") _
        .Items(Sub(items)
            items.Add().Text("View 1")
            items.Add().Text("View 2")
            items.Add().Text("View 3")
        End Sub)
    )

---

 

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/#demo/navigationmultiviewmultiviewmultiview/"
}

#####See Also#####
- [MultiView - Overview](/Documentation/Guide/Widgets/MultiView/Overview/)
<!--/fullDescription-->
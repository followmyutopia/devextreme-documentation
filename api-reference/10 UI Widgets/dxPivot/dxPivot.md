<!--dep--><!--/dep-->
<!--widgettree-->
dataSource: [
    {
        title: "Main courses",
        text: "First and second course of a meal"
    },
    {
        title: "Seafood",
        text: "Seafood: ocean and sea"
    },
    {
        title: "Desserts",
        text: "Desserts: biscuits and cookies"
    },
    {
        title: "Drinks",
        text: "Drinks: Soft vine and tea"
    }
],
height: 300
<!--/widgettree-->
===========================================================================
<!--module-->ui/pivot<!--/module-->
<!--export-->default<!--/export-->
<!--inherits-->..\CollectionWidget\CollectionWidget.md<!--/inherits-->
<!--lib-->
dx.mobile.js, dx.all.js
<!--/lib-->
===========================================================================

<!--deprecated-->
[note] The **Pivot** widget is <span style="color:red">deprecated</span> since v18.1. We recommend using the [TabPanel](/Documentation/Guide/Widgets/TabPanel/Overview/) widget instead.
<!--/deprecated-->

<!--shortDescription-->
The **Pivot** provides a quick way to manage multiple views. It includes a collection of views and a navigation header. An end user switches the views by swiping them or by clicking their titles on the navigation header.
<!--/shortDescription-->

<!--fullDescription-->
#include common-ref-roottopic-introduction

---
#####[**jQuery**](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/)  

    <!--JavaScript-->
    $(function () {
        $("#pivot").dxPivot({
            items: [{
                title: "Item 1 Title",
                text: "Item 1 Text Content"
            }, {
                title: "Item 2 Title",
                text: "Item 2 Text Content"
            }, {
                title: "Item 3 Title",
                text: "Item 3 Text Content"
            }],
            height: 300
        });
    });

    <!--HTML-->
    <div id="pivot"></div>

#####[**Angular**](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Create_and_Configure_a_Widget/)  

    <!--HTML-->
    <dx-pivot
        [items]="pivotItems"
        [height]="300">
    </dx-pivot>

    <!--TypeScript-->
    import { DxPivotModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        pivotItems = [{
            title: "Item 1 Title",
            text: "Item 1 Text Content"
        }, {
            title: "Item 2 Title",
            text: "Item 2 Text Content"
        }, {
            title: "Item 3 Title",
            text: "Item 3 Text Content"
        }];
    }
    @NgModule({
        imports: [
            // ...
            DxPivotModule
        ],
        // ...
    })

#####[**AngularJS**](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/)  

    <!--HTML--><div ng-controller="DemoController">
        <div dx-pivot="{
            items: pivotItems,
            height: 300
        }"></div>
    </div>

    <!--JavaScript-->angular.module("DemoApp", ["dx"])
        .controller("DemoController", function ($scope) {
            $scope.pivotItems = [{
                title: "Item 1 Title",
                text: "Item 1 Text Content"
            }, {
                title: "Item 2 Title",
                text: "Item 2 Text Content"
            }, {
                title: "Item 3 Title",
                text: "Item 3 Text Content"
            }];
        });

#####[**Knockout**](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/)  

    <!--HTML-->
    <div data-bind="dxPivot: {
        items: pivotItems,
        height: 300
    }"></div>

    <!--JavaScript-->var viewModel = {
        pivotItems: [{
            title: "Item 1 Title",
            text: "Item 1 Text Content"
        }, {
            title: "Item 2 Title",
            text: "Item 2 Text Content"
        }, {
            title: "Item 3 Title",
            text: "Item 3 Text Content"
        }]
    };
    ko.applyBindings(viewModel);

---

#####See Also#####
- [Pivot - Overview](/Documentation/Guide/Widgets/Pivot/Overview/)
<!--/fullDescription-->
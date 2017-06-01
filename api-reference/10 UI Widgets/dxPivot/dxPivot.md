<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
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
<!--module--><a href="/Documentation/17_1/Guide/Common/Modularity/#Common_Modularity_DevExtreme_Modules_Structure_ui_pivot">ui/pivot</a><!--/module-->
<!--export-->default<!--/export-->
<!--inherits-->..\CollectionWidget\CollectionWidget.md<!--/inherits-->
<!--lib-->
dx.mobile.js, dx.all.js
<!--/lib-->
===========================================================================

<!--shortDescription-->
The **Pivot** provides a quick way to manage multiple views. It includes a collection of views and a navigation header. An end user switches the views by swiping them or by clicking their titles on the navigation header.
<!--/shortDescription-->

<!--fullDescription-->
You can create the widget using one of the following approaches.

---
#####[**jQuery**](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/)  

        <!--JavaScript-->var pivotItems = [{
            title: "Main courses",
            text: "First and second courses of a meal"
        }, {
            title: "Seafood",
            text: "Seafood: ocean and sea"
        }, {
            title: "Desserts",
            text: "Desserts: biscuits and cookies"
        }, {
            title: "Drinks",
            text: "Drinks: soft vine and tea"
        }];
        $(function () {
            $("#pivot").dxPivot({
                items: pivotItems,
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

        <!--JavaScript-->
        export class AppComponent {
            pivotItems = [
                // ...   
            ];
        }

#####[**AngularJS**](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/)  

        <!--HTML--><div ng-controller="DemoController">
            <div dx-pivot="{
                items: pivotItems,
                height: 300
            }"></div>
        </div>

        <!--JavaScript-->angular.module('DemoApp', ['dx'])
            .controller("DemoController", function ($scope) {
                $scope.pivotItems = [
                    // ...   
                ];
            });

#####[**Knockout**](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/)  

        <!--HTML-->
        <div data-bind="dxPivot: {
            items: pivotItems,
            height: 300
        }"></div>

        <!--JavaScript-->var viewModel = {
            pivotItems: [
                // ...
            ]
        };
        ko.applyBindings(viewModel);

---

Note that DevExtreme widgets require you to link the jQuery library to your application. If you use the Knockout or AngularJS approach, the Knockout or AngularJS library is also required. For detailed information on linking these libraries to your project, refer to the topics in the [Installation](/Documentation/Guide/Getting_Started/Installation/Local_Scripts/) section.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/navigationpivotpivotpivot/iphone/ios7/default/default" class="button orange small fix-width-155" style="margin-right:5px;" target="_blank">View Demo</a>
<a href="http://www.youtube.com/watch?v=EVE8ykPZxOE&index=10&list=PL8h4jt35t1wjGvgflbHEH_e3b23AA30-z" class="button orange small fix-width-155" target="_blank">Watch Video</a>

#####See Also#####
- [Pivot - Overview](/Documentation/Guide/Widgets/Pivot/Overview/)
<!--/fullDescription-->
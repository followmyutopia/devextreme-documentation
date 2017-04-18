<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--widgettree-->
dataSource: [
    "HD Video Player",
    "SuperHD Video Player",
    "SuperPlasma 50",
    "SuperLED 50",
    "SuperLED 42",
    "SuperLCD 55",
    "SuperLCD 42",
    "SuperPlasma 65",
    "SuperLCD 70",
    "Projector Plus",
    "Projector PlusHT",
    "ExcelRemote IR",
    "ExcelRemote BT",
    "ExcelRemote IP"
]
<!--/widgettree-->
===========================================================================
<!--module--><a href="/Documentation/17_1/Guide/Common/Modularity/#Common_Modularity_DevExtreme_Modules_Structure_ui_tag_box">ui/tag_box</a><!--/module-->
<!--export-->default<!--/export-->
<!--inherits-->..\dxSelectBox\dxSelectBox.md<!--/inherits-->
<!--lib-->
dx.mobile.js, dx.web.js, dx.viz-web.js, dx.all.js
<!--/lib-->
===========================================================================

<!--shortDescription-->
The **TagBox** widget is an editor that allows an end user to select multiple items from a drop-down list.
<!--/shortDescription-->

<!--fullDescription-->
You can create the widget using one of the following approaches.

- [**jQuery**](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/)  

        <!--JavaScript-->
        var states = [
            { id: 1, state: "Alabama", capital: "Montgomery" },
            { id: 2, state: "Alaska", capital: "Juneau" },
            { id: 3, state: "Arizona", capital: "Phoenix" },
            // ...
        ];
        $(function() {
            $("#tagBox").dxTagBox({
                dataSource: states,
                valueExpr: 'id',
                displayExpr: 'state'
            });
        });

        <!--HTML-->
        <div id="tagBox"></div>

- [**AngularJS**](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/)  

        <!--HTML--><div ng-controller="DemoController">
            <div dx-tag-box="{
                dataSource: states,
                valueExpr: 'id',
                displayExpr: 'state'
            }"></div>
        </div>

        <!--JavaScript-->angular.module('DemoApp', ['dx'])
            .controller("DemoController", function ($scope) {
                $scope.states = [
                    { id: 1, state: "Alabama", capital: "Montgomery" },
                    { id: 2, state: "Alaska", capital: "Juneau" },
                    { id: 3, state: "Arizona", capital: "Phoenix" },
                    // ...
                ];
            });

- [**Knockout**](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/)  

        <!--HTML-->
        <div data-bind="dxTagBox: {
            dataSource: states,
            valueExpr: 'id',
            displayExpr: 'state'
        }"></div>

        <!--JavaScript-->var viewModel = {
            states: [
                // ...
            ]
        };
        ko.applyBindings(viewModel);

- [**ASP.NET MVC Wrappers**](/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/#Creating_a_Widget)

        <!--Razor C#-->@(Html.DevExtreme().TagBox()
            .ID("tagBox")
            .DataSource(States)
            .DisplayExpr("state")
            .ValueExpr("id")
        )

        <!--Razor VB-->@(Html.DevExtreme().TagBox() _
            .ID("tagBox") _
            .DataSource(States) _
            .DisplayExpr("state") _
            .ValueExpr("id")
        )

Note that DevExtreme widgets require you to link the jQuery library to your application. If you use the Knockout or AngularJS approach, the Knockout or AngularJS library is also required. For detailed information on linking these libraries to your project, refer to the topics in the [Installation](/Documentation/Guide/Getting_Started/Installation/Local_Scripts/) section.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/editorstagboxtagboxmainfeatures/" class="button orange small fix-width-155" style="margin-right:5px;" target="_blank">View Demo</a>
<a href="http://www.youtube.com/watch?v=PEz46QIZhxQ&list=PL8h4jt35t1wjGvgflbHEH_e3b23AA30-z&index=39" class="button orange small fix-width-155" target="_blank">Watch Video</a>

#####See Also#####
- [TagBox - Overview](/Documentation/Guide/Widgets/TagBox/Overview/)
<!--/fullDescription-->
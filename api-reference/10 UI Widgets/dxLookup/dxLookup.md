<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--widgettree-->
dataSource: ["Prepare 2013 Financial","Prepare 3013 Marketing Plan","Update Personnel Files","Review Health Insurance Options Under the Affordable Care Act","Choose between PPO and HMO Health Plan",
    "Google AdWords Strategy","New Brochures","2013 Brochure Designs","Brochure Design Review","Website Re-Design Plan","Rollout of New Website and Marketing Brochures",
    "Update Sales Strategy Documents","Create 2012 Sales Report","Direct vs Online Sales Comparison Report"]
<!--/widgettree-->
===========================================================================
<!--module--><a href="/Documentation/17_1/Guide/Common/Modularity/#Common_Modularity_DevExtreme_Modules_Structure_ui_lookup">ui/lookup</a><!--/module-->
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
You can create the widget using one of the following approaches.

- [**jQuery**](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/)  

        <!--HTML-->
        <div id="lookup"></div>

    <!---->

        <!--JavaScript-->$(function () {
            $("#lookup").dxLookup({
                dataSource: employees,
                displayExpr: 'name',
                title: 'Employees'
            });
        });

- [**AngularJS**](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/)  

        <!--HTML--><div ng-controller="DemoController">
            <div dx-lookup="{
                dataSource: employees,
                displayExpr: 'name',
                title: 'Employees'
            }"></div>
        </div>

    <!---->

        <!--JavaScript-->angular.module('DemoApp', ['dx'])
            .controller("DemoController", function ($scope) {
                $scope.employees = [
                    // ...   
                ];
            });

- [**Knockout**](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/)  

        <!--HTML-->
        <div data-bind="dxLookup: {
            dataSource: employees,
            displayExpr: 'name',
            title: 'Employees'
        }"></div>

    <!---->

        <!--JavaScript-->var viewModel = {
            employees: [
                // ...
            ]
        };
        ko.applyBindings(viewModel);

- [**ASP.NET MVC Wrappers**](/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/#Creating_a_Widget)

        @(Html.DevExtreme().Lookup()
            .ID("lookup")
            .DataSource(Employees)
            .DisplayExpr("name")
            .Title("Employees")
        )

Note that DevExtreme widgets require you to link the jQuery library to your application. If you use the Knockout or AngularJS approach, the Knockout or AngularJS library is also required. For detailed information on linking these libraries to your project, refer to the topics in the [Installation](/Documentation/Guide/Getting_Started/Installation/Local_Scripts/) section.

#####See Also#####
- [Lookup - Overview](/Documentation/Guide/Widgets/Lookup/Overview/)

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/actionsandlistslookuplookuplookup/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>
<!--/fullDescription-->
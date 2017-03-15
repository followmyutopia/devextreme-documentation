<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--widgettree-->

<!--/widgettree-->
===========================================================================
<!--module--><a href="/Documentation/17_1/Guide/Common/Modularity/#Common_Modularity_DevExtreme_Modules_Structure_ui_load_indicator">ui/load_indicator</a><!--/module-->
<!--export-->default<!--/export-->
<!--inherits-->..\Widget\Widget.md<!--/inherits-->
<!--lib-->
dx.mobile.js, dx.web.js, dx.viz-web.js, dx.all.js
<!--/lib-->
===========================================================================

<!--shortDescription-->
The **LoadIndicator** is a UI element notifying the viewer that a process is in progress.
<!--/shortDescription-->

<!--fullDescription-->
You can create the widget using one of the following approaches.

- [**jQuery**](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/)  

        <!--HTML--><div id="loadIndicator"></div>

    <!---->

        <!--JavaScript-->$(function () {
            $("#loadIndicator").dxLoadIndicator({
                visible: true
            });
        });

- [**AngularJS**](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/)  

        <!--HTML--><div ng-controller="DemoController">
            <div dx-load-indicator="{
                bindingOptions: {
                    visible: 'isLoadIndicatorVisible'
                }
            }"></div>
        </div>

    <!---->

        <!--JavaScript-->angular.module('DemoApp', ['dx'])
            .controller("DemoController", function ($scope) {
                $scope.isLoadIndicatorVisible = true;
            });

- [**Knockout**](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/)  

        <!--HTML--><div data-bind="dxLoadIndicator: {
            visible: isLoadIndicatorVisible
        }"></div>

    <!---->

        <!--JavaScript-->var viewModel = {
            isLoadIndicatorVisible: ko.observable(true)
        };
        ko.applyBindings(viewModel);

- [**ASP.NET MVC Wrappers**](/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/#Creating_a_Widget)

        <!--Razor C#-->@(Html.DevExtreme().LoadIndicator()
            .ID("loadIndicator")
            .Visible(true)
        )

        <!--Razor VB-->@(Html.DevExtreme().LoadIndicator() _
            .ID("loadIndicator") _
            .Visible(True)
        )

Note that DevExtreme widgets require you to link the jQuery library to your application. If you use the Knockout or AngularJS approach, the Knockout or AngularJS library is also required. For detailed information on linking these libraries to your project, refer to the topics in the [Installation](/Documentation/Guide/Getting_Started/Installation/Local_Scripts/) section.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/dialogsandnotificationsloadindicatorloadindicatorloadindicator/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

#####See Also#####
- [LoadIndicator - Overview](/Documentation/Guide/Widgets/LoadIndicator/Overview/)
- [LoadIndicator - Show and Hide Using the API](/Documentation/Guide/Widgets/LoadIndicator/Show_and_Hide_Using_the_API/)
<!--/fullDescription-->
<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--widgettree-->
visible: true
<!--/widgettree-->
===========================================================================
<!--module--><a href="/Documentation/17_1/Guide/Common/Modularity/#Common_Modularity_DevExtreme_Modules_Structure_ui_load_panel">ui/load_panel</a><!--/module-->
<!--export-->default<!--/export-->
<!--inherits-->..\dxOverlay\dxOverlay.md<!--/inherits-->
<!--lib-->
dx.mobile.js, dx.web.js, dx.viz-web.js, dx.all.js
<!--/lib-->
===========================================================================

<!--shortDescription-->
The **LoadPanel** is an overlay widget notifying the viewer that loading is in progress.
<!--/shortDescription-->

<!--fullDescription-->
You can create the widget using one of the following approaches.

- [**jQuery**](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/)  

        <!--JavaScript-->$(function () {
            $("#loadPanel").dxLoadPanel({
                closeOnOutsideClick: true,
                visible: true
            });
        });

        <!--HTML-->
        <div id="loadPanel"></div>

- [**AngularJS**](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/)  

        <!--HTML--><div ng-controller="DemoController">
            <div dx-load-panel="{
                closeOnOutsideClick: true,
                bindingOptions: {
                    visible: 'isLoadPanelVisible'
                }
            }"></div>
        </div>

        <!--JavaScript-->angular.module('DemoApp', ['dx'])
            .controller('DemoController', function DemoController($scope) {
                $scope.isLoadPanelVisible = true;
            });

- [**Knockout**](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/)  

        <!--HTML--><div data-bind="dxLoadPanel: {
            closeOnOutsideClick: true,
            visible: isLoadPanelVisible
        }"></div>

        <!--JavaScript-->var viewModel = {
            isLoadPanelVisible: ko.observable(true)
        };
        ko.applyBindings(viewModel);

- [**ASP.NET MVC Wrappers**](/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/#Creating_a_Widget)

        <!--Razor C#-->@(Html.DevExtreme().LoadPanel()
            .ID("loadPanel")
            .CloseOnOutsideClick(true)
            .Visible(true)
        )

        <!--Razor VB-->@(Html.DevExtreme().LoadPanel() _
            .ID("loadPanel") _
            .CloseOnOutsideClick(True) _
            .Visible(True)
        )

Note that DevExtreme widgets require you to link the jQuery library to your application. If you use the Knockout or AngularJS approach, the Knockout or AngularJS library is also required. For detailed information on linking these libraries to your project, refer to the topics in the [Installation](/Documentation/Guide/Getting_Started/Installation/Local_Scripts/) section.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/dialogsandnotificationsloadpanelloadpanelloadpanel/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

#####See Also#####
- [LoadPanel - Overview](/Documentation/Guide/Widgets/LoadPanel/Overview/)
- [LoadPanel - Show and Hide Using the API](/Documentation/Guide/Widgets/LoadPanel/Show_and_Hide_Using_the_API/)
<!--/fullDescription-->
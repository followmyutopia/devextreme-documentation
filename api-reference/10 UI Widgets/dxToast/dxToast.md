<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--widgettree-->
displayTime: 20000,
visible: true,
message: "Toast message"
<!--/widgettree-->
===========================================================================
<!--module--><a href="/Documentation/16_2/Guide/Common/Modularity/#Common_Modularity_DevExtreme_Modules_Structure_ui_toast">ui/toast</a><!--/module-->
<!--export-->default<!--/export-->
<!--inherits-->..\dxOverlay\dxOverlay.md<!--/inherits-->
<!--lib-->
dx.mobile.js, dx.web.js, dx.viz-web.js, dx.all.js
<!--/lib-->
===========================================================================

<!--shortDescription-->
The **Toast** is a widget that provides pop-up notifications.
<!--/shortDescription-->

<!--fullDescription-->
You can create the widget using one of the following approaches.

- [**jQuery**](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/)  

        <!--HTML--><div id="toast"></div>
        <div id="button"></div>

    <!---->

        <!--JavaScript-->$(function() {
            $("#toast").dxToast({
                message: "Connection problem",
                type: "error",
                displayTime: 3000
            });
            $("#button").dxButton({
                text: "Show the Toast", 
                onClick: function () {
                    $("#toast").dxToast("show");
                } 
            });
        });

- [**AngularJS**](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/)  

        <!--HTML--><div ng-controller="DemoController">
            <div dx-toast="{
                message: 'Connection problem',
                type: 'error',
                displayTime: 3000,
                bindingOptions: {
                    visible: 'isToastVisible'
                } 
            }"></div>
            <div dx-button="{
                text: 'Show the Toast', 
                onClick: showToast
            }"></div>
        </div>

    <!---->

        <!--JavaScript-->angular.module('DemoApp', ['dx'])
            .controller("DemoController", function ($scope) {
                $scope.isToastVisible = false;
                $scope.showToast = function () {
                    $scope.isToastVisible = true
                };
            });

- [**Knockout**](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/)  

        <!--HTML-->
        <div data-bind="dxToast: {
            message: 'Connection problem',
            type: 'error',
            displayTime: 3000,
            visible: isToastVisible
        }"></div>
        <div data-bind="dxButton: {
            text: 'Show the Toast', 
            onClick: showToast
        }"></div>

    <!---->

        <!--JavaScript-->var viewModel = {
            isToastVisible: ko.observable(false),
            showToast: function (e) {
                e.model.isToastVisible(true);
            }
        };
        ko.applyBindings(viewModel);

- [**ASP.NET MVC Wrappers**](/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/#Creating_a_Widget)

        @(Html.DevExtreme().Toast()
            .ID("toast")
            .Message("Connection problem")
            .Type(ToastType.Error)
            .DisplayTime(3000)
        )
        @(Html.DevExtreme().Button()
            .ID("button")
            .Text("Show the Toast")
            .OnClick(@<text>
                function (e) {
                    $("#toast").dxToast("show")
                }
            </text>)    
        )

Note that DevExtreme widgets require you to link the jQuery library to your application. If you use the Knockout or AngularJS approach, the Knockout or AngularJS library is also required. For detailed information on linking these libraries to your project, refer to the topics in the [Installation](/Documentation/Guide/Getting_Started/Installation/Local_Scripts/) section.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/dialogsandnotificationstoasttoasttoast/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

#####See Also#####
- [Toast - Overview](/Documentation/Guide/Widgets/Toast/Overview/)
<!--/fullDescription-->
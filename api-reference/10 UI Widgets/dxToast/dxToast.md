<!--widgettree-->
displayTime: 20000,
visible: true,
message: "Toast message"
<!--/widgettree-->
===========================================================================
<!--module-->ui/toast<!--/module-->
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
#include common-ref-roottopic-introduction

---
#####[**jQuery**](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/)  

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

    <!--HTML--><div id="toast"></div>
    <div id="button"></div>

#####[**Angular**](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Create_and_Configure_a_Widget/)  

    <!--HTML-->
    <dx-toast
        message="Connection problem",
        type="error"
        [displayTime]="3000"
        [(visible)]="isToastVisible">
    </dx-toast>
    <dx-button
        text="Show the Toast" 
        (onClick)="showToast()">
    </dx-button>

    <!--TypeScript-->
    export class AppComponent {
        isToastVisible = false;
        showToast() {
            this.isToastVisible = true;
        }
    }

#####[**AngularJS**](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/)  

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

    <!--JavaScript-->angular.module('DemoApp', ['dx'])
        .controller("DemoController", function ($scope) {
            $scope.isToastVisible = false;
            $scope.showToast = function () {
                $scope.isToastVisible = true
            };
        });

#####[**Knockout**](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/)  

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

    <!--JavaScript-->var viewModel = {
        isToastVisible: ko.observable(false),
        showToast: function (e) {
            e.model.isToastVisible(true);
        }
    };
    ko.applyBindings(viewModel);

#####[**ASP.NET MVC Controls**](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Creating_a_Widget)

    <!--Razor C#-->@(Html.DevExtreme().Toast()
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

    <!--Razor VB-->@(Html.DevExtreme().Toast() _
        .ID("toast") _
        .Message("Connection problem") _
        .Type(ToastType.Error) _
        .DisplayTime(3000)
    )
    @(Html.DevExtreme().Button() _
        .ID("button") _
        .Text("Show the Toast") _
        .OnClick("button_click")    
    )
    <script>
        function button_click(e) {
            $("#toast").dxToast("show")
        }
    </script>

---

 

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/#demo/dialogsandnotificationstoasttoasttoast/"
}

#####See Also#####
- [Toast - Overview](/Documentation/Guide/Widgets/Toast/Overview/)
<!--/fullDescription-->
<!--widgettree-->

<!--/widgettree-->
===========================================================================
<!--module-->ui/load_indicator<!--/module-->
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
#include common-ref-roottopic-introduction

---
#####[**jQuery**](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/)  

    <!--JavaScript-->$(function () {
        $("#loadIndicator").dxLoadIndicator({
            visible: true
        });
    });

    <!--HTML--><div id="loadIndicator"></div>

##### Angular

    <!--HTML-->
    <dx-load-indicator [(visible)]="isLoadIndicatorVisible"></dx-load-indicator>

    <!--TypeScript-->
    import { DxLoadIndicatorModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        isLoadIndicatorVisible = true;
    }
    @NgModule({
        imports: [
            // ...
            DxLoadIndicatorModule
        ],
        // ...
    })

#####[**AngularJS**](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/)  

    <!--HTML--><div ng-controller="DemoController">
        <div dx-load-indicator="{
            bindingOptions: {
                visible: 'isLoadIndicatorVisible'
            }
        }"></div>
    </div>

    <!--JavaScript-->angular.module("DemoApp", ["dx"])
        .controller("DemoController", function ($scope) {
            $scope.isLoadIndicatorVisible = true;
        });

#####[**Knockout**](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/)  

    <!--HTML--><div data-bind="dxLoadIndicator: {
        visible: isLoadIndicatorVisible
    }"></div>

    <!--JavaScript-->var viewModel = {
        isLoadIndicatorVisible: ko.observable(true)
    };
    ko.applyBindings(viewModel);

#####[**ASP.NET MVC Controls**](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Creating_a_Widget)

    <!--Razor C#-->@(Html.DevExtreme().LoadIndicator()
        .ID("loadIndicator")
        .Visible(true)
    )

    <!--Razor VB-->@(Html.DevExtreme().LoadIndicator() _
        .ID("loadIndicator") _
        .Visible(True)
    )

---

 

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/#demo/dialogsandnotificationsloadindicatorloadindicatorloadindicator/"
}

#####See Also#####
- [LoadIndicator - Overview](/Documentation/Guide/Widgets/LoadIndicator/Overview/)
- [LoadIndicator - Show and Hide Using the API](/Documentation/Guide/Widgets/LoadIndicator/Show_and_Hide_Using_the_API/)
<!--/fullDescription-->
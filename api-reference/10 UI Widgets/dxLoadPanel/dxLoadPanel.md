<!--id-->dxLoadPanel<!--/id-->
<!--widgettree-->
visible: true
<!--/widgettree-->
===========================================================================
<!--module-->ui/load_panel<!--/module-->
<!--export-->default<!--/export-->
<!--inherits-->dxOverlay<!--/inherits-->
<!--lib-->
dx.web.js, dx.viz-web.js, dx.all.js
<!--/lib-->
===========================================================================

<!--shortDescription-->
The **LoadPanel** is an overlay widget notifying the viewer that loading is in progress.
<!--/shortDescription-->

<!--fullDescription-->
#include common-ref-roottopic-introduction

---
#####[**jQuery**](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/)  

    <!--JavaScript-->$(function () {
        $("#loadPanel").dxLoadPanel({
            closeOnOutsideClick: true,
            visible: true
        });
    });

    <!--HTML-->
    <div id="loadPanel"></div>

##### Angular

    <!--HTML-->
    <dx-load-panel
        [closeOnOutsideClick]="true"
        [(visible)]="isLoadPanelVisible">
    </dx-load-panel>

    <!--TypeScript-->
    import { DxLoadPanelModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        isLoadPanelVisible = true;
    }
    @NgModule({
        imports: [
            // ...
            DxLoadPanelModule
        ],
        // ...
    })

#####[**AngularJS**](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/)  

    <!--HTML--><div ng-controller="DemoController">
        <div dx-load-panel="{
            closeOnOutsideClick: true,
            bindingOptions: {
                visible: 'isLoadPanelVisible'
            }
        }"></div>
    </div>

    <!--JavaScript-->angular.module("DemoApp", ["dx"])
        .controller("DemoController", function DemoController($scope) {
            $scope.isLoadPanelVisible = true;
        });

#####[**Knockout**](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/)  

    <!--HTML--><div data-bind="dxLoadPanel: {
        closeOnOutsideClick: true,
        visible: isLoadPanelVisible
    }"></div>

    <!--JavaScript-->var viewModel = {
        isLoadPanelVisible: ko.observable(true)
    };
    ko.applyBindings(viewModel);

#####[**ASP.NET MVC Controls**](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Creating_a_Widget)

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

---

 

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/#demo/dialogsandnotificationsloadpanelloadpanelloadpanel/"
}

#####See Also#####
- [LoadPanel - Overview](/Documentation/Guide/Widgets/LoadPanel/Overview/)
- [LoadPanel - Show and Hide Using the API](/Documentation/Guide/Widgets/LoadPanel/Show_and_Hide_Using_the_API/)
<!--/fullDescription-->
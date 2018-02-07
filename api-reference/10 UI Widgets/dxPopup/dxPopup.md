<!--widgettree-->
visible: true
<!--/widgettree-->
===========================================================================
<!--module-->ui/popup<!--/module-->
<!--export-->default<!--/export-->
<!--inherits-->..\dxOverlay\dxOverlay.md<!--/inherits-->
<!--lib-->
dx.mobile.js, dx.web.js, dx.viz-web.js, dx.all.js
<!--/lib-->
===========================================================================

<!--shortDescription-->
The **Popup** widget is a pop-up window overlaying the current view. 
<!--/shortDescription-->

<!--fullDescription-->
#include common-ref-roottopic-introduction with { WidgetName: "Popup" }

---
#####[**jQuery**](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/)  

    <!--HTML-->
    <div id="popup">
        <p>Popup content</p>
    </div>

    <!--JavaScript-->$(function () {
        $("#popup").dxPopup({
            title: 'Popup Title',
            visible: true
        });
    });

#####[**Angular**](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Create_and_Configure_a_Widget/)  

    <!--HTML-->
    <dx-popup
        title="Popup Title"
        [(visible)]="isPopupVisible">
            <p>Popup content</p>
    </dx-popup>

    <!--TypeScript-->
    export class AppComponent {
        isPopupVisible = true;
    }

#####[**AngularJS**](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/)  

    <!--HTML--><div ng-controller="DemoController">
        <div dx-popup="{
            title: 'Popup Title',
            bindingOptions: {
                visible: 'isPopupVisible'
            }
        }">
            <p>Popup content</p>
        </div>
    </div>

    <!--JavaScript-->angular.module('DemoApp', ['dx'])
        .controller('DemoController', function DemoController($scope) {
            $scope.isPopupVisible = true;
        });

#####[**Knockout**](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/)  

    <!--HTML-->
    <div data-bind="dxPopup: {
        title: 'Popup Title',
        visible: isPopupVisible
    }"></div>

    <!--JavaScript-->var viewModel = {
        isPopupVisible: ko.observable(true)
    };
    ko.applyBindings(viewModel);

#####[**ASP.NET MVC Controls**](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Creating_a_Widget)

    <!--Razor C#-->@(Html.DevExtreme().Popup()
        .ID("popover")
        .Title("Popup Title")
        .Visible(true)
        .ContentTemplate(@<text>
            <p>Popup content</p>
        </text>)
    )

    <!--Razor VB-->@Code
        Html.DevExtreme().Popup() _
            .ID("popover") _
            .Title("Popup Title") _
            .Visible(True) _
            .ContentTemplate(Sub()
                @<text>
                    <p>Popup content</p>
                </text>
            End Sub).Render()
    End Code

---

 

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/#demo/dialogsandnotificationspopuppopuppopup/"
}

#####See Also#####
- [Popup - Overview](/Documentation/Guide/Widgets/Popup/Overview/)
- [Popup - Show and Hide the Popup](/Documentation/Guide/Widgets/Popup/Show_and_Hide_the_Popup/)
<!--/fullDescription-->
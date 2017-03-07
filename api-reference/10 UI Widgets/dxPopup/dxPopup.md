<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--widgettree-->
visible: true
<!--/widgettree-->
===========================================================================
<!--module--><a href="/Documentation/16_2/Guide/Common/Modularity/#Common_Modularity_DevExtreme_Modules_Structure_ui_popup">ui/popup</a><!--/module-->
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
You can create the widget using one of the following approaches.

- [**jQuery**](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/)  

        <!--HTML-->
        <div id="popup">
            <p>Popup content</p>
        </div>

    <!---->

        <!--JavaScript-->$(function () {
            $("#popup").dxPopup({
                title: 'Popup Title',
                visible: true
            });
        });

- [**AngularJS**](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/)  

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

    <!---->

        <!--JavaScript-->angular.module('DemoApp', ['dx'])
            .controller('DemoController', function DemoController($scope) {
                $scope.isPopupVisible = true;
            });

- [**Knockout**](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/)  

        <!--HTML-->
        <div data-bind="dxPopup: {
            title: 'Popup Title',
            visible: isPopupVisible
        }"></div>

    <!---->

        <!--JavaScript-->var viewModel = {
            isPopupVisible: ko.observable(true)
        };
        ko.applyBindings(viewModel);

- [**ASP.NET MVC Wrappers**](/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/#Creating_a_Widget)

        @(Html.DevExtreme().Popover()
            .ID("popover")
            .Title("Popup Title")
            .Visible(true)
            .ContentTemplate(@<text>
                <p>Popup content</p>
            </text>)
        )

Note that DevExtreme widgets require you to link the jQuery library to your application. If you use the Knockout or AngularJS approach, the Knockout or AngularJS library is also required. For detailed information on linking these libraries to your project, refer to the topics in the [Installation](/Documentation/Guide/Getting_Started/Installation/Local_Scripts/) section.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/dialogsandnotificationspopuppopuppopup/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

#####See Also#####
- [Popup - Overview](/Documentation/Guide/Widgets/Popup/Overview/)
- [Popup - Show and Hide the Popup](/Documentation/Guide/Widgets/Popup/Show_and_Hide_the_Popup/)
<!--/fullDescription-->
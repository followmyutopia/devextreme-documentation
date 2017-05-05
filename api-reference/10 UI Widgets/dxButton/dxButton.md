<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--widgettree-->
icon: "favorites",
text: "Click"
<!--/widgettree-->
===========================================================================
<!--module--><a href="/Documentation/17_1/Guide/Common/Modularity/#Common_Modularity_DevExtreme_Modules_Structure_ui_button">ui/button</a><!--/module-->
<!--export-->default<!--/export-->
<!--inherits-->..\Widget\Widget.md<!--/inherits-->
<!--lib-->
dx.mobile.js, dx.web.js, dx.viz-web.js, dx.all.js
<!--/lib-->
===========================================================================

<!--shortDescription-->
The **Button** widget is a simple button that performs specified commands when a user clicks it.
<!--/shortDescription-->

<!--fullDescription-->
You can create the widget using one of the following approaches.

- [**jQuery**](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/)  

        <!--JavaScript-->$(function () {
            $("#button").dxButton({
                text: 'Click me',
                onClick: function() {
                    alert("The Button was clicked");
                }
            });
        });

        <!--HTML--><div id="button"></div>

- [**Angular**](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Create_and_Configure_a_Widget/)  

        <!--HTML-->
        <dx-button
            text="Click me"
            (onClick)="buttonClicked()">
        </dx-button>

        <!--JavaScript-->
        export class AppComponent {
            buttonClicked() {
                alert("The Button was clicked");
            }
        }

- [**AngularJS**](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/)  

        <!--HTML--><div ng-controller="DemoController">
            <div dx-button="{
                text: 'Click me',
                onClick: buttonClicked
            }"></div>
        </div>

        <!--JavaScript-->angular.module('DemoApp', ['dx'])
            .controller("DemoController", function ($scope) {
                $scope.buttonClicked = function () {
                    alert("The Button was clicked");
                };
            });

- [**Knockout**](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/)  

        <!--HTML--><div data-bind="dxButton: {
            text: 'Click me',
            onClick: function () {
                alert('The Button was clicked');
            }
        }"></div>

- [**ASP.NET MVC Controls**](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Creating_a_Widget)

        <!--Razor C#-->@(Html.DevExtreme().Button()
            .ID("button")
            .Text("Click me")
            .OnClick(@<text>
                function () {
                    alert("The Button was clicked");
                }
            </text>)
        )

        <!--Razor VB-->@(Html.DevExtreme().Button() _
            .ID("button") _
            .Text("Click me") _
            .OnClick("button_click")
        )
        <script>
            function button_click() {
                alert("The Button was clicked");
            }
        </script>

Note that DevExtreme widgets require you to link the jQuery library to your application. If you use the Knockout or AngularJS approach, the Knockout or AngularJS library is also required. For detailed information on linking these libraries to your project, refer to the topics in the [Installation](/Documentation/Guide/Getting_Started/Installation/Local_Scripts/) section.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/actionsandlistsbuttonbuttonbutton/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

#####See Also#####
- [Button - Overview](/Documentation/Guide/Widgets/Button/Overview/)
<!--/fullDescription-->
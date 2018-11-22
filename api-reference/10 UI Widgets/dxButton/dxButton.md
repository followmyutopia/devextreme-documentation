<!--widgettree-->
icon: "favorites",
text: "Click"
<!--/widgettree-->
===========================================================================
<!--module-->ui/button<!--/module-->
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
#include common-ref-roottopic-introduction

---
#####[**jQuery**](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/)  

    <!--JavaScript-->$(function () {
        $("#button").dxButton({
            text: "Click me",
            onClick: function() {
                alert("The Button was clicked");
            }
        });
    });

    <!--HTML--><div id="button"></div>

#####[**Angular**](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Create_and_Configure_a_Widget/)  

    <!--HTML-->
    <dx-button
        text="Click me"
        (onClick)="buttonClicked()">
    </dx-button>

    <!--TypeScript-->
    import { DxButtonModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        buttonClicked() {
            alert("The Button was clicked");
        }
    }
    @NgModule({
        imports: [
            // ...
            DxButtonModule
        ],
        // ...
    })

#####[**AngularJS**](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/)  

    <!--HTML--><div ng-controller="DemoController">
        <div dx-button="{
            text: 'Click me',
            onClick: buttonClicked
        }"></div>
    </div>

    <!--JavaScript-->angular.module("DemoApp", ["dx"])
        .controller("DemoController", function ($scope) {
            $scope.buttonClicked = function () {
                alert("The Button was clicked");
            };
        });

#####[**Knockout**](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/)  

    <!--HTML--><div data-bind="dxButton: {
        text: 'Click me',
        onClick: function () {
            alert('The Button was clicked');
        }
    }"></div>

#####[**ASP.NET MVC Controls**](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Creating_a_Widget)

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

##### Vue

    <template>
        <dx-button
            text="Click me"
            @click="buttonClicked" />
    </template>
    <script>
    import DxButton from "devextreme-vue/button";

    export default {
        components: {
            DxButton
        },
        methods: {
            buttonClicked: function() {
                alert("The Button was clicked");
            }
        }
    }
    </script>

---

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/#demo/actionsandlistsbuttonbuttonbutton/"
}

#####See Also#####
- [Button - Overview](/Documentation/Guide/Widgets/Button/Overview/)
<!--/fullDescription-->
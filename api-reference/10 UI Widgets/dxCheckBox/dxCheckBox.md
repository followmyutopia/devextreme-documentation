<!--widgettree-->

<!--/widgettree-->
===========================================================================
<!--module-->ui/check_box<!--/module-->
<!--export-->default<!--/export-->
<!--inherits-->..\Editor\Editor.md<!--/inherits-->
<!--lib-->
dx.mobile.js, dx.web.js, dx.viz-web.js, dx.all.js
<!--/lib-->
===========================================================================

<!--shortDescription-->
The **CheckBox** is a small box, which when selected by the end user, shows that a particular feature has been enabled or a specific option has been chosen.
<!--/shortDescription-->

<!--fullDescription-->
#include common-ref-roottopic-introduction

---
#####[**jQuery**](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/)  

    <!--JavaScript-->$(function () {
        $("#checkBox").dxCheckBox({
            text: 'Toggle me',
            value: undefined,
            onValueChanged: function (e) {
                alert(e.value);
            }
        });
    });

    <!--HTML--><div id="checkBox"></div>

#####[**Angular**](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Create_and_Configure_a_Widget/)  

    <!--HTML-->
    <dx-check-box
        text="Toggle me"
        [value]="undefined"
        (onValueChanged)="checkBoxToggled($event)">
    </dx-check-box>

    <!--TypeScript-->
    export class AppComponent {
        checkBoxToggled(e) {
            alert(e.value);
        };
    }

#####[**AngularJS**](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/)  

    <!--HTML--><div ng-controller="DemoController">
        <div dx-check-box="{
            text: 'Toggle me',
            value: undefined,
            onValueChanged: checkBoxToggled
        }"></div>
    </div>

    <!--JavaScript-->angular.module('DemoApp', ['dx'])
        .controller("DemoController", function ($scope) {
            $scope.checkBoxToggled = function (e) {
                alert(e.value);
            };
        });
        
#####[**Knockout**](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/)  

    <!--HTML--><div data-bind="dxCheckBox: {
        text: 'Toggle me',
        value: undefined,
        onValueChanged: function (e) {
            alert(e.value);
        }
    }"></div>

#####[**ASP.NET MVC Controls**](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Creating_a_Widget)

    <!--Razor C#-->@(Html.DevExtreme().CheckBox()
        .ID("checkBox")
        .Text("Toggle me")
        .OnValueChanged(@<text>
            function (e) {
                alert(e.value);
            }
        </text>)
    )

    <!--Razor VB-->@(Html.DevExtreme().CheckBox() _
        .ID("checkBox") _
        .Text("Toggle me") _
        .OnValueChanged("checkBox_valueChanged")
    )
    <script>
        function checkBox_valueChanged(e) {
            alert(e.value);
        }
    </script>

---

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/#demo/editorscheckboxcheckboxcheckbox/"
}

#####See Also#####
- [CheckBox - Overview](/Documentation/Guide/Widgets/CheckBox/Overview/)
<!--/fullDescription-->
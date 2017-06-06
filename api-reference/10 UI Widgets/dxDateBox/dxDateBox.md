<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--widgettree-->
opened: true
<!--/widgettree-->
===========================================================================
<!--module-->ui/date_box<!--/module-->
<!--export-->default<!--/export-->
<!--inherits-->..\dxDropDownEditor\dxDropDownEditor.md<!--/inherits-->
<!--lib-->
dx.mobile.js, dx.web.js, dx.viz-web.js, dx.all.js
<!--/lib-->
===========================================================================

<!--shortDescription-->
The **DateBox** is a widget that displays date and time in a specified format, and enables a user to pick or type in the required date/time value.
<!--/shortDescription-->

<!--fullDescription-->
You can create the widget using one of the following approaches.

---
#####[**jQuery**](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/)  

    <!--JavaScript-->$(function () {
        $("#dateBox").dxDateBox({
            min: new Date(2000, 0, 1),
            max: new Date(2029, 11, 31),
            value: new Date()
        });
    });

    <!--HTML--><div id="dateBox"></div>

#####[**Angular**](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Create_and_Configure_a_Widget/)  

    <!--HTML-->
    <dx-date-box
        [min]="minDate"
        [max]="maxDate"
        [(value)]="currentDate">
    </dx-date-box>

    <!--JavaScript-->
    export class AppComponent {
        minDate = new Date(2000, 0, 1);
        maxDate = new Date(2029, 11, 31);
        currentDate = new Date();
    }

#####[**AngularJS**](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/)  

    <!--HTML--><div ng-controller="DemoController">
        <div dx-date-box="{
            min: minDate,
            max: maxDate,
            bindingOptions: {
                value: 'currentDate'
            }
        }"></div>
    </div>

    <!--JavaScript-->angular.module('DemoApp', ['dx'])
        .controller("DemoController", function ($scope) {
            $scope.minDate = new Date(2000, 0, 1);
            $scope.maxDate = new Date(2029, 11, 31);
            $scope.currentDate = new Date();
        });

#####[**Knockout**](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/)  

    <!--HTML-->
    <div data-bind="dxDateBox: {
        min: new Date(2000, 0, 1),
        max: new Date(2029, 11, 31),
        value: currentDate
    }"></div>

    <!--JavaScript-->var viewModel = {
        currentDate: ko.observable(new Date())
    };
    ko.applyBindings(viewModel);

#####[**ASP.NET MVC Controls**](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Creating_a_Widget)
    
    <!--Razor C#-->@(Html.DevExtreme().DateBox()
        .ID("dateBox")
        .Min(new DateTime(2000, 1, 1))
        .Max(new DateTime(2029, 12, 31))
        .Value(DateTime.Now)
    )

    <!--Razor VB-->@(Html.DevExtreme().DateBox() _
        .ID("dateBox") _
        .Min(New DateTime(2000, 1, 1)) _
        .Max(New DateTime(2029, 12, 31)) _
        .Value(DateTime.Now)
    )

---

Note that DevExtreme widgets require you to link the jQuery library to your application. If you use the Knockout or AngularJS approach, the Knockout or AngularJS library is also required. For detailed information on linking these libraries to your project, refer to the topics in the [Installation](/Documentation/Guide/Getting_Started/Installation/Local_Scripts/) section.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/editorsdateboxdateboxdatebox/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

#####See Also#####
- [DateBox - Overview](/Documentation/Guide/Widgets/DateBox/Overview/)
<!--/fullDescription-->
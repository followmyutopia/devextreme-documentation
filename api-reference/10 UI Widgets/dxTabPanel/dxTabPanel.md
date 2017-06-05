<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--widgettree-->
dataSource: [
        {
            title: "Info",
            text: "John Smith, 1986"
        },
        {
            title: "Contacts",
            text: "phone: (555)555-5555, email: John.Smith@example.com"
        },
        {
            title: "Address",
            text: "CA San Francisco Stanford Ave st."
        }
],
height: 200
<!--/widgettree-->
===========================================================================
<!--module--><a href="/Documentation/17_1/Guide/Common/Modularity/#Common_Modularity_DevExtreme_Modules_Structure_ui_tab_panel">ui/tab_panel</a><!--/module-->
<!--export-->default<!--/export-->
<!--inherits-->..\dxMultiView\dxMultiView.md<!--/inherits-->
<!--lib-->
dx.mobile.js, dx.web.js, dx.viz-web.js, dx.all.js
<!--/lib-->
===========================================================================

<!--shortDescription-->
The **TabPanel** is a widget consisting of the [Tabs](/Documentation/Guide/Widgets/Tabs/Overview/) and [MultiView](/Documentation/Guide/Widgets/MultiView/Overview/) widgets. It automatically synchronizes the selected tab with the currently displayed view and vice versa.
<!--/shortDescription-->

<!--fullDescription-->
You can create the widget using one of the following approaches.

---
#####[**jQuery**](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/)  

    <!--JavaScript-->var tabs = [{
        title: 'Info',
        text: 'This is Info Tab'
    }, {
        title: 'Contacts',
        text: 'This is Contacts Tab'
    }, {
        title: 'Address',
        text: 'This is Address Tab'
    }];
    $(function () {
        $("#tabPanel").dxTabPanel({
            items: tabs
        });
    });

    <!--HTML-->
    <div id="tabPanel"></div>

#####[**Angular**](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Create_and_Configure_a_Widget/)  

    <!--HTML-->
    <dx-tab-panel [items]="tabs"></dx-tab-panel>

    <!--JavaScript-->
    export class AppComponent {
        tabs = [
            // ...
        ];
    }

#####[**AngularJS**](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/)  

    <!--HTML--><div ng-controller="DemoController">
        <div dx-tab-panel="{
            items: tabs
        }"></div>
    </div>

    <!--JavaScript-->angular.module('DemoApp', ['dx'])
        .controller("DemoController", function ($scope) {
            $scope.tabs = [
                // ...   
            ];
        });

#####[**Knockout**](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/)  

    <!--HTML-->
    <div data-bind="dxTabPanel: {
        items: tabs
    }"></div>

    <!--JavaScript-->var viewModel = {
        tabs: [
            // ...
        ]
    };
    ko.applyBindings(viewModel);

#####[**ASP.NET MVC Controls**](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Creating_a_Widget)

    <!--Razor C#-->@(Html.DevExtreme().TabPanel()
        .ID("tabPanel")
        .Items(items => {
            items.Add().Title("Info").Text("This is Info Tab");
            items.Add().Title("Contacts").Text("This is Contacts Tab");
            items.Add().Title("Address").Text("This is Address Tab");
        })
    )

    <!--Razor VB-->@(Html.DevExtreme().TabPanel() _
        .ID("tabPanel") _
        .Items(Sub(items)
            items.Add().Title("Info").Text("This is Info Tab")
            items.Add().Title("Contacts").Text("This is Contacts Tab")
            items.Add().Title("Address").Text("This is Address Tab")
        End Sub)
    )

---

Note that DevExtreme widgets require you to link the jQuery library to your application. If you use the Knockout or AngularJS approach, the Knockout or AngularJS library is also required. For detailed information on linking these libraries to your project, refer to the topics in the [Installation](/Documentation/Guide/Getting_Started/Installation/Local_Scripts/) section.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/navigationtabpaneltabpaneltabpanel/" class="button orange small fix-width-155" style="margin-right:5px;" target="_blank">View Demo</a>
<a href="http://www.youtube.com/watch?v=SyGIlFZY_S0&list=PL8h4jt35t1wjGvgflbHEH_e3b23AA30-z&index=42" class="button orange small fix-width-155" target="_blank">Watch Video</a>

#####See Also#####
- [TabPanel - Overview](/Documentation/Guide/Widgets/TabPanel/Overview/)
<!--/fullDescription-->
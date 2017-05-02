<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--widgettree-->
dataSource: [
    { text: "Home", icon: "home" },
    { text: "About", icon: "info" }
]
<!--/widgettree-->
===========================================================================
<!--module--><a href="/Documentation/17_1/Guide/Common/Modularity/#Common_Modularity_DevExtreme_Modules_Structure_ui_tabs">ui/tabs</a><!--/module-->
<!--export-->default<!--/export-->
<!--inherits-->..\CollectionWidget\CollectionWidget.md<!--/inherits-->
<!--lib-->
dx.mobile.js, dx.web.js, dx.viz-web.js, dx.all.js
<!--/lib-->
===========================================================================

<!--shortDescription-->
The **Tabs** is a tab strip used to switch between pages or views. This widget is included in the [TabPanel](/Documentation/Guide/Widgets/TabPanel/Overview/) widget, but you can use the **Tabs** separately as well.
<!--/shortDescription-->

<!--fullDescription-->
You can create the widget using one of the following approaches.

- [**jQuery**](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/)  

        <!--JavaScript-->
        var tabs = [
            { text: "User", icon: "user" },
            { text: "Comment", icon: "comment" },
            { text: "Find", icon: "find", badge: "new" }
        ];
        $(function () {
            $("#tabs").dxTabs({
                items: tabs
            });
        });

        <!--HTML-->
        <div id="tabs"></div>

- [**AngularJS**](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/)  

        <!--HTML--><div ng-controller="DemoController">
            <div dx-tabs="{
                items: tabs
            }"></div>
        /div>

        <!--JavaScript-->angular.module('DemoApp', ['dx'])
            .controller("DemoController", function ($scope) {
                $scope.tabs = [
                    { text: "User", icon: "user" },
                    { text: "Comment", icon: "comment" },
                    { text: "Find", icon: "find", badge: "new" }  
                ];
            });

- [**Knockout**](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/)  

        <!--HTML-->
        <div data-bind="dxTabs: {
            items: tabs
        }"></div>

        <!--JavaScript-->var viewModel = {
            tabs: [
                { text: "User", icon: "user" },
                { text: "Comment", icon: "comment" },
                { text: "Find", icon: "find", badge: "new" }
            ]
        };
        ko.applyBindings(viewModel);

- [**ASP.NET MVC Controls**](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Creating_a_Widget)

        <!--Razor C#-->@(Html.DevExtreme().Tabs()
            .ID("tabs")
            .Items(items => {
                items.Add().Text("User").Icon("user");
                items.Add().Text("Comment").Icon("comment");
                items.Add().Text("Find").Icon("find").Badge("new");
            })
        )

        <!--Razor VB-->@(Html.DevExtreme().Tabs() _
            .ID("tabs") _
            .Items(Sub(items)
                items.Add().Text("User").Icon("user")
                items.Add().Text("Comment").Icon("comment")
                items.Add().Text("Find").Icon("find").Badge("new")
            End Sub)
        )

Note that DevExtreme widgets require you to link the jQuery library to your application. If you use the Knockout or AngularJS approach, the Knockout or AngularJS library is also required. For detailed information on linking these libraries to your project, refer to the topics in the [Installation](/Documentation/Guide/Getting_Started/Installation/Local_Scripts/) section.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/navigationtabstabstabs/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

#####See Also#####
- [Tabs - Overview](/Documentation/Guide/Widgets/Tabs/Overview/)
<!--/fullDescription-->
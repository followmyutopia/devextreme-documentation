<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--widgettree-->
dataSource: [
    { text: "Video Players" },
    { text: "Televisions" },
    {
        text: "Monitors",
        items: [
            { text: "DesktopLCD 19" },
            { text: "DesktopLCD 21" },
            { text: "DesktopLED 21" }
        ]
    }
]
<!--/widgettree-->
===========================================================================
<!--module--><a href="/Documentation/17_1/Guide/Common/Modularity/#Common_Modularity_DevExtreme_Modules_Structure_ui_menu">ui/menu</a><!--/module-->
<!--export-->default<!--/export-->
<!--inherits-->..\dxMenuBase\dxMenuBase.md<!--/inherits-->
<!--lib-->
dx.web.js, dx.viz-web.js, dx.all.js
<!--/lib-->
===========================================================================

<!--shortDescription-->
The **Menu** widget is a panel with clickable items. A click on an item opens a drop-down menu, which can contain several submenus.
<!--/shortDescription-->

<!--fullDescription-->
You can create the widget using one of the following approaches.

---
#####[**jQuery**](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/)  

        <!--JavaScript-->
        var menuItems = [
            { text: "Hide" },
            { text: "Delete" },
            {
                text: "Clipboard",
                items: [
                    { text: "Copy text" },
                    { text: "Clear text" },
                    { text: "Paste text" }
                ]
            }
        ];
        $(function () {
            $("#menu").dxMenu({
                items: menuItems
            });
        });

        <!--HTML-->
        <div id="menu"></div>

#####[**Angular**](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Create_and_Configure_a_Widget/)  

        <!--HTML-->
        <dx-menu [items]="menuItems"></dx-menu>

        <!--JavaScript-->
        export class AppComponent {
            menuItems = [
                // ...   
            ];
        }

#####[**AngularJS**](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/)  

        <!--HTML--><div ng-controller="DemoController">
            <div dx-menu="{
                items: menuItems
            }"></div>
        </div>

        <!--JavaScript-->angular.module('DemoApp', ['dx'])
            .controller("DemoController", function ($scope) {
                $scope.menuItems = [
                    // ...   
                ];
            });

#####[**Knockout**](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/)  

        <!--HTML-->
        <div data-bind="dxMenu: {
            items: menuItems
        }"></div>

        <!--JavaScript-->var viewModel = {
            menuItems: [
                // ...
            ]
        };
        ko.applyBindings(viewModel);

#####[**ASP.NET MVC Controls**](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Creating_a_Widget)

        <!--Razor C#-->@(Html.DevExtreme().Menu()
            .ID("menu")
            .Items(items => {
                items.Add().Text("Hide");
                items.Add().Text("Delete");
                items.Add().Text("Clipboard").Items(clipboardItems => {
                    clipboardItems.Add().Text("Copy text");
                    clipboardItems.Add().Text("Clear text");
                    clipboardItems.Add().Text("Paste text");
                });
            })
        )

        <!--Razor VB-->@(Html.DevExtreme().Menu() _
            .ID("menu") _
            .Items(Sub(items)
                items.Add().Text("Hide")
                items.Add().Text("Delete")
                items.Add().Text("Clipboard").Items(Sub(clipboardItems)
                    clipboardItems.Add().Text("Copy text")
                    clipboardItems.Add().Text("Clear text")
                    clipboardItems.Add().Text("Paste text")
                End Sub)
            End Sub)
        )

---

Note that DevExtreme widgets require you to link the jQuery library to your application. If you use the Knockout or AngularJS approach, the Knockout or AngularJS library is also required. For detailed information on linking these libraries to your project, refer to the topics in the [Installation](/Documentation/Guide/Getting_Started/Installation/Local_Scripts/) section.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/navigationmenumenumenu/" class="button orange small fix-width-155" style="margin-right: 5px;" target="_blank">View Demo</a>
<a href="https://www.youtube.com/watch?v=XR3HePJDa70" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">Watch Video</a>

#####See Also#####
- [Menu - Overview](/Documentation/Guide/Widgets/Menu/Overview/)
<!--/fullDescription-->
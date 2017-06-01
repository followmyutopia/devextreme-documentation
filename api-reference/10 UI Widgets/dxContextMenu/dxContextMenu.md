<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--widgettree-->
dataSource: [
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
],
visible: true
<!--/widgettree-->
===========================================================================
<!--module--><a href="/Documentation/17_1/Guide/Common/Modularity/#Common_Modularity_DevExtreme_Modules_Structure_ui_context_menu">ui/context_menu</a><!--/module-->
<!--export-->default<!--/export-->
<!--inherits-->..\dxMenuBase\dxMenuBase.md<!--/inherits-->
<!--lib-->
dx.web.js, dx.viz-web.js, dx.all.js
<!--/lib-->
===========================================================================

<!--shortDescription-->
The **ContextMenu** widget displays a single- or multi-level context menu. An end user invokes this menu by a right click or a long press.
<!--/shortDescription-->

<!--fullDescription-->
You can create the widget using one of the following approaches.

---
#####[**jQuery**](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/)  

        <!--JavaScript-->var contextMenuItems = [
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
            $("#contextMenu").dxContextMenu({
                items: contextMenuItems,
                target: "#targetElement"
            });
        });

        <!--HTML--><div id="targetElement"></div>
        <div id="contextMenu"></div>

#####[**Angular**](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Create_and_Configure_a_Widget/)  

        <!--HTML-->
        <div id="targetElement"></div>
        <dx-context-menu
            [items]="contextMenuItems"
            target="#targetElement">
        </dx-context-menu>

        <!--JavaScript-->
        export class AppComponent {
            contextMenuItems = [
                // ...   
            ];
        }

#####[**AngularJS**](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/)  

        <!--HTML--><div ng-controller="DemoController">
            <div id="targetElement"></div>
            <div dx-context-menu="{
                items: contextMenuItems,
                target: '#targetElement'
            }"></div>
        </div>

        <!--JavaScript-->angular.module('DemoApp', ['dx'])
            .controller("DemoController", function ($scope) {
                $scope.contextMenuItems = [
                    // ...   
                ];
            });

#####[**Knockout**](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/)  

        <!--HTML--><div id="targetElement"></div>
        <div data-bind="dxContextMenu: {
            items: contextMenuItems,
            target: '#targetElement'
        }"></div>

        <!--JavaScript-->var viewModel = {
            contextMenuItems: [
                // ...
            ]
        };
        ko.applyBindings(viewModel);

#####[**ASP.NET MVC Controls**](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Creating_a_Widget)
        
        <!--Razor C#-->@(Html.DevExtreme().ContextMenu()
            .ID("contextMenu")
            .Target("#targetElement")
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
        <div id="targetElement"></div>

        <!--Razor VB-->@(Html.DevExtreme().ContextMenu() _
            .ID("contextMenu") _
            .Target("#targetElement") _
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
        <div id="targetElement"></div>

---

Note that DevExtreme widgets require you to link the jQuery library to your application. If you use the Knockout or AngularJS approach, the Knockout or AngularJS library is also required. For detailed information on linking these libraries to your project, refer to the topics in the [Installation](/Documentation/Guide/Getting_Started/Installation/Local_Scripts/) section.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/actionsandlistscontextmenucontextmenucontextmenu/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

#####See Also#####
- [ContextMenu - Overview](/Documentation/Guide/Widgets/ContextMenu/Overview/)
<!--/fullDescription-->
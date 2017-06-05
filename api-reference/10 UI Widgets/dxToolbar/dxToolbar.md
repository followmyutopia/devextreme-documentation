<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--widgettree-->
dataSource: [{
        text: "Contacts",
        location: "before"
    }, {
        text: "Missed"
    }, {
        text: "Favorites",
        location: "after"
    }
]
<!--/widgettree-->
===========================================================================
<!--module--><a href="/Documentation/17_1/Guide/Common/Modularity/#Common_Modularity_DevExtreme_Modules_Structure_ui_toolbar">ui/toolbar</a><!--/module-->
<!--export-->default<!--/export-->
<!--inherits-->..\CollectionWidget\CollectionWidget.md<!--/inherits-->
<!--lib-->
dx.mobile.js, dx.web.js, dx.viz-web.js, dx.all.js
<!--/lib-->
===========================================================================

<!--shortDescription-->
The **Toolbar** is a widget containing items that usually manage screen content. Those items can be plain text or widgets.
<!--/shortDescription-->

<!--fullDescription-->
The main option you should specify when creating a widget is the [dataSource](/Documentation/ApiReference/UI_Widgets/dxToolbar/Configuration/#dataSource). The following code snippet demonstrates an example of an array that can be passed to the **dataSource** option of the **Toolbar** widget.

    <!--JavaScript-->
    var toolbarItems = [{
        widget: 'dxButton',
        options: {
            type: 'back',
            text: 'Back'
        },
        location: 'before'
    }, {
        text: 'Add',
        locateInMenu: 'always'
    }, {
        text: 'Change',
        locateInMenu: 'always'
    }, {
        text: 'Products',
        location: 'center'
    }];

You can create the widget using one of the following approaches.

---
#####[**jQuery**](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/)  

    <!--JavaScript-->$(function () {
        $("#toolbar").dxToolbar({
            items: toolbarItems
        });
    });

    <!--HTML-->
    <div id="toolbar"></div>

#####[**Angular**](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Create_and_Configure_a_Widget/)  

    <!--HTML-->
    <dx-toolbar [items]="toolbarData"></dx-toolbar>

    <!--JavaScript-->
    export class AppComponent {
        toolbarData = toolbarItems;
    }

#####[**AngularJS**](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/)  

    <!--HTML--><div ng-controller="DemoController">
        <div dx-toolbar="{
            items: toolbarData
        }"></div>
    </div>

    <!--JavaScript-->angular.module('DemoApp', ['dx'])
        .controller('DemoController', function DemoController($scope) {
            $scope.toolbarData = toolbarItems;
        });

#####[**Knockout**](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/)  

    <!--HTML-->
    <div data-bind="dxToolbar: {
        items: toolbarData
    }"></div>

    <!--JavaScript-->
    var viewModel = {
        toolbarData: toolbarItems
    };
    ko.applyBindings(viewModel);

#####[**ASP.NET MVC Controls**](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Creating_a_Widget)

    <!--Razor C#-->@(Html.DevExtreme().Toolbar()
        .ID("toolbar")
        .Items(items => {
            items.Add()
                .Widget(w => w.Button()
                    .Type(ButtonType.Back)
                    .Text("Back"))
                .Location(ToolbarItemLocation.Before);
            items.Add()
                .Text("Add")
                .LocateInMenu(ToolbarItemLocateInMenuMode.Always);
            items.Add()
                .Text("Change")
                .LocateInMenu(ToolbarItemLocateInMenuMode.Always);
            items.Add()
                .Text("Products")
                .Location(ToolbarItemLocation.Center);
        })
    )

    <!--Razor VB-->@(Html.DevExtreme().Toolbar() _
        .ID("toolbar") _
        .Items(Sub(items)
            items.Add() _
                .Widget(Function(w)
                    Return w.Button() _
                            .Type(ButtonType.Back) _
                            .Text("Back")
                End Function) _
                .Location(ToolbarItemLocation.Before)
            items.Add() _
                .Text("Add") _
                .LocateInMenu(ToolbarItemLocateInMenuMode.Always)
            items.Add() _
                .Text("Change") _
                .LocateInMenu(ToolbarItemLocateInMenuMode.Always)
            items.Add() _
                .Text("Products") _
                .Location(ToolbarItemLocation.Center)
        End Sub)
    )

---

Note that DevExtreme widgets require you to link the jQuery library to your application. If you use the Knockout or AngularJS approach, the Knockout or AngularJS library is also required. For detailed information on linking these libraries to your project, refer to the topics in the [Installation](/Documentation/Guide/Getting_Started/Installation/Local_Scripts/) section.

#####See Also#####
- [Toolbar - Overview](/Documentation/Guide/Widgets/Toolbar/Overview/)

<!--/fullDescription-->
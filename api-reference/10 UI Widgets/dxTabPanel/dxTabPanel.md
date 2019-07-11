<!--id-->dxTabPanel<!--/id-->
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
<!--module-->ui/tab_panel<!--/module-->
<!--export-->default<!--/export-->
<!--inherits-->dxMultiView<!--/inherits-->
<!--lib-->
dx.web.js, dx.viz-web.js, dx.all.js
<!--/lib-->
===========================================================================

<!--shortDescription-->
The **TabPanel** is a widget consisting of the [Tabs](/Documentation/Guide/Widgets/Tabs/Overview/) and [MultiView](/Documentation/Guide/Widgets/MultiView/Overview/) widgets. It automatically synchronizes the selected tab with the currently displayed view and vice versa.
<!--/shortDescription-->

<!--fullDescription-->
#include common-ref-roottopic-introduction

---
#####[**jQuery**](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/)  

    <!--JavaScript-->var tabs = [{
        title: 'Tab 1 Title',
        text: 'Tab 1 Text Content'
    }, {
        title: 'Tab 2 Title',
        text: 'Tab 2 Text Content'
    }, {
        title: 'Tab 3 Title',
        text: 'Tab 3 Text Content'
    }];
    $(function () {
        $("#tabPanel").dxTabPanel({
            items: tabs
        });
    });

    <!--HTML-->
    <div id="tabPanel"></div>

##### Angular

    <!--HTML-->
    <dx-tab-panel [items]="tabs"></dx-tab-panel>

    <!--TypeScript-->
    import { DxTabPanelModule } from 'devextreme-angular'
    // ...
    export class AppComponent {
        tabs = [{
            title: 'Tab 1 Title',
            text: 'Tab 1 Text Content'
        }, {
            title: 'Tab 2 Title',
            text: 'Tab 2 Text Content'
        }, {
            title: 'Tab 3 Title',
            text: 'Tab 3 Text Content'
        }];
    }
    @NgModule({
        imports: [
            // ...
            DxTabPanelModule
        ],
        // ...
    })

#####[**AngularJS**](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/)  

    <!--HTML--><div ng-controller="DemoController">
        <div dx-tab-panel="{
            items: tabs
        }"></div>
    </div>

    <!--JavaScript-->angular.module("DemoApp", ["dx"])
        .controller("DemoController", function ($scope) {
            $scope.tabs = [{
                title: 'Tab 1 Title',
                text: 'Tab 1 Text Content'
            }, {
                title: 'Tab 2 Title',
                text: 'Tab 2 Text Content'
            }, {
                title: 'Tab 3 Title',
                text: 'Tab 3 Text Content'
            }];
        });

#####[**Knockout**](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/)  

    <!--HTML-->
    <div data-bind="dxTabPanel: {
        items: tabs
    }"></div>

    <!--JavaScript-->var viewModel = {
        tabs: [{
            title: 'Tab 1 Title',
            text: 'Tab 1 Text Content'
        }, {
            title: 'Tab 2 Title',
            text: 'Tab 2 Text Content'
        }, {
            title: 'Tab 3 Title',
            text: 'Tab 3 Text Content'
        }]
    };
    ko.applyBindings(viewModel);

#####[**ASP.NET MVC Controls**](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Creating_a_Widget)

    <!--Razor C#-->@(Html.DevExtreme().TabPanel()
        .ID("tabPanel")
        .Items(items => {
            items.Add().Title("Tab 1 Title").Text("Tab 1 Text Content");
            items.Add().Title("Tab 2 Title").Text("Tab 2 Text Content");
            items.Add().Title("Tab 3 Title").Text("Tab 3 Text Content");
        })
    )

    <!--Razor VB-->@(Html.DevExtreme().TabPanel() _
        .ID("tabPanel") _
        .Items(Sub(items)
            items.Add().Title("Tab 1 Title").Text("Tab 1 Text Content")
            items.Add().Title("Tab 2 Title").Text("Tab 2 Text Content")
            items.Add().Title("Tab 3 Title").Text("Tab 3 Text Content")
        End Sub)
    )

---

 

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/#demo/navigationtabpaneltabpaneltabpanel/"
}
<a href="http://www.youtube.com/watch?v=SyGIlFZY_S0&list=PL8h4jt35t1wjGvgflbHEH_e3b23AA30-z&index=42" class="button orange small fix-width-155" target="_blank">Watch Video</a>

#####See Also#####
- [TabPanel - Overview](/Documentation/Guide/Widgets/TabPanel/Overview/)
<!--/fullDescription-->
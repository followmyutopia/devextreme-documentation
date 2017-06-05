<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--widgettree-->
dataSource: [
    { text: "Super Mart of the West" },
    { text: "Electronics Depot" },
    { text: "Tom's Club" }
],
height: 300,
loop: true
<!--/widgettree-->
===========================================================================
<!--module--><a href="/Documentation/17_1/Guide/Common/Modularity/#Common_Modularity_DevExtreme_Modules_Structure_ui_multi_view">ui/multi_view</a><!--/module-->
<!--export-->default<!--/export-->
<!--inherits-->..\CollectionWidget\CollectionWidget.md<!--/inherits-->
<!--lib-->
dx.mobile.js, dx.web.js, dx.viz-web.js, dx.all.js
<!--/lib-->
===========================================================================

<!--shortDescription-->
The **MultiView** is a widget that contains several views. An end user navigates through the views by swiping them in the horizontal direction. 
<!--/shortDescription-->

<!--fullDescription-->
You can create the widget using one of the following approaches.

---
#####[**jQuery**](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/)  

    <!--JavaScript-->
    var multiViewItems = [
        { text: "Personal Data" },
        { text: "Contacts" },
        { text: "Address" }
    ];
    $(function () {
        $("#multiView").dxMultiView({
            items: multiViewItems
        });
    });

    <!--HTML-->
    <div id="multiView"></div>

#####[**Angular**](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Create_and_Configure_a_Widget/)  

    <!--HTML-->
    <dx-multi-view [items]="multiViewItems"></dx-multi-view>

    <!--JavaScript-->
    export class AppComponent {
        multiViewItems = [
            // ...   
        ];
    }

#####[**AngularJS**](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/)  

    <!--HTML--><div ng-controller="DemoController">
        <div dx-multi-view="{
            items: multiViewItems
        }"></div>
    </div>

    <!--JavaScript-->angular.module('DemoApp', ['dx'])
        .controller("DemoController", function ($scope) {
            $scope.multiViewItems = [
                // ...   
            ];
        });

#####[**Knockout**](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/)  

    <!--HTML-->
    <div data-bind="dxMultiView: {
        items: multiViewItems
    }"></div>

    <!--JavaScript-->var viewModel = {
        multiViewItems: [
            // ...
        ]
    };
    ko.applyBindings(viewModel);

#####[**ASP.NET MVC Controls**](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Creating_a_Widget)
    
    <!--Razor C#-->@(Html.DevExtreme().MultiView()
        .ID("multiView")
        .Items(items => {
            items.Add().Text("Personal Data");
            items.Add().Text("Contacts");
            items.Add().Text("Address");
        })
    )

    <!--Razor VB-->@(Html.DevExtreme().MultiView() _
        .ID("multiView") _
        .Items(Sub(items)
            items.Add().Text("Personal Data")
            items.Add().Text("Contacts")
            items.Add().Text("Address")
        End Sub)
    )

---

Note that DevExtreme widgets require you to link the jQuery library to your application. If you use the Knockout or AngularJS approach, the Knockout or AngularJS library is also required. For detailed information on linking these libraries to your project, refer to the topics in the [Installation](/Documentation/Guide/Getting_Started/Installation/Local_Scripts/) section.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/navigationmultiviewmultiviewmultiview/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

#####See Also#####
- [MultiView - Overview](/Documentation/Guide/Widgets/MultiView/Overview/)
<!--/fullDescription-->
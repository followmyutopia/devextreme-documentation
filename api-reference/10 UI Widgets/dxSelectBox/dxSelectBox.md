<!--widgettree-->
dataSource: [
    "HD Video Player",
    "SuperHD Video Player",
    "SuperPlasma 50",
    "SuperLED 50",
    "SuperLED 42",
    "SuperLCD 55",
    "SuperLCD 42",
    "SuperPlasma 65",
    "SuperLCD 70",
    "Projector Plus",
    "Projector PlusHT",
    "ExcelRemote IR",
    "ExcelRemote BT",
    "ExcelRemote IP"
]
<!--/widgettree-->
===========================================================================
<!--module-->ui/select_box<!--/module-->
<!--export-->default<!--/export-->
<!--inherits-->..\dxDropDownList\dxDropDownList.md<!--/inherits-->
<!--lib-->
dx.web.js, dx.viz-web.js, dx.all.js
<!--/lib-->
===========================================================================

<!--shortDescription-->
The **SelectBox** widget is an editor that allows an end user to select an item from a drop-down list.
<!--/shortDescription-->

<!--fullDescription-->
#include common-ref-roottopic-introduction

---
#####[**jQuery**](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/)  

    <!--JavaScript-->
    $(function() {
        $("#selectBox").dxSelectBox({
            dataSource: [ "Item 1", "Item 2", "Item 3" ],
            searchEnabled: true
        });
    });

    <!--HTML-->
    <div id="selectBox"></div>

##### Angular

    <!--HTML-->
    <dx-select-box
        [dataSource]="selectBoxDataSource"
        [searchEnabled]="true">
    </dx-select-box>

    <!--TypeScript-->
    import { DxSelectBoxModule } from "devextreme-angular"
    // ...
    export class AppComponent {
        selectBoxDataSource = [ "Item 1", "Item 2", "Item 3" ];
    }
    @NgModule({
        imports: [
            // ...
            DxSelectBoxModule
        ],
        // ...
    })

#####[**AngularJS**](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/)  

    <!--HTML--><div ng-controller="DemoController">
        <div dx-select-box="{
            dataSource: selectBoxDataSource,
            searchEnabled: true
        }"></div>
    </div>

    <!--JavaScript-->angular.module("DemoApp", ["dx"])
        .controller("DemoController", function ($scope) {
            $scope.selectBoxDataSource = [ "Item 1", "Item 2", "Item 3" ];
        });

#####[**Knockout**](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/)  

    <!--HTML-->
    <div data-bind="dxSelectBox: {
        dataSource: selectBoxDataSource,
        searchEnabled: true
    }"></div>

    <!--JavaScript-->var viewModel = {
        selectBoxDataSource: [ "Item 1", "Item 2", "Item 3" ]
    };
    ko.applyBindings(viewModel);

#####[**ASP.NET MVC Controls**](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Creating_a_Widget)

    <!--Razor C#-->@(Html.DevExtreme().SelectBox()
        .ID("selectBox")
        .DataSource(new[] { "Item 1", "Item 2", "Item 3" })
        .SearchEnabled(true)
    )

    <!--Razor VB-->@(Html.DevExtreme().SelectBox() _
        .ID("selectBox") _
        .DataSource({ "Item 1", "Item 2", "Item 3" }) _
        .SearchEnabled(True)
    )

---

 

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/#demo/editorsselectboxselectboxmainfeatures/"
}

#####See Also#####
- [SelectBox - Overview](/Documentation/Guide/Widgets/SelectBox/Overview/)
- [ASP.NET MVC Controls - Data Binding](/Documentation/Guide/ASP.NET_MVC_Controls/Data_Binding/)
<!--/fullDescription-->
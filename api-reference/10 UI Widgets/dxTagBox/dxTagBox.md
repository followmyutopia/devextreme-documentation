<!--id-->dxTagBox<!--/id-->
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
<!--module-->ui/tag_box<!--/module-->
<!--export-->default<!--/export-->
<!--inherits-->dxSelectBox<!--/inherits-->
<!--lib-->
dx.web.js, dx.viz-web.js, dx.all.js
<!--/lib-->
===========================================================================

<!--shortDescription-->
The **TagBox** widget is an editor that allows an end user to select multiple items from a drop-down list.
<!--/shortDescription-->

<!--fullDescription-->
#include common-ref-roottopic-introduction

---
#####[**jQuery**](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/)  

    <!--JavaScript-->
    $(function() {
        $("#tagBox").dxTagBox({
            dataSource: [ "Item 1", "Item 2", "Item 3" ],
            maxDisplayedTags: 2
        });
    });

    <!--HTML-->
    <div id="tagBox"></div>

##### Angular

    <!--HTML-->
    <dx-tag-box
        [dataSource]="tagBoxDataSource"
        [maxDisplayedTags]="2">
    </dx-tag-box>

    <!--TypeScript-->
    import { DxTagBoxModule } from "devextreme-angular"
    // ...
    export class AppComponent {
        tagBoxDataSource = [ "Item 1", "Item 2", "Item 3" ];
    }
    @NgModule({
        imports: [
            // ...
            DxTagBoxModule
        ],
        // ...
    })

#####[**AngularJS**](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/)  

    <!--HTML--><div ng-controller="DemoController">
        <div dx-tag-box="{
            dataSource: tagBoxDataSource,
            maxDisplayedTags: 2
        }"></div>
    </div>

    <!--JavaScript-->angular.module("DemoApp", ["dx"])
        .controller("DemoController", function ($scope) {
            $scope.tagBoxDataSource = [ "Item 1", "Item 2", "Item 3" ];
        });

#####[**Knockout**](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/)  

    <!--HTML-->
    <div data-bind="dxTagBox: {
        dataSource: tagBoxDataSource,
        maxDisplayedTags: 2
    }"></div>

    <!--JavaScript-->var viewModel = {
        tagBoxDataSource: [ "Item 1", "Item 2", "Item 3" ]
    };
    ko.applyBindings(viewModel);

#####[**ASP.NET MVC Controls**](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Creating_a_Widget)

    <!--Razor C#-->@(Html.DevExtreme().TagBox()
        .ID("tagBox")
        .DataSource(new[] { "Item 1", "Item 2", "Item 3" })
        .MaxDisplayedTags(2)
    )

    <!--Razor VB-->@(Html.DevExtreme().TagBox() _
        .ID("tagBox") _
        .DataSource({ "Item 1", "Item 2", "Item 3" }) _
        .MaxDisplayedTags(2)
    )

---

 

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/#demo/editorstagboxtagboxmainfeatures/"
}
<a href="http://www.youtube.com/watch?v=PEz46QIZhxQ&list=PL8h4jt35t1wjGvgflbHEH_e3b23AA30-z&index=39" class="button orange small fix-width-155" target="_blank">Watch Video</a>

#####See Also#####
- [TagBox - Overview](/Documentation/Guide/Widgets/TagBox/Overview/)
<!--/fullDescription-->
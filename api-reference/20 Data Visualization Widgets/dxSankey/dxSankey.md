<!--widgettree-->
dataSource: [
    { source: "Brazil", target: "Portugal", weight: 5 },
    { source: "Brazil", target: "France", weight: 1 },
    { source: "Brazil", target: "Spain", weight: 1 },
    { source: "Brazil", target: "England", weight: 1 },
    { source: "Canada", target: "Portugal", weight: 1 },
    { source: "Canada", target: "France", weight: 5 },
    { source: "Canada", target: "England", weight: 1 },
    { source: "Mexico", target: "Portugal", weight: 1 },
    { source: "Mexico", target: "France", weight: 1 },
    { source: "Mexico", target: "Spain", weight: 5 },
    { source: "Mexico", target: "England", weight: 1 }
],
link: { colorMode: "gradient" } 
<!--/widgettree-->
===========================================================================
<!--module-->viz/sankey<!--/module-->
<!--export-->default<!--/export-->
<!--inherits-->..\BaseWidget\BaseWidget.md<!--/inherits-->
===========================================================================

<!--shortDescription-->
The **Sankey** is a widget that visualizes the flow magnitude between value sets. The values being connected are called nodes; the connections - links. The higher the flow magnitude, the wider the link is. 
<!--/shortDescription-->

<!--fullDescription-->
#include common-ref-roottopic-introduction

---
##### jQuery

    <!--JavaScript-->var data = [
        { source: "Brazil", target: "Portugal", weight: 5 },
        { source: "Brazil", target: "Spain", weight: 1 },
        { source: "Brazil", target: "England", weight: 1 },
        { source: "Canada", target: "Portugal", weight: 1 },
        { source: "Canada", target: "England", weight: 1 },
        { source: "Mexico", target: "Portugal", weight: 1 },
        { source: "Mexico", target: "Spain", weight: 5 }
    ];

    $(function() {
        $("#sankey").dxSankey({
            dataSource: data
        });
    });

    <!--HTML--><div id="sankey"></div>

##### Angular

    <!--HTML-->
    <dx-sankey
        [dataSource]="data">
    </dx-sankey>

    <!--TypeScript-->
    import { DxSankeyModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        data: any;
        constructor() {
            this.data = [
                { source: "Brazil", target: "Portugal", weight: 5 },
                { source: "Brazil", target: "Spain", weight: 1 },
                { source: "Brazil", target: "England", weight: 1 },
                { source: "Canada", target: "Portugal", weight: 1 },
                { source: "Canada", target: "England", weight: 1 },
                { source: "Mexico", target: "Portugal", weight: 1 },
                { source: "Mexico", target: "Spain", weight: 5 }
            ];
        }
    }
    @NgModule({
        imports: [
            // ...
            DxSankeyModule
        ],
        // ...
    })

##### AngularJS

    <!--HTML--><div ng-controller="DemoController">
        <div dx-sankey="{
            dataSource: data
        }"></div>
    </div>

    <!--JavaScript-->angular.module('DemoApp', ['dx'])
        .controller("DemoController", function ($scope) {
            $scope.data = [
                { source: "Brazil", target: "Portugal", weight: 5 },
                { source: "Brazil", target: "Spain", weight: 1 },
                { source: "Brazil", target: "England", weight: 1 },
                { source: "Canada", target: "Portugal", weight: 1 },
                { source: "Canada", target: "England", weight: 1 },
                { source: "Mexico", target: "Portugal", weight: 1 },
                { source: "Mexico", target: "Spain", weight: 5 }
            ];
        });

##### Knockout

    <!--HTML-->
    <div data-bind="dxSankey: {
        dataSource: data
    }"></div>

    <!--JavaScript-->var viewModel = {
        data: [
            { source: "Brazil", target: "Portugal", weight: 5 },
            { source: "Brazil", target: "Spain", weight: 1 },
            { source: "Brazil", target: "England", weight: 1 },
            { source: "Canada", target: "Portugal", weight: 1 },
            { source: "Canada", target: "England", weight: 1 },
            { source: "Mexico", target: "Portugal", weight: 1 },
            { source: "Mexico", target: "Spain", weight: 5 }
        ]
    };

    ko.applyBindings(viewModel);

##### ASP.NET MVC Controls

    <!--Razor C#-->@(Html.DevExtreme().Sankey()
        .ID("Sankey")
        .DataSource(new object[] {
            new { source = "Brazil", target = "Portugal", weight = 5 },
            new { source = "Brazil", target = "Spain", weight = 1 },
            new { source = "Brazil", target = "England", weight = 1 },
            new { source = "Canada", target = "Portugal", weight = 1 },
            new { source = "Canada", target = "England", weight = 1 },
            new { source = "Mexico", target = "Portugal", weight = 1 },
            new { source = "Mexico", target = "Spain", weight = 5 }
        })
    )

    <!--Razor VB-->@(Html.DevExtreme().Sankey() _
        .ID("Sankey") _
        .DataSource({
            New With { .source = "Brazil", .target = "Portugal", .weight = 5 },
            New With { .source = "Brazil", .target = "Spain", .weight = 1 },
            New With { .source = "Brazil", .target = "England", .weight = 1 },
            New With { .source = "Canada", .target = "Portugal", .weight = 1 },
            New With { .source = "Canada", .target = "England", .weight = 1 },
            New With { .source = "Mexico", .target = "Portugal", .weight = 1 },
            New With { .source = "Mexico", .target = "Spain", .weight = 5 }
        })
    )

---

#####See Also#####
- [ASP.NET MVC Controls - Data Binding](/Documentation/Guide/ASP.NET_MVC_Controls/Data_Binding/)
<!--/fullDescription-->
<!--widgettree-->
dataSource: [{
    arg: "Monday",
    val: 3
}, {
    arg: "Tuesday",
    val: 2
}, {
    arg: "Wednesday",
    val: 3
}, {
    arg: "Thursday",
    val: 4
}, {
    arg: "Friday",
    val: 6
}, {
    arg: "Saturday",
    val: 11
}, {
    arg: "Sunday",
    val: 4
}]
<!--/widgettree-->
===========================================================================
<!--module-->viz/chart<!--/module-->
<!--export-->default<!--/export-->
<!--inherits-->..\BaseChart\BaseChart.md<!--/inherits-->
<!--lib-->
dx.viz.js, dx.viz-web.js, dx.all.js
<!--/lib-->
===========================================================================

<!--shortDescription-->
The **Chart** is a widget that visualizes data from a local or remote storage using a great variety of [series types](/Documentation/Guide/Widgets/Chart/Series_Types/) along with different interactive elements, such as [tooltips](/Documentation/Guide/Widgets/Chart/Tooltips/Overview/), [crosshair pointer](/Documentation/Guide/Widgets/Chart/Crosshair/), [legend](/Documentation/Guide/Widgets/Chart/Legend/Overview/), etc.
<!--/shortDescription-->

<!--fullDescription-->
#include common-ref-roottopic-introduction

---
#####[**jQuery**](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/)  

    <!--JavaScript-->var fruits = [
        { fruit: 'Oranges', yield: 10, consumed: 7 },
        { fruit: 'Apples', yield: 15, consumed: 14 },
        { fruit: 'Bananas', yield: 9, consumed: 9 }
    ];
    $(function() {
        $("#chart").dxChart({
            dataSource: fruits,
            commonSeriesSettings: {
                argumentField: "fruit",
                type: "bar"
            },
            series: [
                { valueField: "yield" },
                { valueField: "consumed" }
            ]
        });
    });

    <!--HTML--><div id="chart"></div>

##### Angular

    <!--HTML-->
    <dx-chart [dataSource]="fruits">
        <dxo-common-series-settings
            argumentField="fruit"
            type="bar">
        </dxo-common-series-settings>
        <dxi-series valueField="yield"></dxi-series>
        <dxi-series valueField="consumed"></dxi-series>
    </dx-chart>

    <!--TypeScript-->
    import { DxChartModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        fruits = [
            { fruit: 'Oranges', yield: 10, consumed: 7 },
            { fruit: 'Apples', yield: 15, consumed: 14 },
            { fruit: 'Bananas', yield: 9, consumed: 9 }  
        ];
    }
    @NgModule({
        imports: [
            // ...
            DxChartModule
        ],
        // ...
    })

#####[**AngularJS**](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/)  

    <!--HTML--><div ng-controller="DemoController">
        <div dx-chart="{
            dataSource: fruits,
            commonSeriesSettings: {
                argumentField: 'fruit',
                type: 'bar'
            },
            series: [
                { valueField: 'yield' },
                { valueField: 'consumed' }
            ]
        }"></div>
    </div>

    <!--JavaScript-->angular.module('DemoApp', ['dx'])
        .controller("DemoController", function ($scope) {
            $scope.fruits = [
                { fruit: 'Oranges', yield: 10, consumed: 7 },
                { fruit: 'Apples', yield: 15, consumed: 14 },
                { fruit: 'Bananas', yield: 9, consumed: 9 } 
            ];
        });

#####[**Knockout**](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/)  

    <!--HTML-->
    <div data-bind="dxChart: {
        dataSource: fruits,
        commonSeriesSettings: {
            argumentField: 'fruit',
            type: 'bar'
        },
        series: [
            { valueField: 'yield' },
            { valueField: 'consumed' }
        ]
    }"></div>

    <!--JavaScript-->var viewModel = {
        fruits: [
            { fruit: 'Oranges', yield: 10, consumed: 7 },
            { fruit: 'Apples', yield: 15, consumed: 14 },
            { fruit: 'Bananas', yield: 9, consumed: 9 }
        ]
    };
    ko.applyBindings(viewModel);

#####[**ASP.NET MVC Controls**](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Creating_a_Widget)

    <!--Razor C#-->@(Html.DevExtreme().Chart()
        .ID("chart")
        .DataSource(new[] {
            new { Fruit = "Oranges", Yield = 10, Consumed = 7 },
            new { Fruit = "Apples", Yield = 15, Consumed = 14 },
            new { Fruit = "Bananas", Yield = 9, Consumed = 9 }
        })
        .CommonSeriesSettings(c => c
            .ArgumentField("Fruit")
            .Type(SeriesType.Bar)
        )
        .Series(series => {
            series.Add().ValueField("Yield");
            series.Add().ValueField("Consumed");
        })
    )

    <!--Razor VB-->@(Html.DevExtreme().Chart() _
        .ID("chart") _
        .DataSource({
            New With { .Fruit = "Oranges", .Yield = 10, .Consumed = 7 },
            New With { .Fruit = "Apples", .Yield = 15, .Consumed = 14 },
            New With { .Fruit = "Bananas", .Yield = 9, .Consumed = 9 }
        }) _
        .CommonSeriesSettings(Sub(c)
            c.ArgumentField("Fruit") _
                .Type(SeriesType.Bar)
        End Sub) _
        .Series(Sub(series)
            series.Add().ValueField("Yield")
            series.Add().ValueField("Consumed")
        End Sub)
    )

---

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/#demo/chartschartsbarseriessimplestsingle/"
}

#####See Also#####
- [Chart - Overview](/Documentation/Guide/Widgets/Chart/Overview/)
- [Chart - Series Types](/Documentation/Guide/Widgets/Chart/Series_Types/)
- [Chart - Data Binding](/Documentation/Guide/Widgets/Chart/Data_Binding/Simple_Array/Array_Only/)
- [ASP.NET MVC Controls - Data Binding](/Documentation/Guide/ASP.NET_MVC_Controls/Data_Binding/)
<!--/fullDescription-->
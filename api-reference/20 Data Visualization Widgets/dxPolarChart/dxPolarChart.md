<!--id-->dxPolarChart<!--/id-->
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
<!--module-->viz/polar_chart<!--/module-->
<!--export-->default<!--/export-->
<!--inherits-->BaseChart<!--/inherits-->
<!--lib-->
dx.viz.js, dx.viz-web.js, dx.all.js
<!--/lib-->
===========================================================================

<!--shortDescription-->
The **PolarChart** is a widget that visualizes data in a polar coordinate system.
<!--/shortDescription-->

<!--fullDescription-->
The **PolarChart** widget visualizes data in a polar coordinate system. In this system, each point on a plane is determined by the distance from the center (the point's value) and the angle from a fixed direction (the point's argument). To understand how a chart is displayed in a polar coordinate system, imagine how it would be displayed in a rectangular coordinate system and then round off the argument axis in your mind.

<img src="/Content/images/doc/19_2/ChartJS/PolarChart_rectangular.png" alt="DevExtreme HTML5 Charts DataVisualization" style="display:inline-block; vertical-align:bottom" />
<img src="/Content/images/doc/19_2/ChartJS/PolarChart_polar.png" alt="DevExtreme HTML5 Charts PolarChart RadarChart DataVisualization" style="display:inline-block; vertical-align:bottom" />

#include common-ref-roottopic-introduction

---
#####[**jQuery**](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/)  

    <!--JavaScript-->var temperature = [
        { month: "January", day: 6, night: 2 },
        { month: "February", day: 7, night: 2 },
        { month: "March", day: 10, night: 3 },
        { month: "April", day: 14, night: 5 },
        { month: "May", day: 18, night: 8 },
        { month: "June", day: 21, night: 11 },
        { month: "July", day: 22, night: 13 },
        { month: "August", day: 22, night: 13 },
        { month: "September", day: 19, night: 11 },
        { month: "October", day: 15, night: 8 },
        { month: "November", day: 10, night: 5 },
        { month: "December", day: 7, night: 3 }
    ];
    $(function() {
        $("#polarChart").dxPolarChart({
            dataSource: temperature,
            commonSeriesSettings: {     
                argumentField: "month",
                type: "scatter"
            },
            series: [
                { valueField: "day", name: "Day" }, 
                { valueField: "night", name: "Night" }
            ]
        });
    });

    <!--HTML--><div id="polarChart"></div>

##### Angular

    <!--HTML-->
    <dx-polar-chart [dataSource]="temperature">
        <dxo-common-series-settings
            argumentField="month"
            type="scatter">
        </dxo-common-series-settings>
        <dxi-series
            valueField="day"
            name="Day">
        </dxi-series>
        <dxi-series
            valueField="night"
            name="Night">
        </dxi-series>
    </dx-polar-chart>

    <!--TypeScript-->
    import { DxPolarChartModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        temperature = [
            { month: "January", day: 6, night: 2 },
            { month: "February", day: 7, night: 2 },
            { month: "March", day: 10, night: 3 }
        ];
    }
    @NgModule({
        imports: [
            // ...
            DxPolarChartModule
        ],
        // ...
    })

#####[**AngularJS**](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/)  

    <!--HTML--><div ng-controller="DemoController">
        <div dx-polar-chart="{
            dataSource: temperature,
            commonSeriesSettings: {     
                argumentField: 'month',
                type: 'scatter'
            },
            series: [
                { valueField: 'day', name: 'Day' }, 
                { valueField: 'night', name: 'Night' }
            ]
        }"></div>
    </div>

    <!--JavaScript-->angular.module('DemoApp', ['dx'])
        .controller("DemoController", function ($scope) {
            $scope.temperature = [
                { month: "January", day: 6, night: 2 },
                { month: "February", day: 7, night: 2 },
                { month: "March", day: 10, night: 3 }
            ];
        });

#####[**Knockout**](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/)  

    <!--HTML-->
    <div data-bind="dxPolarChart: {
        dataSource: temperature,
        commonSeriesSettings: {     
            argumentField: 'month',
            type: 'scatter'
        },
        series: [
            { valueField: 'day', name: 'Day' }, 
            { valueField: 'night', name: 'Night' }
        ]
    }"></div>

    <!--JavaScript-->var viewModel = {
        temperature: [
            { month: "January", day: 6, night: 2 },
            { month: "February", day: 7, night: 2 },
            { month: "March", day: 10, night: 3 }
        ]
    };
    ko.applyBindings(viewModel);

#####[**ASP.NET MVC Controls**](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Creating_a_Widget)

    <!--Razor C#-->@(Html.DevExtreme().PolarChart()
        .ID("polarChart")
        .DataSource(new[] {
            new { Month = "January", Day = 6, Night = 2 },
            new { Month = "February", Day = 7, Night = 2 },
            new { Month = "March", Day = 10, Night = 3 }
        })
        .CommonSeriesSettings(c => c
            .ArgumentField("Month")
            .Type(PolarChartSeriesType.Scatter)
        )
        .Series(series => {
            series.Add().ValueField("Day");
            series.Add().ValueField("Night");
        })
    )

    <!--Razor VB-->@(Html.DevExtreme().PolarChart() _
        .ID("polarChart") _
        .DataSource({
            New With { .Month = "January", .Day = 6, .Night = 2 },
            New With { .Month = "February", .Day = 7, .Night = 2 },
            New With { .Month = "March", .Day = 10, .Night = 3 }
        }) _
        .CommonSeriesSettings(Sub(c)
            c.ArgumentField("Month") _
                .Type(PolarChartSeriesType.Scatter)
        End Sub) _
        .Series(Sub(series)
            series.Add().ValueField("Day")
            series.Add().ValueField("Night")
        End Sub)
    )

---

 

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/#demo/chartspolarandradarchartspolarandradarchartspolarrose/"
}
<a href="http://www.youtube.com/watch?v=mcaID_EYLOo&list=PL8h4jt35t1wjGvgflbHEH_e3b23AA30-z&index=40" class="button orange small fix-width-155" target="_blank">Watch Video</a>

#####See Also#####
- [PolarChart - Visual Elements](/Documentation/Guide/Widgets/PolarChart/Visual_Elements/)
- [PolarChart - Series Types](/Documentation/Guide/Widgets/PolarChart/Series_Types/)
- [Charts - Data Binding](/Documentation/Guide/Widgets/Common/Data_Visualization_Widgets/Charts_-_Data_Binding/Provide_Data/)
- [ASP.NET MVC Controls - Data Binding](/Documentation/Guide/ASP.NET_MVC_Controls/Data_Binding/)
<!--/fullDescription-->
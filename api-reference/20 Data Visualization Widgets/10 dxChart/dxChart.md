<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
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
<!--module--><a href="/Documentation/17_1/Guide/Common/Modularity/#Common_Modularity_DevExtreme_Modules_Structure_viz_chart">viz/chart</a><!--/module-->
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
You can create the **Chart** widget using one of the following approaches.

- [**jQuery**](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/)  

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

- [**AngularJS**](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/)  

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

- [**Knockout**](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/)  

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

- [**ASP.NET MVC Controls**](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Creating_a_Widget)

        <!--Razor C#-->@(Html.DevExtreme().Chart()
            .ID("chart")
            .DataSource(Fruits)
            .CommonSeriesSettings(c => c
                .ArgumentField("fruit")
                .Type(SeriesType.Bar)
            )
            .Series(series => {
                series.Add().ValueField("yield");
                series.Add().ValueField("consumed");
            })
        )

        <!--Razor VB-->@(Html.DevExtreme().Chart() _
            .ID("chart") _
            .DataSource(Fruits) _
            .CommonSeriesSettings(Sub(c)
                c.ArgumentField("fruit") _
                 .Type(SeriesType.Bar)
            End Sub) _
            .Series(Sub(series)
                series.Add().ValueField("yield")
                series.Add().ValueField("consumed")
            End Sub)
        )

All DevExtreme widgets require linking the jQuery library. Linking the Knockout or AngularJS library is optional. For detailed information on how to link the needed libraries, refer to the topics in the [Installation](/Documentation/Guide/Getting_Started/Installation/Local_Scripts/) section.

<a href="/Documentation/17_1/Tutorial/Data_Visualization/Configure_Charts" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">Start Tutorial</a>
<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/chartschartsbarseriessimplestsingle/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

#####See Also#####
- [Chart - Overview](/Documentation/Guide/Widgets/Chart/Overview/)
- [Chart - Series Types](/Documentation/Guide/Widgets/Chart/Series_Types/)
- [Chart - Data Binding](/Documentation/Guide/Widgets/Chart/Data_Binding/Simple_Array/Array_Only/)
- [ASP.NET MVC Controls - Data Binding](/Documentation/Guide/ASP.NET_MVC_Controls/Data_Binding/)
<!--/fullDescription-->
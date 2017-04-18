<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--widgettree-->
dataSource: [{
    arg: "Russia",
    val: 12
}, {
    arg: "Canada",
    val: 7
}, {
    arg: "USA",
    val: 7
}, {
    arg: "China",
    val: 7
}, {
    arg: "Brazil",
    val: 6
}, {
    arg: "Australia",
    val: 5
}, {
    arg: "India",
    val: 2
}, {
    arg: "Others",
    val: 55
}]
<!--/widgettree-->
===========================================================================
<!--module--><a href="/Documentation/17_1/Guide/Common/Modularity/#Common_Modularity_DevExtreme_Modules_Structure_viz_pie_chart">viz/pie_chart</a><!--/module-->
<!--export-->default<!--/export-->
<!--inherits-->..\BaseChart\BaseChart.md<!--/inherits-->
<!--lib-->
dx.viz.js, dx.viz-web.js, dx.all.js
<!--/lib-->
===========================================================================

<!--shortDescription-->
The **PieChart** is a widget that visualizes data as a circle divided into sectors that each represents a portion of the whole.
<!--/shortDescription-->

<!--fullDescription-->
You can create the widget using one of the following approaches.

- [**jQuery**](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/)  

        <!--JavaScript-->var fruits = [
            { fruit: 'Oranges', yield: 10, consumed: 7 },
            { fruit: 'Apples', yield: 15, consumed: 14 },
            { fruit: 'Bananas', yield: 9, consumed: 9 }
        ];
        $(function() {
            $("#pieChart").dxPieChart({
                dataSource: fruits,
                commonSeriesSettings: {
                    argumentField: "fruit"
                },
                series: [
                    { valueField: "yield" },
                    { valueField: "consumed" }
                ]
            });
        });

        <!--HTML--><div id="pieChart"></div>

- [**AngularJS**](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/)  

        <!--HTML--><div ng-controller="DemoController">
            <div dx-pie-chart="{
                dataSource: fruits,
                commonSeriesSettings: {
                    argumentField: 'fruit'
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
        <div data-bind="dxPieChart: {
            dataSource: fruits,
            commonSeriesSettings: {
                argumentField: 'fruit'
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

- [**ASP.NET MVC Wrappers**](/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/#Creating_a_Widget)

        <!--Razor C#-->@(Html.DevExtreme().PieChart()
            .ID("pieChart")
            .DataSource(Fruits)
            .CommonSeriesSettings(c => c
                .ArgumentField("fruit")
            )
            .Series(series => {
                series.Add().ValueField("yield");
                series.Add().ValueField("consumed");
            })
        )

        <!--Razor VB-->@(Html.DevExtreme().PieChart() _
            .ID("pieChart") _
            .DataSource(Fruits) _
            .CommonSeriesSettings(Sub(c)
                c.ArgumentField("fruit")
            End Sub) _
            .Series(Sub(series)
                series.Add().ValueField("yield")
                series.Add().ValueField("consumed")
            End Sub)
        

Note that DevExtreme widgets require you to link the jQuery library to your application. If you use the Knockout or AngularJS approach, the Knockout or AngularJS library is also required. For detailed information on linking these libraries to your project, refer to the topics in the [Installation](/Documentation/Guide/Getting_Started/Installation/Local_Scripts/) section.

<a href="/Documentation/17_1/Tutorial/Data_Visualization/Configure_Charts" class="button orange small fix-width-155" style="margin-right:5px;">Start Tutorial</a>
<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/chartschartspieseriespie/" class="button orange small fix-width-155" style="margin-right:5px;" target="_blank">View Demo</a>
<a href="http://www.youtube.com/watch?v=qYkkyOzR9jc&index=14&list=PL8h4jt35t1wjGvgflbHEH_e3b23AA30-z" class="button orange small fix-width-155" style="margin-right:5px;" target="_blank">Watch Video</a>

#####See Also#####
- [PieChart - Visual Elements](/Documentation/Guide/Widgets/PieChart/Visual_Elements/)
- [PieChart - Series Types](/Documentation/Guide/Widgets/PieChart/Series_Types/)
- [Charts - Data Binding](/Documentation/Guide/Widgets/Common/Data_Visualization_Widgets/Charts_-_Data_Binding/Provide_Data/)
- [ASP.NET MVC Wrappers - Data Binding](/Documentation/Guide/ASP.NET_MVC_Wrappers/Data_Binding/)
<!--/fullDescription-->
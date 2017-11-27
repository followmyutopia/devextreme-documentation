<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--widgettree-->
dataSource: [{
    arg: "1",
    val: 1
}, {
    arg: "2",
    val: 2
}, {
    arg: "3",
    val: 8
}, {
    arg: "4",
    val: 4
}, {
    arg: "5",
    val: 5
}, {
    arg: "6",
    val: 2
}, {
    arg: "7",
    val: 7
}, {
    arg: "8",
    val: 3
}]
<!--/widgettree-->
===========================================================================
<!--module-->viz/sparkline<!--/module-->
<!--export-->default<!--/export-->
<!--inherits-->..\BaseSparkline\BaseSparkline.md<!--/inherits-->
<!--lib-->
dx.viz.js, dx.viz-web.js, dx.all.js
<!--/lib-->
===========================================================================

<!--shortDescription-->
The **Sparkline** widget is a compact chart that contains only one series. Owing to their size, sparklines occupy very little space and can be easily collected in a table or embedded straight in text.
<!--/shortDescription-->

<!--fullDescription-->
You can create the widget using one of the following approaches.

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
    $(function () {
        $("#daySparkline").dxSparkline({
            dataSource: temperature,
            argumentField: 'month',
            valueField: 'day',
            type: 'bar'
        });
        $("#nightSparkline").dxSparkline({
            dataSource: temperature,
            argumentField: 'month',
            valueField: 'night',
            type: 'bar'
        });
    });

    <!--HTML--><div id="daySparkline"></div>
    <div id="nightSparkline"></div>

#####[**Angular**](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Create_and_Configure_a_Widget/)  

    <!--HTML-->
    <dx-sparkline
        [dataSource]="temperature"
        argumentField="month"
        valueField="day"
        type="bar">
    </dx-sparkline>
    <dx-sparkline
        [dataSource]="temperature"
        argumentField="month"
        valueField="night"
        type="bar">
    </dx-sparkline>

    <!--TypeScript-->
    export class AppComponent {
        temperature = [
            // ...   
        ];
    }

#####[**AngularJS**](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/)  

    <!--HTML-->
    <div dx-sparkline="{
        dataSource: temperature,
        argumentField: 'month',
        valueField: 'day',
        type: 'bar'
    }"></div>
    <div dx-sparkline="{
        dataSource: temperature,
        argumentField: 'month',
        valueField: 'night',
        type: 'bar'
    }"></div>

    <!--JavaScript-->angular.module('DemoApp', ['dx'])
        .controller("DemoController", function ($scope) {
            $scope.temperature = [
                // ...   
            ];
        });

#####[**Knockout**](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/)  

    <!--HTML-->
    <div data-bind="dxSparkline: {
        dataSource: temperature,
        argumentField: 'month',
        valueField: 'day',
        type: 'bar'
    }"></div>
    <div data-bind="dxSparkline: {
        dataSource: temperature,
        argumentField: 'month',
        valueField: 'night',
        type: 'bar'
    }"></div>

    <!--JavaScript-->var viewModel = {
        temperature: [
            // ...
        ]
    };
    ko.applyBindings(viewModel);

#####[**ASP.NET MVC Controls**](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Creating_a_Widget)

    <!--Razor C#-->@(Html.DevExtreme().Sparkline()
        .ID("daySpakline")
        .DataSource(Temperature)
        .ArgumentField("month")
        .ValueField("day")
        .Type(SparklineType.Bar)
    )
    @(Html.DevExtreme().Sparkline()
        .ID("nightSpakline")
        .DataSource(Temperature)
        .ArgumentField("month")
        .ValueField("night")
        .Type(SparklineType.Bar)
    )

    <!--Razor VB-->@(Html.DevExtreme().Sparkline() _
        .ID("daySpakline") _
        .DataSource(Temperature) _
        .ArgumentField("month") _
        .ValueField("day") _
        .Type(SparklineType.Bar)
    )
    @(Html.DevExtreme().Sparkline() _
        .ID("nightSpakline") _
        .DataSource(Temperature) _
        .ArgumentField("month") _
        .ValueField("night") _
        .Type(SparklineType.Bar)
    )

---

Note that DevExtreme widgets require you to link the jQuery library to your application. If you use the Knockout or AngularJS approach, the Knockout or AngularJS library is also required. For detailed information on linking these libraries to your project, refer to the topics in the [Installation](/Documentation/Guide/Getting_Started/Installation/Local_Scripts/) section.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/chartssparklinessparklinesline/" class="button orange small fix-width-155" style="margin-right:5px;" target="_blank">View Demo</a>
<a href="http://www.youtube.com/watch?v=0c9bcWgpxho&index=27&list=PL8h4jt35t1wjGvgflbHEH_e3b23AA30-z" class="button orange small fix-width-155" target="_blank">Watch Video</a>

#####See Also#####
- [Sparkline - Visual Elements](/Documentation/Guide/Widgets/Sparkline/Visual_Elements/)
- [Sparkline - Series Types](/Documentation/Guide/Widgets/Sparkline/Series_Types/)
- [Charts - Data Binding](/Documentation/Guide/Widgets/Common/Data_Visualization_Widgets/Charts_-_Data_Binding/Provide_Data/)
- [ASP.NET MVC Controls - Data Binding](/Documentation/Guide/ASP.NET_MVC_Controls/Data_Binding/)
<!--/fullDescription-->
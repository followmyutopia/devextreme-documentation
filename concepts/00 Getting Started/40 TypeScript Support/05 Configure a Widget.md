The following code example shows how to declare a widget configuration object using TypeScript.

    window.onload = () => {
        var options: DevExpress.viz.charts.dxChartOptions;
        options = {
            dataSource: [
                { fruit: 'Oranges', total: 10 },
                { fruit: 'Apples', total: 15 },
                { fruit: 'Bananas', total: 9 }
            ],
            series: { argumentField: 'fruit', valueField: 'total' }
        };  
    };

Any configuration object should have a specific type. In this example, the `options` object has the `dxChartOptions` type, which configures the **Chart** widget. Type names are formed by concatenating the widget name (in this example, `dxChart`) and `Options`.

The part that preceeds the type is its namespace. DevExtreme widgets are declared in the following namespaces.

- `DevExpress.viz.charts` - [dxChart](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/), [dxPieChart](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/) and [dxPolarChart](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/)
- `DevExpress.viz.treeMap` - [dxTreeMap](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/)
- `DevExpress.viz.gauges` - [dxCircularGauge](/Documentation/ApiReference/Data_Visualization_Widgets/dxCircularGauge/), [dxLinearGauge](/Documentation/ApiReference/Data_Visualization_Widgets/dxLinearGauge/) and [dxBarGauge](/Documentation/ApiReference/Data_Visualization_Widgets/dxBarGauge/)
- `DevExpress.viz.rangeSelector` - [dxRangeSelector](/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/)
- `DevExpress.viz.sparklines` - [dxSparkline](/Documentation/ApiReference/Data_Visualization_Widgets/dxSparkline/) and [dxBullet](/Documentation/ApiReference/Data_Visualization_Widgets/dxBullet/)
- `DevExpress.viz.map` - [dxVectorMap](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/)
- `DevExpress.ui` - [all other widgets](/Documentation/ApiReference/UI_Widgets/)

After you have declared a configuration object, pass it to the [jQuery plugin](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget) ...

    $("#chartContainer").dxChart(options);  

... [Knockout binding](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget) ...

    var viewModel = {
        chartOptions: options
	};

	ko.applyBindings(viewModel);

<!---->

    <!--HTML--><div data-bind="dxChart: chartOptions"></div>

... or [AngularJS directive](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget).

    function Controller($scope) {
		$scope.chartOptions = options;
	}

<!---->

    <!--HTML--><div ng-controller="Controller">
		<div dx-chart="chartOptions"></div>
	</div>

[note]TypeScript is only for _declaring_ a widget configuration. You still need to use jQuery, Knockout or AngularJS to _apply_ this configuration.

<a href="http://www.youtube.com/watch?v=-k05YGTLp4I&list=PL8h4jt35t1wjGvgflbHEH_e3b23AA30-z&index=46" class="button orange small fix-width-155" target="_blank">Watch Video</a>

#####See Also#####
- [API Reference](/Documentation/ApiReference).**WidgetName**.**Configuration**

[tags]typescript support, configure, initialize, type definitions, namespaces
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

Any configuration object should have a specific type. In this example, the `options` object has the `dxChartOptions` type, which configures the **Chart** widget. Available types along with their namespaces are listed below.

- `DevExpress.viz.charts.dxChartOptions` - [Chart](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/)
- `DevExpress.viz.charts.dxPieChartOptions` - [PieChart](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/)
- `DevExpress.viz.charts.dxPolarChartOptions` - [PolarChart](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/)
- `DevExpress.viz.treeMap.dxTreeMapOptions` - [TreeMap](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/)
- `DevExpress.viz.gauges.dxCircularGaugeOptions` - [CircularGauge](/Documentation/ApiReference/Data_Visualization_Widgets/dxCircularGauge/)
- `DevExpress.viz.gauges.dxLinearGaugeOptions` - [LinearGauge](/Documentation/ApiReference/Data_Visualization_Widgets/dxLinearGauge/)
- `DevExpress.viz.gauges.dxBarGaugeOptions` - [BarGauge](/Documentation/ApiReference/Data_Visualization_Widgets/dxBarGauge/)
- `DevExpress.viz.rangeSelector.dxRangeSelectorOptions` - [RangeSelector](/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/)
- `DevExpress.viz.sparklines.dxSparklineOptions` - [Sparkline](/Documentation/ApiReference/Data_Visualization_Widgets/dxSparkline/)
- `DevExpress.viz.sparklines.dxBulletOptions` - [Bullet](/Documentation/ApiReference/Data_Visualization_Widgets/dxBullet/)
- `DevExpress.viz.map.dxVectorMapOptions` - [VectorMap](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/)

After you have declared a configuration object, pass it to the [jQuery plugin](/Documentation/Guide/Data_Visualization/Basics/Widget_Basics_-_jQuery/#Create_and_Configure_a_Widget) ...

    $('#chartContainer').dxChart(options);  

... [Knockout binding](/Documentation/Guide/Data_Visualization/Basics/Widget_Basics_-_Knockout/#Create_and_Configure_a_Widget) ...

    var viewModel = {
        chartOptions: options
	};

	ko.applyBindings(viewModel);

<!---->

    <!--HTML--><div data-bind="dxChart: chartOptions"></div>

... or [AngularJS directive](/Documentation/Guide/Data_Visualization/Basics/Widget_Basics_-_AngularJS/#Create_and_Configure_a_Widget).

    function Controller($scope) {
		$scope.chartOptions = options;
	}

<!---->

    <!--HTML--><div ng-controller="Controller">
		<div dx-chart="chartOptions"></div>
	</div>

[note]TypeScript is only for _declaring_ a widget configuration. You still need to use jQuery, Knockout or AngularJS to _apply_ this configuration.
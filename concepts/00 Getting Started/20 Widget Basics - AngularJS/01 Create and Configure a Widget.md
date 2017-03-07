For operating with AngularJS, DevExtreme includes an [AngularJS module](http://docs.angularjs.org/api/angular.module) registered under the name *"dx"*. Add it to the list of [dependencies](https://docs.angularjs.org/guide/module#module-loading-dependencies) for your application module.

	<!--JavaScript-->angular.module('myApp', [ 'dx' ]);

The *"dx"* module contains [directives](http://docs.angularjs.org/guide/directive) that you use to create any DevExtreme widget. For instance, the `dx-button` directive creates a [Button](/Documentation/ApiReference/UI_Widgets/dxButton/) widget, `dx-range-slider` creates a [RangeSlider](/Documentation/ApiReference/UI_Widgets/dxRangeSlider/), etc. Note that all DevExtreme directives satisfy the [AngularJS normalization rules](https://docs.angularjs.org/guide/directive#normalization): **dx-***widget-name*.

Any DevExtreme directive should be associated with a `<div>` HTML element, which plays the role of a container for the widget. For example, the following code creates a [Chart](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/) widget in a `<div>` container.

    <!--HTML--><div dx-chart=""></div>

To configure a widget, pass an object to the widget directive. Note that the properties of this object mirror the options of the widget.

    <!--HTML--><div dx-chart="{ 
	    dataSource: [
            { fruit: 'Oranges', total: 10 },
            { fruit: 'Apples', total: 15 },
            { fruit: 'Bananas', total: 9 }
		],
		series: { argumentField: 'fruit', valueField: 'total' }
	 }"></div>

You can initialize widget options with the value of a [scope](http://docs.angularjs.org/guide/scope) property. For example, the following code declares the `fruitsData` property within the scope of a controller. The **dataSource** option of a dxChart is initialized with the value of this property.

    <!--JavaScript-->function Controller ($scope) {
		$scope.fruitsData = [
            { fruit: 'Oranges', total: 10 },
            { fruit: 'Apples', total: 15 },
            { fruit: 'Bananas', total: 9 }
        ];
	}
    
<!---->

    <!--HTML--><div ng-controller="Controller">
		<div dx-chart="{
            dataSource: fruitsData,
            series: { argumentField: 'fruit', valueField: 'total' }
        }"></div>
	</div>

[note]Initializing widget options in this manner does not mean that the widget option will be changed once its scope property is changed. If you are looking for this kind of data binding, refer to the [Change Options](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Change_Options) topic.

As an alternative, you can declare the whole object of widget options in the scope and pass it to the widget directive.

    <!--JavaScript-->function Controller($scope) {
		$scope.chartOptions = {
			dataSource: [
                { fruit: 'Oranges', total: 10 },
                { fruit: 'Apples', total: 15 },
                { fruit: 'Bananas', total: 9 }
            ],
            series: { argumentField: 'fruit', valueField: 'total' }
		};
	}

<!---->

    <!--HTML--><div ng-controller="Controller">
		<div dx-chart="chartOptions"></div>
	</div>

#####See Also#####
- [API Reference](/Documentation/ApiReference) | **WidgetName** | **Configuration**
- [Change Options](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Change_Options)

[tags]basics, angularjs, create, configure, initialize, design time, scope properties
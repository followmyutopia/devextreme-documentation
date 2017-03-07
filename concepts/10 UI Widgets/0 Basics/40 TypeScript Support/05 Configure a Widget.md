The following code example shows how to declare a widget configuration object using TypeScript.

    window.onload = () => {
        var options: DevExpress.ui.dxButtonOptions;
        options = {
            text: 'Submit'
        };
    };

Any configuration object should have a specific type. In this example, the `options` object has the `dxButtonOptions` type, which configures the **Button** widget. All the types of DevExtreme widget configuration objects are declared in the DevExpress.ui namespace. The type names are formed by concatenating the widget name (e.g. *dxButton*) and *Options*.

After you have declared a configuration object, pass it to the [jQuery plugin](/Documentation/Guide/UI_Widgets/Basics/Widget_Basics_-_jQuery/#Create_and_Configure_a_Widget) ...

    $('#buttonContainer').dxButton(options);  

... [Knockout binding](/Documentation/Guide/UI_Widgets/Basics/Widget_Basics_-_Knockout/#Create_and_Configure_a_Widget) ...

    var viewModel = {
        buttonOptions: options
	};

	ko.applyBindings(viewModel);

<!---->

    <!--HTML--><div data-bind="dxButton: buttonOptions"></div>

... or [AngularJS directive](/Documentation/Guide/UI_Widgets/Basics/Widget_Basics_-_AngularJS/#Create_and_Configure_a_Widget).

    function Controller($scope) {
		$scope.buttonOptions = options;
	}

<!---->

    <!--HTML--><div ng-controller="Controller">
		<div dx-button="buttonOptions"></div>
	</div>

[note]TypeScript is only for _declaring_ a widget configuration. You still need to use jQuery, Knockout or AngularJS to _apply_ this configuration.
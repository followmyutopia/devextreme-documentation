[note] In this article, the [Button](/Documentation/Guide/Widgets/Button/Overview/) widget is used to demonstrate how to show and hide the **Tooltip**. This choice is made for purely demonstrational purposes, and you can do the same operations using another widget following the same guidelines.

To show or hide the **Tooltip** programmatically, call the [show()](/Documentation/ApiReference/UI_Widgets/dxTooltip/Methods/#show) or [hide()](/Documentation/ApiReference/UI_Widgets/dxTooltip/Methods/#hide) method. The same thing can be done using the [toggle(showing)](/Documentation/ApiReference/UI_Widgets/dxTooltip/Methods/#toggleshowing) method. Pass *true* or *false* to this method to show or hide the **Tooltip**, respectively.

    <!--JavaScript-->$(function() {
		$("#tooltipContainer").dxTooltip({
            target: "#image",
            contentTemplate: function () {
                return $("<p />").text("Tooltip content");
            }
        });

        $("#showButton").dxButton({
            text: "Show the Tooltip", 
            onClick: function () {
                $("#tooltipContainer").dxTooltip("show");
                // ---------- or ----------
                $("#tooltipContainer").dxTooltip("toggle", true);
            } 
        });

        $("#hideButton").dxButton({
            text: "Hide the Tooltip", 
            onClick: function () {
                $("#tooltipContainer").dxTooltip("hide");
                // ---------- or ----------
                $("#tooltipContainer").dxTooltip("toggle", false);
            } 
        });
    });

The **show()** method called without arguments shows the **Tooltip** for the [target specified beforehand](/Documentation/ApiReference/UI_Widgets/dxTooltip/Configuration/#target). If you need to change the target once, call the [show(target)](/Documentation/ApiReference/UI_Widgets/dxTooltip/Methods/#showtarget) method.

    <!--JavaScript-->$(function() {
        // ...
        $("#showButton").dxButton({
            text: "Show the Tooltip", 
            onClick: function () {
                $("#tooltipContainer").dxTooltip("show", "#newTarget");
            } 
        });
    });

With AngularJS or Knockout, use a different technique. Bind the [visible](/Documentation/ApiReference/UI_Widgets/dxTooltip/Configuration/#visible) property of the **Tooltip** widget to a scope property (in AngularJS) or an observable variable (in Knockout). After that, change this scope property or observable variable, and the **Tooltip** will appear or disappear.

**AngularJS**

    <!--HTML--><div ng-controller="DemoController">
        <div dx-tooltip="{
            target: '#image',
            bindingOptions: {
                visible: 'isTooltipVisible'
            }
        }">
            <p>Tooltip content</p>
        </div>
        <div dx-button="{
            text: 'Show the Tooltip',
            onClick: showTooltip
        }"></div>
        <div dx-button="{
            text: 'Hide the Tooltip',
            onClick: hideTooltip
        }"></div>
    </div>

<!---->

    <!--JavaScript-->angular.module('DemoApp', ['dx'])
        .controller('DemoController', function DemoController($scope) {
            $scope.isTooltipVisible = false;
            $scope.showTooltip = function () {
                $scope.isTooltipVisible = true;
            };
            $scope.hideTooltip = function () {
                $scope.isTooltipVisible = false;
            }
        });

**Knockout**

    <!--HTML--><div data-bind="dxTooltip: {
        target: '#image',
        visible: isTooltipVisible
    }">
        <p>Tooltip content</p>
    </div>
    <div data-bind="dxButton: {
        text: 'Show the Tooltip',
        onClick: function (e) {
            e.model.isTooltipVisible(true);
        }
    }"></div>
    <div data-bind="dxButton: {
        text: 'Hide the Tooltip',
        onClick: function (e) {
            e.model.isTooltipVisible(false);
        }
    }"></div>

<!---->

    <!--JavaScript-->var viewModel = {
        isTooltipVisible: ko.observable(false)
    };

    ko.applyBindings(viewModel);
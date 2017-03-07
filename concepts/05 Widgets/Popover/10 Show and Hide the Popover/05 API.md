[note] In this article, the [Button](/Documentation/Guide/Widgets/Button/Overview/) widget is used to demonstrate how to show and hide the **Popover**. This choice is made for purely demonstrational purposes, and you can do the same operations using another widget following the same guidelines.

To show or hide the **Popover** programmatically, call the [show()](/Documentation/ApiReference/UI_Widgets/dxPopover/Methods/#show) or [hide()](/Documentation/ApiReference/UI_Widgets/dxPopover/Methods/#hide) method. The same thing can be done using the [toggle(showing)](/Documentation/ApiReference/UI_Widgets/dxPopover/Methods/#toggleshowing) method. Pass *true* or *false* to this method to show or hide the **Popover**, respectively.

    <!--JavaScript-->$(function() {
		$("#popoverContainer").dxPopover({
            target: "#image",
            contentTemplate: function () {
                return $("<p />").text("Popover content");
            }
        });

        $("#showButton").dxButton({
            text: "Show the Popover", 
            onClick: function () {
                $("#popoverContainer").dxPopover("show");
                // ---------- or ----------
                $("#popoverContainer").dxPopover("toggle", true);
            } 
        });

        $("#hideButton").dxButton({
            text: "Hide the Popover", 
            onClick: function () {
                $("#popoverContainer").dxPopover("hide");
                // ---------- or ----------
                $("#popoverContainer").dxPopover("toggle", false);
            } 
        });
    });

The **show()** method called without arguments shows the **Popover** for the [target specified beforehand](/Documentation/ApiReference/UI_Widgets/dxPopover/Configuration/#target). If you need to change the target once, call the [show(target)](/Documentation/ApiReference/UI_Widgets/dxPopover/Methods/#showtarget) method.

    <!--JavaScript-->$(function() {
        // ...
        $("#showButton").dxButton({
            text: "Show the Popover", 
            onClick: function () {
                $("#popoverContainer").dxPopover("show", "#newTarget");
            } 
        });
    });

With AngularJS or Knockout, use a different technique. Bind the [visible](/Documentation/ApiReference/UI_Widgets/dxPopover/Configuration/#visible) property of the **Popover** widget to a scope property (in AngularJS) or an observable variable (in Knockout). After that, change this scope property or observable variable, and the **Popover** will appear or disappear.

**AngularJS**

    <!--HTML-->
    <div ng-controller="DemoController">
        <div dx-popover="{
            target: '#image',
            bindingOptions: {
                visible: 'isPopoverVisible'
            }
        }">
            Popover Content
        </div>
        <div dx-button="{
            text: 'Show the Popover',
            onClick: showPopover
        }"></div>
        <div dx-button="{
            text: 'Hide the Popover',
            onClick: hidePopover
        }"></div>
    </div>

<!---->

    <!--JavaScript-->angular.module('DemoApp', ['dx'])
        .controller('DemoController', function DemoController($scope) {
            $scope.isPopoverVisible = false;
            $scope.showPopover = function () {
                $scope.isPopoverVisible = true;
            };
            $scope.hidePopover = function () {
                $scope.isPopoverVisible = false;
            };
        });

**Knockout**

    <!--HTML-->
    <div data-bind="dxPopover: {
        target: '#image',
        visible: isPopoverVisible
    }">
        Popover Content
    </div>
    <div data-bind="dxButton: {
        text: 'Show the Popover',
        onClick: function (e) {
            e.model.isPopoverVisible(true);
        }
    }"></div>
    <div data-bind="dxButton: {
        text: 'Hide the Popover',
        onClick: function (e) {
            e.model.isPopoverVisible(false);
        }
    }"></div>

<!---->

    <!--JavaScript-->var viewModel = {
        isPopoverVisible: ko.observable(false)
    };

    ko.applyBindings(viewModel);
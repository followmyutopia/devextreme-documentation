[note] In this article, the [Button](/Documentation/Guide/Widgets/Button/Overview/) widget is used to demonstrate how to show and hide the **Toast**. This choice is made for purely demonstrational purposes, and you can do the same operations using another widget following the same guidelines.

To show or hide the **Toast** programmatically, call the [show()](/Documentation/ApiReference/UI_Widgets/dxToast/Methods/#show) or [hide()](/Documentation/ApiReference/UI_Widgets/dxToast/Methods/#hide) method. The same thing can be done using the [toggle(showing)](/Documentation/ApiReference/UI_Widgets/dxToast/Methods/#toggleshowing) method. Pass **true** or **false** to this method to show or hide the **Toast**, respectively.

    <!--JavaScript-->$(function() {
        $("#toastContainer").dxToast({
            message: "Connection problem",
            type: "error"
        });

        $("#buttonContainer").dxButton({
            text: "Show the Toast", 
            onClick: function () {
                $("#toastContainer").dxToast("show");
                // ---------- or ----------
                $("#toastContainer").dxToast("toggle", true);
            } 
        });
    });

With Angular, AngularJS, or Knockout, use a different technique. Bind the [visible](/Documentation/ApiReference/UI_Widgets/dxToast/Configuration/#visible) property of the **Toast** widget to a component property (in Angular), a scope property (in AngularJS), or an observable variable (in Knockout). After that, change this property or variable, and the **Toast** will appear or disappear.

---
#####Angular

    <!--HTML-->
    <dx-toast
        [(visible)]="isVisible"
        type="error"
        message="Connection problem">
    </dx-toast>
    <dx-button
        text="Show the Toast"
        (onClick)="isVisible = true">
    </dx-button>

    <!--TypeScript-->
    import { DxToastModule, DxButtonModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        isVisible: boolean = false;
    }
    @NgModule({
         imports: [
             DxButtonModule,
             DxToastModule,
             // ...
         ],
         // ...
     })

#####AngularJS

    <!--HTML--><div ng-controller="DemoController">
        <div dx-toast="{
            message: 'Connection problem',
            type: 'error',
            bindingOptions: {
                visible: 'isToastVisible'
            }
        }"></div>
        <div dx-button="{
            text: 'Show the Toast',
            onClick: showToast
        }"></div>
    </div>

    <!--JavaScript-->angular.module('DemoApp', ['dx'])
        .controller('DemoController', function DemoController($scope) {
            $scope.isToastVisible = false;
            $scope.showToast = function () {
                $scope.isToastVisible = true;
            }
        });

#####Knockout

    <!--HTML--><div data-bind="dxToast: {
        message: 'Connection problem',
        type: 'error',
        visible: isToastVisible
    }"></div>
    <div data-bind="dxButton: {
        text: 'Show the Toast',
        onClick: function (e) {
            e.model.isToastVisible(true);
        }
    }"></div>

    <!--JavaScript-->var viewModel = {
        isToastVisible: ko.observable(false)
    };

    ko.applyBindings(viewModel);

---
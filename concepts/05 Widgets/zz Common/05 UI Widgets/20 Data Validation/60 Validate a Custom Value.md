You can use the DevExtreme validation engine to validate a custom value, for example, a non-DevExtreme editor value or a concatenation of several editor values, by configuring the **Validator**'s [adapter](Documentation/ApiReference/UI_Widgets/dxValidator/Configuration/#adapter) option. The following example creates two text boxes and a button. A button click checks that at least one of these text boxes is filled. Their values are concatenated in the **getValue** function.

---
##### jQuery

    <!--JavaScript-->$(function () {
        var callbacks = [];
        var phone = $("#phone").dxTextBox({
            placeholder: "Phone",
            onValueChanged: function (e) {
                callbacks.forEach(func => {
                    func();
                }); // Commences validation
            }
        }).dxTextBox("instance");
        var email = $("#email").dxTextBox({
            type: "email",
            placeholder: "Email",
            onValueChanged: function (e) {
                callbacks.forEach(func => {
                    func();
                }); // Commences validation
            }
        }).dxTextBox("instance");
        $("#validator").dxValidator({
            validationRules: [{
                type: "required",
                message: "Specify your phone or email"
            }],
            adapter: {
                getValue: function () {
                    return phone.option("value") + email.option("value");
                },
                applyValidationResults: function (e) {
                    $("#contacts").css({ "border": e.isValid ? "none" : "1px solid red" });
                },
                validationRequestsCallbacks: callbacks
            }
        });
        $("#button").dxButton({
            text: "Contact me",
            onClick: function (e) {
                e.validationGroup.validate();
            }
        });
        $("#summary").dxValidationSummary({ });
    });

    <!--HTML--><div id="contacts">
        <div id="phone"></div>
        <div id="email"></div>
        <div id="validator"></div>
        <div id="summary"></div>
        <div id="button"></div>
    </div>

##### Angular

    <!--TypeScript-->
    import { DxTextBoxModule, DxValidatorModule, DxValidationSummaryModule, DxButtonModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        callbacks = [];
        phone: string = "";
        email: string = "";
        borderStyle: string = "none";
        rules = [{
            type: "required",
            message: "Specify your phone or email"
        }];
        adapterConfig = {
            getValue: function () {
                return phone + email;
            },
            applyValidationResults: function (e) {
                borderStyle = e.isValid ? "none" : "1px solid red";
            },
            validationRequestsCallbacks: callbacks
        };
        revalidate () {
            callbacks.forEach(func => {
                func();
            });
        };
        submit (e) {
            e.validationGroup.validate();
        }
    }
    @NgModule({
        imports: [
            // ...
            DxTextBoxModule,
            DxValidatorModule,
            DxValidationSummaryModule,
            DxButtonModule
        ],
        // ...
    })

    <!--HTML--><div id="contacts" [style.border]="borderStyle">
        <dx-text-box
            [(value)]="phone"
            placeholder="Phone"
            (onValueChanged)="revalidate()">
        </dx-text-box>
        <dx-text-box
            [(value)]="email"
            type="email"
            placeholder="Email"
            (onValueChanged)="revalidate()">
        </dx-text-box>
        <dx-validator
            [validationRules]="rules"
            [adapter]="adapterConfig">
        </dx-validator>
        <dx-validation-summary></dx-validation-summary>
        <dx-button
            text="Contact me"
            (onClick)="submit($event)">
        </dx-button>
    </div>

##### AngularJS

    <!--JavaScript-->
    angular.module('DemoApp', ['dx'])
        .controller('demoController', function ($scope) {
            $scope.callbacks = [];
            $scope.phone = "";
            $scope.email = "";
            $scope.borderStyle = "none";
            $scope.rules = [{
                type: "required",
                message: "Specify your phone or email"
            }];
            $scope.adapterConfig = {
                getValue: function () {
                    return $scope.phone + $scope.email;
                },
                applyValidationResults: function (e) {
                    $scope.borderStyle = e.isValid ? "none" : "1px solid red";
                },
                validationRequestsCallbacks: $scope.callbacks
            };
            $scope.revalidate = function () {
                $scope.callbacks.forEach(func => {
                    func();
                })
            };
            $scope.submit = function (e) {
                e.validationGroup.validate();
            }
        });

    <!--HTML-->
    <div ng-controller="demoController">
        <div id="contacts" ngStyle="borderStyle">
            <div dx-text-box="{
                placeholder: 'Phone',
                onValueChanged: revalidate,
                bindingOptions: {
                    value: 'phone'
                }
            }"></div>
            <div dx-text-box="{
                placeholder: 'Email',
                onValueChanged: revalidate,
                bindingOptions: {
                    value: 'email'
                }
            }"></div>
            <div dx-validator="{
                validationRules: rules,
                adapter: adapterConfig
            }"></div>
            <div dx-validation-summary="{ }"></div>
            <div dx-button= "{
                text: 'Contact me',
                onClick: submit
            }"></div>
        </div>
    </div>

##### Knockout#####

    <!--JavaScript-->
    callbacks = [];
    var viewModel = {
        phone: ko.observable(""),
        email: ko.observable(""),
        borderStyle: ko.observable("none"),
        rules: [{
            type: "required",
            message: "Specify your phone or email"
        }],
        adapterConfig: {
            getValue: function () {
                return viewModel.phone() + viewModel.email();
            },
            applyValidationResults: function (e) {
                viewModel.borderStyle(e.isValid ? "none" : "1px solid red");
            },
            validationRequestsCallbacks: callbacks
        },
        revalidate: function () {
            callbacks.forEach(func => {
                func();
            })
        },
        submit: function (e) {
            e.validationGroup.validate();
        }
    }
    ko.applyBindings(viewModel);

    <!--HTML--><div id="contacts" data-bind="style: { border: borderStyle }">
        <div data-bind="dxTextBox: {
            placeholder: 'Phone',
            onValueChanged: revalidate,
            value: phone
        }"></div>
        <div data-bind="dxTextBox: {
            placeholder: 'Email',
            onValueChanged: revalidate,
            value: email
        }"></div>
        <div data-bind="dxValidator: {
            validationRules: rules,
            adapter: adapterConfig
        }"></div>
        <div data-bind="dxValidationSummary: { }"></div>
        <div data-bind="dxButton:{
            text: 'Contact me',
            onClick: submit
        }"></div>
    </div>

---

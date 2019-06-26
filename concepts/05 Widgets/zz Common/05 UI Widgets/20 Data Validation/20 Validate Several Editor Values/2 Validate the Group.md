You can validate any group by calling its [validate()](/Documentation/ApiReference/UI_Widgets/dxValidator/Methods/#validate) method in a [Button](/Documentation/ApiReference/UI_Widgets/dxButton/)'s [onClick](/Documentation/ApiReference/UI_Widgets/dxButton/Configuration/#onClick) event handler. You can access the **Validation Group** via the handler's argument. The **Button** always validates the group to which it belongs. If the membership is not specified, the **Button** validates the **Default Validation Group**.

---

##### jQuery

    <!--JavaScript-->$(function () {
        // var loginGroup = "loginGroup";
        $("#login")
            .dxTextBox({ /* ... */ })
            .dxValidator({
                // validationGroup: loginGroup,
                validationRules: [ /* ... */ ]
            });
        $("#password")
            .dxTextBox({ /* ... */ })
            .dxValidator({
                // validationGroup: loginGroup,
                validationRules: [ /* ... */ ]
            });
        $("#loginButton").dxButton({
            text: "Sign in",
            // validationGroup: loginGroup
            onClick: function (e) {
                var result = e.validationGroup.validate();
                if (result.isValid) {
                    // ...
                }
            }
        });
    });

    <!--HTML-->
    <div id="login"></div>
    <div id="password"></div>
    <div id="loginButton"></div>

##### Angular

    <!-- tab: app.component.html -->
    <!-- <dx-validation-group name="loginGroup"> -->
        <dx-text-box [(value)]="login">
            <dx-validator>
                <!-- Login validation rules are configured here -->
            </dx-validator>
        </dx-text-box>
        <dx-text-box [(value)]="password">
            <dx-validator>
                <!-- Password validation rules are configured here -->
            </dx-validator>
        </dx-text-box>
        <dx-button text="Sign in" (onClick)="signIn($event)"></dx-button>
    <!-- </dx-validation-group> -->

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        login: string;
        password: string;
        signIn(e) {
            let result = e.validationGroup.validate();
            if (result.isValid) {
                // Submit values to the server
            }
        }
    }

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';

    import {
        DxTextBoxModule,
        DxValidatorModule,
        // DxValidationGroupModule,
        DxButtonModule
    } from 'devextreme-angular';

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            DxTextBoxModule,
            DxValidatorModule,
            // DxValidationGroupModule,
            DxButtonModule
        ],
        providers: [ ],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

##### AngularJS

    <!--HTML-->
    <!-- div id="loginGroup" dx-validation-group="{ }" -->
        <div dx-text-box="{ value: login, ... }",
            dx-validator="{
                validationRules: [ ... ]
            }">
        </div>
        <div dx-text-box="{ value: password, ... }",
            dx-validator="{ 
                validationRules: [ ... ]
            }">   
        </div>
        <div dx-button="{ text: 'Login', onClick: loginClick }"></div>
    <!-- /div -->

    <!--JavaScript-->
    function Controller($scope) {
        // ...
        $scope.loginClick = function (e) {
            var result = e.validationGroup.validate();
            if (result.isValid) {
                // ...
            }
        };
    }

##### Knockout

    <!--HTML-->
    <!-- div id="loginGroup" data-bind="dxValidationGroup: { }" -->
        <div data-bind="dxTextBox: { value: login, ... },
            dxValidator: { 
                validationRules: [ ... ]
            }">
        </div>
        <div data-bind="dxTextBox: { value: password, ... },
            dxValidator: { 
                validationRules: [ ... ]
            }">   
        </div>
        <div data-bind="dxButton: { text: 'Login', onClick: loginClick }></div>
    <!-- /div -->

    <!--JavaScript-->
    var viewModel = {
        // ...
        loginClick: function (e) {
            var result = e.validationGroup.validate();
            if (result.isValid) {
                // ...
            }
        }
    };
    ko.applyBindings(viewModel);

---

Alternatively, you can validate a group using the [DevExpress.validationEngine.validateGroup](/Documentation/ApiReference/Common/utils/validationEngine/Methods/#validateGroup) method. Call it without arguments to validate the **Default Validation Group**:

    <!--JavaScript-->DevExpress.validationEngine.validateGroup();

... or pass the group instance to validate a named group:

    <!--JavaScript-->DevExpress.validationEngine.validateGroup($("#loginGroup").dxValidationGroup("instance"));

Pass the group name instead of the instance if you have created widgets using jQuery.  

    <!--JavaScript-->DevExpress.validationEngine.validateGroup("loginGroup");

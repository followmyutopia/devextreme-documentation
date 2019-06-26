Associate a DevExtreme editor with the [Validator](/Documentation/ApiReference/UI_Widgets/dxValidator/) widget and specify [validationRules](/Documentation/ApiReference/UI_Widgets/dxValidator/Configuration/#validationRules) to validate the editor. The full list of predefined validation rules is available in the [Validation Rules](/Documentation/ApiReference/UI_Widgets/dxValidator/Validation_Rules/) Reference section.

---
##### jQuery

    <!--JavaScript-->$(function () {
        $("#login").dxTextBox({
            placeholder: 'Login'
        }).dxValidator({
            validationRules: [{
                type: 'required'
            }, {
                type: 'pattern',
                pattern: '^[a-zA-Z]+$',
                message: 'Do not use digits.'
            }]
        });
    });

    <!--HTML-->
    <div id="login"></div>

##### Angular

    <!-- tab: app.component.html -->
    <dx-text-box [(value)]="login" placeholder="Login">
        <dx-validator>
            <dxi-validation-rule
                type="required">
            </dxi-validation-rule>
            <dxi-validation-rule
                type="pattern"
                pattern="^[a-zA-Z]+$"
                message="Do not use digits.">
            </dxi-validation-rule>
        </dx-validator>
    </dx-text-box>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        login: string;
    }

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';

    import { DxTextBoxModule, DxValidatorModule } from 'devextreme-angular';

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            DxTextBoxModule,
            DxValidatorModule
        ],
        providers: [ ],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

##### AngularJS

    <!--JavaScript-->function Controller ($scope) {
        $scope.login = '';
        $scope.loginRules = [{
            type: 'required'
        }, {
            type: 'pattern',
            pattern: '^[a-zA-Z]+$',
            message: 'Do not use digits.'
        }];
    }

    <!--HTML--><div dx-text-box="{ value: login, placeholder: 'Login' }",
        dx-validator="{ validationRules: loginRules }">   
    </div>

##### Knockout

    <!--JavaScript-->var viewModel = {
        login: ko.observable(""),
        loginRules: [{
            type: 'required'
        }, {
            type: 'pattern',
            pattern: '^[a-zA-Z]+$',
            message: 'Do not use digits.'
        }]
    };
    ko.applyBindings(viewModel);

    <!--HTML--><div data-bind="dxTextBox: { value: login, placeholder: 'Login' },
        dxValidator: { validationRules: loginRules }">
    </div>

---

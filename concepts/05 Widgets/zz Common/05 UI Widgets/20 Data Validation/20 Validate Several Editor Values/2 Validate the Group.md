You can validate any group by calling its [validate()](/Documentation/ApiReference/UI_Widgets/dxValidator/Methods/#validate) method in a [Button](/api-reference/10%20UI%20Widgets/dxButton/dxButton.md '/Documentation/ApiReference/UI_Widgets/dxButton/')'s [onClick](/api-reference/10%20UI%20Widgets/dxButton/1%20Configuration/onClick.md '/Documentation/ApiReference/UI_Widgets/dxButton/Configuration/#onClick') event handler. You can access the **Validation Group** via the handler's argument. The **Button** always validates the group to which it belongs. If the membership is not specified, the **Button** validates the **Default Validation Group**.

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

##### Vue

    <!-- tab: App.vue -->
    <template>
        <!-- <dx-validation-group name="loginGroup"> -->
            <dx-text-box :value.sync="login" placeholder="Login">
                <dx-validator>
                    <!-- Login validation rules are configured here -->
                </dx-validator>
            </dx-text-box>
            <dx-text-box :value.sync="password" placeholder="Password">
                <dx-validator>
                    <!-- Password validation rules are configured here -->
                </dx-validator>
            </dx-text-box>
            <dx-button text="Sign in" @click="signIn" />
        <!-- </dx-validation-group> -->
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxTextBox from 'devextreme-vue/text-box';
    import DxValidator, {
        DxRequiredRule,
        DxPatternRule
    } from 'devextreme-vue/validator';
    // import DxValidationGroup from 'devextreme-vue/validation-group';
    import DxButton from 'devextreme-vue/button';
    
    export default {
        components: {
            DxTextBox,
            DxValidator,
            DxRequiredRule,
            DxPatternRule,
            // DxValidationGroup,
            DxButton
        },
        data() {
            return {
                login: undefined,
                password: undefined
            }
        },
        methods: {
            signIn(e) {
                let result = e.validationGroup.validate();
                if (result.isValid) {
                    // Submit values to the server
                }
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import TextBox from 'devextreme-react/text-box';
    import Validator, { 
        // Validation rule types are imported here
    } from 'devextreme-react/validator';
    import ValidationGroup from 'devextreme-react/validation-group';
    import Button from 'devextreme-react/button';

    class App extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                login: undefined,
                password: undefined
            }
            this.setLogin = this.setLogin.bind(this);
            this.setPassword = this.setPassword.bind(this);
            this.signIn = this.signIn.bind(this);
        }

        setLogin(e) {
            this.setState({ login: e.value });
        }
        setPassword(e) {
            this.setState({ password: e.value });
        }

        signIn(e) {
            let result = e.validationGroup.validate();
            if (result.isValid) {
                // Submit values to the server
            }
        }

        render() {
            return (
                {/* <ValidationGroup name="loginGroup"> */}
                    <TextBox
                        value={this.state.login}
                        placeholder="Login"
                        onValueChanged={this.setLogin}>
                        <Validator>
                            {/* Login validation rules are configured here */}
                        </Validator>
                    </TextBox>
                    <TextBox
                        value={this.state.password}
                        placeholder="Password"
                        onValueChanged={this.setPassword}>
                        <Validator>
                            {/* Password validation rules are configured here */}
                        </Validator>
                    </TextBox>
                    <Button
                        text="Sign in"
                        onClick={this.signIn}
                    />
                {/* </ValidationGroup> */}
            );
        }
    }
    export default App;

---

Alternatively, you can validate a group using the [DevExpress.validationEngine.validateGroup](/Documentation/ApiReference/Common/utils/validationEngine/#validateGroup) method. Call it without arguments to validate the **Default Validation Group**:

    <!--JavaScript-->DevExpress.validationEngine.validateGroup();

... or pass the group instance to validate a named group:

    <!--JavaScript-->DevExpress.validationEngine.validateGroup($("#loginGroup").dxValidationGroup("instance"));

Pass the group name instead of the instance if you have created widgets using jQuery.  

    <!--JavaScript-->DevExpress.validationEngine.validateGroup("loginGroup");

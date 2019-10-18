---
id: AsyncRule.validationCallback
type: function(options)
---
---
##### shortDescription
A function that validates the target value.

##### param(options): Object
An object that defines validation parameters.

##### field(options.column): Object
<!-- Description goes here -->

##### field(options.data): Object
The current row data. Exists only when you validate a [DataGrid](/api-reference/10%20UI%20Widgets/dxDataGrid/dxDataGrid.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid') or [TreeList](/api-reference/10%20UI%20Widgets/dxTreeList/dxTreeList.md '/Documentation/ApiReference/UI_Widgets/dxTreeList') cell's value.

##### field(options.formItem): Object
<!-- Description goes here -->

##### field(options.rule): Object
The rule being checked.

##### field(options.validator): Object
The [Validator](/api-reference/10%20UI%20Widgets/dxValidator/dxValidator.md '/Documentation/ApiReference/UI_Widgets/dxValidator') object that initiated the validation.

##### field(options.value): String | Number
The validated value.

##### return: Promise<any>
A Promise that should be resolved or rejected as shown in the example below.

---
The following code shows a generic **validationCallback** implementation. The function sends the value that should be validated to the server. The response contains a flag that indicates if the value is valid and optionally an error message:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#textBox").dxTextBox({ ... })
            .dxValidator({
                validationRules: [{ 
                    type: "async", 
                    validationCallback: function(params) {
                        const d = $.Deferred();
                        $.ajax( ... ).done(function(res) {
                            // res.message contains validation error message
                            res.isValid ? d.resolve() : d.reject({ isValid: false, message: res.message });

                            // ===== or if "res" is { isValid: Boolean, message: String } =====
                            d.resolve(res);
                        }).fail(function(error) {
                            // error.message contains request error message
                            d.reject({ isValid: false, message: error.message });
                        })
                        return d.promise();
                    }
                }]
            });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-text-box>
        <dx-validator>
            <dxi-validation-rule type="async" 
                [validationCallback]="validateAsync">
            </dxi-validation-rule>
        </dx-validator>
    </dx-text-box>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import { HttpClient } from '@angular/common/http';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        constructor(httpClient: HttpClient) {}

        validateAsync(params) {
            return new Promise((resolve, reject) => {
                this.httpClient.post("https://mydomain.com/MyDataService", { data: params.value })
                    .toPromise()
                    .then(res => {
                        // res.message contains validation error message
                        res.isValid ? resolve() : reject({ isValid: false, message: res.message });

                        // ===== or if "res" is { isValid: Boolean, message: String } =====
                        resolve(res);
                    })
                    .catch(error => {
                        // error.message contains request error message
                        reject({ isValid: false, message: error.message });
                    });
            })
        }
    }

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';
    import { HttpClientModule } from '@angular/common/http';

    import { DxValidatorModule,
            DxTextBoxModule } from 'devextreme-angular';

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            HttpClientModule,
            DxTextBoxModule,
            DxValidatorModule
        ],
        providers: [],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <dx-text-box>
            <dx-validator>
                <dx-async-rule
                    :validation-callback="validateAsync"
                />
            </dx-validator>
        </dx-text-box>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxTextBox } from 'devextreme-vue/text-box';
    import {
        DxValidator,
        DxAsyncRule
    } from 'devextreme-vue/validator';

    export default {
        components: {
            DxTextBox,
            DxValidator,
            DxAsyncRule
        },
        methods: {
            validateAsync(params) {
                return new Promise((resolve, reject) => {
                    fetch("https://mydomain.com/MyDataService", {
                        method: 'POST',
                        body: JSON.stringify({ data: params.value })
                    }).then(res => {
                        // res.message contains validation error message
                        res.isValid ? resolve() : reject({ isValid: false, message: res.message });

                        // ===== or if "res" is { isValid: Boolean, message: String } =====
                        resolve(res);
                    })
                    .catch(error => {
                        // error.message contains request error message
                        reject({ isValid: false, message: error.message });
                    });
                });
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { TextBox } from 'devextreme-react/text-box';
    import {
        Validator,
        AsyncRule
    } from 'devextreme-react/validator';

    const validateAsync = function(params) {
        return new Promise((resolve, reject) => {
            fetch("https://mydomain.com/MyDataService", {
                method: 'POST',
                body: JSON.stringify({ data: params.value })
            })                   
            .then(res => {
                // res.message contains validation error message
                res.isValid ? resolve() : reject({ isValid: false, message: res.message });
                
                // ===== or if "res" is { isValid: Boolean, message: String } =====
                resolve(res);
            })
            .catch(error => {
                // error.message contains request error message
                reject({ isValid: false, message: error.message });
            });
        });
    };

    class App extends React.Component {
        render() {
            return (
                <TextBox>
                    <Validator>
                        <AsyncRule
                            validationCallback={validateAsync} />
                    </Validator>
                </TextBox>
            );
        }
    }
    export default App;

---

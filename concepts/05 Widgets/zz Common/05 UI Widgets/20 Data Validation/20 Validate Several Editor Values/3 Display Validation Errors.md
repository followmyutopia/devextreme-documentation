All group validation errors can be displayed in the [ValidationSummary](/Documentation/ApiReference/UI_Widgets/dxValidationSummary/) widget. The following code shows how to add this widget to a page. The commented-out codelines associate the **Validation Summary** with a named **Validation Group**.

---

##### jQuery

    <!--JavaScript-->$(function () {
        // var loginGroup = "loginGroup";
        $("#summary").dxValidationSummary({
            // validationGroup: loginGroup
        });
    });

    <!--HTML-->
    ...
    <div id="summary"></div>

##### Angular

    <!-- tab: app.component.html -->
    <!-- <dx-validation-group name="loginGroup"> -->
        ...
        <dx-validation-summary></dx-validation-summary>
    <!-- </dx-validation-group> -->

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';

    import {
        // ...
        // DxValidationGroupModule,
        DxValidationSummaryModule
    } from 'devextreme-angular';

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            // ...
            // DxValidationGroupModule,
            DxValidationSummaryModule
        ],
        providers: [ ],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

##### AngularJS

    <!--HTML-->
    <!-- div id="loginGroup" dx-validation-group="{ }" -->
        ...
        <div dx-validation-summary="{ }"></div>
    <!-- /div -->

##### Knockout

    <!--HTML-->
    <!-- div id="loginGroup" data-bind="dxValidationGroup: { }" -->
        <div data-bind="dxValidationSummary: { }"></div>
    <!-- /div -->

---

<!--EventForAction-->..\4 Events\valueChanged.md<!--/EventForAction-->
===========================================================================
<!--default-->null<!--/default-->
<!--type-->function(e)<!--/type-->
===========================================================================

<!--shortDescription-->
A function that is executed after the widget's [value]({basewidgetpath}/Configuration/#value) is changed.
<!--/shortDescription-->

<!--fullDescription-->
---
#####jQuery

    <!--JavaScript-->
    $(function() {
        $("#{widgetName}Container").dx{WidgetName}({
            onValueChanged: (e) => {
                let previousValue = e.previousValue;
                let newValue = e.value;
                // Event handling commands go here
            }
        });
    });

#####Angular

    <!-- tab: app.component.html -->
    <dx-{widget-name} ...
        (onValueChanged)="onValueChanged($event)">
    </dx-{widget-name}>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        onValueChanged(e) {
            let previousValue = e.previousValue;
            let newValue = e.value;
            // Event handling commands go here
        }
    }

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';

    import { Dx{WidgetName}Module } from 'devextreme-angular';

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            Dx{WidgetName}Module
        ],
        providers: [],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

---
<!--/fullDescription-->
<!--typeFunctionParamName1-->e<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->Object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Information about the event.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->component<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->{WidgetName}<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
The widget's instance.
<!--/typeFunctionParamDescription1_field1-->
<!--typeFunctionParamName1_field2-->element<!--/typeFunctionParamName1_field2-->
<!--typeFunctionParamType1_field2-->dxElement<!--/typeFunctionParamType1_field2-->
<!--typeFunctionParamDescription1_field2-->
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](http://api.jquery.com/Types/#jQuery) when you use jQuery.
<!--/typeFunctionParamDescription1_field2-->
<!--typeFunctionParamName1_field3-->model<!--/typeFunctionParamName1_field3-->
<!--typeFunctionParamType1_field3-->Object<!--/typeFunctionParamType1_field3-->
<!--typeFunctionParamDescription1_field3-->
The model data. Available only if Knockout is used.
<!--/typeFunctionParamDescription1_field3-->
<!--typeFunctionParamName1_field4-->value<!--/typeFunctionParamName1_field4-->
<!--typeFunctionParamType1_field4-->Object<!--/typeFunctionParamType1_field4-->
<!--typeFunctionParamDescription1_field4-->
The widget's new value.
<!--/typeFunctionParamDescription1_field4-->
<!--typeFunctionParamName1_field5-->previousValue<!--/typeFunctionParamName1_field5-->
<!--typeFunctionParamType1_field5-->Object<!--/typeFunctionParamType1_field5-->
<!--typeFunctionParamDescription1_field5-->
The widget's previous value.
<!--/typeFunctionParamDescription1_field5-->
<!--typeFunctionParamName1_field6-->jQueryEvent<!--/typeFunctionParamName1_field6-->
<!--typeFunctionParamType1_field6-->jQuery.Event<!--/typeFunctionParamType1_field6-->
<!--typeFunctionParamDescription1_field6-->
The jQuery event that caused the handler execution. Deprecated in favor of the **event** field.
<!--/typeFunctionParamDescription1_field6-->
<!--typeFunctionParamDeprecated1_field6-->Use 'event' instead.<!--/typeFunctionParamDeprecated1_field6-->
<!--typeFunctionParamName1_field7-->event<!--/typeFunctionParamName1_field7-->
<!--typeFunctionParamType1_field7-->event<!--/typeFunctionParamType1_field7-->
<!--typeFunctionParamDescription1_field7-->
The event that caused the handler execution. It is a [dxEvent](/Documentation/ApiReference/Common/Object_Structures/dxEvent/) or a [jQuery.Event](http://api.jquery.com/category/events/event-object/) when you use jQuery.
<!--/typeFunctionParamDescription1_field7-->

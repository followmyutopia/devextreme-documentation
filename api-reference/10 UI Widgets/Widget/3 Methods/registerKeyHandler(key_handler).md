===================================================================
===================================================================

<!--shortDescription-->
Registers a handler to be executed when a user presses a specific key.
<!--/shortDescription-->

<!--paramName1-->key<!--/paramName1-->
<!--paramType1-->String<!--/paramType1-->
<!--paramDescription1-->
A key.
<!--/paramDescription1-->

<!--paramName2-->handler<!--/paramName2-->
<!--paramType2-->function()<!--/paramType2-->
<!--paramDescription2-->
A handler. Accepts the **keydown** event as the argument. It is a [dxEvent](/Documentation/ApiReference/Common/Object_Structures/dxEvent/) or a [jQuery.Event](http://api.jquery.com/category/events/event-object/) when you use jQuery.
<!--/paramDescription2-->

<!--fullDescription-->
The **key** argument accepts one of the following values:

<table>
    <tr>
        <td>
            <ul>
                <li>"backspace"</li>
                <li>"tab"</li>
                <li>"enter"</li>
                <li>"escape"</li>
                <li>"pageUp"</li>
                <li>"pageDown"</li>
            </ul>
        </td>
        <td>
            <ul>
                <li>"end"</li>
                <li>"home"</li>
                <li>"leftArrow"</li>
                <li>"upArrow"</li>
                <li>"rightArrow"</li>
                <li>"downArrow"</li>
            </ul>
        </td>
        <td>
            <ul>
                <li>"del"</li>
                <li>"space"</li>
                <li>"F"</li>
                <li>"A"</li>
                <li>"asterisk"</li>
                <li>"minus"</li>
            </ul>
        </td>
    </tr>
</table>

A custom handler for a key cancels the default handler for this key.

---
##### jQuery

    <!--JavaScript-->
    function registerKeyHandlers () {
        let {widgetName} =  $("#{widgetName}Container").dx{WidgetName}("instance");
        {widgetName}.registerKeyHandler("backspace", (e) => {
            // "e" contains information on the event
        });
        {widgetName}.registerKeyHandler("space", (e) => {
            // ...
        });
    }
    

##### Angular

    <!-- tab: app.component.ts -->
    import { Component, ViewChild, AfterViewInit } from '@angular/core';
    import { Dx{WidgetName}Component } from 'devextreme-angular';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent implements AfterViewInit {
        @ViewChild(Dx{WidgetName}Component) {widgetName}: Dx{WidgetName}Component
        ngAfterViewInit () {
            this.{widgetName}.instance.registerKeyHandler('backspace', (e) => {
                // 'e' contains information on the event
            });
            this.{widgetName}.instance.registerKeyHandler('space', (e) => {
                // ...
            });
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

Refer to the [Keyboard Support](/Documentation/Guide/Widgets/Common/UI_Widgets/Keyboard_Support/#{WidgetName}) article for information about keys and key combinations assigned to actions out of the box.
<!--/fullDescription-->
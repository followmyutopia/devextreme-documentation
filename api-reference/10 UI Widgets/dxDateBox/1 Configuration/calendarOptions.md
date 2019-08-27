---
id: dxDateBox.Options.calendarOptions
type: dxCalendar_Options
default: {}
---
---
##### shortDescription
Configures the calendar's value picker. Applies only if the [pickerType](/Documentation/ApiReference/UI_Widgets/dxDateBox/Configuration/#pickerType) is *"calendar"*.

---
You can specify most of the [Calendar options](/Documentation/ApiReference/UI_Widgets/dxCalendar/Configuration/) in this object except those listed below. These options are overridden by their **DateBox** counterparts.

- [dateSerializationFormat](/Documentation/ApiReference/UI_Widgets/dxCalendar/Configuration/#dateSerializationFormat)
- [disabledDates](/Documentation/ApiReference/UI_Widgets/dxCalendar/Configuration/#disabledDates)
- [max](/Documentation/ApiReference/UI_Widgets/dxCalendar/Configuration/#max)
- [min](/Documentation/ApiReference/UI_Widgets/dxCalendar/Configuration/#min)
- [onCellClick](/Documentation/ApiReference/UI_Widgets/dxCalendar/Configuration/#onCellClick)
- [onValueChanged](/Documentation/ApiReference/UI_Widgets/dxCalendar/Configuration/#onValueChanged)
- [tabIndex](/Documentation/ApiReference/UI_Widgets/dxCalendar/Configuration/#tabIndex)
- [value](/Documentation/ApiReference/UI_Widgets/dxCalendar/Configuration/#value)

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#dateBoxContainer").dxDateBox({
            type: "date",
            pickerType: "calendar",
            calendarOptions: {
                // The Calendar widget's options go here
            }
        })
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-date-box
        type="date"
        pickerType="calendar"
        [calendarOptions]="{
            // The Calendar widget's options go here
        }">
    </dx-date-box>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        // ...
    }

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';

    import { DxDateBoxModule } from 'devextreme-angular';

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            DxDateBoxModule
        ],
        providers: [],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <dx-date-box
            type="date"
            picker-type="calendar"
            :calendar-options="{
                // The Calendar widget's options go here
            }"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxDateBox from 'devextreme-vue/date-box';

    export default {
        components: {
            DxDateBox
        },
        data() {
            return {
                // ...
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';
    
    import DateBox from 'devextreme-react/date-box';

    class App extends React.Component {
        // ...

        render() {
            return (
                <DateBox
                    type={'date'}
                    pickerType="calendar"
                    calendarOptions={{
                        // The Calendar widget's options go here
                    }} 
                />
            );
        }
    }

    export default App;

---

#include widgets-config-object-option-note
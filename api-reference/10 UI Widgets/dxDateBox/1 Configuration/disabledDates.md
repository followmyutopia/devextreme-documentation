<!--id-->dxDateBox.Options.disabledDates<!--/id-->
===========================================================================
<!--default-->null<!--/default-->
<!--type-->Array<Date> | function(data)<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies dates to be disabled. Applies only if [pickerType](/Documentation/ApiReference/UI_Widgets/dxDateBox/Configuration/#pickerType) is *"calendar"*.
<!--/shortDescription-->

<!--fullDescription-->
---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#dateBoxContainer").dxDateBox({
            // ...
            disabledDates: [ 
                new Date("07/1/2017"),  
                new Date("07/2/2017"), 
                new Date("07/3/2017") 
            ]
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-date-box ...
        [disabledDates]="disabledDates">
    </dx-date-box>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        disabledDates: Date[] = [ 
            new Date("07/1/2017"),  
            new Date("07/2/2017"), 
            new Date("07/3/2017") 
        ];
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
        providers: [ ],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <dx-date-box ...
            :disabled-dates="disabledDates"
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
                disabledDates: [ 
                    new Date("07/1/2017"),  
                    new Date("07/2/2017"), 
                    new Date("07/3/2017") 
                ]
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
        constructor() {
            this.disabledDates = [ 
                new Date("07/1/2017"),  
                new Date("07/2/2017"), 
                new Date("07/3/2017") 
            ];
        }
        render() {
            return (
                <DateBox ...
                    disabledDates={this.disabledDates} 
                />
            );
        }
    }
    export default App;

---

... or a function that specifies whether the currently checked date is disabled.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#dateBoxContainer").dxDateBox({
            // ...
            disabledDates: function(args) {
                var dayOfWeek = args.date.getDay(),
                    month = args.date.getMonth(),
                    isWeekend = args.view === "month" && (dayOfWeek === 0 || dayOfWeek === 6 ),
                    isMarch = (args.view === "year" || args.view === "month") && month === 2;

                return isWeekend || isMarch;
            }
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-date-box ...
        [disabledDates]="disableDates">
    </dx-date-box>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        disableDates(args) {
            var dayOfWeek = args.date.getDay(),
                month = args.date.getMonth(),
                isWeekend = args.view === "month" && (dayOfWeek === 0 || dayOfWeek === 6 ),
                isMarch = (args.view === "year" || args.view === "month") && month === 2;

            return isWeekend || isMarch;
        }
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
        providers: [ ],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <dx-date-box ...
            :disabled-dates="disableDates"
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
        methods: {
            disableDates(args) {
                var dayOfWeek = args.date.getDay(),
                    month = args.date.getMonth(),
                    isWeekend = args.view === "month" && (dayOfWeek === 0 || dayOfWeek === 6 ),
                    isMarch = (args.view === "year" || args.view === "month") && month === 2;

                return isWeekend || isMarch;
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
        disableDates(args) {
            var dayOfWeek = args.date.getDay(),
                month = args.date.getMonth(),
                isWeekend = args.view === "month" && (dayOfWeek === 0 || dayOfWeek === 6 ),
                isMarch = (args.view === "year" || args.view === "month") && month === 2;

            return isWeekend || isMarch;
        }
        render() {
            return (
                <DateBox ...
                    disabledDates={this.disableDates} 
                />
            );
        }
    }
    export default App;

---

<!--/fullDescription-->
<!--typeFunctionParamName1-->data<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->Object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Information about the checked date.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->component<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->dxDateBox<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
The widget's [instance](/Documentation/ApiReference/UI_Widgets/dxDateBox/Methods/#instance).
<!--/typeFunctionParamDescription1_field1-->
<!--typeFunctionParamName1_field2-->date<!--/typeFunctionParamName1_field2-->
<!--typeFunctionParamType1_field2-->Date<!--/typeFunctionParamType1_field2-->
<!--typeFunctionParamDescription1_field2-->
The currently checked date.
<!--/typeFunctionParamDescription1_field2-->
<!--typeFunctionParamName1_field3-->view<!--/typeFunctionParamName1_field3-->
<!--typeFunctionParamType1_field3-->String<!--/typeFunctionParamType1_field3-->
<!--typeFunctionParamDescription1_field3-->
The current view: *"month"*, *"year"*, *"decade"*, or *"century"*.
<!--/typeFunctionParamDescription1_field3-->

<!--typeFunctionReturnType-->Boolean<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
**true** if the date should be disabled; otherwise **false**.
<!--/typeFunctionReturnDescription-->
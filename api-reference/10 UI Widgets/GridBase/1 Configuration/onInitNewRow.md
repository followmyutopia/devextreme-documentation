<!--id-->GridBase.Options.onInitNewRow<!--/id-->
<!--EventForAction-->GridBase.initNewRow<!--/EventForAction-->
===========================================================================
<!--default-->null<!--/default-->
<!--type-->function(e)<!--/type-->
===========================================================================

<!--shortDescription-->
A function that is executed before a new row is added to the widget.
<!--/shortDescription-->

<!--fullDescription-->
Using this function, you can populate a newly added row with data by default. Add fields to the **data** object so that they correspond to fields of a [data source]({basewidgetpath}/Configuration/#dataSource) object. Note that the **data** object may omit some fields present in the data source object. Add only those fields that must initialize specific cells of a new row.

In the following code, the **onInitNewRow** function is used to provide default values for the `hireDate` and `position` cells of a new row:

---
#####jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#{widgetName}Container").dx{WidgetName}({
            dataSource: [{
                ID: 1,
                hireDate: 1491821760000,
                position: "CTO"
            }, // ...
            ],
            columns: [ "ID", {
                dataField: "hireDate",
                dataType: "date"
            }, "position" ],
            onInitNewRow: function(e) {
                e.data.hireDate = new Date();
                e.data.position = "Programmer";
            }
        });
    })

#####Angular

    <!-- tab: app.component.html -->
    <dx-{widget-name} ...
        [dataSource]="employees"
        (onInitNewRow)="onInitNewRow($event)">
        <dxi-column dataField="ID"></dxi-column>
        <dxi-column dataField="hireDate" dataType="date"></dxi-column>
        <dxi-column dataField="position"></dxi-column>
    </dx-{widget-name}>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        employees = [{
            ID: 1,
            hireDate: 1491821760000,
            position: "CTO"
        }, // ...
        ];
        onInitNewRow(e) {
            e.data.hireDate = new Date();
            e.data.position = "Programmer";
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
        providers: [ ],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

#####Vue

    <!-- tab: App.vue -->
    <template>
        <dx-{widget-name} ...
            :data-source="employees"
            @init-new-row="initNewRow">
            <dx-column data-field="ID" />
            <dx-column data-field="hireDate" data-type="date" />
            <dx-column data-field="position" />
        </dx-{widget-name}>
    </template>
    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { Dx{WidgetName}, DxColumn } from 'devextreme-vue/{widget-name}';

    const employees = [{
        ID: 1,
        hireDate: 1491821760000,
        position: "CTO"
    }, // ...
    ];

    export default {
        components: {
            Dx{WidgetName},
            DxColumn
        },
        data() {
            employees
        },
        methods: {
            initNewRow(e) {
                e.data.hireDate = new Date();
                e.data.position = "Programmer";
            }
        }
    };
    </script>

#####React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { {WidgetName}, Column } from 'devextreme-react/{widget-name}';

    const employees = [{
        ID: 1,
        hireDate: 1491821760000,
        position: "CTO"
    }, // ...
    ];

    class App extends React.Component {
        constructor(props) {
            super(props);
            this.onInitNewRow = this.onInitNewRow.bind(this);
        }

        onInitNewRow(e) {
            e.data.hireDate = new Date();
            e.data.position = "Programmer";
        }

        render() {
            return (
                <{WidgetName} ...
                    dataSource={employees}
                    onInitNewRow={this.onInitNewRow}>
                    <Column dataField="ID" />
                    <Column dataField="hireDate" dataType="date" />
                    <Column dataField="position" />
                </{WidgetName}>
            );
        }
    }
    export default App;

#####ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().{WidgetName}()
        .DataSource(new JS("employees"))
        .Columns(c => {
            c.Add().DataField("ID");
            c.Add().DataField("hireDate")
                .DataType(GridColumnDataType.Date);
            c.Add().DataField("position");
        })
        .OnInitNewRow("onInitNewRow")
    )
    <script type="text/javascript">
        var employees = [{
            ID: 1,
            hireDate: 1491821760000,
            position: "CTO"
        }, // ...
        ];
        function onInitNewRow(e) {
            e.data.hireDate = new Date();
            e.data.position = "Programmer";
        }
    </script>

---
<!--/fullDescription-->
<!--typeFunctionParamName1-->e<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->Object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Information about the event that caused the function's execution.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->component<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->{WidgetName}<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
The widget's instance.
<!--/typeFunctionParamDescription1_field1-->
<!--typeFunctionParamName1_field2-->element<!--/typeFunctionParamName1_field2-->
<!--typeFunctionParamType1_field2-->dxElement<!--/typeFunctionParamType1_field2-->
<!--typeFunctionParamDescription1_field2-->
#include common-ref-elementparam with { element: "widget" }
<!--/typeFunctionParamDescription1_field2-->
<!--typeFunctionParamName1_field3-->model<!--/typeFunctionParamName1_field3-->
<!--typeFunctionParamType1_field3-->Object<!--/typeFunctionParamType1_field3-->
<!--typeFunctionParamDescription1_field3-->
The model data. Available only if you use Knockout.
<!--/typeFunctionParamDescription1_field3-->
<!--typeFunctionParamName1_field4-->data<!--/typeFunctionParamName1_field4-->
<!--typeFunctionParamType1_field4-->Object<!--/typeFunctionParamType1_field4-->
<!--typeFunctionParamDescription1_field4-->
The data of the inserted row; initially empty.
<!--/typeFunctionParamDescription1_field4-->

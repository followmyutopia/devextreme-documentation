<!--id-->dxDataGrid.Options.onRowClick<!--/id-->
<!--EventForAction-->dxDataGrid.rowClick<!--/EventForAction-->
===========================================================================
<!--default-->null<!--/default-->
<!--type-->function(e) | String<!--/type-->
===========================================================================

<!--shortDescription-->
A function that is executed when a row is clicked or tapped.
<!--/shortDescription-->

<!--fullDescription-->
The widget executes the [onCellClick](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onCellClick) function and can also execute internal functions before this function. Use the **handled** field to check whether internal functions were executed.

In the following code, the **onRowClick** function calls the [editRow](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#editRowrowIndex) method to switch the clicked row to the editing state. This functionality is best applied in [form](/Demos/WidgetsGallery/Demo/DataGrid/FormEditing/jQuery/Light/) or [popup](/Demos/WidgetsGallery/Demo/DataGrid/PopupEditing/jQuery/Light/) **editing**.[mode](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/editing/#mode):

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#{widgetName}Container").dx{WidgetName}({
            // ...
            editing: { mode: "form "},
            onRowClick: function(e) {
                if(e.rowType === "data") {
                    e.component.editRow(e.rowIndex);
                }
            }
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-{widget-name} ...
        (onRowClick)="startEdit($event)">
        <dxo-editing mode="form"></dxo-editing>
    </dx-{widget-name}>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
   
    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        // ...
        startEdit(e) {
            if(e.rowType === "data") {
                e.component.editRow(e.rowIndex);
            }
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
        bootstrap: [AppComponent]
    })
    export class AppModule { }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <dx-{widget-name} ...
            @row-click="startEdit">
            <dx-editing mode="form" />
        </dx-{widget-name}>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import Dx{WidgetName}, {
        DxEditing 
    } from 'devextreme-vue/{widget-name}';

    export default {
        components: {
            Dx{WidgetName}
        },
        methods: {
           startEdit(e) {
                if(e.rowType === "data") {
                    e.component.editRow(e.rowIndex);
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

    import {WidgetName}, {
        Editing 
    } from 'devextreme-react/{widget-name}';

    class App extends React.Component {
        render() {
            return (
                <{WidgetName} ...
                    onRowClick={this.startEdit}>
                    <Editing mode="form">
                </{WidgetName}>
            );
        }

        startEdit = (e) => {
            if(e.rowType === "data") {
                e.component.editRow(e.rowIndex);
            }
        }
    }
    export default App;

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().DataGrid()
        // ...
        .Editing(e => e.Mode(GridEditMode.Form))
        .OnRowClick("startEdit")
    )

    <script type="text/javascript">
        function startEdit(e) {
            if(e.rowType === "data") {
                e.component.editRow(e.rowIndex);
            }
        }
    </script>

---

[note] The **onRowClick** function is not executed when the clicked row enters or is in the editing state. Instead, specify the **onCellClick** function.
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
The model data. Available only if Knockout is used.
<!--/typeFunctionParamDescription1_field3-->
<!--typeFunctionParamName1_field4-->jQueryEvent<!--/typeFunctionParamName1_field4-->
<!--typeFunctionParamType1_field4-->jQuery.Event<!--/typeFunctionParamType1_field4-->
<!--typeFunctionParamDescription1_field4-->
The jQuery event that caused the function's execution. Deprecated in favor of the **event** field.
<!--/typeFunctionParamDescription1_field4-->
<!--typeFunctionParamDeprecated1_field4-->Use 'event' instead.<!--/typeFunctionParamDeprecated1_field4-->
<!--typeFunctionParamName1_field5-->event<!--/typeFunctionParamName1_field5-->
<!--typeFunctionParamType1_field5-->event<!--/typeFunctionParamType1_field5-->
<!--typeFunctionParamDescription1_field5-->
#include common-ref-eventparam
<!--/typeFunctionParamDescription1_field5-->
<!--typeFunctionParamName1_field6-->data<!--/typeFunctionParamName1_field6-->
<!--typeFunctionParamType1_field6-->Object<!--/typeFunctionParamType1_field6-->
<!--typeFunctionParamDescription1_field6-->
The row's data.
<!--/typeFunctionParamDescription1_field6-->
<!--typeFunctionParamName1_field7-->key<!--/typeFunctionParamName1_field7-->
<!--typeFunctionParamType1_field7-->any<!--/typeFunctionParamType1_field7-->
<!--typeFunctionParamDescription1_field7-->
The row's key.
<!--/typeFunctionParamDescription1_field7-->
<!--typeFunctionParamName1_field8-->values<!--/typeFunctionParamName1_field8-->
<!--typeFunctionParamType1_field8-->Array<any><!--/typeFunctionParamType1_field8-->
<!--typeFunctionParamDescription1_field8-->
Values displayed in the row cells.
<!--/typeFunctionParamDescription1_field8-->
<!--typeFunctionParamName1_field9-->columns<!--/typeFunctionParamName1_field9-->
<!--typeFunctionParamType1_field9-->Array<Object><!--/typeFunctionParamType1_field9-->
<!--typeFunctionParamDescription1_field9-->
All column [configurations](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/).
<!--/typeFunctionParamDescription1_field9-->
<!--typeFunctionParamName1_field10-->rowIndex<!--/typeFunctionParamName1_field10-->
<!--typeFunctionParamType1_field10-->Number<!--/typeFunctionParamType1_field10-->
<!--typeFunctionParamDescription1_field10-->
The row's index. Refer to [Column and Row Indexes](/Documentation/Guide/Widgets/DataGrid/Columns/Column_and_Row_Indexes/) for more information.
<!--/typeFunctionParamDescription1_field10-->
<!--typeFunctionParamName1_field11-->rowType<!--/typeFunctionParamName1_field11-->
<!--typeFunctionParamType1_field11-->String<!--/typeFunctionParamType1_field11-->
<!--typeFunctionParamDescription1_field11-->
The row's [type](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Row/#rowType).
<!--/typeFunctionParamDescription1_field11-->
<!--typeFunctionParamName1_field12-->isSelected<!--/typeFunctionParamName1_field12-->
<!--typeFunctionParamType1_field12-->Boolean<!--/typeFunctionParamType1_field12-->
<!--typeFunctionParamDescription1_field12-->
Indicates whether the row is [selected](/Documentation/Guide/Widgets/DataGrid/Selection/).
<!--/typeFunctionParamDescription1_field12-->
<!--typeFunctionParamName1_field13-->isExpanded<!--/typeFunctionParamName1_field13-->
<!--typeFunctionParamType1_field13-->Boolean<!--/typeFunctionParamType1_field13-->
<!--typeFunctionParamDescription1_field13-->
Indicates whether or not the group row is expanded. Available if **rowType** is *"group"*.
<!--/typeFunctionParamDescription1_field13-->
<!--typeFunctionParamName1_field14-->groupIndex<!--/typeFunctionParamName1_field14-->
<!--typeFunctionParamType1_field14-->Number<!--/typeFunctionParamType1_field14-->
<!--typeFunctionParamDescription1_field14-->
The row's [group index](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#groupIndex). Available if **rowType** is *"group"*.
<!--/typeFunctionParamDescription1_field14-->
<!--typeFunctionParamName1_field15-->rowElement<!--/typeFunctionParamName1_field15-->
<!--typeFunctionParamType1_field15-->dxElement<!--/typeFunctionParamType1_field15-->
<!--typeFunctionParamDescription1_field15-->
#include common-ref-elementparam with { element: "row" }
<!--/typeFunctionParamDescription1_field15-->
<!--typeFunctionParamName1_field16-->handled<!--/typeFunctionParamName1_field16-->
<!--typeFunctionParamType1_field16-->Boolean<!--/typeFunctionParamType1_field16-->
<!--typeFunctionParamDescription1_field16-->
Indicates whether internal widget functions have already handled the event.
<!--/typeFunctionParamDescription1_field16-->

<!--id-->GridBaseColumn.format<!--/id-->
===========================================================================
<!--default-->''<!--/default-->
<!--type-->format<!--/type-->
===========================================================================

<!--shortDescription-->
Formats a value before it is displayed in a column cell.
<!--/shortDescription-->

<!--fullDescription-->
See the [format](/Documentation/ApiReference/Common/Object_Structures/format/) section for details on accepted values.

In the following code, the *"fixedPoint"* [format type](/Documentation/ApiReference/Common/Object_Structures/format/#type) with a [precision](/Documentation/ApiReference/Common/Object_Structures/format/#precision) of **2** decimal places is applied to column values: 

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#{widgetName}Container").dx{WidgetName}({
            // ...
            columns: [{
                // ...
                format: {
                    type: "fixedPoint",
                    precision: 2
                }
            }]
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-{widget-name} ... >
        <dxi-column ... >
            <dxo-format
                type="fixedPoint"
                [precision]="2">
            </dxo-format>
        </dxi-column>
    </dx-{widget-name}>

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

##### Vue

    <!-- tab: App.vue -->
    <template>
        <dx-{widget-name} ... >
            <dx-column ... >
                <dx-format
                    type="fixedPoint"
                    :precision="2"
                />
            </dx-column>
        </dx-{widget-name}>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import Dx{WidgetName}, {
        DxColumn,
        DxFormat
    } from 'devextreme-vue/{widget-name}';

    export default {
        components: {
            Dx{WidgetName},
            DxColumn,
            DxFormat
        },
        data() {
            // ...
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import {WidgetName}, {
        Column,
        Format
    } from 'devextreme-react/{widget-name}';

    class App extends React.Component {
        // ...
        render() {
            return (
                <{WidgetName}>
                    <Column ... >
                        <Format
                            type="fixedPoint"
                            precision={2}
                        />
                    </Column>
                </{WidgetName}>
            );
        }
    }
    export default App;

---

The **format** option also controls the user input in cells that use the [DateBox](/Documentation/Guide/Widgets/DateBox/Overview/) widget for editing. For cells that use other widgets, you can specify the [editorOptions]({basewidgetpath}/Configuration/columns/#editorOptions).**format** option, as shown in the following demo:

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/DataGrid/RecalculateWhileEditing/jQuery/Light/"
}
<!--/fullDescription-->

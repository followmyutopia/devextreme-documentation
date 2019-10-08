---
id: dxTreeList.Options.onContextMenuPreparing
type: function(e)
default: null
EventForAction: dxTreeList.contextMenuPreparing
---
---
##### shortDescription
A function that is executed before the context menu is rendered.

##### param(e): Object
Information about the event that caused the function's execution.

##### field(e.column): dxTreeListColumn
This column's [configuration](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/).

##### field(e.columnIndex): Number
The index of the column on which the context menu is invoked.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.items): Array<Object>
Items to be displayed in the context menu. Their structure is described in the [Default Item Template](/Documentation/ApiReference/UI_Widgets/dxContextMenu/Default_Item_Template/) section.

##### field(e.model): Object
Model data. Available only if you use Knockout.

##### field(e.row): dxTreeListRowObject
The row [properties](/Documentation/ApiReference/UI_Widgets/dxTreeList/Row/).

##### field(e.rowIndex): Number
The index of the row on which the context menu is invoked. Refer to [Column and Row Indexes](/Documentation/Guide/Widgets/TreeList/Columns/Column_and_Row_Indexes/) for more information.

##### field(e.target): String
The name of the element on which the context menu is invoked: *"header"*, *"content"*, or *"footer"*. This field is read-only.

##### field(e.targetElement): dxElement
#include common-ref-elementparam with { element: "element" }

---
In the following code, the **onContextMenuPreparing** function adds a custom item to the context menu invoked when a user right-clicks any column header:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#{widgetName}Container").dx{WidgetName}({
            // ...
            onContextMenuPreparing: function(e) { 
                if (e.target == "header") {
                    // e.items can be undefined
                    if (!e.items) e.items = [];

                    // Add a custom menu item
                    e.items.push({
                        text: "Log Column Caption",
                        onItemClick: function() {
                            console.log(e.column.caption);
                        }
                    });
                } 
            }
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-{widget-name} ...
        (onContextMenuPreparing)="addMenuItems($event)">
    </dx-{widget-name}>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        addMenuItems(e) { 
            if (e.target == 'header') {
                // e.items can be undefined
                if (!e.items) e.items = [];

                // Add a custom menu item
                e.items.push({
                    text: 'Log Column Caption',
                    onItemClick: () => {
                        console.log(e.column.caption);
                    }
                });
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
        providers: [ ],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <dx-{widget-name} ...
            @context-menu-preparing="addMenuItems">
        </dx-{widget-name}>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import Dx{WidgetName} from 'devextreme-vue/{widget-name}';

    export default {
        components: {
            Dx{WidgetName}
        },
        data() {
            return {
                // ...
            }
        },
        methods: {
            addMenuItems(e) {
                if (e.target == 'header') {
                    // e.items can be undefined
                    if (!e.items) e.items = [];

                    // Add a custom menu item
                    e.items.push({
                        text: 'Log Column Caption',
                        onItemClick: () => {
                            console.log(e.column.caption);
                        }
                    });
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

    import {WidgetName} from 'devextreme-react/{widget-name}';


    class App extends React.Component {
        addMenuItems(e) {
            if (e.target == 'header') {
                // e.items can be undefined
                if (!e.items) e.items = [];

                // Add a custom menu item
                e.items.push({
                    text: 'Log Column Caption',
                    onItemClick: () => {
                        console.log(e.column.caption);
                    }
                });
            }
        }

        render() {
            return (
                <{WidgetName} ...
                    onContextMenuPreparing={this.addMenuItems}>
                </{WidgetName}>
            );
        }
    }
    export default App;

---
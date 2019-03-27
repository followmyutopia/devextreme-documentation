---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("{widgetName}Container").dx{WidgetName}({
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-{widget-name}>
    </dx-{widget-name}>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import { "!!!!CLASSNAME", Service } from './app.service';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        "!!!VARNAME": "!!!!CLASSNAME";
        constructor(service: Service) {
            this.products = service.get"!!!VARNAME"();
        }
    }

    <!-- tab: app.service.ts -->
    import { Injectable } from '@angular/core';

    export class "!!!CLASSNAME" {
        !!!STRUCTURE
    }

    let "!!!VARNAME": "!!!CLASSNAME"[] = [];

    @Injectable()
    export class Service {
        get"!!!VARNAME"(): "CLASSNAME"[] {
            return "!!!VARNAME";
        }
    }

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';

    import { Dx{WidgetName}Module } from 'devextreme-angular';
    import { Service } from './app.service';

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            Dx{WidgetName}Module
        ],
        providers: [
            Service
        ],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

##### Vue

    <!-- tab: DxComponent.vue -->
    <template>
        <dx-{widget-name}

        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import Dx{WidgetName}, {
        "!!!!USED COMPONENTS" 
    } from 'devextreme-vue/{widget-name}';

    import service from '../data.js';

    export default {
        components: {
            Dx{WidgetName}
        },
        data() {
            const "!!!!VARNAME" = service.get"!!!!VARNAME"();
            return {
                "!!!VARNAME"
            }
        },
        methods: {

        }
    }
    </script>

    <!-- tab: data.js -->
    const "!!!!VARNAME" = [];
    export default {
        get"!!!!VARNAME"() {
            return "!!!!VARNAME";
        }
    };

    <!-- tab: App.vue -->
    <template>
        <dx-component />
    </template>
    <script>
    import DxComponent from './components/DxComponent';

    export default {
        components: {
            DxComponent
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';
    import {WidgetName}, {
        "!!!!USED COMPONENTS" 
    } from 'devextreme-react/{widget-name}';

    import service from './data.js';

    class App extends React.Component {
        constructor(props) {
            super(props);
            this."!!!!VARNAME" = service.get"!!!!VARNAME"();
        }

        render() {
            return (
                <{WidgetName}

                />
            );
        }
    }
    export default App;

    <!-- tab: data.js -->
    const "!!!!VARNAME" = [];
    export default {
        get"!!!!VARNAME"() {
            return "!!!!VARNAME";
        }
    };

---


To create an external template, you should use the Angular [`ng-template`](https://angular.io/guide/structural-directives#the-ng-template) element. In the following code, **List** items are customized like items in the code below. Group customization is omitted for brevity. 

Instead of markup, the **dxTemplate** holds the `ng-template` element. This element references the `customItem` markup in the [ngTemplateOutlet](https://angular.io/api/common/NgTemplateOutlet) directive and passes the `itemData` and `itemIndex` variables to it using the **ngTemplateOutletContext** directive. The `customItem` markup itself is defined in another `ng-template` located outside the widget. 

    <!--HTML-->
    <dx-list [items]="items" itemTemplate="listItem">
        <div *dxTemplate="let itemData of 'listItem'; let itemIndex = index">
            <ng-template 
                [ngTemplateOutlet]="customItem" 
                [ngTemplateOutletContext]="{ itemData: itemData, itemIndex: itemIndex }">
            </ng-template>
        </div>
    </dx-list>

    <ng-template #customItem let-itemData="itemData" let-itemIndex="itemIndex">
        {{itemIndex}} - {{itemData.itemProperty}}
    </ng-template>

Markup stored in a parent component should be passed to a child component using an [input property](https://angular.io/guide/template-syntax#input-and-output-properties). In the following code, this property is `templateInput`.

    <!-- tab: custom-list.component.ts -->
    import { Component, Input, TemplateRef } from '@angular/core';
    @Component({
        selector: 'custom-list',
        templateUrl: './custom-list.component.html'
    })
    export class CustomListComponent {
        @Input() templateInput: TemplateRef<any>
        // ...
    }

    <!-- tab: custom-list.component.html -->
    <dx-list ...
        itemTemplate="listItem">
        <div *dxTemplate="let itemData of 'listItem'; let itemIndex = index">
            <ng-template 
                [ngTemplateOutlet]="templateInput" 
                [ngTemplateOutletContext]="{ itemData: itemData, itemIndex: itemIndex }">
            </ng-template>
        </div>
    </dx-list>

    <!-- tab: parent.component.html -->
    <!-- ... -->
    <ng-template #customItem let-itemData="itemData" let-itemIndex="itemIndex">
        {{itemIndex}} - {{itemData.itemProperty}}
    </ng-template>

    <custom-list 
        <!-- Passes the `customItem` markup to the custom-list.component. -->
        [templateInput]="customItem"> 
    </custom-list>
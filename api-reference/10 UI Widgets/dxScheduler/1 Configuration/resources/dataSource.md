===========================================================================
<!--default-->null<!--/default-->
<!--type-->String | Array<Object> | DataSource | DataSource_Options<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies available resource instances.
<!--/shortDescription-->

<!--fullDescription-->
If you use DevExtreme ASP.NET MVC Controls, refer to the [Data Binding](/Documentation/Guide/ASP.NET_MVC_Controls/Data_Binding/) article.

Each resource instance is an object with the  `id`, `color`, and `text` fields. If your resource instances have a different structure, specify the [valueExpr](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/resources/#valueExpr), [colorExpr](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/resources/#colorExpr) and [displayExpr](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/resources/#displayExpr) options.

Depending on your data source, specify the **dataSource** option as follows. In each case, also specify the [fieldExpr](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/resources/#fieldExpr) option to [bind appointments to resource instances](/Documentation/Guide/Widgets/Scheduler/Resources/Assign_Appointments_to_Resources/). 

- **Data Array**        
Assign the array to the **dataSource** option. 

- **Read-Only Data in JSON Format**          
Set the **dataSource** option to the URL of a JSON file or service that returns JSON data.

- **OData**         
Implement an [ODataStore](/Documentation/Guide/Widgets/Scheduler/Data_Binding/OData_Service/).

- **Web API, PHP, MongoDB**     
Use one of the following extensions to enable the server to process data according to the protocol DevExtreme widgets use:

    - [DevExtreme.AspNet.Data](https://github.com/DevExpress/DevExtreme.AspNet.Data/blob/master/README.md)
    - [DevExtreme-PHP-Data](https://github.com/DevExpress/DevExtreme-PHP-Data/blob/master/README.md)
    - [devextreme-query-mongodb](https://github.com/oliversturm/devextreme-query-mongodb/blob/master/README.md)

    Then, use the [createStore](https://github.com/DevExpress/DevExtreme.AspNet.Data/blob/master/docs/client-side-with-jquery.md#api-reference) method to configure access to the server on the client as shown below. This method is part of **DevExtreme.AspNet.Data**.

    ---
    ##### jQuery

        <!-- tab: JavaScript -->
        $(function() {
            let serviceUrl = "https://url/to/my/service";
            $("#{widgetName}Container").dx{WidgetName}({
                // ...
                resources: [{
                    // ...
                    dataSource: DevExpress.data.AspNet.createStore({
                        key: "ID",
                        loadUrl: serviceUrl + "/GetAction",
                        insertUrl: serviceUrl + "/InsertAction",
                        updateUrl: serviceUrl + "/UpdateAction",
                        deleteUrl: serviceUrl + "/DeleteAction"
                    })
                }]
            })
        });

    ##### Angular

        <!-- tab: app.component.ts -->
        import { Component } from '@angular/core';
        import CustomStore from 'devextreme/data/custom_store';
        import { createStore } from 'devextreme-aspnet-data-nojquery';

        @Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        })
        export class AppComponent {
            store: CustomStore;
            constructor() {
                let serviceUrl = "https://url/to/my/service";
                this.resources = [{
                    // ...
                    dataSource: createStore({
                        key: "ID",
                        loadUrl: serviceUrl + "/GetAction",
                        insertUrl: serviceUrl + "/InsertAction",
                        updateUrl: serviceUrl + "/UpdateAction",
                        deleteUrl: serviceUrl + "/DeleteAction"
                    })
                }];
            }
        }

        <!-- tab: app.component.html -->
        <dx-{widget-name} ...
            [resources]="resources">
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
            providers: [],
            bootstrap: [AppComponent]
        })
        export class AppModule { }

    ##### Vue

        <!-- tab: App.vue -->
        <template> 
            <dx-{widget-name} ...
                :resources="resources" />
        </template>

        <script>
        import 'devextreme/dist/css/dx.common.css';
        import 'devextreme/dist/css/dx.light.css';

        import CustomStore from 'devextreme/data/custom_store';
        import { createStore } from 'devextreme-aspnet-data-nojquery';
        import { Dx{WidgetName} } from 'devextreme-vue/{widget-name}';

        export default {
            components: {
                Dx{WidgetName}
            },
            data() {
                const serviceUrl = "https://url/to/my/service";
                const resources = [{
                    // ...
                    dataSource: createStore({
                        key: "ID",
                        loadUrl: serviceUrl + "/GetAction",
                        insertUrl: serviceUrl + "/InsertAction",
                        updateUrl: serviceUrl + "/UpdateAction",
                        deleteUrl: serviceUrl + "/DeleteAction"
                    })
                }];
                return {
                    resources
                }
            }
        }
        </script>

    ##### React

        <!-- tab: App.js -->
        import React from 'react';
        import 'devextreme/dist/css/dx.common.css';
        import 'devextreme/dist/css/dx.light.css';

        import CustomStore from 'devextreme/data/custom_store';
        import { createStore } from 'devextreme-aspnet-data-nojquery';
        import { Dx{WidgetName} } from 'devextreme-react/{widget-name}';

        const serviceUrl = "https://url/to/my/service";
        const resources = [{
            // ...
            dataSource: createStore({
                key: "ID",
                loadUrl: serviceUrl + "/GetAction",
                insertUrl: serviceUrl + "/InsertAction",
                updateUrl: serviceUrl + "/UpdateAction",
                deleteUrl: serviceUrl + "/DeleteAction"
            })
        }];

        class App extends React.Component {
            render() {
                return (
                    <{WidgetName} ...
                        resources={resources} />
                );
            }
        }
        export default App;
        
    ---

- **Any other data source**     
Implement a [CustomStore](/Documentation/Guide/Widgets/Scheduler/Data_Binding/Custom_Sources/).

[note]

Please review the following notes about data binding:

- If you wrap the store into the **DataSource** object explicitly, set the [paginate](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#paginate) option to **false** to prevent data from partitioning.

- Data field names should not contain the following characters: `.`, `,`, `:`, `[`, and `]`.

- The stores are immutable. You cannot change their configurations at runtime. Instead, create a new store or **DataSource** and assign it to the **dataSource** option as shown in the articles about changing options in [jQuery](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Get_and_Set_Options/), [Angular](/Documentation/Guide/Angular_Components/Component_Configuration_Syntax/#Two-Way_Option_Binding), [React](https://github.com/DevExpress/devextreme-react/blob/19.1/README.md#controlled-mode), and [Vue](https://github.com/DevExpress/devextreme-vue/blob/19.1/README.md#two-way-binding).

[/note]
<!--/fullDescription-->

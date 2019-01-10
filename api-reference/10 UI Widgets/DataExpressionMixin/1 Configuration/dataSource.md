===========================================================================
<!--default-->null<!--/default-->
<!--type-->String | Array<CollectionWidgetItem, Object> | DataSource | DataSource_Options<!--/type-->
===========================================================================

<!--shortDescription-->
Binds the widget to data.
<!--/shortDescription-->

<!--fullDescription-->
If you are using DevExtreme ASP.NET MVC Controls, refer to the [Data Binding](/Documentation/Guide/ASP.NET_MVC_Controls/Data_Binding/) article.

The **{WidgetName}** can work with collections of objects or `string`, `number`, or `boolean` values. 

Depending on your data source, bind the **{WidgetName}** to data as follows. In each case, also specify the [valueExpr]({basewidgetpath}/Configuration/#valueExpr) and [displayExpr]({basewidgetpath}/Configuration/#displayExpr) if the data source provides objects.

- **Data Array**         
Assign the array to the **dataSource** option. 

- **Read-Only Data in JSON Format**          
Set the **dataSource** option to the URL of a JSON file or service that returns JSON data.

- **OData**     
Implement an [ODataStore]().

- **Web API, PHP, MongoDB**     
Use one of the following extensions to enable the server to process data according to the protocol DevExtreme widgets use:
    - [DevExtreme.AspNet.Data](https://github.com/DevExpress/DevExtreme.AspNet.Data/blob/master/README.md)
    - [DevExtreme-PHP-Data](https://github.com/DevExpress/DevExtreme-PHP-Data/blob/master/README.md)
    - [devextreme-query-mongodb](https://github.com/oliversturm/devextreme-query-mongodb/blob/master/README.md)
    
    Then, configure access to the server on the client using the [createStore](https://github.com/DevExpress/DevExtreme.AspNet.Data/blob/master/docs/client-side-with-jquery.md#api-reference) method as shown below. This method is part of **DevExtreme.AspNet.Data**.

    ---
    ##### jQuery

        <!-- tab: JavaScript -->
        $(function() {
            let serviceUrl = "https://url/to/my/service";
            $("#{widgetName}Container").dx{WidgetName}({
                dataSource: DevExpress.data.AspNet.createStore({
                    key: "ID",
                    loadUrl: serviceUrl + "/GetAction",
                    insertUrl: serviceUrl + "/InsertAction",
                    updateUrl: serviceUrl + "/UpdateAction",
                    deleteUrl: serviceUrl + "/DeleteAction"
                }),
                valueExpr: "ID",
                displayExpr: "Name"
            })
        });

    ##### Angular

        <!-- tab: app.component.ts -->
        import { Component } from '@angular/core';
        import CustomStore from "devextreme/data/custom_store";
        import { createStore } from "devextreme-aspnet-data-nojquery";

        @Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        })
        export class AppComponent {
            store: CustomStore;
            constructor() {
                let serviceUrl = "https://url/to/my/service";
                this.store = createStore({
                    key: "ID",
                    loadUrl: serviceUrl + "/GetAction",
                    insertUrl: serviceUrl + "/InsertAction",
                    updateUrl: serviceUrl + "/UpdateAction",
                    deleteUrl: serviceUrl + "/DeleteAction"
                })
            }
        }

        <!-- tab: app.component.html -->
        <dx-{widget-name}
            [dataSource]="store">
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

    ---

- **Any other data source**         
Implement a [CustomStore]().

[note]

Please review the following notes about data binding:
  
- Do not specify the **dataSource** if you have specified the [items]({basewidgetpath}/Configuration/#items) option, and vice versa.
- Data field names should not contain the following characters: `.`, `,`, `:`, `[`, and `]`.

[/note]

Regardless of the data source on the input, the **{WidgetName}** always wraps it in the [DataSource](/Documentation/ApiReference/Data_Layer/DataSource/) object. This object allows you to sort, filter, group, and perform other operations on data. To get its instance, call the [getDataSource()]({basewidgetpath}/Methods/#getDataSource) method.
<!--/fullDescription-->
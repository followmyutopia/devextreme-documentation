To bind the **DataGrid** to data in the JSON format, assign the data's URL to the [dataSource](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#dataSource) option.  

---

##### jQuery

    <!--JavaScript-->$(function() {
        $("#gridContainer").dxDataGrid({
            dataSource: "https://jsonplaceholder.typicode.com/posts"
        });
    });

##### Angular

    <!--HTML-->
    <dx-data-grid
        dataSource="https://jsonplaceholder.typicode.com/posts">
    </dx-data-grid>

    <!--TypeScript-->
    import { DxDataGridModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxDataGridModule
        ],
        // ...
    })

---

<a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/Data_Grid/AjaxRequest/jQuery/Light/" class="button orange small fix-width-155" target="_blank">View Demo</a>

Note that you can also use a JSONP callback parameter supported by [jQuery.ajax()](http://api.jquery.com/jQuery.ajax/).

---

#####jQuery

    <!--JavaScript-->$(function() {
        $("#gridContainer").dxDataGrid({
            dataSource: "http://www.example.com/dataservices/jsonpdata?callback=?"
        });
    });

#####Angular

    <!--HTML-->
    <dx-data-grid
        dataSource="http://www.example.com/dataservices/jsonpdata?callback=?">
    </dx-data-grid>

    <!--TypeScript-->
    import { DxDataGridModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxDataGridModule
        ],
        // ...
    })

---

If you need to specify request headers or process response data, use the [CustomStore](/Documentation/ApiReference/Data_Layer/CustomStore/)- a flexible instrument that allows you to configure data access manually. Implement its [load](/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#load) function as shown in the code below to add custom headers to the request. Note that you can specify **CustomStore** members directly in the [DataSource](/Documentation/ApiReference/Data_Layer/DataSource/) object instead of declaring them explicitly.

---
#####jQuery

    <!--JavaScript-->
    $(function() {
        $("#dataGridContainer").dxDataGrid({
            dataSource: new DevExpress.data.DataSource({
                load: function () {
                    var d = $.Deferred();
                    return $.getJSON('https://mydomain.com/MyDataService', { 
                        header1: "customHeader1",
                        header2: "customHeader2",
                        // ...
                    })
                    .done(function(result) {
                        // Here, you can process the response
                        d.resolve(result);
                    });
                }
            })
        });
    });

#####Angular

    <!--TypeScript-->
    import { ..., Inject } from '@angular/core';
    import { Http, HttpModule } from '@angular/http';
    import { DxDataGridModule } from 'devextreme-angular';
    import DataSource from 'devextreme/data/data_source';
    import 'devextreme/data/custom_store';
    import 'rxjs/add/operator/toPromise';
    // ...
    export class AppComponent {
        gridDataSource: any = {};
        constructor(@Inject(Http) http: Http) {
            this.gridDataSource = new DataSource({
                load: function () {
                    return http.get('https://mydomain.com/MyDataService', { 
                        header1: "customHeader1",
                        header2: "customHeader2",
                        // ...
                    })
                    .toPromise()
                    .then(response => {
                        // Here, you can process the response
                        return response.json()
                    });
                }
            })
        }
    }
    @NgModule({
        imports: [
            // ...
            DxDataGridModule,
            HttpModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-data-grid ...
        [dataSource]="gridDataSource">
    </dx-data-grid>

---

The **CustomStore** requires thorough configuration if data is processed on the server. See the [Custom Sources](/Documentation/Guide/Widgets/DataGrid/Data_Binding/Custom_Sources/) topic for more details.

#####See Also#####
- [Access the DataSource](/Documentation/Guide/Widgets/DataGrid/Data_Binding/Access_the_DataSource/)
- [DataGrid Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/AjaxRequest/Angular/Light/)

[tags]dataGrid, data grid, data binding, json, jsonp, callback parameter

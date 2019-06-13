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
    import { DxDataGridModule } from "devextreme-angular";
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

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/Data_Grid/AjaxRequest/jQuery/Light/"
}

Note that you can also use a JSONP callback parameter supported by <a href="http://api.jquery.com/jQuery.ajax/" target="_blank">jQuery.ajax()</a>.

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
    import { DxDataGridModule } from "devextreme-angular";
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

If you need to specify request headers or process response data, use the [CustomStore](/Documentation/ApiReference/Data_Layer/CustomStore/) - a flexible instrument that allows you to configure data access manually. Implement its [load](/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#load) function as shown in the code below to add custom headers to the request. Note that you can specify **CustomStore** members directly in the [DataSource](/Documentation/ApiReference/Data_Layer/DataSource/) object instead of declaring them explicitly.

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
    import { ..., Inject } from "@angular/core";
    import { HttpClient, HttpClientModule } from "@angular/common/http";
    import { DxDataGridModule } from "devextreme-angular";
    import DataSource from "devextreme/data/data_source";
    import "devextreme/data/custom_store";
    import "rxjs/add/operator/toPromise";
    // ...
    export class AppComponent {
        gridDataSource: any = {};
        constructor(@Inject(HttpClient) httpClient: HttpClient) {
            this.gridDataSource = new DataSource({
                load: function () {
                    return httpClient.get('https://mydomain.com/MyDataService', { 
                        headers: {
                            "header1": "customHeader1",
                            "header2": "customHeader2",
                            // ...
                        }
                    })
                    .toPromise()
                    .then(result => {
                        // Here, you can process the response
                        return result;
                    });
                }
            })
        }
    }
    @NgModule({
        imports: [
            // ...
            DxDataGridModule,
            HttpClientModule
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
- [DataGrid Demos](/Demos/WidgetsGallery/Demo/DataGrid/AjaxRequest/Angular/Light/)

[tags]dataGrid, data grid, data binding, json, jsonp, callback parameter

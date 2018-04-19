DevExtreme provides the [CustomStore](/Documentation/ApiReference/Data_Layer/CustomStore/) component, a flexible instrument that allows you to configure data access manually, for consuming data from any source. The following extensions for ASP.NET and PHP servers simplify the task of configuring the **CustomStore** and implement server-side data processing as well:

- [DevExtreme.AspNet.Data](https://github.com/DevExpress/DevExtreme.AspNet.Data)
- [DevExtreme-PHP-Data](https://github.com/DevExpress/DevExtreme-PHP-Data)

You need to configure the **CustomStore** in detail for accessing a server built on another technology. Data in this situation can be processed on the client or server. In the former case, switch the **CustomStore** to the raw mode and load all data from the server in the [load](/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#load) function as shown in the next example. 

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            dataSource: new DevExpress.data.DataSource({
                store: new DevExpress.data.CustomStore({
                    loadMode: "raw",   
                    load: function () {
                        return $.getJSON('https://mydomain.com/MyDataService');
                    }
                }),
                paginate: false
            })
        });
    });

##### Angular

    <!--TypeScript-->
    import { ..., Inject } from '@angular/core';
    import { HttpClient, HttpClientModule } from '@angular/common/http';
    import { DxChartModule } from 'devextreme-angular';
    import DataSource from 'devextreme/data/data_source';
    import CustomStore from 'devextreme/data/custom_store';
    import 'rxjs/add/operator/toPromise';
    // ...
    export class AppComponent {
        chartDataSource: any = {};
        constructor(@Inject(HttpClient) httpClient: HttpClient) {
            this.chartDataSource = new DataSource({
                store: new CustomStore({
                    loadMode: "raw",   
                    load: function () {
                        return httpClient.get('http://mydomain.com/MyDataService')
                            .toPromise();
                    }
                }),
                paginate: false
            });
        }
    }
    @NgModule({
        imports: [
            // ...
            DxChartModule,
            HttpClientModule
        ],
        // ...
    })

    <!--HTML--><dx-chart ...
        [dataSource]="chartDataSource">
    </dx-chart>

---

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/Charts/ClientSideDataProcessing/jQuery/Light/"
}
    
In the latter case, use the **CustomStore**'s **load** function to send data processing settings to the server. These settings are passed as a parameter to the **load** function and depend on the operations (filtering, sorting, etc.) that you have enabled in the **DataSource**. The following settings are relevant for the **Chart**:

* **sort**: <span style="font-size:smaller">Array</span>      
Defines sorting parameters. Present if the **DataSource**'s [sort](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#sort) option is set. Multiple parameters apply to the data in sequence to implement multi-level sorting. Contains objects of the following structure:

        { selector: "field", desc: true/false }    

* **filter**: <span style="font-size:smaller">Array</span>      
Defines filtering parameters. Present if the **DataSource**'s [filter](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#filter) option is set. Possible variants:

    * Binary filter

            [ "field", "=", 3 ]

    * Unary filter
    
             [ "!", [ "field", "=", 3 ] ]

    * Complex filter
    
            [
                [ "field", "=", 10 ],
                "and",
                [
                    [ "otherField", "<", 3 ],
                    "or",
                    [ "otherField", ">", 11 ]
                ]
            ]

    See the [Filtering](/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Filtering) topic for more details.

* **searchExpr**, **searchOperation** and **searchValue**: <span style="font-size:smaller">Strings</span>    
Another way to define a filter restricted to one criterion. Present if [corresponding options](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#searchExpr) are set in the **DataSource**.

After receiving these settings, the server should apply them to data and send back an object of the following structure:

    {
        data: [ ... ] // result data objects
    }

This example shows how to make a query for data.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            dataSource: new DevExpress.data.DataSource({
                load: function (loadOptions) {
                    var d = $.Deferred();
                    $.getJSON("http://mydomain.com/MyDataService", {
                        sort: loadOptions.sort ? JSON.stringify(loadOptions.sort) : "",
                        filter: loadOptions.filter ? JSON.stringify(loadOptions.filter) : "",
                        searchExpr: loadOptions.searchExpr ? JSON.stringify(loadOptions.searchExpr) : "",
                        searchOperation: loadOptions.searchOperation,
                        searchValue: loadOptions.searchValue
                    }).done(function(result) {
                            // Here, you can perform operations unsupported by the server
                            // or any other operations on the retrieved data
                            d.resolve(result.data);
                        });
                    return d.promise();
                }
            })
        });
    });

##### Angular

    <!--TypeScript-->
    import { ..., Inject } from '@angular/core';
    import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';
    import { DxChartModule } from 'devextreme-angular';
    import DataSource from 'devextreme/data/data_source';
    import CustomStore from 'devextreme/data/custom_store';
    import 'rxjs/add/operator/toPromise';
    // ...
    export class AppComponent {
        chartDataSource: any = {};
        constructor(@Inject(HttpClient) httpClient: HttpClient) {
            this.chartDataSource = new DataSource({
                store: new CustomStore({
                    load: function (loadOptions) {
                        let params: HttpParams = new HttpParams()
                            .set("sort", loadOptions.sort ? JSON.stringify(loadOptions.sort) : "")
                            .set("filter", loadOptions.filter ? JSON.stringify(loadOptions.filter) : "")
                            .set("searchExpr", loadOptions.searchExpr ? JSON.stringify(loadOptions.searchExpr) : "")
                            .set("searchOperation", loadOptions.searchOperation)
                            .set("searchValue", loadOptions.searchValue);
                        return httpClient.get('http://mydomain.com/MyDataService', {
                                params: params
                            })
                            .toPromise()
                            .then(result => {
                                // Here, you can perform operations unsupported by the server
                                // or any other operations on the retrieved data
                                return result.data;
                            });
                    }
                })
            });
        }
    }
    @NgModule({
        imports: [
            // ...
            DxChartModule,
            HttpClientModule
        ],
        // ...
    })

    <!--HTML--><dx-chart ...
        [dataSource]="chartDataSource">
    </dx-chart>

---

#####See Also#####
- [Bind Series to Data](/Documentation/Guide/Widgets/Chart/Data_Binding/Bind_Series_to_Data/)
- [Update Data in the Chart](/Documentation/Guide/Widgets/Chart/Data_Binding/Update_Data/)
- [Data Aggregation](/Documentation/Guide/Widgets/Chart/Data_Aggregation/)
- [Data Layer - DataSource Examples | Custom Sources](/Documentation/Guide/Data_Layer/Data_Source_Examples/#Custom_Sources)
- [Data Layer - Overview](/Documentation/Guide/Data_Layer/Data_Layer/)
- [Chart API Reference](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/)

[tags]chart, data binding, provide data, custom data source, CustomStore, DataSource, load

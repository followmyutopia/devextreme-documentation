Access to a custom data source is configured using the [CustomStore](/Documentation/ApiReference/Data_Layer/CustomStore/) component. DevExtreme provides [ASP.NET](https://github.com/DevExpress/DevExtreme.AspNet.Data/blob/master/README.md) and [PHP](https://github.com/DevExpress/DevExtreme-PHP-Data/blob/master/README.md) extensions that help configure it and implement server-side data processing. You can also use the third-party extension for [MongoDB](https://github.com/oliversturm/devextreme-query-mongodb/blob/master/README.md). 

You need to configure the **CustomStore** in detail for accessing a server built on another technology. Data in this situation can be processed on the client or server. In the former case, switch the **CustomStore** to the raw mode and load all data from the server in the [load](/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#load) function as shown in the next example. 

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#pieChartContainer").dxPieChart({
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
    import { ..., Inject } from "@angular/core";
    import { HttpClient, HttpClientModule } from "@angular/common/http";
    import { DxPieChartModule } from "devextreme-angular";
    import DataSource from "devextreme/data/data_source";
    import CustomStore from "devextreme/data/custom_store";
    import "rxjs/add/operator/toPromise";
    // ...
    export class AppComponent {
        pieChartDataSource: any = {};
        constructor(@Inject(HttpClient) httpClient: HttpClient) {
            this.pieChartDataSource = new DataSource({
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
            DxPieChartModule,
            HttpClientModule
        ],
        // ...
    })

    <!--HTML--><dx-pie-chart
        [dataSource]="pieChartDataSource">
    </dx-pie-chart>

---
    
In the latter case, use the **CustomStore**'s **load** function to send data processing settings to the server. These settings are passed as a parameter to the **load** function and depend on the operations (filtering, sorting, etc.) that you have enabled in the **DataSource**. The following settings are relevant for the **PieChart**:

- **Sorting settings**: [sort](/Documentation/ApiReference/Data_Layer/CustomStore/LoadOptions/#sort)         
Present if the **DataSource**'s [sort](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#sort) option is set.

- **Filtering settings**: [filter](/Documentation/ApiReference/Data_Layer/CustomStore/LoadOptions/#filter)    
Present if the **DataSource**'s [filter](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#filter) option is set.

- **Searching settings**: [searchExpr](/Documentation/ApiReference/Data_Layer/CustomStore/LoadOptions/#searchExpr), [searchOperation](/Documentation/ApiReference/Data_Layer/CustomStore/LoadOptions/#searchOperation), and [searchValue](/Documentation/ApiReference/Data_Layer/CustomStore/LoadOptions/#searchValue)     
Present if [corresponding options](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#searchExpr) are set in the **DataSource**.

After receiving these settings, the server should apply them to data and send back an object with the following structure:

    {
        data: [ ... ] // result data objects
    }

This example shows how to make a query for data.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#pieChartContainer").dxPieChart({
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
    import { ..., Inject } from "@angular/core";
    import { HttpClient, HttpClientModule, HttpParams } from "@angular/common/http";
    import { DxPieChartModule } from "devextreme-angular";
    import DataSource from "devextreme/data/data_source";
    import CustomStore from "devextreme/data/custom_store";
    import "rxjs/add/operator/toPromise";
    // ...
    export class AppComponent {
        pieChartDataSource: any = {};
        constructor(@Inject(HttpClient) httpClient: HttpClient) {
            this.pieChartDataSource = new DataSource({
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
            DxPieChartModule,
            HttpClientModule
        ],
        // ...
    })

    <!--HTML--><dx-pie-chart ...
        [dataSource]="pieChartDataSource">
    </dx-pie-chart>

---

#####See Also#####
- [DataSource Examples - Custom Sources](/Documentation/Guide/Data_Layer/Data_Source_Examples/#Custom_Sources)
- [Bind Series to Data](/Documentation/Guide/Widgets/PieChart/Data_Binding/Bind_Series_to_Data/)
- [Update Data in the PieChart](/Documentation/Guide/Widgets/PieChart/Data_Binding/Update_Data/)

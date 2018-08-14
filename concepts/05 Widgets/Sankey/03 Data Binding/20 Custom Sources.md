You can use the [CustomStore](/Documentation/ApiReference/Data_Layer/CustomStore/) component to configure access to a custom data source. DevExtreme provides [ASP.NET](https://github.com/DevExpress/DevExtreme.AspNet.Data/blob/master/README.md) and [PHP](https://github.com/DevExpress/DevExtreme-PHP-Data/blob/master/README.md) extensions to configure it and implement server-side data processing. You can also use a third-party extension for [MongoDB](https://github.com/oliversturm/devextreme-query-mongodb/blob/master/README.md). 

To access a server that uses another technology, configure the **CustomStore** manually. In this case, data can be processed on the client or server. In the former case, switch the **CustomStore** to the raw mode and load all data from the server in the [load](/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#load) function as shown in the following example: 

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#sankeyContainer").dxSankey({
            dataSource: new DevExpress.data.DataSource({
                store: new DevExpress.data.CustomStore({
                    loadMode: "raw",   
                    load: function() {
                        return $.getJSON("https://mydomain.com/MyDataService");
                    }
                }),
                paginate: false
            }),
            sourceField: "from",
            targetField: "to",
            weightField: "amount"
        });
    });

##### Angular

    <!--TypeScript-->
    import { ..., Inject } from "@angular/core";
    import { HttpClient, HttpClientModule } from "@angular/common/http";
    import { DxSankeyModule } from "devextreme-angular";
    import DataSource from "devextreme/data/data_source";
    import CustomStore from "devextreme/data/custom_store";
    import "rxjs/add/operator/toPromise";
    // ...
    export class AppComponent {
        sankeyDataSource: DataSource;
        constructor(@Inject(HttpClient) httpClient: HttpClient) {
            this.sankeyDataSource = new DataSource({
                store: new CustomStore({
                    loadMode: "raw",
                    load: () => {
                        return httpClient.get("https://mydomain.com/MyDataService")
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
            DxSankeyModule,
            HttpClientModule
        ],
        // ...
    })

    <!--HTML--><dx-sankey
        [dataSource]="sankeyDataSource"
        sourceField="from"
        targetField="to"
        weightField="amount">
    </dx-sankey>

---
    
In the latter case, use the **CustomStore**'s **load** function to send data processing settings to the server. These settings are passed as a parameter to the **load** function and depend on the operations (filtering, sorting, and others) you enabled in the **DataSource**. The following settings apply to the **Sankey**:

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

The following example shows how to make a query for data:

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#sankeyContainer").dxSankey({
            dataSource: new DevExpress.data.DataSource({
                load: function(loadOptions) {
                    var d = $.Deferred();
                    $.getJSON("https://mydomain.com/MyDataService", {
                        sort: loadOptions.sort ? JSON.stringify(loadOptions.sort) : "",
                        filter: loadOptions.filter ? JSON.stringify(loadOptions.filter) : "",
                        searchExpr: loadOptions.searchExpr ? JSON.stringify(loadOptions.searchExpr) : "",
                        searchOperation: loadOptions.searchOperation,
                        searchValue: loadOptions.searchValue
                    }).done(function(result) {
                            // Here you can perform operations the server does not support
                            // or any other operations on the retrieved data
                            d.resolve(result.data);
                        });
                    return d.promise();
                }
            }),
            sourceField: "from",
            targetField: "to",
            weightField: "amount"
        });
    });

##### Angular

    <!--TypeScript-->
    import { ..., Inject } from "@angular/core";
    import { HttpClient, HttpClientModule, HttpParams } from "@angular/common/http";
    import { DxSankeyModule } from "devextreme-angular";
    import DataSource from "devextreme/data/data_source";
    import CustomStore from "devextreme/data/custom_store";
    import "rxjs/add/operator/toPromise";
    // ...
    export class AppComponent {
        sankeyDataSource: DataSource;
        constructor(@Inject(HttpClient) httpClient: HttpClient) {
            this.sankeyDataSource = new DataSource({
                store: new CustomStore({
                    load: (loadOptions) => {
                        let params: HttpParams = new HttpParams()
                            .set("sort", loadOptions.sort ? JSON.stringify(loadOptions.sort) : "")
                            .set("filter", loadOptions.filter ? JSON.stringify(loadOptions.filter) : "")
                            .set("searchExpr", loadOptions.searchExpr ? JSON.stringify(loadOptions.searchExpr) : "")
                            .set("searchOperation", loadOptions.searchOperation)
                            .set("searchValue", loadOptions.searchValue);
                        return httpClient.get("https://mydomain.com/MyDataService", {
                                params: params
                            })
                            .toPromise()
                            .then(result => {
                                // Here you can perform operations the server does not support
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
            DxSankeyModule,
            HttpClientModule
        ],
        // ...
    })

    <!--HTML--><dx-sankey
        [dataSource]="sankeyDataSource"
        sourceField="from"
        targetField="to"
        weightField="amount">
    </dx-sankey>

---

#####See Also#####
- [DataSource Examples - Custom Sources](/Documentation/Guide/Data_Layer/Data_Source_Examples/#Custom_Sources)
- [Update Data in the Sankey](/Documentation/Guide/Widgets/Sankey/Data_Binding/Update_Data/)

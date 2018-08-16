Access to a custom data source is configured using the [CustomStore](/Documentation/ApiReference/Data_Layer/CustomStore/) component. DevExtreme provides [ASP.NET](/Documentation/Guide/Widgets/List/Data_Binding/Web_API_Service/) and [PHP](/Documentation/Guide/Widgets/List/Data_Binding/PHP_Service/) extensions to configure the **CustomStore** and implement server-side data processing. You can also use the third-party extension for [MongoDB](/Documentation/Guide/Widgets/List/Data_Binding/MongoDB_Service/). 

You need to configure the **CustomStore** in detail for accessing a server built on another technology. Data in this situation can be processed on the client or server. In the former case, switch the **CustomStore** to the raw mode and load all data from the server in the [load](/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#load) function as shown in the following example: 

---
#####jQuery

    <!--JavaScript-->$(function() {
        $("#listContainer").dxList({
            dataSource: new DevExpress.data.DataSource({
                store: new DevExpress.data.CustomStore({
                    loadMode: "raw",   
                    load: function () {
                        return $.getJSON('https://mydomain.com/MyDataService');
                    }
                })
            })
        });
    });

#####Angular

    <!--TypeScript-->
    import { ..., Inject } from "@angular/core";
    import { HttpClient, HttpClientModule } from "@angular/common/http";
    import { DxListModule } from "devextreme-angular";
    import DataSource from "devextreme/data/data_source";
    import CustomStore from "devextreme/data/custom_store";
    import "rxjs/add/operator/toPromise";
    // ...
    export class AppComponent  {
        listDataSource: any = {};
        constructor(@Inject(HttpClient) httpClient: HttpClient) {
            this.listDataSource = new DataSource({
                store: new CustomStore({
                    loadMode: "raw",   
                    load: function () {
                        return httpClient.get('https://mydomain.com/MyDataService')
                            .toPromise();
                    }
                })
            })
        }
    }
    @NgModule({
        imports: [
            // ...
            DxListModule,
            HttpClientModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-list
        [dataSource]="listDataSource">
    </dx-list>

---

[note]We advise against using this mode with large amounts of data because all data is loaded at once.

In the latter case, use the **CustomStore**'s **load** function to send data processing settings to the server. These settings are passed as a parameter to the **load** function and depend on the operations (paging, filtering, sorting, etc.) that you have enabled in the **DataSource**. The following settings are relevant for the **List**:

- **Paging settings**: [take](/Documentation/ApiReference/Data_Layer/CustomStore/LoadOptions/#take), [skip](/Documentation/ApiReference/Data_Layer/CustomStore/LoadOptions/#skip), [requireTotalCount](/Documentation/ApiReference/Data_Layer/CustomStore/LoadOptions/#requireTotalCount)   
Present if [paginate](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#paginate) is **true** and [pageSize](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#pageSize) is set in the **DataSource**. The **requireTotalCount** setting appears when the **List**'s [selectAllMode](/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#selectAllMode) is *"allPages"*.

- **Sorting settings**: [sort](/Documentation/ApiReference/Data_Layer/CustomStore/LoadOptions/#sort)         
Present if the **DataSource**'s [sort](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#sort) option is set.

- **Filtering settings**: [filter](/Documentation/ApiReference/Data_Layer/CustomStore/LoadOptions/#filter)    
Present if the **DataSource**'s [filter](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#filter) option is set or [searching is enabled](/Documentation/Guide/Widgets/List/Searching/) in the widget.

- **Searching settings**: [searchExpr](/Documentation/ApiReference/Data_Layer/CustomStore/LoadOptions/#searchExpr), [searchOperation](/Documentation/ApiReference/Data_Layer/CustomStore/LoadOptions/#searchOperation), and [searchValue](/Documentation/ApiReference/Data_Layer/CustomStore/LoadOptions/#searchValue)     
Present if [corresponding options](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#searchExpr) are set in the **DataSource**.

- **Grouping settings**: [group](/Documentation/ApiReference/Data_Layer/CustomStore/LoadOptions/#group)      
Present if the **DataSource**'s [group](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#group) option is set.

After receiving these settings, the server should apply them to data and send back an object with the following structure:

    {
        data: [{
            key: "Group 1",
            items: [ ... ] // result data objects
        },
        ...
        ],
        totalCount: 100
    }

If the server has not received the **group** parameter, the resulting object should be as follows:

    {
        data: [ ... ], // result data objects
        totalCount: 100
    }

If the **List** allows the user to [delete items](/Documentation/Guide/Widgets/List/Item_Deletion/), the **CustomStore** must implement the [remove](/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#remove) operation as well. Below is a generalized configuration of the **CustomStore** for the **List** widget.

---
#####jQuery

    <!--JavaScript-->$(function() {
        $("#listContainer").dxList({
            dataSource: new DevExpress.data.DataSource({
                load: function (loadOptions) {
                    var d = $.Deferred();
                    $.getJSON("http://mydomain.com/MyDataService", {
                        skip: loadOptions.skip,
                        take: loadOptions.take,
                        sort: loadOptions.sort ? JSON.stringify(loadOptions.sort) : "",
                        filter: loadOptions.filter ? JSON.stringify(loadOptions.filter) : "",
                        searchExpr: loadOptions.searchExpr ? JSON.stringify(loadOptions.searchExpr) : "",
                        searchOperation: loadOptions.searchOperation,
                        searchValue: loadOptions.searchValue,
                        group: loadOptions.group ? JSON.stringify(loadOptions.group) : "",
                        requireTotalCount: loadOptions.requireTotalCount
                    }).done(function(result) {
                        // Here, you can perform operations unsupported by the server
                        d.resolve(result.data, {
                            totalCount: result.totalCount
                        });
                    });
                    return d.promise();
                },
                remove: function(key) {
                    return $.ajax({
                        url: "http://mydomain.com/MyDataService/" + encodeURIComponent(key),
                        method: "DELETE"
                    });
                }
            })
        });
    });

#####Angular

    <!--TypeScript-->
    import { ..., Inject } from "@angular/core";
    import { HttpClient, HttpClientModule, HttpParams } from "@angular/common/http";
    import { DxListModule } from "devextreme-angular";
    import DataSource from "devextreme/data/data_source";
    import CustomStore from "devextreme/data/custom_store";
    import "rxjs/add/operator/toPromise";
    // ...
    export class AppComponent {
        listDataSource: any = {};
        constructor(@Inject(HttpClient) httpClient: HttpClient) {
            this.listDataSource = new DataSource({
                store: new CustomStore({
                    load: function (loadOptions) {
                        let params: HttpParams = new HttpParams()
                            .set("skip", JSON.stringify(loadOptions.skip))
                            .set("take", JSON.stringify(loadOptions.take))
                            .set("sort", loadOptions.sort ? JSON.stringify(loadOptions.sort) : "")
                            .set("searchExpr", loadOptions.searchExpr ? JSON.stringify(loadOptions.searchExpr) : "")
                            .set("searchOperation", loadOptions.searchOperation)
                            .set("searchValue", loadOptions.searchValue)
                            .set("filter", loadOptions.filter ? JSON.stringify(loadOptions.filter) : "")
                            .set("requireTotalCount", JSON.stringify(loadOptions.requireTotalCount))
                            .set("group", loadOptions.group ? JSON.stringify(loadOptions.group) : "");
                        return httpClient.get('http://mydomain.com/MyDataService', {
                                params: params
                            })
                            .toPromise()
                            .then(result => {
                                // Here, you can perform operations unsupported by the server
                                return {
                                    data: result.data,
                                    totalCount: result.totalCount
                                };
                            });
                    },
                    remove: function (key) {
                        return httpClient.delete('http://mydomain.com/MyDataService' + encodeURIComponent(key))
                            .toPromise();
                    }
                })
            });
        }
    }
    @NgModule({
        imports: [
            // ...
            DxListModule,
            HttpClientModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-list
        [dataSource]="listDataSource">
    </dx-list>

---

#####See Also#####
- [Data Layer - DataSource Examples | Custom Sources](/Documentation/Guide/Data_Layer/Data_Source_Examples/#Custom_Sources)
- [Data Layer - DataSource Examples | Connect to a RESTful Service](/Documentation/Guide/Data_Layer/Data_Source_Examples/#Custom_Sources/Connect_to_RESTful_Service)
- [Data Layer - Overview](/Documentation/Guide/Data_Layer/Data_Layer/)
- [List - Access the DataSource](/Documentation/Guide/Widgets/List/Data_Binding/Access_the_DataSource/)
- [List - Paging](/Documentation/Guide/Widgets/List/Paging/)
- [List Demos](/Demos/WidgetsGallery/Demo/List/ListEditingAndAPI/jQuery/Light/)

[tags]list, data binding, provide data, custom data source, CustomStore, DataSource, load
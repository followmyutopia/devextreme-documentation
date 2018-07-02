Access to a custom data source is configured using the [CustomStore](/Documentation/ApiReference/Data_Layer/CustomStore/) component. DevExtreme provides [ASP.NET](https://github.com/DevExpress/DevExtreme.AspNet.Data/blob/master/README.md) and [PHP](https://github.com/DevExpress/DevExtreme-PHP-Data/blob/master/README.md) extensions that help configure it and implement server-side data processing. You can also use the third-party extension for [MongoDB](https://github.com/oliversturm/devextreme-query-mongodb/blob/master/README.md). If these extensions are not suitable for your data source, follow the instructions below to configure the **CustomStore** manually.

The **CustomSource**'s configuration differs depending on whether data is processed on the client or server. In the former case, switch the **CustomStore** to the raw mode and load all data from the server using the [load](/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#load) function as shown in the following example:

---
#####jQuery

    <!--JavaScript-->$(function() {
        $("#lookupContainer").dxLookup({
            dataSource: new DevExpress.data.DataSource({
                store: new DevExpress.data.CustomStore({
                    key: "ID",
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
    import { ..., Inject } from '@angular/core';
    import { HttpClient, HttpClientModule } from '@angular/common/http';
    import DataSource from 'devextreme/data/data_source';
    import { DxLookupModule } from 'devextreme-angular';
    import CustomStore from 'devextreme/data/custom_store';
    import 'rxjs/add/operator/toPromise';
    // ...
    export class AppComponent {
        lookupDataSource: any = {};
        constructor(@Inject(HttpClient) httpClient: HttpClient) {
            this.lookupData = new DataSource({
                store: new CustomStore({
                    key: "ID",
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
            DxLookupModule,
            HttpClientModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-lookup
        dataSource="lookupData">
    </dx-lookup>

---

[note]We recommend not using this mode with large amounts of data because all data is loaded at once.

In the latter case, use the **CustomStore**'s **load** function to send data processing settings to the server. These settings are passed as a parameter to the **load** function and depend on the operations (paging, filtering, sorting, etc.) that you have enabled in the **DataSource**. The following settings are relevant for the **Lookup**:

- **Paging settings**: [take](/Documentation/ApiReference/Data_Layer/CustomStore/LoadOptions/#take) and [skip](/Documentation/ApiReference/Data_Layer/CustomStore/LoadOptions/#skip)   
Present if [paginate](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#paginate) is **true** and [pageSize](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#pageSize) is set in the **DataSource**.

- **Sorting settings**: [sort](/Documentation/ApiReference/Data_Layer/CustomStore/LoadOptions/#sort)         
Present if the **DataSource**'s [sort](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#sort) option is set.

- **Filtering settings**: [filter](/Documentation/ApiReference/Data_Layer/CustomStore/LoadOptions/#filter)    
Present if the **DataSource**'s [filter](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#filter) option is set or [searching is enabled](/Documentation/Guide/Widgets/Lookup/Configure_Search_Parameters/) in the widget.

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
        ]
    }

If the **group** setting is absent, the object structure is different: 

    {
        data: [ ... ] // result data objects
    }

If you specify the **Lookup**'s [value](/Documentation/ApiReference/UI_Widgets/dxLookup/Configuration/#value) beforehand, the **CustomStore** should implement the [byKey](/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#byKey) operation as well. Below is a generalized **CustomStore** configuration for the **Lookup** widget.

---
#####jQuery

    <!--JavaScript-->$(function() {
        $("#lookupContainer").dxLookup({
            dataSource: new DevExpress.data.DataSource({
                key: "ID",
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
                        group: loadOptions.group ? JSON.stringify(loadOptions.group) : ""
                    }).done(function(result) {
                        // Here, you can perform operations unsupported by the server
                        d.resolve(result.data);
                    });
                    return d.promise();
                },
                byKey: function (key) {
                    var d = new $.Deferred();
                    $.get('https://mydomain.com/MyDataService?id=' + key)
                        .done(function (result) {
                            d.resolve(result);
                        });
                    return d.promise();
                }
            })
        });
    });

#####Angular

    <!--TypeScript-->
    import { ..., Inject } from '@angular/core';
    import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';
    import { DxLookupModule } from 'devextreme-angular';
    import DataSource from 'devextreme/data/data_source';
    import CustomStore from 'devextreme/data/custom_store';
    import 'rxjs/add/operator/toPromise';
    // ...
    export class AppComponent {
        lookupData: any = {};
        constructor(@Inject(HttpClient) httpClient: HttpClient) {
            this.lookupData = new DataSource({
                store: new CustomStore({
                    key: "ID",
                    load: function (loadOptions) {
                        let params: HttpParams = new HttpParams()
                            .set("skip", JSON.stringify(loadOptions.skip))
                            .set("take", JSON.stringify(loadOptions.take))
                            .set("sort", loadOptions.sort ? JSON.stringify(loadOptions.sort) : "")
                            .set("searchExpr", loadOptions.searchExpr ? JSON.stringify(loadOptions.searchExpr) : "")
                            .set("searchOperation", loadOptions.searchOperation)
                            .set("searchValue", loadOptions.searchValue)
                            .set("filter", loadOptions.filter ? JSON.stringify(loadOptions.filter) : "")
                            .set("group", loadOptions.group ? JSON.stringify(loadOptions.group) : "");
                        return httpClient.get('http://mydomain.com/MyDataService', {
                                params: params
                            })
                            .toPromise()
                            .then(result => {
                                // Here, you can perform operations unsupported by the server
                                return result.data;
                            });
                    },
                    byKey: function (key) {
                        return httpClient.get('https://mydomain.com/MyDataService?id=' + key)
                            .toPromise();
                    }
                })
            });
        }
    }
    @NgModule({
         imports: [
             // ...
             DxLookupModule,
             HttpClientModule 
         ],
         // ...
     })

    <!--HTML-->
    <dx-lookup
        [dataSource]="lookupData">
    </dx-lookup>

---

#####See Also#####
- [Data Layer - DataSource Examples | Custom Sources](/Documentation/Guide/Data_Layer/Data_Source_Examples/#Custom_Sources)
- [Data Layer - DataSource Examples | Connect to a RESTful Service](/Documentation/Guide/Data_Layer/Data_Source_Examples/#Custom_Sources/Connect_to_RESTful_Service)
- [Access the DataSource](/Documentation/Guide/Widgets/Lookup/Data_Binding/Access_the_DataSource/)
- [Enable Grouping](/Documentation/Guide/Widgets/Lookup/Enable_Grouping/)
- [Lookup Demos](/Demos/WidgetsGallery/Demo/Lookup/Basics/jQuery/Light/)

[tags]lookup, data binding, provide data, custom data source, CustomStore, DataSource, load

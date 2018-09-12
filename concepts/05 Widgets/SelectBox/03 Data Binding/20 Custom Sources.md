Access to a custom data source is configured using the [CustomStore](/Documentation/ApiReference/Data_Layer/CustomStore/) component. DevExtreme provides [ASP.NET](https://github.com/DevExpress/DevExtreme.AspNet.Data/blob/master/README.md) and [PHP](https://github.com/DevExpress/DevExtreme-PHP-Data/blob/master/README.md) extensions that help configure it and implement server-side data processing. You can also use the third-party extension for [MongoDB](https://github.com/oliversturm/devextreme-query-mongodb/blob/master/README.md). If these extensions are not suitable for your data source, follow the instructions below to configure the **CustomStore** manually.

The **CustomSource**'s configuration differs depending on whether data is processed on the client or server. In the former case, switch the **CustomStore** to the raw mode and load all data from the server using the [load](/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#load) function as shown in the following example:

---
#####jQuery

    <!--JavaScript-->$(function() {
        $("#selectBoxContainer").dxSelectBox({
            dataSource: new DevExpress.data.DataSource({
                store: new DevExpress.data.CustomStore({
                    key: "ID",
                    loadMode: "raw",   
                    load: function() {
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
    import DataSource from "devextreme/data/data_source";
    import { DxSelectBoxModule } from "devextreme-angular";
    import CustomStore from "devextreme/data/custom_store";
    import "rxjs/add/operator/toPromise";
    // ...
    export class AppComponent  {
        selectBoxData: any = {};
        constructor(@Inject(HttpClient) httpClient: HttpClient) {
            this.selectBoxData = new DataSource({
                store: new CustomStore({
                    key: "ID",
                    loadMode: "raw",   
                    load: () => {
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
             DxSelectBoxModule,
             HttpClientModule
         ],
         // ...
     })

    <!--HTML-->
    <dx-select-box
        [dataSource]="selectBoxData">
    </dx-select-box>

---

[note]We recommend not using this mode with large amounts of data because all data is loaded at once.

In the latter case, use the **CustomStore**'s **load** function to send data processing settings to the server. These settings are passed as a parameter to the **load** function and depend on the operations (paging, filtering, sorting, etc.) that you have enabled in the **DataSource**. The following settings are relevant for the **SelectBox**:

- **Paging settings**: [take](/Documentation/ApiReference/Data_Layer/CustomStore/LoadOptions/#take) and [skip](/Documentation/ApiReference/Data_Layer/CustomStore/LoadOptions/#skip)       
Present if [paginate](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#paginate) is **true** and [pageSize](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#pageSize) is set in the **DataSource**.

- **Sorting settings**: [sort](/Documentation/ApiReference/Data_Layer/CustomStore/LoadOptions/#sort)         
Present if the **DataSource**'s [sort](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#sort) option is set.

- **Filtering settings**: [filter](/Documentation/ApiReference/Data_Layer/CustomStore/LoadOptions/#filter)    
Present if the **DataSource**'s [filter](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#filter) option is set or [searching is enabled](/Documentation/Guide/Widgets/SelectBox/Configure_Search_Parameters/) in the widget.

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

If you specify the **SelectBox**'s [value](/Documentation/ApiReference/UI_Widgets/dxSelectBox/Configuration/#value) beforehand, the **CustomStore** should implement the [byKey](/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#byKey) operation. If the **SelectBox** allows a user [to add custom items](/Documentation/Guide/Widgets/SelectBox/Create_a_User-Defined_Item/), implement the [insert](/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#insert) method. Below is a generalized **CustomStore** configuration for the **SelectBox** widget.

---
#####jQuery

    <!--JavaScript-->$(function() {
        $("#selectBoxContainer").dxSelectBox({
            dataSource: new DevExpress.data.DataSource({
                key: "ID",
                load: function(loadOptions) {
                    var d = $.Deferred(),
                        params = {};
                    [
                        "skip",     
                        "take",  
                        "sort", 
                        "filter", 
                        "searchExpr",
                        "searchOperation",
                        "searchValue",
                        "group", 
                    ].forEach(function(i) {
                        if(i in loadOptions && isNotEmpty(loadOptions[i])) 
                            params[i] = JSON.stringify(loadOptions[i]);
                    });
                    $.getJSON("http://mydomain.com/MyDataService", params)
                        .done(function(result) {
                            // Here, you can perform operations unsupported by the server
                            d.resolve(result.data);
                        });
                    return d.promise();
                },
                byKey: function(key) {
                    var d = new $.Deferred();
                    $.get('https://mydomain.com/MyDataService?id=' + key)
                        .done(function(result) {
                            d.resolve(result);
                        });
                    return d.promise();
                },
                insert: function(values) {
                    return $.ajax({
                        url: "http://mydomain.com/MyDataService/",
                        method: "POST",
                        data: values
                    })
                }
            })
        });
    });
    function isNotEmpty(value) {
        return value !== undefined && value !== null && value !== "" && value !== {};
    }

#####Angular

    <!--TypeScript-->
    import { ..., Inject } from "@angular/core";
    import { HttpClient, HttpClientModule, HttpParams } from "@angular/common/http";
    import { DxSelectBoxModule } from "devextreme-angular";
    import DataSource from "devextreme/data/data_source";
    import CustomStore from "devextreme/data/custom_store";
    import "rxjs/add/operator/toPromise";
    // ...
    export class AppComponent {
        selectBoxData: any = {};
        constructor(@Inject(HttpClient) httpClient: HttpClient) {
            _this = this;
            this.selectBoxData = new DataSource({
                store: new CustomStore({
                    key: "ID",
                    load: (loadOptions) => {
                        let params: HttpParams = new HttpParams();
                        [
                            "skip",     
                            "take",  
                            "sort", 
                            "filter", 
                            "searchExpr",
                            "searchOperation",
                            "searchValue",
                            "group", 
                        ].forEach(function(i) {
                            if(i in loadOptions && _this.isNotEmpty(loadOptions[i])) 
                                params = params.set(i, JSON.stringify(loadOptions[i]));
                        });
                        return httpClient.get("http://mydomain.com/MyDataService", { params: params })
                            .toPromise()
                            .then(result => {
                                // Here, you can perform operations unsupported by the server
                                return result.data;
                            });
                    },
                    byKey: function(key) {
                        return httpClient.get('https://mydomain.com/MyDataService?id=' + key)
                            .toPromise();
                    },
                    insert: function(values) {
                        return httpClient.post('http://mydomain.com/MyDataService', values)
                            .toPromise();
                    }
                })
            });
        }
        isNotEmpty(value: any): boolean {
            return value !== undefined && value !== null && value !== "" && value !== {};
        }
    }
    @NgModule({
         imports: [
             // ...
             DxSelectBoxModule,
             HttpClientModule 
         ],
         // ...
     })

    <!--HTML-->
    <dx-select-box
        [dataSource]="selectBoxData">
    </dx-select-box>

---

#####See Also#####
- [Data Layer - DataSource Examples | Custom Sources](/Documentation/Guide/Data_Layer/Data_Source_Examples/#Custom_Sources)
- [Data Layer - DataSource Examples | Connect to a RESTful Service](/Documentation/Guide/Data_Layer/Data_Source_Examples/#Custom_Sources/Connect_to_RESTful_Service)
- [Data Layer - Overview](/Documentation/Guide/Data_Layer/Data_Layer/)
- [Access the DataSource](/Documentation/Guide/Widgets/SelectBox/Data_Binding/Access_the_DataSource/)
- [Grouping](/Documentation/Guide/Widgets/SelectBox/Grouping/In_the_Data_Source/)
- [Configure Search Parameters](/Documentation/Guide/Widgets/SelectBox/Configure_Search_Parameters/)
- [SelectBox Demos](/Demos/WidgetsGallery/Demo/Select_Box/Overview/jQuery/Light/)

[tags]selectBox, data binding, provide data, custom data source, CustomStore, DataSource, load
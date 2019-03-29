Access to a custom data source is configured using the [CustomStore](/Documentation/ApiReference/Data_Layer/CustomStore/) component. DevExtreme provides [ASP.NET](https://github.com/DevExpress/DevExtreme.AspNet.Data/blob/master/README.md) and [PHP](https://github.com/DevExpress/DevExtreme-PHP-Data/blob/master/README.md) extensions that help configure it and implement server-side data processing. You can also use the third-party extension for [MongoDB](https://github.com/oliversturm/devextreme-query-mongodb/blob/master/README.md). If these extensions are not suitable for your data source, follow the instructions below to configure the **CustomStore** manually.

The **CustomSource**'s configuration differs depending on whether data is processed on the client or server. In the former case, switch the **CustomStore** to the raw mode and load all data from the server using the [load](/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#load) function as shown in the following example:

#include common-code-customsource-rawmode-withkey

[note]We recommend not using this mode with large amounts of data because all data is loaded at once.

In the latter case, use the **CustomStore**'s **load** function to send data processing settings to the server. These settings are passed as a parameter to the **load** function and depend on the operations (paging, filtering, sorting, etc.) that you have enabled in the **DataSource**. The following settings are relevant for the **TagBox**:

- **Paging settings**: [take](/Documentation/ApiReference/Data_Layer/CustomStore/LoadOptions/#take), [skip](/Documentation/ApiReference/Data_Layer/CustomStore/LoadOptions/#skip), [requireTotalCount](/Documentation/ApiReference/Data_Layer/CustomStore/LoadOptions/#requireTotalCount)   
Present if [paginate](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#paginate) is **true** and [pageSize](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#pageSize) is set in the **DataSource**. The **requireTotalCount** setting appears when the **TagBox**'s [selectAllMode](/Documentation/ApiReference/UI_Widgets/dxTagBox/Configuration/#selectAllMode) is *"allPages"*.

- **Sorting settings**: [sort](/Documentation/ApiReference/Data_Layer/CustomStore/LoadOptions/#sort)         
Present if the **DataSource**'s [sort](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#sort) option is set.

- **Filtering settings**: [filter](/Documentation/ApiReference/Data_Layer/CustomStore/LoadOptions/#filter)    
Present if the [value](/Documentation/ApiReference/UI_Widgets/dxTagBox/Configuration/#value) option is specified at design time, [searching is enabled](/Documentation/Guide/Widgets/TagBox/Configure_Search_Parameters/) in the widget, or the **DataSource**'s [filter](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#filter) option is set.

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

If the **group** setting is absent, the object structure is different: 

    {
        data: [ ... ], // result data objects
        totalCount: 100
    }

If the **TagBox** allows a user [to add custom items](/Documentation/Guide/Widgets/TagBox/Create_a_User-Defined_Item/), you should also implement the [insert](/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#insert) method. Below is a generalized **CustomStore** configuration for the **TagBox** widget.

---
#####jQuery

    <!--JavaScript-->$(function() {
        $("#tagBoxContainer").dxTagBox({
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
                        "requireTotalCount"
                    ].forEach(function(i) {
                        if(i in loadOptions && isNotEmpty(loadOptions[i])) 
                            params[i] = JSON.stringify(loadOptions[i]);
                    });
                    $.getJSON("http://mydomain.com/MyDataService", params)
                        .done(function(result) {
                            // Here, you can perform operations unsupported by the server
                            d.resolve(result.data, { 
                                totalCount: result.totalCount
                            });
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
        return value !== undefined && value !== null && value !== "";
    }


#####Angular

    <!--TypeScript-->
    import { ..., Inject } from "@angular/core";
    import { HttpClient, HttpClientModule, HttpParams } from "@angular/common/http";
    import { DxTagBoxModule } from "devextreme-angular";
    import DataSource from "devextreme/data/data_source";
    import CustomStore from "devextreme/data/custom_store";
    import "rxjs/add/operator/toPromise";
    // ...
    export class AppComponent {
        tagBoxData: DataSource = {};
        constructor(@Inject(HttpClient) httpClient: HttpClient) {
            function isNotEmpty(value: any): boolean {
                return value !== undefined && value !== null && value !== "";
            }
            this.tagBoxData = new DataSource({
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
                            "requireTotalCount"
                        ].forEach(function(i) {
                            if(i in loadOptions && isNotEmpty(loadOptions[i])) 
                                params = params.set(i, JSON.stringify(loadOptions[i]));
                        });
                        return httpClient.get("http://mydomain.com/MyDataService", { params: params })
                            .toPromise()
                            .then(result => {
                                // Here, you can perform operations unsupported by the server
                                return {
                                    data: result.data,
                                    totalCount: result.totalCount
                                };
                            });
                    },
                    insert: function(values) {
                        return httpClient.post('http://mydomain.com/MyDataService', values)
                            .toPromise();
                    }
                })
            });
        }
    }
    @NgModule({
         imports: [
             // ...
             DxTagBoxModule,
             HttpClientModule 
         ],
         // ...
     })

    <!--HTML-->
    <dx-tag-box
        [dataSource]="tagBoxData">
    </dx-tag-box>

#####Vue

    <template>
        <dx-tag-box ... 
            :data-source="dataSource" />
    </template>
    <script>
    import DxTagBox from "devextreme-vue/tag-box";
    import CustomStore from "devextreme/data/custom_store";
    // ...
    function isNotEmpty(value) {
        return value !== undefined && value !== null && value !== "";
    }
    function handleErrors(response) {
        if (!response.ok)
            throw Error(response.statusText);
        return response;
    }
    const tagBoxDataSource = {
        store: new CustomStore({
            key: "ID",
            load: (loadOptions) => {
                let params = "?";
                [
                    "skip",     
                    "take",  
                    "sort", 
                    "filter", 
                    "searchExpr",
                    "searchOperation",
                    "searchValue",
                    "group", 
                    "requireTotalCount"
                ].forEach(function(i) {
                    if(i in loadOptions && isNotEmpty(loadOptions[i])) 
                        params += `${i}=${JSON.stringify(loadOptions[i])}&`;
                });
                params = params.slice(0, -1);
                return fetch(`https://mydomain.com/MyDataService${params}`)
                    .then(handleErrors)
                    .then(response => response.json())
                    .then((result) => {
                        return { 
                            data: result.data,
                            totalCount: result.totalCount
                        }
                    });
            },
            insert: (values) => {
                return fetch("https://mydomain.com/MyDataService", {
                    method: "POST",
                    body: JSON.stringify(values),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then(handleErrors);
            }
        })
    }
    export default {
        // ...
        data() {
            return {
                dataSource: tagBoxDataSource
            };
        },
        components: {
            // ...
            DxTagBox
        }
    }
    </script>

#####React

    import React from "react";
    import TagBox from "devextreme-react/tag-box";
    import CustomStore from "devextreme/data/custom_store";
    // ...
    function isNotEmpty(value) {
        return value !== undefined && value !== null && value !== "";
    }
    function handleErrors(response) {
        if (!response.ok) 
            throw Error(response.statusText);
        return response;
    }
    const tagBoxDataSource = {
        store: new CustomStore({
            key: "ID",
            load: (loadOptions) => {
                let params = "?";
                [
                    "skip",     
                    "take",  
                    "sort", 
                    "filter", 
                    "searchExpr",
                    "searchOperation",
                    "searchValue",
                    "group", 
                    "requireTotalCount"
                ].forEach(function(i) {
                    if(i in loadOptions && isNotEmpty(loadOptions[i])) 
                        params += `${i}=${JSON.stringify(loadOptions[i])}&`;
                });
                params = params.slice(0, -1);
                return fetch(`https://mydomain.com/MyDataService${params}`)
                    .then(handleErrors)
                    .then(response => response.json())
                    .then((result) => {
                        return { 
                            data: result.data,
                            totalCount: result.totalCount
                        }
                    });
            },
            insert: (values) => {
                return fetch("https://mydomain.com/MyDataService", {
                    method: "POST",
                    body: JSON.stringify(values),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then(handleErrors);
            }
        })
    }
    class App extends React.Component {
        render() {
            return (
                <TagBox ...
                    dataSource={tagBoxDataSource}>
                </TagBox>
            );
        }
    }
    export default App;

---

#####See Also#####
- [Data Layer - DataSource Examples | Custom Sources](/Documentation/Guide/Data_Layer/Data_Source_Examples/#Custom_Sources)
- [Data Layer - DataSource Examples | Connect to a RESTful Service](/Documentation/Guide/Data_Layer/Data_Source_Examples/#Custom_Sources/Connect_to_RESTful_Service)
- [Data Layer - Overview](/Documentation/Guide/Data_Layer/Data_Layer/)
- [Access the DataSource](/Documentation/Guide/Widgets/TagBox/Data_Binding/Access_the_DataSource/)
- [Grouping](/Documentation/Guide/Widgets/TagBox/Grouping/In_the_Data_Source/)
- [Configure Search Parameters](/Documentation/Guide/Widgets/TagBox/Configure_Search_Parameters/)
- [TagBox Demos](/Demos/WidgetsGallery/Demo/Tag_Box/Overview/jQuery/Light/)

[tags]tagBox, data binding, provide data, custom data source, CustomStore, DataSource, load
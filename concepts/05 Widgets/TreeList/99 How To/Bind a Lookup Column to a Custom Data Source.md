In the following code snippet, `Author Name` is a [lookup column](/Documentation/Guide/Widgets/TreeList/Columns/Column_Types/Lookup_Columns/) bound to a custom data source. The **CustomStore** loads data from the data source [in the raw mode](/Documentation/Guide/Data_Layer/Data_Source_Examples/#Custom_Sources/Load_Data_in_Raw_Mode) (the data is processed on the client). Data processing in this example includes only sorting, but you can specify other operations using the [**DataSource** options](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/).

---
##### jQuery

    <!--JavaScript-->
    $(function () {
        var lookupDataSource = {
            store: new DevExpress.data.CustomStore({
                key: "id",
                loadMode: "raw",
                load: function () {
                    // Returns an array of objects that have the following structure:
                    // { id: 1, name: "John Doe" }
                    return $.getJSON("https://mydomain.com/MyDataService/authors/");
                }
            }),
            sort: "name"
        }

        $("#treeListContainer").dxTreeList({
            // ...
            columns: [{
                dataField: "authorId",
                caption: "Author Name",
                lookup: {
                    dataSource: lookupDataSource,
                    valueExpr: "id", // "id" contains the same values as "authorId"
                    displayExpr: "name"
                }
            },
            // ...
            ]
        });
    });

##### Angular

    <!--TypeScript-->
    import { Component, Inject } from "@angular/core";
    import { HttpClient, HttpClientModule } from "@angular/common/http";
    import { DxTreeListModule } from "devextreme-angular";
    import CustomStore from "devextreme/data/custom_store";
    import "rxjs/add/operator/toPromise";

    @Component({ ... })
    export class AppComponent {
        lookupDataSource = {};
        constructor(@Inject(HttpClient) httpClient: HttpClient) {
            this.lookupDataSource = {
                store: new CustomStore({
                    key: "id",
                    loadMode: "raw",
                    load: function () {
                        // Returns an array of objects that have the following structure:
                        // { id: 1, name: "John Doe" }
                        return httpClient.get("https://mydomain.com/MyDataService/authors/")
                            .toPromise();
                    }
                }),
                sort: "name"
            };
        }
    }
    @NgModule({
        imports: [
            // ...
            DxTreeListModule,
            HttpClientModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-tree-list ... >
        <dxi-column
            dataField="authorId"
            caption="Author Name">
            <dxo-lookup
                [dataSource]="lookupDataSource"
                displayExpr="name"
                valueExpr="id"> <!-- "id" contains the same values as "authorId" -->
            </dxo-lookup>
        </dxi-column>
        <!-- ... -->
    </dx-tree-list>

---

The following alternative **CustomStore** configuration delegates data processing to the server. The [loadOptions](/Documentation/ApiReference/Data_Layer/CustomStore/LoadOptions/) object passed to the **load** function contains data processing settings that should be sent to the server with the GET request. In this example, the **load** function sends only sorting settings because the only specified **DataSource** option is [sort](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#sort) (see the commented out code lines). Note that the **CustomStore** must also contain a [byKey](/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#byKey) implementation. 

---
##### jQuery

    <!--JavaScript-->
    $(function () {
        var lookupDataSource = {
            store: new DevExpress.data.CustomStore({
                key: "id",
                load: function (loadOptions) {
                    var d = $.Deferred();
                    $.getJSON("https://mydomain.com/MyDataService/authors/", {
                        sort: loadOptions.sort ? JSON.stringify(loadOptions.sort) : "",
                        // skip: loadOptions.skip,
                        // take: loadOptions.take,
                        // filter: loadOptions.filter ? JSON.stringify(loadOptions.filter) : "",
                        // searchExpr: loadOptions.searchExpr ? JSON.stringify(loadOptions.searchExpr) : "",
                        // searchOperation: loadOptions.searchOperation,
                        // searchValue: loadOptions.searchValue,
                        // group: loadOptions.group ? JSON.stringify(loadOptions.group) : ""
                    })
                        .done(function (result) {
                            d.resolve(result)
                        });
                    return d.promise();
                },
                byKey: function (key) {
                    return $.getJSON("https://mydomain.com/MyDataService/authors/" + encodeURIComponent(key));
                }
            }),
            sort: "name"
        }

        $("#treeListContainer").dxTreeList({
            // ...
            // The configuration repeats the previous code
            // ...
        });
    });

##### Angular

    <!--TypeScript-->
    import { Component, Inject } from "@angular/core";
    import { HttpClient, HttpClientModule, HttpParams } from "@angular/common/http";
    import { DxTreeListModule } from "devextreme-angular";
    import CustomStore from "devextreme/data/custom_store";
    import "rxjs/add/operator/toPromise";

    @Component({ ... })
    export class AppComponent {
        lookupDataSource = {};
        constructor(@Inject(HttpClient) httpClient: HttpClient) {
            this.lookupDataSource = {
                store: new CustomStore({
                    key: "id",
                    load: function (loadOptions) {
                        let params: HttpParams = new HttpParams()
                            .set("sort", loadOptions.sort ? JSON.stringify(loadOptions.sort) : "");
                            // .set("skip", JSON.stringify(loadOptions.skip))
                            // .set("take", JSON.stringify(loadOptions.take))
                            // .set("searchExpr", loadOptions.searchExpr ? JSON.stringify(loadOptions.searchExpr) : "")
                            // .set("searchOperation", loadOptions.searchOperation)
                            // .set("searchValue", JSON.stringify(loadOptions.searchValue))
                            // .set("filter", loadOptions.filter ? JSON.stringify(loadOptions.filter) : "")
                            // .set("group", loadOptions.group ? JSON.stringify(loadOptions.group) : "");
                        return httpClient.get("https://mydomain.com/MyDataService/authors/", { params: params })
                            .toPromise();
                    },
                    byKey: function (key) {
                        return httpClient.get("https://mydomain.com/MyDataService/authors/" + encodeURIComponent(key))
                            .toPromise();
                    }
                }),
                sort: "name"
            }
        }
    }
    @NgModule({
        imports: [
            // ...
            DxTreeListModule,
            HttpClientModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-tree-list>
        <!-- ... -->
        <!-- The configuration repeats the previous code -->
        <!-- ... -->
    </dx-tree-list>

---

#####See Also#####
- [SelectBox - Custom Data Sources](/Documentation/Guide/Widgets/SelectBox/Data_Binding/Custom_Sources/)

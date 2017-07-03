The **CustomStore** needs the [load](/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#load) function to load data from the server. This function accepts a set of **loadOptions** and passes them to the server. The server must process data according to the **loadOptions** and send the processed data back. The members of the **loadOptions** depend on which data processing operations the **TreeList** delegates to the server. 

The example below shows how to implement the **load** function for all data processing operations. Note that in this example, the **CustomStore** is not declared explicitly. Instead, **CustomStore** operations are implemented directly in the **DataSource** configuration object to shorten the example.

---
##### jQuery

    <!--JavaScript-->
    var treeListDataSource = new DevExpress.data.DataSource({
        load: function (loadOptions) {
            var d = $.Deferred();
            $.getJSON('http://mydomain.com/MyDataService', {  
                // Passing settings to the server

                filter: loadOptions.filter ? JSON.stringify(loadOptions.filter) : "", // Pass if filtering is remote
                parentIds: loadOptions.parentIds ? JSON.stringify(loadOptions.parentIds) : "[]",    // Parent IDs of rows to be loaded. 
                                                     // Provides a simpler access to parent IDs than the filter setting does
                sort: loadOptions.sort ? JSON.stringify(loadOptions.sort) : "",       // Pass if sorting is remote
                group: loadOptions.group ? JSON.stringify(loadOptions.group) : "",    // Pass if grouping is remote
            }).done(function (result) {
                // You can process the received data here
                d.resolve(result.data);
            });
            return d.promise();
        }
    });

    $(function() {
        $("#treeListContainer").dxTreeList({
            dataSource: treeListDataSource,
            remoteOperations: {
                filtering: true,
                sorting: true,
                grouping: true
            }
        });
    });

##### Angular

    <!--TypeScript-->
    import { ..., Inject } from '@angular/core';
    import { Http, HttpModule, URLSearchParams } from '@angular/http';
    import DataSource from 'devextreme/data/data_source';
    import CustomStore from 'devextreme/data/custom_store';
    import 'rxjs/add/operator/toPromise';
    // ...
    export class AppComponent {
        treeListDataSource: any = {};
        constructor(@Inject(Http) http: Http) {
            this.treeListDataSource = new DataSource({
                load: function (loadOptions) {
                    let params: URLSearchParams = new URLSearchParams();
                    params.set("parentIds", loadOptions.parentIds);
                    // Add if sorting is remote
                    if (loadOptions.sort) {
                        params.set("sort", loadOptions.sort);
                    }
                    // Add if filtering is remote
                    if (loadOptions.filter) {
                        params.set("filter", loadOptions.filter); 
                    }
                    // Add if grouping is remote
                    if (loadOptions.group) {
                        params.set("group", loadOptions.group); 
                    }

                    return http.get('http://mydomain.com/MyDataService' + {
                                    search: params
                                })
                                .toPromise()
                                .then(response => {
                                    var json = response.json();
                                    // You can process the received data here
                                    return json.items
                                });
                }
            });
        }
    }

    <!--HTML--><dx-tree-list ...
        [dataSource]="treeListDataSource">
        <dxo-remote-operations
            [filtering]="true"
            [sorting]="true"
            [grouping]="true">
        </dxo-remote-operations>
    </dx-tree-list>

---

The object passed with the [$.getJSON()](http://api.jquery.com/jquery.getjson/) request has the following structure:

    <!--JavaScript-->
    {
        parentIds: [ 1, 3 ],    // Type of array items depends on the type of row keys
        filter: [
            [ "dataFieldName1", "operator", "value" ],
            "and", // "or"
            [ "dataFieldName2", "operator", "value" ],
            // ...
        ],
        sort: [
            { selector: "dataFieldName1", desc: true },
            { selector: "dataFieldName2", desc: false },
            // ...
        ],
        group: [
            // Group expression for numbers
            { 
                selector: "dataFieldName1", 
                // Specifies the grouping interval
                groupInterval: 100, 
                // Specifies whether the server should return group data rows or only the row count
                isExpanded: true, 
                // Specifies the sort order
                desc: false 
            },
            // Group expression for dates
            { selector: "dataFieldName2", groupInterval: "year", isExpanded: true, desc: false },
            { selector: "dataFieldName2", groupInterval: "month", isExpanded: true, desc: false },
            // Group expression for strings
            { selector: "dataFieldName3", isExpanded: true, desc: true },
            // ...
        ]
    }

[note]The **group** expression contains the **groupInterval** parameter only when the **TreeList** sends a request for the [header filter](/Documentation/Guide/Widgets/TreeList/Filtering_and_Searching/#Header_Filter)'s data source, and only if this data source contains dates or numbers. Note that in the case of numbers, the [groupInterval](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/headerFilter/#groupInterval) option should be specified explicitly.

After receiving this object with settings, the server should apply them to data and then send an object with the following structure back:

    <!--JavaScript-->
    {
        data: [
            // Your data objects
            { "id": 1,"parentId": 0, "name": "John Heart", "title": "CEO" },
            { "id": 2,"parentId": 1, "name": "Arthur Miller", "title": "COO" },
            // ...
        ]
    }

Note that if the server has received the **group** setting, the returned object should look like this:

    <!--JavaScript-->
    {
        data: [{
            key: "Group 1",
            items: [{
                key: "Group 1_1",
                items: [
                    key: "Group 1_1_1",
                    // This is a group of the deepest hierarchy level (isExpanded: false),
                    // therefore, you need to return only the count of data rows, while the "items" field should hold null
                    items: null,
                    count: 3        // The count of data rows in the current group
                ]
            }, {
                key: "Group 1_2",
                items: [ ... ]
            }]
        }, {
            key: "Group 2",
            items: [ ... ]
        }, 
            // . . .
        ]
    }

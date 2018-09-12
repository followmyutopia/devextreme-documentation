The **CustomStore** requires the [load](/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#load) function. It sends data processing settings to the server and gets processed data back. These settings depend on which [remoteOperations](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/remoteOperations/) are enabled. The following data processing settings apply to the **TreeList**:

- **Sorting settings**: [sort](/Documentation/ApiReference/Data_Layer/CustomStore/LoadOptions/#sort)         

- **Filtering settings**: [filter](/Documentation/ApiReference/Data_Layer/CustomStore/LoadOptions/#filter)    

- **Grouping settings**: [group](/Documentation/ApiReference/Data_Layer/CustomStore/LoadOptions/#group)      
 The **groupInterval** field of the **group** setting is present only when the widget requests the [header filter](/Documentation/Guide/Widgets/TreeList/Filtering_and_Searching/#Header_Filter)'s data, and only if this data contains numbers or dates. Note that for numbers, the [groupInterval](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/headerFilter/#groupInterval) option should be specified explicitly.

After receiving these settings, the server should apply them to data and send back an object with the following structure:

    {
        data: [{
            key: "Group 1",
            items: [ ... ],  // subgroups or data objects (for the last group when isExpanded = true)
                             // can be null when isExpanded = false and there are no further groups
            count: 3         // count of items in this group; required only when items = null
        },
        ...
        ]
    }

If the server has not received the **group** parameter, the resulting object should be as follows:

    {
        data: [ ... ] // result data objects
    }

Below is a generalized **CustomStore** configuration for the **TreeList** widget:

---
##### jQuery

    <!--JavaScript-->
    var treeListDataSource = new DevExpress.data.DataSource({
        load: function(loadOptions) {
            var d = $.Deferred(),
                    params = {};
            [
                "sort", 
                "filter", 
                "group", 
                "parentIds"
            ].forEach(function(i) {
                if(i in loadOptions && isNotEmpty(loadOptions[i])) 
                    params[i] = JSON.stringify(loadOptions[i]);
            });
            $.getJSON("http://mydomain.com/MyDataService", params)
                .done(function(result) {
                    // You can process the received data here
                    d.resolve(result.data);
                });
            return d.promise();
        }
    });
    function isNotEmpty(value) {
        return value !== undefined && value !== null && value !== "" && value !== {};
    }
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
    import { ..., Inject } from "@angular/core";
    import { HttpClient, HttpClientModule, HttpParams } from "@angular/common/http";
    import { DxTreeListModule } from "devextreme-angular";
    import DataSource from "devextreme/data/data_source";
    import CustomStore from "devextreme/data/custom_store";
    import "rxjs/add/operator/toPromise";
    // ...
    export class AppComponent {
        treeListDataSource: any = {};
        constructor(@Inject(HttpClient) httpClient: HttpClient) {
            _this = this;
            this.treeListDataSource = new DataSource({
                load: (loadOptions) => {
                    let params: HttpParams = new HttpParams();
                    [
                        "sort", 
                        "filter", 
                        "group", 
                        "parentIds"
                    ].forEach(function(i) {
                        if(i in loadOptions && _this.isNotEmpty(loadOptions[i])) 
                            params = params.set(i, JSON.stringify(loadOptions[i]));
                    });
                    return httpClient.get("http://mydomain.com/MyDataService", { params: params })
                        .toPromise()
                        .then(result => {
                            // You can process the received data here
                            return result.data;
                        });
                }
            });
        }
        isNotEmpty(value: any): boolean {
            return value !== undefined && value !== null && value !== "" && value !== {};
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

    <!--HTML--><dx-tree-list ...
        [dataSource]="treeListDataSource">
        <dxo-remote-operations
            [filtering]="true"
            [sorting]="true"
            [grouping]="true">
        </dxo-remote-operations>
    </dx-tree-list>

---

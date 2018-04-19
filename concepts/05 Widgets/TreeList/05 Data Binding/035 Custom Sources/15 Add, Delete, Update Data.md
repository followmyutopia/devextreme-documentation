To allow a user to add, delete and update data in the **TreeList**, assign **true** to the corresponding field of the [editing](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/editing/) object. 

---
##### jQuery

    <!--JavaScript-->
    $(function(){
        $("#treeListContainer").dxTreeList({
            // ...
            editing: {
                allowUpdating: true, 
                allowDeleting: true, 
                allowAdding: true
            }
        });
    });

##### Angular

    <!--HTML--><dx-tree-list ... >
        <dxo-editing
            [allowUpdating]="true"
            [allowDeleting]="true"
            [allowAdding]="true">
        </dxo-editing>
    </dx-tree-list>

    <!--TypeScript-->
    import { DxTreeListModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxTreeListModule
        ],
        // ...
    })

---

With these settings, the **TreeList** expects that the server can also add, update and delete data. In addition, you need to configure the **CustomStore** as shown below. Note that in this example, the **CustomStore** is not declared explicitly. Instead, **CustomStore** operations are implemented directly in the **DataSource** configuration object to shorten the example.

---
##### jQuery

    <!--JavaScript-->
    var treeListDataSource = new DevExpress.data.DataSource({ 
        // ...
        insert: function (values) {
            return $.ajax({
                url: "http://mydomain.com/MyDataService/",
                method: "POST",
                data: values
            })
        },
        remove: function (key) {
            return $.ajax({
                url: "http://mydomain.com/MyDataService/" + encodeURIComponent(key),
                method: "DELETE",
            })
        },
        update: function (key, values) {
            return $.ajax({
                url: "http://mydomain.com/MyDataService/" + encodeURIComponent(key),
                method: "PUT",
                data: values
            })
        }
    });

    $(function() {
        $("#treeListContainer").dxTreeList({
            dataSource: treeListDataSource,
            // ...
        });
    });

##### Angular

    <!--TypeScript-->
    import { ..., Inject } from '@angular/core';
    import { HttpClient, HttpClientModule } from '@angular/common/http';
    import { DxTreeListModule } from 'devextreme-angular';
    import DataSource from 'devextreme/data/data_source';
    import CustomStore from 'devextreme/data/custom_store';
    import 'rxjs/add/operator/toPromise';
    // ...
    export class AppComponent {
        treeListDataSource: any = {};
        constructor(@Inject(HttpClient) httpClient: HttpClient) {
            this.treeListDataSource = new DataSource({
                // ...
                insert: function (values) {
                    return httpClient.post('http://mydomain.com/MyDataService', values)
                        .toPromise();
                },
                remove: function (key) {
                    return httpClient.delete('http://mydomain.com/MyDataService' + encodeURIComponent(key))
                        .toPromise();
                },
                update: function (key, values) {
                    return httpClient.put('http://mydomain.com/MyDataService' + encodeURIComponent(key), values)
                        .toPromise();
                }
            });
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
    </dx-tree-list>

---

#####See Also#####
- [Data Layer - DataSource Examples | Custom Sources](/Documentation/Guide/Data_Layer/Data_Source_Examples/#Custom_Sources)
- [Data Layer - Overview](/Documentation/Guide/Data_Layer/Data_Layer/)
- [TreeList Demos](/Demos/WidgetsGallery/Demo/Tree_List/LocalDataPlainStructure/jQuery/Light/)
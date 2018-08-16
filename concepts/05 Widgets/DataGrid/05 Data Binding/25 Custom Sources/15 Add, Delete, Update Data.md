To allow a user to add, delete and update data in the **DataGrid**, assign **true** to the corresponding field of the [editing](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/editing/) object. 

---

#####jQuery

    <!--JavaScript-->
    $(function(){
        $("#dataGridContainer").dxDataGrid({
            // ...
            editing: {
                allowUpdating: true, 
                allowDeleting: true, 
                allowAdding: true
            }
        });
    });

#####Angular

    <!--HTML--><dx-data-grid ... >
        <dxo-editing
            [allowUpdating]="true"
            [allowDeleting]="true"
            [allowAdding]="true">
        </dxo-editing>
    </dx-data-grid>

    <!--TypeScript-->
    import { DxDataGridModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxDataGridModule
        ],
        // ...
    })

---

With these settings, the **DataGrid** expects that the server can also add, update and delete data. In addition, you need to configure the **CustomStore** as shown below. Note that in this example, the **CustomStore** is not declared explicitly. Instead, **CustomStore** operations are implemented directly in the **DataSource** configuration object to shorten the example.

---

#####jQuery

    <!--JavaScript-->
    var gridDataSource = new DevExpress.data.DataSource({
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
        $("#gridContainer").dxDataGrid({
            dataSource: gridDataSource,
            // ...
        });
    });

#####Angular

    <!--TypeScript-->
    import { ..., Inject } from "@angular/core";
    import { HttpClient, HttpClientModule } from "@angular/common/http";
    import { DxDataGridModule } from "devextreme-angular";
    import DataSource from "devextreme/data/data_source";
    import CustomStore from "devextreme/data/custom_store";
    import "rxjs/add/operator/toPromise";
    // ...
    export class AppComponent {
        gridDataSource: any = {};
        constructor(@Inject(HttpClient) httpClient: HttpClient) {
            this.gridDataSource = new DataSource({
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
            DxDataGridModule,
            HttpClientModule
        ],
        // ...
    })

    <!--HTML--><dx-data-grid ...
        [dataSource]="gridDataSource">
    </dx-data-grid>

---

#####See Also#####
- [Data Layer - DataSource Examples | Custom Sources](/Documentation/Guide/Data_Layer/Data_Source_Examples/#Custom_Sources)
- [Data Layer - Overview](/Documentation/Guide/Data_Layer/Data_Layer/)
- [DataGrid Demos](/Demos/WidgetsGallery/Demo/DataGrid/CustomDataSource/jQuery/Light/)
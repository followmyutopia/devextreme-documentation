We recommend server-side data processing for large datasets. The [ODataStore](/Documentation/ApiReference/Data_Layer/ODataStore/) supports server-side paging, filtering, and sorting. DevExtreme provides extensions that help implement data processing for [ASP.NET](/Documentation/Guide/Widgets/DataGrid/Data_Binding/Web_API_Service/) and [PHP](/Documentation/Guide/Widgets/DataGrid/Data_Binding/PHP_Service/) servers. You can also use the third-party extension for [MongoDB](/Documentation/Guide/Widgets/DataGrid/Data_Binding/MongoDB_Service/). If these extensions do not suit your data source, implement server-side data processing manually according to the protocol described in the [Custom Sources](/Documentation/Guide/Widgets/DataGrid/Data_Binding/Custom_Sources/) article.

Specify the [remoteOperations](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/remoteOperations/) option to notify the **DataGrid** of the server's data processing operations.

---
#####jQuery

    <!--JavaScript-->
    $(function() {
        $("#dataGridContainer").dxDataGrid({ 
            // ...
            remoteOperations: {
                filtering: true,
                paging: true,
                sorting: true,
                groupPaging: false,
                grouping: false,
                summary: false
            }
        });
    }); 

#####Angular

    <!--HTML--><dx-data-grid ... >
        <dxo-remote-operations
            [filtering]="true"
            [paging]="true"
            [sorting]="true"
            [summary]="false"
            [grouping]="false"
            [groupPaging]="false"> 
        </dxo-remote-operations>
    </dx-data-grid>

    <!--TypeScript-->
    import { DxDataGridModule } from 'devextreme-angular';
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

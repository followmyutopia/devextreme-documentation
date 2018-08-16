We recommend server-side data processing for large datasets. The [ODataStore](/Documentation/ApiReference/Data_Layer/ODataStore/) supports server-side filtering and sorting. DevExtreme provides extensions that help implement data processing for [ASP.NET](/Documentation/Guide/Widgets/TreeList/Data_Binding/Web_API_Service/) and [PHP](/Documentation/Guide/Widgets/TreeList/Data_Binding/PHP_Service/) servers. You can also use the third-party extension for [MongoDB](/Documentation/Guide/Widgets/TreeList/Data_Binding/MongoDB_Service/). If these extensions do not suit your data source, implement server-side data processing manually according to the protocol described in the [Custom Sources](/Documentation/Guide/Widgets/TreeList/Data_Binding/Custom_Sources/) article.

Specify the [remoteOperations](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/remoteOperations/) option to notify the **TreeList** of the server's data processing operations.

---
#####jQuery

    <!--JavaScript-->
    $(function() {
        $("#treeListContainer").dxTreeList({ 
            // ...
            remoteOperations: {
                filtering: true,
                sorting: true,
                grouping: true
            }
        });
    }); 

#####Angular

    <!--HTML--><dx-tree-list ... >
        <dxo-remote-operations
            [filtering]="true"
            [sorting]="true"
            [grouping]="true"> 
        </dxo-remote-operations>
    </dx-tree-list>

    <!--TypeScript-->
    import { DxTreeListModule } from "devextreme-angular";
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

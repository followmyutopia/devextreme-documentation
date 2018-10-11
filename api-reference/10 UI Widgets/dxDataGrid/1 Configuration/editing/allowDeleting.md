===========================================================================
<!--default-->false<!--/default-->
<!--type-->Boolean | function(options)<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies whether a user can delete rows. It is called for each data row when defined as a function.
<!--/shortDescription-->

<!--fullDescription-->
The following code allows a user to delete only even data rows:

---
#####jQuery

    <!--JavaScript-->
    $(function(){
        $("#dataGridContainer").dxDataGrid({
            // ...
            editing: {
                allowDeleting: function(e) {
                    if(e.row.rowIndex % 2 == 1) { return true }; 
                    return false;
                },
            }
        })
    })

#####Angular

    <!--TypeScript-->
    import { DxDataGridModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        allowDeleting(e) {
            if(e.row.rowIndex % 2 == 1) { return true }; 
            return false;
        }
    }
    @NgModule({
        imports: [
            // ...
            DxDataGridModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-data-grid ... >
        <dxo-editing
            [allowDeleting]="allowDeleting">
        </dxo-editing>
    </dx-data-grid>

---

#####See Also#####
- [onRowRemoved](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onRowRemoved)
- [onRowRemoving](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onRowRemoving)
- [deleteRow(rowIndex)](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#deleteRowrowIndex)
- [undeleteRow(rowIndex)](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#undeleteRowrowIndex)
<!--/fullDescription-->
<!--typeFunctionParamName1-->options<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->Object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Information about the current row.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->component<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->dxDataGrid<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
The widget's instance.
<!--/typeFunctionParamDescription1_field1-->
<!--typeFunctionParamName1_field2-->row<!--/typeFunctionParamName1_field2-->
<!--typeFunctionParamType1_field2-->dxDataGridRowObject<!--/typeFunctionParamType1_field2-->
<!--typeFunctionParamDescription1_field2-->
The row's properties. 
<!--/typeFunctionParamDescription1_field2-->

<!--typeFunctionReturnType-->Boolean<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
**true** if the row can be deleted; otherwise **false**.
<!--/typeFunctionReturnDescription-->
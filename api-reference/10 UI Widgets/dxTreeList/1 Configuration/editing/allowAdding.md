===========================================================================
<!--default-->false<!--/default-->
<!--type-->Boolean | function(options)<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies whether a user can add new rows. It is called for each data row when defined as a function.
<!--/shortDescription-->

<!--fullDescription-->
In the following code, the **Add** button is added to rows whose status is _not_ *"Completed"*:

---
#####jQuery

    <!--JavaScript-->
    $(function(){
        $("#treeListContainer").dxTreeList({
            // ...
            editing: {
                allowAdding: function(e) {
                    if(e.row.data.Task_Status == "Completed") return false;
                    return true;
                }
            }
        })
    })

#####Angular

    <!--TypeScript-->
    import { dxTreeListModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        allowAdding: function(e) {
            if(e.row.data.Task_Status == "Completed") return false;
            return true;
        }
    }
    @NgModule({
        imports: [
            // ...
            dxTreeListModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-tree-list ... >
        <dxo-editing
            [allowAdding]="allowAdding">
        </dxo-editing>
    </dx-tree-list>

---

#####See Also#####
- [onRowInserting](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#onRowInserting)
- [onRowInserted](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#onRowInserted)
- [addRow()](/Documentation/ApiReference/UI_Widgets/dxTreeList/Methods/#addRow)
<!--/fullDescription-->
<!--typeFunctionParamName1-->options<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->Object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Information about the current row.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->component<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->dxTreeList<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
The widget's instance.
<!--/typeFunctionParamDescription1_field1-->
<!--typeFunctionParamName1_field2-->row<!--/typeFunctionParamName1_field2-->
<!--typeFunctionParamType1_field2-->dxTreeListRowObject<!--/typeFunctionParamType1_field2-->
<!--typeFunctionParamDescription1_field2-->
The row's properties. 
<!--/typeFunctionParamDescription1_field2-->

<!--typeFunctionReturnType-->Boolean<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
**true** if the row can be added; otherwise **false**.
<!--/typeFunctionReturnDescription-->
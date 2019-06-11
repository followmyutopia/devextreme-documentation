<!--id-->dxDataGrid.Options.customizeColumns<!--/id-->
===========================================================================
<!--type-->function(columns)<!--/type-->
===========================================================================

<!--shortDescription-->
Customizes columns after they are created.
<!--/shortDescription-->

<!--fullDescription-->
Use this function to make minor adjustments to automatically generated columns. You can access and modify column configurations using the function's parameter. 

---
##### jQuery

    <!--JavaScript-->
    $(function(){
        $("#dataGrid").dxDataGrid({
            // ...
            customizeColumns: function (columns) {
                columns[0].width = 100;
                columns[1].width = 210;
            }
        })
    });

##### Angular

    <!--TypeScript-->
    import { DxDataGridModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        customizeColumns (columns) {
            columns[0].width = 100;
            columns[1].width = 210;
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
    <dx-data-grid ...
        [customizeColumns]="customizeColumns">
    </dx-data-grid>
    
---

For a more profound column customization, declare the [columns](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/) array.
<!--/fullDescription-->
<!--typeFunctionParamName1-->columns<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->Array<dxDataGridColumn><!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
All column [configurations](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/).
<!--/typeFunctionParamDescription1-->

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
        $("#treeList").dxTreeList({
            // ...
            customizeColumns: function (columns) {
                columns[0].width = 100;
                columns[1].width = 210;
            }
        })
    });

##### Angular

    <!--TypeScript-->
    import { DxTreeListModule } from 'devextreme-angular';
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
            DxTreeListModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-tree-list ...
        [customizeColumns]="customizeColumns">
    </dx-tree-list>
    
---

For a more profound column customization, declare the [columns](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/) array.

<!--/fullDescription-->
<!--typeFunctionParamName1-->columns<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->Array<dxTreeList_Options_columns><!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
All column [configurations](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/).
<!--/typeFunctionParamDescription1-->

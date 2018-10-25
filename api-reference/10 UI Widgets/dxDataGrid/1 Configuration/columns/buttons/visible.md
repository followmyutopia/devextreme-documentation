===========================================================================
<!--default-->true<!--/default-->
<!--type-->Boolean | function(options)<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies the button's visibility.
<!--/shortDescription-->

<!--fullDescription-->
Use the function to show or hide the button for specific rows. For example, the widget lists online orders and allows users to edit them. The **Cancel** button should allow users to cancel their orders. However, completed orders should not be canceled. The **visible** function in this case may look as follows:

---
##### jQuery  

    <!--JavaScript-->
    $(function () {
        $("#dataGridContainer").dxDataGrid({
            // ...
            columns: [{
                type: "buttons",
                buttons: [{
                    text: "Cancel",
                    visible: function (e) {
                        return !e.row.isEditing && !e.row.data.isCompleted;
                    }
                }]
            }]
        });
    });

##### Angular  

    <!--HTML-->
    <dx-data-grid ... >
        <dxi-column type="buttons">
            <dxi-button
                text="Cancel"
                [visible]="isCancelButtonVisible">
            </dxi-button>
        </dxi-column>
    </dx-data-grid>

    <!--TypeScript-->
    import { DxDataGridModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        isCancelButtonVisible (e) {
            return !e.row.isEditing && !e.row.data.isCompleted;
        }
    }
    @NgModule({
        imports: [
            // ...
            DxDataGridModule
        ],
        // ...
    })
    
---

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/DataGrid/CommandColumnCustomization/jQuery/Light/"
}
<!--/fullDescription-->
<!--typeFunctionParamName1-->options<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->Object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Information about the row and column that contain the button.
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
<!--typeFunctionParamName1_field3-->column<!--/typeFunctionParamName1_field3-->
<!--typeFunctionParamType1_field3-->dxDataGridColumn<!--/typeFunctionParamType1_field3-->
<!--typeFunctionParamDescription1_field3-->
The column's properties.
<!--/typeFunctionParamDescription1_field3-->

<!--typeFunctionReturnType-->Boolean<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
**true** if the button should be visible; otherwise, **false**.
<!--/typeFunctionReturnDescription-->
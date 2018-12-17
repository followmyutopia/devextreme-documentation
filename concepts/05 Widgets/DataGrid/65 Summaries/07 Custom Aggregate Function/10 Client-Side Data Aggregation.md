Follow the steps below to configure custom client-side data aggregation.

1. Make sure that the **remoteOperations**.[summary](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/remoteOperations/#summary), **remoteOperations**.[groupPaging](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/remoteOperations/#groupPaging), or [remoteOperations](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/remoteOperations/) option is not set or set to **false**.

1. Add one or several summary items to the [totalItems](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/totalItems/) or [groupItems](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/groupItems/) array. Specify their [names](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/totalItems/#name) and set [summary types](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/totalItems/#summaryType) to *"custom"*:

    ---
    ##### jQuery

        <!--JavaScript-->
        $(function() {
            $("#dataGridContainer").dxDataGrid({
                // ...
                summary: {
                    totalItems: [
                        { name: "сustomSummary1", summaryType: "custom" },
                        { name: "сustomSummary2", summaryType: "custom" }
                    ]
                }
            });
        });

    ##### Angular

        <!--HTML-->
        <dx-data-grid ... >
            <dxo-summary>
                <dxi-total-item
                    name="сustomSummary1"
                    summaryType="custom">
                </dxi-total-item>
                <dxi-total-item
                    name="сustomSummary2"
                    summaryType="custom">
                </dxi-total-item>
            </dxo-summary>
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

1. Implement the [calculateCustomSummary](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/#calculateCustomSummary) function as detailed in its description.

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/DataGrid/CustomSummaries/jQuery/Light/"
}

#####See Also#####
- [Format Text and Value](/Documentation/Guide/Widgets/DataGrid/Summaries/Format_Text_and_Value/)

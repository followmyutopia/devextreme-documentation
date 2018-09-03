===========================================================================
<!--type-->function(options)<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies a custom aggregate function. This function is called for summary items whose [summaryType](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/totalItems/#summaryType) is *"custom"*.
<!--/shortDescription-->

<!--fullDescription-->
This is a single function for all custom summary items. Specify a [name](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/totalItems/#name) for each item to identify them in the function.

A summary value calculation is conducted in three stages: *start* - the **totalValue** is initialized; *calculate* - the **totalValue** is modified; *finalize* - the **totalValue** is adjusted. To identify the current stage, check the value of the **summaryProcess** field that belongs to the function's parameter:

---
#####jQuery

    <!--JavaScript-->
    $(function() {
        $("#dataGridContainer").dxDataGrid({
            // ...
            summary: {
                totalItems: [
                    { name: "customSummary1", summaryType: "custom" },
                    { name: "customSummary2", summaryType: "custom" }
                ],
                calculateCustomSummary: function(options) {
                    // Calculating "customSummary1"
                    if(options.name == "customSummary1") {
                        switch(options.summaryProcess) {
                            case "start":
                                // Initializing "totalValue" here
                                break;
                            case "calculate":
                                // Modifying "totalValue" here
                                break;
                            case "finalize":
                                // Assigning the final value to "totalValue" here
                                break;
                        }
                    }

                    // Calculating "customSummary2"
                    if(options.name == "customSummary2") {
                        // ...
                        // Same "switch" statement here
                    }
                }
            }
        });
    });

#####Angular

    <!--HTML-->
    <dx-data-grid ... >
        <dxo-summary [calculateCustomSummary]="calculateSummary">
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
        calculateSummary(options) {
            // Calculating "customSummary1"
            if(options.name == "customSummary1") {
                switch(options.summaryProcess) {
                    case "start":
                        // Initializing "totalValue" here
                        break;
                    case "calculate":
                        // Modifying "totalValue" here
                        break;
                    case "finalize":
                        // Assigning the final value to "totalValue" here
                        break;
                }
            }

            // Calculating "customSummary2"
            if(options.name == "customSummary2") {
                // ...
                // Same "switch" statement here
            }
        };
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
    url: "/Demos/WidgetsGallery/Demo/DataGrid/CustomSummaries/jQuery/Light/"
}

#####See Also#####
- [Custom Aggregate Function](/Documentation/Guide/Widgets/DataGrid/Summaries/Custom_Aggregate_Function/)
<!--/fullDescription-->
<!--typeFunctionParamName1-->options<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->Object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Summary information.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->component<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->dxDataGrid<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
The widget's instance.
<!--/typeFunctionParamDescription1_field1-->
<!--typeFunctionParamName1_field2-->name<!--/typeFunctionParamName1_field2-->
<!--typeFunctionParamType1_field2-->String<!--/typeFunctionParamType1_field2-->
<!--typeFunctionParamDescription1_field2-->
The summary item's [name](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/totalItems/#name).
<!--/typeFunctionParamDescription1_field2-->
<!--typeFunctionParamName1_field3-->summaryProcess<!--/typeFunctionParamName1_field3-->
<!--typeFunctionParamType1_field3-->String<!--/typeFunctionParamType1_field3-->
<!--typeFunctionParamDescription1_field3-->
Indicates the stage of the summary item calculation; equals *"start"*, *"calculate"* or *"finalize"*.
<!--/typeFunctionParamDescription1_field3-->
<!--typeFunctionParamName1_field4-->value<!--/typeFunctionParamName1_field4-->
<!--typeFunctionParamType1_field4-->any<!--/typeFunctionParamType1_field4-->
<!--typeFunctionParamDescription1_field4-->
If the custom summary item is calculated by a [column](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/totalItems/#column), this field contains the value from a cell of this column. Otherwise, it contains a whole object from the data source.
<!--/typeFunctionParamDescription1_field4-->
<!--typeFunctionParamName1_field5-->totalValue<!--/typeFunctionParamName1_field5-->
<!--typeFunctionParamType1_field5-->any<!--/typeFunctionParamType1_field5-->
<!--typeFunctionParamDescription1_field5-->
The resulting summary item's value.
<!--/typeFunctionParamDescription1_field5-->
<!--typeFunctionParamName1_field6-->groupIndex<!--/typeFunctionParamName1_field6-->
<!--typeFunctionParamType1_field6-->Number<!--/typeFunctionParamType1_field6-->
<!--typeFunctionParamDescription1_field6-->
A zero-based group level. Available only when calculating group summary items.
<!--/typeFunctionParamDescription1_field6-->

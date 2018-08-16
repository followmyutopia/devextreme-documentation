===========================================================================
<!--type-->function(options)<!--/type-->
===========================================================================

<!--shortDescription-->
Allows you to use a custom aggregate function to calculate the value of a summary item.
<!--/shortDescription-->

<!--fullDescription-->
If [predefined aggregate functions](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/totalItems/#summaryType) do not meet your requirements, implement a custom one and assign it to the **calculateCustomSummary** option. This function will be called for each summary item whose **summaryType** property is set to *"custom"*.

When implementing the function, you can access useful information through the object passed to this function as its argument. Use the **name** field of this object to identify the summary item. 

To access data, use the **value** field. This data depends on whether you have set the [column](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/totalItems/#column) field of the summary item or not. If you have, the **value** field contains the value from a cell of this column. Otherwise, it contains a whole object from the data source.

The calculation of a summary item value is conducted in several phases. Usually, you need to initialize **totalValue** on start. Then, you modify **totalValue** in the calculation phase. In the final phase, you adjust **totalValue**. To identify the current phase, check the value of the **summaryProcess** field.

The following code demonstrates a general structure of the **calculateCustomSummary** function. In this code, the [totalItems](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/totalItems/) array contains two custom summary items. Within the **calculateCustomSummary** function, the **name** field identifies each summary item. Actions that follow depend on the calculation stage, which is obtained using the **summaryProcess** field.

---
#####jQuery

    <!--JavaScript-->
    $(function () {
        $("#dataGridContainer").dxDataGrid({
            // ...
            summary: {
                totalItems: [
                    { summaryType: "custom", name: "CustomSummary1" },
                    { summaryType: "custom", name: "CustomSummary2" }
                ],
                calculateCustomSummary: function (options) {
                    // Calculating "CustomSummary1"
                    if (options.name == "CustomSummary1") {
                        if (options.summaryProcess == "start") {
                            // Initializing "totalValue" here
                        }
                        if (options.summaryProcess == "calculate") {
                            // Modifying "totalValue" here
                        }
                        if (options.summaryProcess == "finalize") {
                            // Assigning the final value to "totalValue" here
                        }
                    }

                    // Calculating "CustomSummary2"
                    if (options.name == "CustomSummary2") {
                        // ...
                        // Same "if" statements here
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
                summaryType="custom"
                name="customSummary1">
            </dxi-total-item>
            <dxi-total-item
                summaryType="custom"
                name="customSummary2">
            </dxi-total-item>
        </dxo-summary>
    </dx-data-grid>

    <!--TypeScript-->
    import { DxDataGridModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        calculateSummary (options) {
            // Calculating "CustomSummary1"
            if (options.name == "CustomSummary1") {
                if (options.summaryProcess == "start") {
                    // Initializing "totalValue" here
                }
                if (options.summaryProcess == "calculate") {
                    // Modifying "totalValue" here
                }
                if (options.summaryProcess == "finalize") {
                    // Assigning the final value to "totalValue" here
                }
            }

            // Calculating "CustomSummary2"
            if (options.name == "CustomSummary2") {
                // ...
                // Same "if" statements here
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

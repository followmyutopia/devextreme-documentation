===========================================================================
<!--type-->function(options)<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies a custom aggregate function. Applies only if the [summaryType](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#summaryType) is *"custom"*. Cannot be used with an [XmlaStore](/Documentation/ApiReference/Data_Layer/XmlaStore/).
<!--/shortDescription-->

<!--fullDescription-->
A summary value calculation is conducted in three stages: *start*, in which the **totalValue** is initialized, *calculate*, in which it is modified, and *finalize*, in which the **totalValue** is adjusted. To identify the current stage, check the value of the **summaryProcess** field that belongs to the function's parameter.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        var pivotGridDataSource = new DevExpress.data.PivotGridDataSource({
            // ...
            fields: [{
                // ...
                summaryType: "custom",
                calculateCustomSummary: function (options) {
                    if (options.summaryProcess == "start") {
                        options.totalValue = 0;
                    }
                    if (options.summaryProcess == "calculate") {
                        options.totalValue += options.value;
                    }
                    if (options.summaryProcess == "finalize") {
                        options.totalValue = options.totalValue / 1000
                    }
                }
            }]
        });

        $("#pivotGridContainer").dxPivotGrid({
            dataSource: pivotGridDataSource
        });
    });
    

##### Angular

    <!--TypeScript-->
    import PivotGridDataSource from "devextreme/ui/pivot_grid/data_source";
    import { DxPivotGridModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        pivotGridDataSource: PivotGridDataSource;
        constructor() {
            this.pivotGridDataSource = new PivotGridDataSource({
                // ...
                fields: [{
                    // ...
                    summaryType: "custom",
                    calculateCustomSummary: function (options) {
                        if (options.summaryProcess == "start") {
                            options.totalValue = 0;
                        }
                        if (options.summaryProcess == "calculate") {
                            options.totalValue += options.value;
                        }
                        if (options.summaryProcess == "finalize") {
                            options.totalValue = options.totalValue / 1000
                        }
                    }
                }]
            });
        }
    }

    @NgModule({
        imports: [
            // ...
            DxPivotGridModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-pivot-grid
        [dataSource]="pivotGridDataSource">
    </dx-pivot-grid>

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().PivotGrid()
        .DataSource(ds => ds
            // ...
            .Fields(fields => {
                fields.Add()
                    // ...
                    .SummaryType(SummaryType.Custom)
                    .CalculateCustomSummary("calculateCustomSummary");
            })
        )
    )

    <script type="text/javascript">
        function calculateCustomSummary (options) {
            if (options.summaryProcess == "start") {
                options.totalValue = 0;
            }
            if (options.summaryProcess == "calculate") {
                options.totalValue += options.value;
            }
            if (options.summaryProcess == "finalize") {
                options.totalValue = options.totalValue / 1000
            }
        }
    </script>

---

#include uiwidgets-ref-functioncontext with { 
    value: "field's configuration"
}
<!--/fullDescription-->
<!--typeFunctionParamName1-->options<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->Object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Information on the summary.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->summaryProcess<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->String<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
The summary value calculation stage: *"start"*, *"calculate"*, or *"finalize"*.
<!--/typeFunctionParamDescription1_field1-->
<!--typeFunctionParamName1_field2-->value<!--/typeFunctionParamName1_field2-->
<!--typeFunctionParamType1_field2-->any<!--/typeFunctionParamType1_field2-->
<!--typeFunctionParamDescription1_field2-->
A value to be aggregated.
<!--/typeFunctionParamDescription1_field2-->
<!--typeFunctionParamName1_field3-->totalValue<!--/typeFunctionParamName1_field3-->
<!--typeFunctionParamType1_field3-->any<!--/typeFunctionParamType1_field3-->
<!--typeFunctionParamDescription1_field3-->
The total summary value.
<!--/typeFunctionParamDescription1_field3-->

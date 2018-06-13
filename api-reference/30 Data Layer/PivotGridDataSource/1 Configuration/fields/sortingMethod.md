===========================================================================
<!--default-->undefined<!--/default-->
<!--type-->function(a, b)<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies a custom comparison function that sorts the field's values in the [headers](/Documentation/Guide/Widgets/PivotGrid/Visual_Elements/#Headers).
<!--/shortDescription-->

<!--fullDescription-->
This function accepts two field values and should return a number indicating their sort order:

- *Less than zero*     
*a* goes before *b*.
- *Zero*   
*a* and *b* remain unchanged relative to each other.
- *Greater than zero*   
*a* goes after *b*.

Inside this function, you can access the [field's configuration](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/) using the **this** keyword:

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        var pivotGridDataSource = new DevExpress.data.PivotGridDataSource({
            // ...
            fields: [{
                // ...
                sortingMethod: function (a, b) {
                    var fieldSortOrder = this.sortOrder;
                    // ...
                }
            },
            // ...
            ]
        });
    });
    
##### Angular

    <!--TypeScript-->
    import PivotGridDataSource from "devextreme/ui/pivot_grid/data_source";
    // ...
    export class AppComponent {
        pivotGridDataSource: PivotGridDataSource;
        constructor() {
            this.pivotGridDataSource = new PivotGridDataSource({
                // ...
                fields: [{
                    // ...
                    sortingMethod: function (a, b) {
                        let fieldSortOrder = this.sortOrder;
                        // ...
                    }
                },
                // ...
                ]
            });
        }
    }

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().PivotGrid()
        .DataSource(ds => ds
            // ...
            .Fields(fields => {
                fields.Add()
                    // ...
                    .SortingMethod("sortingMethod");
            })
        )
    )

    <script type="text/javascript">
        function sortingMethod (a, b) {
            var fieldSortOrder = this.sortOrder;
            // ...
        }
    </script>

---

#include uiwidgets-ref-functioncontext with { 
    value: "field's configuration"
}

#####See Also#####
- **fields[]**.[sortOrder](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#sortOrder)
<!--/fullDescription-->
<!--typeFunctionParamName1-->a<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->Object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
A field value to be compared.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->value<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->String|Number<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
The field value.
<!--/typeFunctionParamDescription1_field1-->
<!--typeFunctionParamName1_field2-->children<!--/typeFunctionParamName1_field2-->
<!--typeFunctionParamType1_field2-->Array<any><!--/typeFunctionParamType1_field2-->
<!--typeFunctionParamDescription1_field2-->
The field value's children; available only when the corresponding header item is expanded.
<!--/typeFunctionParamDescription1_field2-->

<!--typeFunctionParamName2-->b<!--/typeFunctionParamName2-->
<!--typeFunctionParamType2-->Object<!--/typeFunctionParamType2-->
<!--typeFunctionParamDescription2-->
A field value to be compared.
<!--/typeFunctionParamDescription2-->
<!--typeFunctionParamName2_field1-->value<!--/typeFunctionParamName2_field1-->
<!--typeFunctionParamType2_field1-->String|Number<!--/typeFunctionParamType2_field1-->
<!--typeFunctionParamDescription2_field1-->
The field value.
<!--/typeFunctionParamDescription2_field1-->
<!--typeFunctionParamName2_field2-->children<!--/typeFunctionParamName2_field2-->
<!--typeFunctionParamType2_field2-->Array<any><!--/typeFunctionParamType2_field2-->
<!--typeFunctionParamDescription2_field2-->
The field value's children; available only when the corresponding header item is expanded.
<!--/typeFunctionParamDescription2_field2-->

<!--typeFunctionReturnType-->Number<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
Specifies whether *a* goes before *b*.
<!--/typeFunctionReturnDescription-->
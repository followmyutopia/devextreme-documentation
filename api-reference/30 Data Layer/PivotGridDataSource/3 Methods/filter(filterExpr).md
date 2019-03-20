===================================================================
===================================================================

<!--shortDescription-->
Sets the [filter](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/#filter) option's value. Does not affect an [XmlaStore](/Documentation/ApiReference/Data_Layer/XmlaStore/).
<!--/shortDescription-->

<!--paramName1-->filterExpr<!--/paramName1-->
<!--paramType1-->Object<!--/paramType1-->
<!--paramDescription1-->
A filter expression.
Pass **null** to clear filtering settings.
<!--/paramDescription1-->

<!--fullDescription-->
Call the [reload()](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Methods/#reload) method to update the **PivotGrid**:

---
##### jQuery

    <!--JavaScript-->
    var pivotGridDataSource = new DevExpress.data.PivotGridDataSource({
        // PivotGridDataSource is configured here
    });

    pivotGridDataSource.filter(["age", ">", 18]);
    // or
    // pivotGridDataSource.filter("age", ">", 18);

    pivotGridDataSource.reload();
    
##### Angular

    <!--TypeScript-->
    import PivotGridDataSource from "devextreme/ui/pivot_grid/data_source";
    // ...
    export class AppComponent {
        pivotGridDataSource: PivotGridDataSource;
        constructor() {
            this.pivotGridDataSource = new PivotGridDataSource({
                // PivotGridDataSource is configured here
            });

            this.pivotGridDataSource.filter(["age", ">", 18]);
            // or
            // this.pivotGridDataSource.filter("age", ">", 18);

            this.pivotGridDataSource.reload();
        }
    }

---

#####See Also#####
- [Filtering](/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Filtering)
<!--/fullDescription-->
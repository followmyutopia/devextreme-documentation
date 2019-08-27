---
id: PivotGridDataSource.filter()
---
---
##### shortDescription
Gets the [filter](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/#filter) option's value. Does not affect an [XmlaStore](/Documentation/ApiReference/Data_Layer/XmlaStore/).

##### return: Object
A filter expression.

---
---
##### jQuery

    <!--JavaScript-->
    var pivotGridDataSource = new DevExpress.data.PivotGridDataSource({
        // ...
        filter: ["age", ">", 18]
    });

    var filterExpr = pivotGridDataSource.filter(); // returns ["age", ">", 18]
    
##### Angular

    <!--TypeScript-->
    import PivotGridDataSource from "devextreme/ui/pivot_grid/data_source";
    // ...
    export class AppComponent {
        pivotGridDataSource: PivotGridDataSource;
        constructor() {
            this.pivotGridDataSource = new PivotGridDataSource({
                // ...
                filter: ["age", ">", 18]
            });

            let filterExpr = this.pivotGridDataSource.filter(); // returns ["age", ">", 18]
        }
    }

---

#####See Also#####
- [Filtering](/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Filtering)
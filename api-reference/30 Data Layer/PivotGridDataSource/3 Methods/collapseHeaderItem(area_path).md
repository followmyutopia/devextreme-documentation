===================================================================
===================================================================

<!--shortDescription-->
Collapses a specific header item.
<!--/shortDescription-->

<!--paramName1-->area<!--/paramName1-->
<!--paramType1-->String<!--/paramType1-->
<!--paramDescription1-->
The [area](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#area) that contains the header item to collapse.
<!--/paramDescription1-->

<!--paramName2-->path<!--/paramName2-->
<!--paramType2-->Array<String, Number, Date><!--/paramType2-->
<!--paramDescription2-->
A path to the header item.
<!--/paramDescription2-->

<!--fullDescription-->
---
##### jQuery

    <!--JavaScript-->
    var pivotGridDataSource = new DevExpress.data.PivotGridDataSource({
        // PivotGridDataSource is configured here
    });

    // Collapses the second quarter of 2015 in the column area
    pivotGridDataSource.collapseHeaderItem("column", [2015, 2]);
    
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

            // Collapses the second quarter of 2015 in the column area
            this.pivotGridDataSource.collapseHeaderItem("column", [2015, 2]);
        }
    }

---

#####See Also#####
- [expandHeaderItem(area, path)](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Methods/#expandHeaderItemarea_path)
- **fields[]**.[expanded](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#expanded)
<!--/fullDescription-->
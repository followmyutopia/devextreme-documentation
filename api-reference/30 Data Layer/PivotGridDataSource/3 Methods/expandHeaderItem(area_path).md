---
id: PivotGridDataSource.expandHeaderItem(area, path)
---
---
##### shortDescription
Expands a specific header item.

##### param(area): String
The [area](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#area) that contains the header item to expand.

##### param(path): Array<Object>
A path to the header item.

---
---
##### jQuery

    <!--JavaScript-->
    var pivotGridDataSource = new DevExpress.data.PivotGridDataSource({
        // PivotGridDataSource is configured here
    });

    // Expands the second quarter of 2015 in the column area
    pivotGridDataSource.expandHeaderItem("column", [2015, 2]);
    
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

            // Expands the second quarter of 2015 in the column area
            this.pivotGridDataSource.expandHeaderItem("column", [2015, 2]);
        }
    }

---

#####See Also#####
- [collapseHeaderItem(area, path)](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Methods/#collapseHeaderItemarea_path)
- **fields[]**.[expanded](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#expanded)
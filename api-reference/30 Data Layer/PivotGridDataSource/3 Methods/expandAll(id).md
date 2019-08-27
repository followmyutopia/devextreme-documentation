---
id: PivotGridDataSource.expandAll(id)
---
---
##### shortDescription
Expands all the header items of a field with the specified identifier.

##### param(id): Number | String
The field's [name](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#name), [caption](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#caption), [dataField](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#dataField), or index in the [fields](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/) array.

---
---
##### jQuery

    <!--JavaScript-->
    var pivotGridDataSource = new DevExpress.data.PivotGridDataSource({
        // PivotGridDataSource is configured here
    });

    pivotGridDataSource.expandAll("Region");
    
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

            this.pivotGridDataSource.expandAll("Region");
        }
    }

---

#####See Also#####
- [collapseAll(id)](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Methods/#collapseAllid)
- **fields[]**.[expanded](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#expanded)
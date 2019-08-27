---
id: PivotGridDataSource.field(id, options)
---
---
##### shortDescription
Updates field options' values.

##### param(id): Number | String
The field's [name](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#name), [caption](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#caption), [dataField](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#dataField), or index in the [fields](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/) array.

##### param(options): Object
The [options](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/) with their new values.

---
Call the [load()](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Methods/#load) method to update the **PivotGrid**:

---
##### jQuery

    <!--JavaScript-->
    var pivotGridDataSource = new DevExpress.data.PivotGridDataSource({
        // ...
        fields: [{
            caption: "Sales",
            dataField: "amount",
            summaryType: "sum",
            area: "data"
        }]
    });

    // Changes the "Sales" field's summaryType
    pivotGridDataSource.field("Sales", { summaryType: "avg" });
    pivotGridDataSource.load();
    
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
                    caption: "Sales",
                    dataField: "amount",
                    summaryType: "sum",
                    area: "data"
                }]
            });

            // Changes the "Sales" field's summaryType
            this.pivotGridDataSource.field("Sales", { summaryType: "avg" });
            this.pivotGridDataSource.load();
        }
    }

---
===================================================================
===================================================================

<!--shortDescription-->
Updates field options' values.
<!--/shortDescription-->

<!--paramName1-->id<!--/paramName1-->
<!--paramType1-->Number|String<!--/paramType1-->
<!--paramDescription1-->
The field's [dataField](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#dataField), [caption](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#caption), or index in the [fields](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/) array.
<!--/paramDescription1-->

<!--paramName2-->options<!--/paramName2-->
<!--paramType2-->Object<!--/paramType2-->
<!--paramDescription2-->
The [options](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/) with their new values.
<!--/paramDescription2-->

<!--fullDescription-->
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
<!--/fullDescription-->
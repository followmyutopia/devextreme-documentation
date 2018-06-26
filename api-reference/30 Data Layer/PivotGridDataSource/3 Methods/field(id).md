===================================================================
===================================================================

<!--shortDescription-->
Gets all the options of a field with the specified identifier.
<!--/shortDescription-->

<!--paramName1-->id<!--/paramName1-->
<!--paramType1-->Number|String<!--/paramType1-->
<!--paramDescription1-->
The field's [name](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#name), [caption](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#caption), [dataField](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#dataField), or index in the [fields](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/) array.
<!--/paramDescription1-->

<!--returnType-->Object<!--/returnType-->
<!--returnDescription-->
The field's [options](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/).
<!--/returnDescription-->

<!--fullDescription-->
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

    // The following commands return the same object
    pivotGridDataSource.field("Sales");
    pivotGridDataSource.field("amount");
    pivotGridDataSource.field(0);
    
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

            // The following commands return the same object
            this.pivotGridDataSource.field("Sales");
            this.pivotGridDataSource.field("amount");
            this.pivotGridDataSource.field(0);
        }
    }

---
#####See Also#####
- [getAreaFields(area, collectGroups)](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Methods/#getAreaFieldsarea_collectGroups)
- [fields()](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Methods/#fields)
<!--/fullDescription-->
===================================================================
===================================================================

<!--shortDescription-->
Gets all the fields including those [generated automatically](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/#retrieveFields).
<!--/shortDescription-->

<!--returnType-->Array<PivotGridDataSource_Options_fields><!--/returnType-->
<!--returnDescription-->
All [options](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/) of all the fields.
<!--/returnDescription-->

<!--fullDescription-->
---
##### jQuery

    <!--JavaScript-->
    var pivotGridDataSource = new DevExpress.data.PivotGridDataSource({
        // PivotGridDataSource is configured here
    });

    var pivotGridFields = pivotGridDataSource.fields();
    
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

            let pivotGridFields = this.pivotGridDataSource.fields();
        }
    }

---

#####See Also#####
- [getAreaFields(area, collectGroups)](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Methods/#getAreaFieldsarea_collectGroups)
- [field(id)](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Methods/#fieldid)
<!--/fullDescription-->
===================================================================
===================================================================

<!--shortDescription-->
Gets all the fields within an area.
<!--/shortDescription-->

<!--paramName1-->area<!--/paramName1-->
<!--paramType1-->String<!--/paramType1-->
<!--paramDescription1-->
The [area](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#area) that contains the fields to get.
<!--/paramDescription1-->

<!--paramName2-->collectGroups<!--/paramName2-->
<!--paramType2-->Boolean<!--/paramType2-->
<!--paramDescription2-->
Pass **true** to return [grouped fields](/Documentation/Guide/Widgets/PivotGrid/Grouping/#Fields_Grouping) in a single array entry or **false** to return them as separate entries.     
The default value is **false**.
<!--/paramDescription2-->

<!--returnType-->Array<PivotGridDataSource_Options_fields><!--/returnType-->
<!--returnDescription-->
All the [options](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/) of all the fields within the area.
<!--/returnDescription-->

<!--fullDescription-->
---
##### jQuery

    <!--JavaScript-->
    var pivotGridDataSource = new DevExpress.data.PivotGridDataSource({
        // PivotGridDataSource is configured here
    });

    var columnAreaFields = pivotGridDataSource.getAreaFields("column", true);
    
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

            let columnAreaFields = this.pivotGridDataSource.getAreaFields("column", true);
        }
    }

---

#####See Also#####
- [fields()](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Methods/#fields)
- [field(id)](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Methods/#fieldid)
<!--/fullDescription-->
---
id: PivotGridDataSource.getAreaFields(area, collectGroups)
---
---
##### shortDescription
Gets all the fields within an area.

##### return: Array<PivotGridDataSource_Options_fields>
All the [options](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/) of all the fields within the area.

##### param(area): String
The [area](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#area) that contains the fields to get.

##### param(collectGroups): Boolean
Pass **true** to return [grouped fields](/Documentation/Guide/Widgets/PivotGrid/Grouping/#Fields_Grouping) in a single array entry or **false** to return them as separate entries.     
The default value is **false**.

---
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
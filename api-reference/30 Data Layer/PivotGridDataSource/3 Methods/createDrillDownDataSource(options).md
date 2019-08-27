---
id: PivotGridDataSource.createDrillDownDataSource(options)
---
---
##### shortDescription
Provides access to the [facts](/Documentation/Guide/Widgets/PivotGrid/Visual_Elements/#Summary_Values) that were used to calculate a specific summary value.

##### return: DataSource
A drill-down data source.

##### param(options): Object
Configuration object.

##### field(options.columnPath): Array<String, Number, Date>
A path to the cell with the summary value by columns.

##### field(options.customColumns): Array<String>
The field names to be included for each fact.

##### field(options.dataIndex): Number
The index of the [measure](/Documentation/Guide/Widgets/PivotGrid/Visual_Elements/#Summary_Values) for which the summary value is calculated.

##### field(options.maxRowCount): Number
Maximum number of facts to get.

##### field(options.rowPath): Array<String, Number, Date>
A path to the cell with the summary value by rows.

---
[note]

Data in the drill-down data source is paginated by default. Only the items on the first page are loaded when you call the [load()](/Documentation/ApiReference/Data_Layer/DataSource/Methods/#load) method. To get all the items, turn the pagination off:

---
##### jQuery

    <!--JavaScript-->
    var pivotGridDataSource = new DevExpress.data.PivotGridDataSource({
        // PivotGridDataSource is configured here
    });

    var drillDownDataSource = pivotGridDataSource.createDrillDownDataSource({
        // Options are passed here
    });

    drillDownDataSource.paginate(false);

    drillDownDataSource.load()
        .done(function (data) {
            // Process "data" here
        })
        .fail(function (error) {
            // Handle the "error" here
        });

##### Angular

    <!--TypeScript-->
    import PivotGridDataSource from "devextreme/ui/pivot_grid/data_source";
    import DataSource from "devextreme/data/data_source";
    // ...
    export class AppComponent {
        pivotGridDataSource: PivotGridDataSource;
        drillDownDataSource: DataSource;
        constructor() {
            this.pivotGridDataSource = new PivotGridDataSource({
                // PivotGridDataSource is configured here
            });

            this.drillDownDataSource = this.pivotGridDataSource.createDrillDownDataSource({
                // Options are passed here
            });

            this.drillDownDataSource.paginate(false);

            this.drillDownDataSource.load()
                .then(
                    (data) => { /* Process "data" here */ },
                    (error) => { /* Handle the "error" here */ }
                )
        }
    }

---

[/note]

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/Pivot_Grid/DrillDown/jQuery/Light/"
}

#####See Also#####
- [getData()](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Methods/#getData)
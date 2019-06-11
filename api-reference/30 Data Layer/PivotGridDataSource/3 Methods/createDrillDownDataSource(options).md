<!--id-->PivotGridDataSource.createDrillDownDataSource(options)<!--/id-->
===================================================================
===================================================================

<!--shortDescription-->
Provides access to the [facts](/Documentation/Guide/Widgets/PivotGrid/Visual_Elements/#Summary_Values) that were used to calculate a specific summary value.
<!--/shortDescription-->

<!--paramName1-->options<!--/paramName1-->
<!--paramType1-->Object<!--/paramType1-->
<!--paramDescription1-->
Configuration object.
<!--/paramDescription1-->
<!--paramName1_field1-->columnPath<!--/paramName1_field1-->
<!--paramType1_field1-->Array<String, Number, Date><!--/paramType1_field1-->
<!--paramDescription1_field1-->
A path to the cell with the summary value by columns.
<!--/paramDescription1_field1-->
<!--paramName1_field2-->rowPath<!--/paramName1_field2-->
<!--paramType1_field2-->Array<String, Number, Date><!--/paramType1_field2-->
<!--paramDescription1_field2-->
A path to the cell with the summary value by rows.
<!--/paramDescription1_field2-->
<!--paramName1_field3-->dataIndex<!--/paramName1_field3-->
<!--paramType1_field3-->Number<!--/paramType1_field3-->
<!--paramDescription1_field3-->
The index of the [measure](/Documentation/Guide/Widgets/PivotGrid/Visual_Elements/#Summary_Values) for which the summary value is calculated.
<!--/paramDescription1_field3-->
<!--paramName1_field4-->maxRowCount<!--/paramName1_field4-->
<!--paramType1_field4-->Number<!--/paramType1_field4-->
<!--paramDescription1_field4-->
Maximum number of facts to get.
<!--/paramDescription1_field4-->
<!--paramName1_field5-->customColumns<!--/paramName1_field5-->
<!--paramType1_field5-->Array<String><!--/paramType1_field5-->
<!--paramDescription1_field5-->
The field names to be included for each fact.
<!--/paramDescription1_field5-->

<!--returnType-->DataSource<!--/returnType-->
<!--returnDescription-->
A drill-down data source.
<!--/returnDescription-->

<!--fullDescription-->
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
<!--/fullDescription-->
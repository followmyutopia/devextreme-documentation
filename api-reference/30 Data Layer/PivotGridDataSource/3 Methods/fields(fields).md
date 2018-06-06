===================================================================
===================================================================

<!--shortDescription-->
Specifies a new [fields](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/) collection.
<!--/shortDescription-->

<!--paramName1-->fields<!--/paramName1-->
<!--paramType1-->Array<PivotGridDataSource_Options_fields><!--/paramType1-->
<!--paramDescription1-->
New fields.
<!--/paramDescription1-->

<!--fullDescription-->
Call the [load()](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Methods/#load) method to update the **PivotGrid**:

---
##### jQuery

    <!--JavaScript-->
    var pivotGridDataSource = new DevExpress.data.PivotGridDataSource({
        // PivotGridDataSource is configured here
    });

    pivotGridDataSource.fields([{
        dataField: "region",
        area: "row"
    }, {
        dataField: "date",
        dataType: "date",
        area: "column"
    },  {
        dataField: "sales",
        summaryType: "sum",
        area: "data"
    }]);

    pivotGridDataSource.load();
    
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

            this.pivotGridDataSource.fields([{
                dataField: "region",
                area: "row"
            }, {
                dataField: "date",
                dataType: "date",
                area: "column"
            },  {
                dataField: "sales",
                summaryType: "sum",
                area: "data"
            }]);
            
            this.pivotGridDataSource.load();
        }
    }

---
<!--/fullDescription-->

<!--id-->DataSource.filter(filterExpr)<!--/id-->
===================================================================
===================================================================

<!--shortDescription-->
Sets the [filter](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#filter) option's value.
<!--/shortDescription-->

<!--paramName1-->filterExpr<!--/paramName1-->
<!--paramType1-->Object<!--/paramType1-->
<!--paramDescription1-->
A filter expression.      
Pass **null** to clear filtering settings.
<!--/paramDescription1-->

<!--fullDescription-->
Call the [load()](/Documentation/ApiReference/Data_Layer/DataSource/Methods/#load) method to update the widget bound to the **DataSource**:

---
##### jQuery

    <!--JavaScript-->
    var ds = new DevExpress.data.DataSource({
        // DataSource is configured here
    });

    ds.filter(["age", ">", 18]);
    // or
    // ds.filter("age", ">", 18);

    ds.load();

##### Angular

    <!--TypeScript-->
    import DataSource from "devextreme/data/data_source";
    // ...
    export class AppComponent {
        ds: DataSource;
        constructor() {
            this.ds = new DataSource({
                // DataSource is configured here
            });
            this.ds.filter(["age", ">", 18]);
            // or
            // this.ds.filter("age", ">", 18);

            this.ds.load();
        }
    }

---

#####See Also#####
- [Filtering](/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Filtering)
<!--/fullDescription-->
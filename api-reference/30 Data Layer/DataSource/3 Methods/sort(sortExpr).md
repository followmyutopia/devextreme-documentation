<!--id-->DataSource.sort(sortExpr)<!--/id-->
===================================================================
===================================================================

<!--shortDescription-->
Sets the [sort](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#sort) option's value.
<!--/shortDescription-->

<!--paramName1-->sortExpr<!--/paramName1-->
<!--paramType1-->any<!--/paramType1-->
<!--paramDescription1-->
A sort expression.
<!--/paramDescription1-->

<!--fullDescription-->
Call the [load()](/Documentation/ApiReference/Data_Layer/DataSource/Methods/#load) method to update the widget bound to the **DataSource**:

---
##### jQuery

    <!--JavaScript-->
    var ds = new DevExpress.data.DataSource({
        // DataSource is configured here
    });

    ds.sort({ selector: "Discount", desc: true });
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
            this.ds.sort({ selector: "Discount", desc: true });
            this.ds.load();
        }
    }

---

#####See Also#####
- [Sorting](/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Sorting)
<!--/fullDescription-->
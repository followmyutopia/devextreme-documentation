<!--id-->DataSource.group(groupExpr)<!--/id-->
===================================================================
===================================================================

<!--shortDescription-->
Sets the [group](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#group) option's value.
<!--/shortDescription-->

<!--paramName1-->groupExpr<!--/paramName1-->
<!--paramType1-->Object<!--/paramType1-->
<!--paramDescription1-->
A group expression.
<!--/paramDescription1-->

<!--fullDescription-->
Call the [load()](/Documentation/ApiReference/Data_Layer/DataSource/Methods/#load) method to update the widget bound to the **DataSource**:

---
##### jQuery

    <!--JavaScript-->
    var ds = new DevExpress.data.DataSource({
        // DataSource is configured here
    });

    ds.group({ selector: "employeeID", desc: true });
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
            this.ds.group({ selector: "employeeID", desc: true });
            this.ds.load();
        }
    }

---

#####See Also#####
- [Grouping](/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Grouping)
<!--/fullDescription-->
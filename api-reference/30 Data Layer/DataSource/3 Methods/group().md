<!--id-->DataSource.group()<!--/id-->
===================================================================
===================================================================

<!--shortDescription-->
Gets the [group](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#group) option's value.
<!--/shortDescription-->

<!--returnType-->Object<!--/returnType-->
<!--returnDescription-->
A group expression.
<!--/returnDescription-->

<!--fullDescription-->
---
##### jQuery

    <!--JavaScript-->
    var ds = new DevExpress.data.DataSource({
        // ...
        group: { selector: "employeeID", desc: true }
    });

    var groupExpr = ds.group(); // returns { selector: "employeeID", desc: true }

##### Angular

    <!--TypeScript-->
    import DataSource from "devextreme/data/data_source";
    // ...
    export class AppComponent {
        ds: DataSource;
        constructor() {
            this.ds = new DataSource({
                // ...
                group: { selector: "employeeID", desc: true }
            });
            let groupExpr = this.ds.group(); // returns { selector: "employeeID", desc: true }
        }
    }

---

#####See Also#####
- [Grouping](/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Grouping)
<!--/fullDescription-->
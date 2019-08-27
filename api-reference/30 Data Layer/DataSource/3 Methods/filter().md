---
id: DataSource.filter()
---
---
##### shortDescription
Gets the [filter](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#filter) option's value.

##### return: Object
A filter expression.

---
---
##### jQuery

    <!--JavaScript-->
    var ds = new DevExpress.data.DataSource({
        // ...
        filter: ["age", ">", 18]
    });

    var filterExpr = ds.filter(); // returns ["age", ">", 18]

##### Angular

    <!--TypeScript-->
    import DataSource from "devextreme/data/data_source";
    // ...
    export class AppComponent {
        ds: DataSource;
        constructor() {
            this.ds = new DataSource({
                // ...
                filter: ["age", ">", 18]
            });
            let filterExpr = this.ds.filter(); // returns ["age", ">", 18]
        }
    }

---

#####See Also#####
- [Filtering](/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Filtering)
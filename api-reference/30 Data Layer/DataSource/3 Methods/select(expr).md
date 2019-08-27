---
id: DataSource.select(expr)
---
---
##### shortDescription
Sets the [select](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#select) option's value.

##### param(expr): any
A select expression.

---
---
##### jQuery

    <!--JavaScript-->
    var ds = new DevExpress.data.DataSource({
        // DataSource is configured here
    });

    ds.select(["firstName", "lastName", "birthDate"]);
    // or
    // ds.select("firstName", "lastName", "birthDate");

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
            this.ds.select(["firstName", "lastName", "birthDate"]);
            // or
            // this.ds.select("firstName", "lastName", "birthDate");
        }
    }

---

#####See Also#####
- [Select Expressions](/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Data_Transformation/Select_Expressions)
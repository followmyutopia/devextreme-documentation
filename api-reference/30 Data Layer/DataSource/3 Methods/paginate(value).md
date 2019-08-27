---
id: DataSource.paginate(value)
---
---
##### shortDescription
Sets the [paginate](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#paginate) option's value.

##### param(value): Boolean
A new value.

---
Call the [load()](/Documentation/ApiReference/Data_Layer/DataSource/Methods/#load) method to update the widget bound to the **DataSource**:

---
##### jQuery

    <!--JavaScript-->
    var ds = new DevExpress.data.DataSource({
        // ...
        paginate: true,
        pageSize: 10
    });

    ds.paginate(false);
    ds.load();

##### Angular

    <!--TypeScript-->
    import DataSource from "devextreme/data/data_source";
    // ...
    export class AppComponent {
        ds: DataSource;
        constructor() {
            this.ds = new DataSource({
                // ...
                paginate: true,
                pageSize: 10
            });
            this.ds.paginate(false);
            this.ds.load();
        }
    }

---
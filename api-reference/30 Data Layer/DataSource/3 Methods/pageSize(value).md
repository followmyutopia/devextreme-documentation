---
id: DataSource.pageSize(value)
---
---
##### shortDescription
Sets the [page size](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#pageSize).

##### param(value): Number
A new page size value.

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

    ds.pageSize(15);
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
            this.ds.pageSize(15);
            this.ds.load();
        }
    }

---
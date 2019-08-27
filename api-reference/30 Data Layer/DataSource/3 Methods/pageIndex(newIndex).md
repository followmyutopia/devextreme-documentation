---
id: DataSource.pageIndex(newIndex)
---
---
##### shortDescription
Sets the index of the page that should be loaded on the next [load()](/Documentation/ApiReference/Data_Layer/DataSource/Methods/#load) method call.

##### param(newIndex): Number
A zero-based page index.

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

    ds.pageIndex(2);
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
            this.ds.pageIndex(2);
            this.ds.load();
        }
    }

---
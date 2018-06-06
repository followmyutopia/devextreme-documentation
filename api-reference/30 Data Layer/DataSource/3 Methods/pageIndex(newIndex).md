===================================================================
===================================================================

<!--shortDescription-->
Sets the index of the page that should be loaded on the next [load()](/Documentation/ApiReference/Data_Layer/DataSource/Methods/#load) method call.
<!--/shortDescription-->

<!--paramName1-->newIndex<!--/paramName1-->
<!--paramType1-->Number<!--/paramType1-->
<!--paramDescription1-->
A zero-based page index.
<!--/paramDescription1-->

<!--fullDescription-->
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
<!--/fullDescription-->
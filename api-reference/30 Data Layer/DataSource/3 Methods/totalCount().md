<!--id-->DataSource.totalCount()<!--/id-->
===================================================================
===================================================================

<!--shortDescription-->
Gets the number of data items in the store after the last [load()](/Documentation/ApiReference/Data_Layer/DataSource/Methods/#load) operation without paging. Takes effect only if [requireTotalCount](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#requireTotalCount) is **true**
<!--/shortDescription-->

<!--returnType-->Number<!--/returnType-->
<!--returnDescription-->
The number of data items.
<!--/returnDescription-->

<!--fullDescription-->
---
##### jQuery

    <!--JavaScript-->
    var ds = new DevExpress.data.DataSource({
        // ...
        requireTotalCount: true
    });

    var itemCount = ds.totalCount();

##### Angular

    <!--TypeScript-->
    import DataSource from "devextreme/data/data_source";
    // ...
    export class AppComponent {
        ds: DataSource;
        constructor() {
            this.ds = new DataSource({
                // ...
                requireTotalCount: true
            });
            let itemCount = this.ds.totalCount();
        }
    }

---
<!--/fullDescription-->
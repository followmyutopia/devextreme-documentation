<!--id-->DataSource.paginate(value)<!--/id-->
===================================================================
===================================================================

<!--shortDescription-->
Sets the [paginate](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#paginate) option's value.
<!--/shortDescription-->

<!--paramName1-->value<!--/paramName1-->
<!--paramType1-->Boolean<!--/paramType1-->
<!--paramDescription1-->
A new value.
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
<!--/fullDescription-->
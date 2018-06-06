===================================================================
===================================================================

<!--shortDescription-->
Sets the [requireTotalCount](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#requireTotalCount) option's value.
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
        requireTotalCount: true
    });

    ds.requireTotalCount(false);
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
                requireTotalCount: true
            });
            this.ds.requireTotalCount(false);
            this.ds.load();
        }
    }

---
<!--/fullDescription-->

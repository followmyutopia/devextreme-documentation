===========================================================================
<!--type-->Object<!--/type-->
===========================================================================

<!--shortDescription-->
Custom parameters that should be passed to an OData service with the load query. Available only for the [ODataStore](/Documentation/ApiReference/Data_Layer/ODataStore/).
<!--/shortDescription-->

<!--fullDescription-->
---
##### jQuery

    <!--JavaScript-->
    var ds = new DevExpress.data.DataSource({
        store: {
            type: "odata",
            // ODataStore is configured here
        },
        customQueryParams: {
            param: "value"
        }
    });

##### Angular

    <!--TypeScript-->
    import DataSource from "devextreme/data/data_source";
    import ODataStore from "devextreme/data/odata/store";
    // ...
    export class AppComponent {
        ds: DataSource;
        constructor() {
            this.ds = new DataSource({
                store: new ODataStore({
                    // ODataStore is configured here
                }),
                customQueryParams: {
                    param: "value"
                }
            });
        }
    }

---

#####See Also#####
- [OData - Invoking Service Operations](/Documentation/Guide/Data_Layer/Data_Source_Examples/#OData/Invoking_Service_Operations)
<!--/fullDescription-->
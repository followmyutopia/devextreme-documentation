---
id: DataSource.Options.customQueryParams
type: Object
---
---
##### shortDescription
Custom parameters that should be passed to an OData service with the load query. Available only for the [ODataStore](/Documentation/ApiReference/Data_Layer/ODataStore/).

---
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

##### Vue

    <!-- tab: App.vue -->
    <script>
    import DataSource from 'devextreme/data/data_source';
    import ODataStore from 'devextreme/data/odata/store';

    const ds = new DataSource({
        store: new ODataStore({
            // ODataStore is configured here
        }),
        customQueryParams: {
            param: 'value'
        }
    });

    export default {
        // ...
    }
    </script>

##### React

    <!-- tab: App.js -->
    // ...
    import DataSource from 'devextreme/data/data_source';
    import ODataStore from 'devextreme/data/odata/store';

    const ds = new DataSource({
        store: new ODataStore({
            // ODataStore is configured here
        }),
        customQueryParams: {
            param: 'value'
        }
    });

    class App extends React.Component {
        // ...
    }
    export default App;

---

#####See Also#####
- [OData - Invoking Service Operations](/Documentation/Guide/Data_Layer/Data_Source_Examples/#OData/Invoking_Service_Operations)
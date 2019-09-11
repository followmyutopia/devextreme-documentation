---
id: ODataStore.createQuery(loadOptions)
---
---
##### shortDescription
Creates a **Query** for the OData endpoint.

##### return: Object
The [Query](/Documentation/ApiReference/Data_Layer/Query/) object.

##### param(loadOptions): Object
An object containing the [expand](/Documentation/ApiReference/Data_Layer/CustomStore/LoadOptions/#expand), [requireTotalCount](/Documentation/ApiReference/Data_Layer/CustomStore/LoadOptions/#requireTotalCount), and [customQueryParams](/Documentation/ApiReference/Data_Layer/CustomStore/LoadOptions/#customQueryParams) properties.

---
---
#####jQuery

    <!--JavaScript-->
    var store = new DevExpress.data.ODataStore({
        // ODataStore is configured here
    });
    var query = store.createQuery({ expand: "propertyName" });

#####Angular

    <!--TypeScript-->
    import ODataStore from "devextreme/data/odata/store";
    // ...
    export class AppComponent {
        store: ODataStore;
        constructor() {
            this.store = new ODataStore({
                // ODataStore is configured here
            });
            this.query = this.store.createQuery({ expand: "propertyName" });
        };
    }

##### Vue

    <!-- tab: App.vue -->
    <script>
    import ODataStore from 'devextreme/data/odata/store';

    const store = new ODataStore({
        // ODataStore is configured here
    });

    export default {
        mounted() {
            this.query = store.createQuery({ expand: 'propertyName' });
        },
        // ...
    }
    </script>

##### React

    <!-- tab: App.js -->
    // ...
    import ODataStore from 'devextreme/data/odata/store';

    const store = new ODataStore({
        // ODataStore is configured here
    });

    class App extends React.Component {
        constructor(props) {
            super(props);
            this.query = store.createQuery({ expand: 'propertyName' });
        }
    }
    export default App;

---

#####See Also#####
- [Query Concept](/Documentation/Guide/Data_Layer/Data_Layer/#Query_Concept)
---
id: LocalStore.clear()
---
---
##### shortDescription
Removes data from the local storage.

---
Depending on the [immediate](/Documentation/ApiReference/Data_Layer/LocalStore/Configuration/#immediate) option's value, this method removes data immediately or after a specified [delay](/Documentation/ApiReference/Data_Layer/LocalStore/Configuration/#flushInterval).

---
#####jQuery

    <!--JavaScript-->
    var store = new DevExpress.data.LocalStore({
        // LocalStore is configured here
    });
    store.clear();

##### Angular

    <!--TypeScript-->
    import LocalStore from "devextreme/data/local_store";
    // ...
    export class AppComponent {
        store: LocalStore;
        constructor() {
            this.store = new LocalStore({
                // LocalStore is configured here
            });
            this.store.clear();
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <script>
    import LocalStore from 'devextreme/data/local_store';

    const store = new LocalStore({
        // LocalStore is configured here
    });

    export default {
        mounted() {
            store.clear();
        },
        // ...
    }
    </script>

##### React

    <!-- tab: App.js -->
    // ...
    import LocalStore from 'devextreme/data/local_store';

    const store = new LocalStore({
        // LocalStore is configured here
    });

    class App extends React.Component {
        constructor(props) {
            super(props);
            store.clear();
        }
        // ...
    }
    export default App;

---
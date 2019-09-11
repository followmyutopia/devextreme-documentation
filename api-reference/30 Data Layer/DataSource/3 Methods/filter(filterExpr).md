---
id: DataSource.filter(filterExpr)
---
---
##### shortDescription
Sets the [filter](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#filter) option's value.

##### param(filterExpr): Object
A filter expression.      
Pass **null** to clear filtering settings.

---
Call the [load()](/Documentation/ApiReference/Data_Layer/DataSource/Methods/#load) method to update the widget bound to the **DataSource**:

---
##### jQuery

    <!--JavaScript-->
    var ds = new DevExpress.data.DataSource({
        // DataSource is configured here
    });

    ds.filter(["age", ">", 18]);
    // or
    // ds.filter("age", ">", 18);

    ds.load();

##### Angular

    <!--TypeScript-->
    import DataSource from "devextreme/data/data_source";
    // ...
    export class AppComponent {
        ds: DataSource;
        constructor() {
            this.ds = new DataSource({
                // DataSource is configured here
            });
            this.ds.filter(["age", ">", 18]);
            // or
            // this.ds.filter("age", ">", 18);

            this.ds.load();
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <script>
    import DataSource from 'devextreme/data/data_source';

    const ds = new DataSource({
        // DataSource is configured here
    });

    export default {
        mounted() {
            ds.filter(['age', '>', 18]);
            // or
            // ds.filter('age', '>', 18);

            ds.load();
        },
        // ...
    }
    </script>

##### React

    <!-- tab: App.js -->
    // ...
    import DataSource from 'devextreme/data/data_source';

    const ds = new DataSource({
        // DataSource is configured here
    });

    class App extends React.Component {
        constructor(props) {
            super(props);
            
            ds.filter(['age', '>', 18]);
            // or
            // ds.filter('age', '>', 18);

            ds.load();
        }
    }
    export default App;

---

#####See Also#####
- [Filtering](/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Filtering)
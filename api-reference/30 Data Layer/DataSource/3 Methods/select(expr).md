---
id: DataSource.select(expr)
---
---
##### shortDescription
Sets the [select](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#select) option's value.

##### param(expr): any
A select expression.

---
---
##### jQuery

    <!--JavaScript-->
    var ds = new DevExpress.data.DataSource({
        // DataSource is configured here
    });

    ds.select(["firstName", "lastName", "birthDate"]);
    // or
    // ds.select("firstName", "lastName", "birthDate");

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
            this.ds.select(["firstName", "lastName", "birthDate"]);
            // or
            // this.ds.select("firstName", "lastName", "birthDate");
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
            ds.select(['firstName', 'lastName', 'birthDate']);
            // or
            // ds.select('firstName', 'lastName', 'birthDate');
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
            
            ds.select(['firstName', 'lastName', 'birthDate']);
            // or
            // ds.select('firstName', 'lastName', 'birthDate');
        }
    }
    export default App;

---

#####See Also#####
- [Select Expressions](/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Data_Transformation/Select_Expressions)
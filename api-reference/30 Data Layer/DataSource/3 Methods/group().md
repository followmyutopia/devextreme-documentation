---
id: DataSource.group()
---
---
##### shortDescription
Gets the [group](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#group) option's value.

##### return: Object
A group expression.

---
---
##### jQuery

    <!--JavaScript-->
    var ds = new DevExpress.data.DataSource({
        // ...
        group: { selector: "employeeID", desc: true }
    });

    var groupExpr = ds.group(); // returns { selector: "employeeID", desc: true }

##### Angular

    <!--TypeScript-->
    import DataSource from "devextreme/data/data_source";
    // ...
    export class AppComponent {
        ds: DataSource;
        constructor() {
            this.ds = new DataSource({
                // ...
                group: { selector: "employeeID", desc: true }
            });
            let groupExpr = this.ds.group(); // returns { selector: "employeeID", desc: true }
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <script>
    import DataSource from 'devextreme/data/data_source';

    const ds = new DataSource({
        // ...
        group: { selector: 'employeeID', desc: true }
    });

    export default {
        mounted() {
            this.groupExpr = ds.group(); // returns { selector: "employeeID", desc: true }
        },
        // ...
    }
    </script>

##### React

    <!-- tab: App.js -->
    // ...
    import DataSource from 'devextreme/data/data_source';

    const ds = new DataSource({
        // ...
        group: { selector: 'employeeID', desc: true }
    });

    class App extends React.Component {
        constructor(props) {
            super(props);
            
            this.groupExpr = ds.group(); // returns { selector: "employeeID", desc: true }
        }
    }
    export default App;

---

#####See Also#####
- [Grouping](/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Grouping)
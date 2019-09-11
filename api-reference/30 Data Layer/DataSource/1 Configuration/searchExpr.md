---
id: DataSource.Options.searchExpr
type: getter | Array<getter>
---
---
##### shortDescription
Specifies the fields to search.

---
In most cases, you should pass the name of a field by whose value data items are searched. Assign an array of field names to this option if you need to search elements by several field values.

---
##### jQuery

    <!--JavaScript-->
    var ds = new DevExpress.data.DataSource({
        // ...
        searchExpr: ["firstName", "lastName"]
    });

##### Angular

    <!--TypeScript-->
    import DataSource from "devextreme/data/data_source";
    // ...
    export class AppComponent {
        ds: DataSource;
        constructor() {
            this.ds = new DataSource({
                // ...
                searchExpr: ["firstName", "lastName"]
            });
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <script>
    import DataSource from 'devextreme/data/data_source';

    const ds = new DataSource({
        // ...
        searchExpr: ['firstName', 'lastName']
    });

    export default {
        // ...
    }
    </script>

##### React

    <!-- tab: App.js -->
    // ...
    import DataSource from 'devextreme/data/data_source';

    const ds = new DataSource({
        // ...
        searchExpr: ['firstName', 'lastName']
    });

    class App extends React.Component {
        // ...
    }
    export default App;

---

You can use this option along with [searchOperation](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#searchOperation) and [searchValue](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#searchValue) to specify a simple filter. Use the [filter](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#filter) option for more complex filtering conditions. Filters are combined if you specify them in both ways.

[note] Searching works when inputting a plain data structure only. However, if you need the searching capability and hierarchical data, transform the plain data using the **DataSource**'s [group](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#group) option.

#####See Also#####
- [Data Layer - Search Api](/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Search_Api)
- [Data Layer - Getters and Setters](/Documentation/Guide/Data_Layer/Data_Layer/#Getters_And_Setters)
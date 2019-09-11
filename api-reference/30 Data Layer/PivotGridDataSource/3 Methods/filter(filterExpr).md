---
id: PivotGridDataSource.filter(filterExpr)
---
---
##### shortDescription
Sets the [filter](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/#filter) option's value. Does not affect an [XmlaStore](/Documentation/ApiReference/Data_Layer/XmlaStore/).

##### param(filterExpr): Object
A filter expression.
Pass **null** to clear filtering settings.

---
Call the [reload()](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Methods/#reload) method to update the **PivotGrid**:

---
##### jQuery

    <!--JavaScript-->
    var pivotGridDataSource = new DevExpress.data.PivotGridDataSource({
        // PivotGridDataSource is configured here
    });

    pivotGridDataSource.filter(["age", ">", 18]);
    // or
    // pivotGridDataSource.filter("age", ">", 18);

    pivotGridDataSource.reload();
    
##### Angular

    <!--TypeScript-->
    import PivotGridDataSource from "devextreme/ui/pivot_grid/data_source";
    // ...
    export class AppComponent {
        pivotGridDataSource: PivotGridDataSource;
        constructor() {
            this.pivotGridDataSource = new PivotGridDataSource({
                // PivotGridDataSource is configured here
            });

            this.pivotGridDataSource.filter(["age", ">", 18]);
            // or
            // this.pivotGridDataSource.filter("age", ">", 18);

            this.pivotGridDataSource.reload();
        }
    }

##### Vue

    <!-- tab: App.vue -->  
    <script>
    import PivotGridDataSource from 'devextreme/ui/pivot_grid/data_source';

    const pivotGridDataSource = new PivotGridDataSource({
        // PivotGridDataSource is configured here
    });

    export default {
        mounted() {
            pivotGridDataSource.filter(['age', '>', 18]);
            // or
            // pivotGridDataSource.filter('age', '>', 18);

            pivotGridDataSource.reload();
        },
        // ...
    }
    </script>

##### React

    <!-- tab: App.js -->
    // ...
    import PivotGridDataSource from 'devextreme/ui/pivot_grid/data_source';

    const pivotGridDataSource = new PivotGridDataSource({
        // PivotGridDataSource is configured here
    });

    class App extends React.Component {
        constructor(props) {
            super(props);
            
            pivotGridDataSource.filter(['age', '>', 18]);
            // or
            // pivotGridDataSource.filter('age', '>', 18);

            pivotGridDataSource.reload();
        }
        // ...
    }
    export default App;

---

#####See Also#####
- [Filtering](/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Filtering)
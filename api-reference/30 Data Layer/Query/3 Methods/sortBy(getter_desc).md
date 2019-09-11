---
id: Query.sortBy(getter, desc)
---
---
##### shortDescription
Sorts data items by the specified [getter](/Documentation/Guide/Data_Layer/Data_Layer/#Getters_And_Setters) in the specified sorting order.

##### return: Query
The **Query** with transformed data.

##### param(getter): Object
A getter; in most cases, the name of the data field to sort by.

##### param(desc): Boolean
Pass **true** to sort in descending order, **false** or nothing to sort in ascending order.

---
---
##### jQuery

    <!--JavaScript-->
    var dataObjects = [
        { name: "Amelia", birthYear: 1991, gender: "female" },
        { name: "Benjamin", birthYear: 1983, gender: "male" },
        { name: "Daniela", birthYear: 1987, gender: "female" },
        { name: "Lee", birthYear: 1981, gender: "male" }
    ];

    var sortedData = DevExpress.data.query(dataObjects)
        .sortBy("birthYear", true)
        .toArray();

    console.log(sortedData);
    /* outputs
    [
        { name: "Amelia", birthYear: 1991, gender: "female" },
        { name: "Daniela", birthYear: 1987, gender: "female" },
        { name: "Benjamin", birthYear: 1983, gender: "male" },
        { name: "Lee", birthYear: 1981, gender: "male" }
    ] */

##### Angular

    <!--TypeScript-->
    import Query from "devextreme/data/query";
    // ...
    export class AppComponent {
        constructor () {
            let dataObjects = [
                { name: "Amelia", birthYear: 1991, gender: "female" },
                { name: "Benjamin", birthYear: 1983, gender: "male" },
                { name: "Daniela", birthYear: 1987, gender: "female" },
                { name: "Lee", birthYear: 1981, gender: "male" }
            ];

            let sortedData = Query(dataObjects)
                .sortBy("birthYear", true)
                .toArray();

            console.log(sortedData);
            /* outputs
            [
                { name: "Amelia", birthYear: 1991, gender: "female" },
                { name: "Daniela", birthYear: 1987, gender: "female" },
                { name: "Benjamin", birthYear: 1983, gender: "male" },
                { name: "Lee", birthYear: 1981, gender: "male" }
            ] */
        };
    }

##### Vue

    <!-- tab: App.vue -->
    <script>
    import Query from 'devextreme/data/query';

    const dataObjects = [
        { name: 'Amelia', birthYear: 1991, gender: 'female' },
        { name: 'Benjamin', birthYear: 1983, gender: 'male' },
        { name: 'Daniela', birthYear: 1987, gender: 'female' },
        { name: 'Lee', birthYear: 1981, gender: 'male' }
    ];

    export default {
        mounted() {
            this.sortedData = Query(dataObjects)
                .sortBy('birthYear', true)
                .toArray();

            console.log(this.sortedData);
            /* outputs
            [
                { name: "Amelia", birthYear: 1991, gender: "female" },
                { name: "Daniela", birthYear: 1987, gender: "female" },
                { name: "Benjamin", birthYear: 1983, gender: "male" },
                { name: "Lee", birthYear: 1981, gender: "male" }
            ] */
        },
        // ...
    }
    </script>

##### React

    <!-- tab: App.js -->
    // ...
    import Query from 'devextreme/data/query';

    const dataObjects = [
        { name: 'Amelia', birthYear: 1991, gender: 'female' },
        { name: 'Benjamin', birthYear: 1983, gender: 'male' },
        { name: 'Daniela', birthYear: 1987, gender: 'female' },
        { name: 'Lee', birthYear: 1981, gender: 'male' }
    ];

    class App extends React.Component {
        constructor(props) {
            super(props);

            this.sortedData = Query(dataObjects)
                .sortBy('birthYear', true)
                .toArray();

            console.log(this.sortedData);
            /* outputs
            [
                { name: "Amelia", birthYear: 1991, gender: "female" },
                { name: "Daniela", birthYear: 1987, gender: "female" },
                { name: "Benjamin", birthYear: 1983, gender: "male" },
                { name: "Lee", birthYear: 1981, gender: "male" }
            ] */
        }
    }
    export default App;

---

Call the [thenBy(getter)](/Documentation/ApiReference/Data_Layer/Query/Methods/#thenBygetter) or [thenBy(getter, desc)](/Documentation/ApiReference/Data_Layer/Query/Methods/#thenBygetter_desc) method after **sortBy** to sort data items by one more getter. 

#####See Also#####
- [Sorting](/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Sorting)
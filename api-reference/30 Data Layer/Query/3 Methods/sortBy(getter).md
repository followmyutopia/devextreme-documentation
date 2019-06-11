<!--id-->Query.sortBy(getter)<!--/id-->
===================================================================
===================================================================

<!--shortDescription-->
Sorts data items by the specified [getter](/Documentation/Guide/Data_Layer/Data_Layer/#Getters_And_Setters) in ascending order.
<!--/shortDescription-->

<!--paramName1-->getter<!--/paramName1-->
<!--paramType1-->Object<!--/paramType1-->
<!--paramDescription1-->
A getter; in most cases, the name of the data field to sort by.
<!--/paramDescription1-->

<!--returnType-->Query<!--/returnType-->
<!--returnDescription-->
The **Query** with transformed data.
<!--/returnDescription-->

<!--fullDescription-->
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
        .sortBy("birthYear")
        .toArray();

    console.log(sortedData);
    /* outputs
    [
        { name: "Lee", birthYear: 1981, gender: "male" },
        { name: "Benjamin", birthYear: 1983, gender: "male" },
        { name: "Daniela", birthYear: 1987, gender: "female" },
        { name: "Amelia", birthYear: 1991, gender: "female" }
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
                .sortBy("birthYear")
                .toArray();

            console.log(sortedData);
            /* outputs
            [
                { name: "Lee", birthYear: 1981, gender: "male" },
                { name: "Benjamin", birthYear: 1983, gender: "male" },
                { name: "Daniela", birthYear: 1987, gender: "female" },
                { name: "Amelia", birthYear: 1991, gender: "female" }
            ] */
        };
    }

---

To sort data items by one more getter, call the [thenBy(getter)](/Documentation/ApiReference/Data_Layer/Query/Methods/#thenBygetter) or [thenBy(getter, desc)](/Documentation/ApiReference/Data_Layer/Query/Methods/#thenBygetter_desc) method after **sortBy**.

#####See Also#####
- [Sorting](/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Sorting)
<!--/fullDescription-->
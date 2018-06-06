===================================================================
===================================================================

<!--shortDescription-->
Sorts data items by one more [getter](/Documentation/Guide/Data_Layer/Data_Layer/#Getters_And_Setters) in ascending order.
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
This method can only follow the [sortBy(getter)](/Documentation/ApiReference/Data_Layer/Query/Methods/#sortBygetter), [sortBy(getter, desc)](/Documentation/ApiReference/Data_Layer/Query/Methods/#sortBygetter_desc), [thenBy(getter, desc)](/Documentation/ApiReference/Data_Layer/Query/Methods/#thenBygetter_desc), or another **thenBy(getter)** method call.

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
        .sortBy("gender")
        .thenBy("birthYear")
        .toArray();

    console.log(sortedData);
    /* outputs
    [
        { name: "Daniela", birthYear: 1987, gender: "female" },
        { name: "Amelia", birthYear: 1991, gender: "female" },
        { name: "Lee", birthYear: 1981, gender: "male" },
        { name: "Benjamin", birthYear: 1983, gender: "male" }
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
                .sortBy("gender")
                .thenBy("birthYear")
                .toArray();

            console.log(sortedData);
            /* outputs
            [
                { name: "Daniela", birthYear: 1987, gender: "female" },
                { name: "Amelia", birthYear: 1991, gender: "female" },
                { name: "Lee", birthYear: 1981, gender: "male" },
                { name: "Benjamin", birthYear: 1983, gender: "male" }
            ] */
        };
    }

---

#####See Also#####
- [Sorting](/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Sorting)
<!--/fullDescription-->
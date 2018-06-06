===================================================================
===================================================================

<!--shortDescription-->
Sorts data items by one more [getter](/Documentation/Guide/Data_Layer/Data_Layer/#Getters_And_Setters) in the specified sorting order.
<!--/shortDescription-->

<!--paramName1-->getter<!--/paramName1-->
<!--paramType1-->Object<!--/paramType1-->
<!--paramDescription1-->
A getter; in most cases, the name of the data field to sort by.
<!--/paramDescription1-->

<!--paramName2-->desc<!--/paramName2-->
<!--paramType2-->Boolean<!--/paramType2-->
<!--paramDescription2-->
Pass **true** to sort in descending order, **false** or nothing to sort in ascending order.
<!--/paramDescription2-->

<!--returnType-->Query<!--/returnType-->
<!--returnDescription-->
The **Query** with transformed data.
<!--/returnDescription-->

<!--fullDescription-->
This method can only follow the [sortBy(getter)](/Documentation/ApiReference/Data_Layer/Query/Methods/#sortBygetter), [sortBy(getter, desc)](/Documentation/ApiReference/Data_Layer/Query/Methods/#sortBygetter_desc), [thenBy(getter)](/Documentation/ApiReference/Data_Layer/Query/Methods/#thenBygetter), or another **thenBy(getter, desc)** method call.

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
        .thenBy("birthYear", true)
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
                .sortBy("gender")
                .thenBy("birthYear", true)
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

---

#####See Also#####
- [Sorting](/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Sorting)
<!--/fullDescription-->
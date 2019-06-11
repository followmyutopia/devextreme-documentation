<!--id-->Query.slice(skip, take)<!--/id-->
===================================================================
===================================================================

<!--shortDescription-->
Gets a specified number of data items starting from a given index.
<!--/shortDescription-->

<!--paramName1-->skip<!--/paramName1-->
<!--paramType1-->Number<!--/paramType1-->
<!--paramDescription1-->
The index of the first data item to get.
<!--/paramDescription1-->

<!--paramName2-->take<!--/paramName2-->
<!--paramType2-->Number|undefined<!--/paramType2-->
<!--paramDescription2-->
Optional. The number of data items to get.
<!--/paramDescription2-->

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

    var subset = DevExpress.data.query(dataObjects)
        .slice(1, 2)
        .toArray();

    console.log(subset);
    /* outputs
    [
        { name: "Benjamin", birthYear: 1983, gender: "male" },
        { name: "Daniela", birthYear: 1987, gender: "female" }
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

            let subset = Query(dataObjects)
                .slice(1, 2)
                .toArray();

            console.log(subset);
            /* outputs
            [
                { name: "Benjamin", birthYear: 1983, gender: "male" },
                { name: "Daniela", birthYear: 1987, gender: "female" }
            ] */
        };
    }

---
<!--/fullDescription-->
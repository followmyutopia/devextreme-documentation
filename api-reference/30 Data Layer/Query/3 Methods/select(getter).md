===================================================================
===================================================================

<!--shortDescription-->
Selects individual fields from data objects.
<!--/shortDescription-->

<!--paramName1-->getter<!--/paramName1-->
<!--paramType1-->Object<!--/paramType1-->
<!--paramDescription1-->
A getter; in most cases, the names of the data fields to select.
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

    var selectedData = DevExpress.data.query(dataObjects)
        .select("birthYear", "name")
        .toArray();

    console.log(selectedData);
    /* outputs
    [
        { birthYear: 1991, name: "Amelia"  },
        { birthYear: 1983, name: "Benjamin" },
        { birthYear: 1987, name: "Daniela" },
        { birthYear: 1981, name: "Lee" }
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

            let selectedData = Query(dataObjects)
                .select("birthYear", "name")
                .toArray();

            console.log(selectedData);
            /* outputs
            [
                { birthYear: 1991, name: "Amelia"  },
                { birthYear: 1983, name: "Benjamin" },
                { birthYear: 1987, name: "Daniela" },
                { birthYear: 1981, name: "Lee" }
            ] */
        };
    }

---
<!--/fullDescription-->
===================================================================
===================================================================

<!--shortDescription-->
Groups data items by the specified [getter](/Documentation/Guide/Data_Layer/Data_Layer/#Getters_And_Setters).
<!--/shortDescription-->

<!--paramName1-->getter<!--/paramName1-->
<!--paramType1-->Object<!--/paramType1-->
<!--paramDescription1-->
A getter; in most cases, the name of the data field to group by.
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

    var groupedData = DevExpress.data.query(dataObjects)
        .groupBy("gender")
        .toArray();

    console.log(groupedData);
    /* outputs
    [{
        key: "female",
        items: [
            { name: "Amelia", birthYear: 1991, gender: "female" },
            { name: "Daniela", birthYear: 1987, gender: "female" }
        ]
    }, {
        key: "male",
        items: [
            { name: "Benjamin", birthYear: 1983, gender: "male" },
            { name: "Lee", birthYear: 1981, gender: "male" }
        ]
    }] */

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

            let groupedData = Query(dataObjects)
                .groupBy("gender")
                .toArray();

            console.log(groupedData);
            /* outputs
            [{
                key: "female",
                items: [
                    { name: "Amelia", birthYear: 1991, gender: "female" },
                    { name: "Daniela", birthYear: 1987, gender: "female" }
                ]
            }, {
                key: "male",
                items: [
                    { name: "Benjamin", birthYear: 1983, gender: "male" },
                    { name: "Lee", birthYear: 1981, gender: "male" }
                ]
            }] */
        };
    }

---

#####See Also#####
- [Grouping](/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Grouping)
<!--/fullDescription-->
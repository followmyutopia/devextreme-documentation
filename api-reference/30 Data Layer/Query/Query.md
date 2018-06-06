===========================================================================
<!--type-->Object<!--/type-->
<!--lib-->
dx.mobile.js, dx.web.js, dx.viz.js, dx.viz-web.js, dx.all.js
<!--/lib-->
===========================================================================

<!--shortDescription-->
The **Query** is an object that provides a chainable interface for making data queries.
<!--/shortDescription-->

<!--fullDescription-->
To create a **Query**, call the [query(array)](/Documentation/ApiReference/Data_Layer/Utils/#queryarray) or [query(url, queryOptions)](/Documentation/ApiReference/Data_Layer/Utils/#queryurl_queryOptions) method, depending on the type of the storage you access. The **Query** supports method chaining. This enables you to execute several methods in a single statement.

---
##### jQuery

    <!--JavaScript-->
    var dataObjects = [
        { name: "Amelia", birthYear: 1991, gender: "female" },
        { name: "Benjamin", birthYear: 1983, gender: "male" },
        { name: "Daniela", birthYear: 1987, gender: "female" },
        { name: "Lee", birthYear: 1981, gender: "male" }
    ];

    var processedArray = DevExpress.data.query(dataObjects)
        .filter([ "gender", "=", "female" ])
        .sortBy("birthYear")
        .select("name", "birthYear")
        .toArray();

##### Angular

    <!--TypeScript-->
    import Query from "devextreme/data/query";
    // ...
    export class AppComponent {
        constructor() {
            let dataObjects = [
                { name: "Amelia", birthYear: 1991, gender: "female" },
                { name: "Benjamin", birthYear: 1983, gender: "male" },
                { name: "Daniela", birthYear: 1987, gender: "female" },
                { name: "Lee", birthYear: 1981, gender: "male" }
            ];

            let processedArray = Query(dataObjects)
                .filter([ "gender", "=", "female" ])
                .sortBy("birthYear")
                .select("name", "birthYear")
                .toArray();
        }
    }

##### AngularJS  

    <!--JavaScript-->
    angular.module('DemoApp', ['dx'])
        .controller('DemoController', function DemoController($scope) {
            var dataObjects = [
                { name: "Amelia", birthYear: 1991, gender: "female" },
                { name: "Benjamin", birthYear: 1983, gender: "male" },
                { name: "Daniela", birthYear: 1987, gender: "female" },
                { name: "Lee", birthYear: 1981, gender: "male" }
            ];

            $scope.processedArray = DevExpress.data.query(dataObjects)
                .filter([ "gender", "=", "female" ])
                .sortBy("birthYear")
                .select("name", "birthYear")
                .toArray();
        });

##### Knockout  

    <!--JavaScript-->
    var dataObjects = [
        { name: "Amelia", birthYear: 1991, gender: "female" },
        { name: "Benjamin", birthYear: 1983, gender: "male" },
        { name: "Daniela", birthYear: 1987, gender: "female" },
        { name: "Lee", birthYear: 1981, gender: "male" }
    ];

    var viewModel = {
        processedArray: DevExpress.data.query(dataObjects)
            .filter([ "gender", "=", "female" ])
            .sortBy("birthYear")
            .select("name", "birthYear")
            .toArray()
    };

    ko.applyBindings(viewModel);

---

#####See Also#####
- [Query Concept](/Documentation/Guide/Data_Layer/Data_Layer/#Query_Concept)
<!--/fullDescription-->
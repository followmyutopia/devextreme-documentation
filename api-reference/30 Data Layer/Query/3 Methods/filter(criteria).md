===================================================================
===================================================================

<!--shortDescription-->
Filters data items using a filter expression.
<!--/shortDescription-->

<!--paramName1-->criteria<!--/paramName1-->
<!--paramType1-->Array<any><!--/paramType1-->
<!--paramDescription1-->
A filter expression; described in the [Filtering](/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Filtering) section.
<!--/paramDescription1-->

<!--returnType-->Query<!--/returnType-->
<!--returnDescription-->
The **Query** with transformed data.
<!--/returnDescription-->

<!--fullDescription-->
---
##### jQuery

    <!--JavaScript-->
    var dataObjects = [ ... ];

    var filteredData = DevExpress.data.query(dataObjects)
        .filter(["price", "<", 500])
        // or
        // .filter("price", "<", 500)
        .toArray();

##### Angular

    <!--TypeScript-->
    import Query from "devextreme/data/query";
    // ...
    export class AppComponent {
        constructor () {
            let dataObjects = [ ... ];

            let filteredData = Query(dataObjects)
                .filter(["price", "<", 500])
                // or
                // .filter("price", "<", 500)
                .toArray();
        };
    }

---
<!--/fullDescription-->
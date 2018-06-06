===================================================================
===================================================================

<!--shortDescription-->
Filters data items using a custom function.
<!--/shortDescription-->

<!--paramName1-->predicate<!--/paramName1-->
<!--paramType1-->function()<!--/paramType1-->
<!--paramDescription1-->
A function that accepts a data item and returns **true** if it should be included in the resulting array and **false** otherwise.
<!--/paramDescription1-->

<!--returnType-->Query<!--/returnType-->
<!--returnDescription-->
The **Query** with transformed data.
<!--/returnDescription-->

<!--fullDescription-->
---
##### jQuery

    <!--JavaScript-->
    var filteredData = DevExpress.data.query([10, 20, 40, 50, 30])
        .filter(function (dataItem) {
            return dataItem < 25;
        })
        .toArray();

    console.log(filteredData); // outputs [10, 20]

##### Angular

    <!--TypeScript-->
    import Query from "devextreme/data/query";
    // ...
    export class AppComponent {
        constructor () {
            let filteredData = Query([10, 20, 40, 50, 30])
                .filter(dataItem => dataItem < 25)
                .toArray();

            console.log(filteredData); // outputs [10, 20]
        };
    }

---

#####See Also#####
- [Filtering](/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Filtering)
<!--/fullDescription-->
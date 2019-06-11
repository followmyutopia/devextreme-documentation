<!--id-->Utils.query(array)<!--/id-->
===================================================================
<!--module-->data/query<!--/module-->
<!--export-->default<!--/export-->
===================================================================

<!--shortDescription-->
Creates a [Query](/Documentation/ApiReference/Data_Layer/Query/) instance.
<!--/shortDescription-->

<!--paramName1-->array<!--/paramName1-->
<!--paramType1-->Array<any><!--/paramType1-->
<!--paramDescription1-->
Data to be associated with the **Query**.
<!--/paramDescription1-->

<!--returnType-->Query<!--/returnType-->
<!--returnDescription-->
A **Query** instance.
<!--/returnDescription-->

<!--fullDescription-->
---
##### jQuery

    <!--JavaScript-->
    var query = DevExpress.data.query([10, 20, 50, 40, 30]);

##### Angular

    <!--TypeScript-->
    import Query from "devextreme/data/query";
    // ...
    export class AppComponent {
        constructor () {
            let query = Query([10, 20, 50, 40, 30]);
        };
    }

---

#####See Also#####
- [Query Concept](/Documentation/Guide/Data_Layer/Data_Layer/#Query_Concept)
<!--/fullDescription-->
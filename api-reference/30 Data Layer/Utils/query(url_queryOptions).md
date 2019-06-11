<!--id-->Utils.query(url, queryOptions)<!--/id-->
===================================================================
<!--module-->data/query<!--/module-->
<!--export-->default<!--/export-->
===================================================================

<!--shortDescription-->
Creates a [Query](/Documentation/ApiReference/Data_Layer/Query/) instance that accesses a remote data service using its URL.
<!--/shortDescription-->

<!--paramName1-->url<!--/paramName1-->
<!--paramType1-->String<!--/paramType1-->
<!--paramDescription1-->
The data service's URL.
<!--/paramDescription1-->

<!--paramName2-->queryOptions<!--/paramName2-->
<!--paramType2-->Object<!--/paramType2-->
<!--paramDescription2-->
Additional query options.
<!--/paramDescription2-->

<!--returnType-->Query<!--/returnType-->
<!--returnDescription-->
A **Query** instance.
<!--/returnDescription-->

<!--fullDescription-->
The **queryOptions** object should contain the **adapter** function that implements data access logic. The **queryOptions** object can also contain the **errorHandler** function for handling errors that may occur during the **Query**'s execution.

---
##### jQuery

    <!--JavaScript-->
    var query = DevExpress.data.query("http://mydomain.com/MyDataService", queryOptions);

##### Angular

    <!--TypeScript-->
    import Query from "devextreme/data/query";
    // ...
    export class AppComponent {
        constructor () {
            let query = Query("http://mydomain.com/MyDataService", queryOptions);
        };
    }

---

#####See Also#####
- [Query Concept](/Documentation/Guide/Data_Layer/Data_Layer/#Query_Concept)
<!--/fullDescription-->
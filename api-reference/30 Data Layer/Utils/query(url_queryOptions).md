---
id: Utils.query(url, queryOptions)
module: data/query
export: default
---
---
##### shortDescription
Creates a [Query](/Documentation/ApiReference/Data_Layer/Query/) instance that accesses a remote data service using its URL.

##### return: Query
A **Query** instance.

##### param(url): String
The data service's URL.

##### param(queryOptions): Object
Additional query options.

---
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
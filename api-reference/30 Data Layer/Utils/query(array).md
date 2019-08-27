---
id: Utils.query(array)
module: data/query
export: default
---
---
##### shortDescription
Creates a [Query](/Documentation/ApiReference/Data_Layer/Query/) instance.

##### return: Query
A **Query** instance.

##### param(array): Array<any>
Data to be associated with the **Query**.

---
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
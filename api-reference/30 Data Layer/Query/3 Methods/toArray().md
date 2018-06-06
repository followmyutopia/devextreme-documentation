===================================================================
===================================================================

<!--shortDescription-->
Gets data items associated with the **Query**. This is a synchronous alternative to the [enumerate()](/Documentation/ApiReference/Data_Layer/Query/Methods/#enumerate) method.
<!--/shortDescription-->

<!--returnType-->Array<any><!--/returnType-->
<!--returnDescription-->
The data items.
<!--/returnDescription-->

<!--fullDescription-->
---
##### jQuery

    <!--JavaScript-->
    var data = DevExpress.data.query([10, 20, 50, 40, 30])
        .sortBy()
        .toArray();
        
    console.log(data); // outputs [10, 20, 30, 40, 50]

##### Angular

    <!--TypeScript-->
    import Query from "devextreme/data/query";
    // ...
    export class AppComponent {
        constructor () {
            let data = Query([10, 20, 50, 40, 30])
                .sortBy()
                .toArray();

            console.log(data); // outputs [10, 20, 30, 40, 50]
        };
    }

---
<!--/fullDescription-->
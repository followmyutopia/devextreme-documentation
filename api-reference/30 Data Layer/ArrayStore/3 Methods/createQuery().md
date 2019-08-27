---
id: ArrayStore.createQuery()
---
---
##### shortDescription
Creates a **Query** for the underlying array.

##### return: Object
The [Query](/Documentation/ApiReference/Data_Layer/Query/) object.

---
---
##### jQuery

    <!--JavaScript-->
    var store = new DevExpress.data.ArrayStore({
        // ArrayStore is configured here
    });

    var query = store.createQuery();

##### Angular

    <!--TypeScript-->
    import ArrayStore from "devextreme/data/array_store";
    import DevExpress from "devextreme/bundles/dx.all";
    // ...
    export class AppComponent {
        store: ArrayStore;
        query: DevExpress.data.Query;
        constructor() {
            this.store = new ArrayStore({
                // ArrayStore is configured here
            });
            this.query = this.store.createQuery();
        }
    }

---

#####See Also#####
- [Query Concept](/Documentation/Guide/Data_Layer/Data_Layer/#Query_Concept)
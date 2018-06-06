===========================================================================
<!--default-->10000<!--/default-->
<!--type-->Number<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies a delay in milliseconds between when data changes and the moment these changes are saved in the local storage. Applies only if [immediate](/Documentation/ApiReference/Data_Layer/LocalStore/Configuration/#immediate) is **false**.
<!--/shortDescription-->

<!--fullDescription-->
---
#####jQuery

    <!--JavaScript-->
    var store = new DevExpress.data.LocalStore({
        // ...
        immediate: false,
        flushInterval: 3000
    });

##### Angular

    <!--TypeScript-->
    import LocalStore from "devextreme/data/local_store";
    // ...
    export class AppComponent {
        store: LocalStore;
        constructor() {
            this.store = new LocalStore({
                // ...
                immediate: false,
                flushInterval: 3000
            })
        }
    }

---
<!--/fullDescription-->

===================================================================
===================================================================

<!--shortDescription-->
Deletes data from the cache. Takes effect only if the [cacheRawData](/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#cacheRawData) option is **true**.
<!--/shortDescription-->

<!--fullDescription-->
---
##### jQuery

    var store = new DevExpress.data.CustomStore({
        // CustomStore is configured here
        cacheRawData: true
    });

    store.clearRawDataCache();

##### Angular

    <!--TypeScript-->
    import CustomStore from "devextreme/data/custom_store";
    // ...
    export class AppComponent {
        store: CustomStore;
        constructor( ... ) {
            this.store = new CustomStore({
                // CustomStore is configured here
                cacheRawData: true
            });
            this.store.clearRawDataCache();
        };
    }
    
---
<!--/fullDescription-->
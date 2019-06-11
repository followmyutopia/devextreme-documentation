<!--id-->ODataStore.byKey(key, extraOptions)<!--/id-->
===================================================================
===================================================================

<!--shortDescription-->
Gets an entity with a specific key.
<!--/shortDescription-->

<!--paramName1-->key<!--/paramName1-->
<!--paramType1-->Object|String|Number<!--/paramType1-->
<!--paramDescription1-->
An entity's key value.
<!--/paramDescription1-->

<!--paramName2-->extraOptions<!--/paramName2-->
<!--paramType2-->Object<!--/paramType2-->
<!--paramDescription2-->
Additional options.
<!--/paramDescription2-->
<!--paramName2_field1-->expand<!--/paramName2_field1-->
<!--paramType2_field1-->String | Array<String><!--/paramType2_field1-->
<!--paramDescription2_field1-->
The names of the navigation properties to be loaded simultaneously with the entity (see [OData - Associations](/Documentation/Guide/Data_Layer/Data_Source_Examples/#OData/Associations)).
<!--/paramDescription2_field1-->
<!--paramName2_field2-->select<!--/paramName2_field2-->
<!--paramType2_field2-->String | Array<String><!--/paramType2_field2-->
<!--paramDescription2_field2-->
One or more fields to select from the entity.
<!--/paramDescription2_field2-->

<!--returnType-->Promise<any><!--/returnType-->
<!--returnDescription-->
A Promise that is resolved after the entity is loaded. It is a [native Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) or a [jQuery.Promise](http://api.jquery.com/Types/#Promise) when you use jQuery.
<!--/returnDescription-->

<!--fullDescription-->
In the following code, the **byKey** method loads the product with ID `1` along with the `"Category"` navigation property:

---
#####jQuery

    <!--JavaScript-->
    var store = new DevExpress.data.ODataStore({
        // ...
        key: "Product_ID"
    });
    store.byKey(1, { expand: "Category" })
        .done(function (dataItem) {
            // Process the "dataItem" here
        })
        .fail(function (error) {
            // Handle the "error" here
        });

#####Angular

    <!--TypeScript-->
    import ODataStore from "devextreme/data/odata/store";
    // ...
    export class AppComponent {
        store: ODataStore;
        constructor() {
            this.store = new ODataStore({
                // ...
                key: "Product_ID"
            });
            this.store.byKey(1, { expand: "Category" }).then(
                (dataItem) => { /* Process the "dataItem" here */ },
                (error) => { /* Handle the "error" here */ }
            );
        };
    }

---
<!--/fullDescription-->
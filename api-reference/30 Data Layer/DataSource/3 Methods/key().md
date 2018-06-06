===================================================================
===================================================================

<!--shortDescription-->
Gets the value of the underlying store's **key** option.
<!--/shortDescription-->

<!--returnType-->Object|String|Number<!--/returnType-->
<!--returnDescription-->
A key expression.
<!--/returnDescription-->

<!--fullDescription-->
---
##### jQuery

    <!--JavaScript-->
    var ds = new DevExpress.data.DataSource({
        store: {
            // ...
            key: "ProductID"
        }
    });

    var keyProps = ds.key(); // returns "ProductID"

##### Angular

    <!--TypeScript-->
    import DataSource from "devextreme/data/data_source";
    // ...
    export class AppComponent {
        ds: DataSource;
        constructor() {
            this.ds = new DataSource({
                store: {
                    // ...
                    key: "ProductID"
                }
            });
            let keyProps = this.ds.key(); // returns "ProductID"
        }
    }

---

#####See Also#####
- **key** in [ArrayStore](/Documentation/ApiReference/Data_Layer/ArrayStore/Configuration/#key) | [CustomStore](/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#key) | [LocalStore](/Documentation/ApiReference/Data_Layer/LocalStore/Configuration/#key) | [ODataStore](/Documentation/ApiReference/Data_Layer/ODataStore/Configuration/#key)
<!--/fullDescription-->
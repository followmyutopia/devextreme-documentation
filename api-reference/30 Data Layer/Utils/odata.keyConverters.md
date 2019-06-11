<!--id-->Utils.keyConverters<!--/id-->
===========================================================================
<!--module-->data/odata/utils<!--/module-->
<!--export-->keyConverters<!--/export-->
<!--type-->Object<!--/type-->
===========================================================================

<!--shortDescription-->
Contains built-in OData type converters (for String, Int32, Int64, Boolean, Single, Decimal, and [Guid](/Documentation/ApiReference/Data_Layer/Guid/)) and allows you to register a custom type converter.
<!--/shortDescription-->

<!--fullDescription-->
The following code shows how to register a custom type converter:

---
##### jQuery

    <!--JavaScript-->
    DevExpress.data.utils.odata.keyConverters["MyType"] = function (value) {
        return value + "MT";
    };
    
##### Angular

    <!--TypeScript-->
    import { keyConverters } from "devextreme/data/odata/utils";
    // ...
    export class AppComponent {
        constructor () {
            keyConverters["MyType"] = value => {
                return value + "MT"
            }
        }
    }

---

#####See Also#####
- [DataSource Examples - OData Key Types](/Documentation/Guide/Data_Layer/Data_Source_Examples/#OData/Key_Types)
<!--/fullDescription-->
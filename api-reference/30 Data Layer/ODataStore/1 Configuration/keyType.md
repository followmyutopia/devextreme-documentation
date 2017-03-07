<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->Forces type of data key (or types of parts of compound key). Built-in supported types are: String, Int32, Int64, Guid, Boolean, Single, Decimal. Additional types can be registered via DevExpress.data.utils.odata.keyConverters (link to ref)<!--/d-->
===========================================================================
<!--acceptValues-->'String' | 'Int32' | 'Int64' | 'Guid' | 'Boolean' | 'Single' | 'Decimal'<!--/acceptValues-->
<!--type-->string | object<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies the type of the ODataStore key property. The following key types are supported out of the box: **String**, **Int32**, **Int64**, **Boolean**, **Single**, **Decimal** and [Guid](/Documentation/ApiReference/Data_Layer/Guid/).
<!--/shortDescription-->

<!--fullDescription-->
If a key expression is a simple [getter](/Documentation/Guide/Data_Layer/Data_Layer/#Getters_And_Setters), the **keyType** option takes on a string value.

    <!--JavaScript-->
    var store = new DevExpress.data.ODataStore({
        url: "/url/to/service",
        key: "ProductID",
        keyType: "Guid"
    });

If you specified a composite key, the [keyType](/Documentation/ApiReference/Data_Layer/ODataStore/Configuration/#keyType) option should take on an object providing corresponding properties for each key expression, as demonstrated in the following example.

    <!--JavaScript-->
    var context = new DevExpress.data.ODataContext({
        url: "http://www.example.com/Northwind.svc",
        entities: {
            Products: {
                key: [ "ProductID", "ProductCode" ],
                keyType: {
                    ProductID: "Guid",
                    ProductCode: "Int32"
                }
            }
        }
    });
<!--/fullDescription-->
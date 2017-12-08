===========================================================================
<!--acceptValues-->'String' | 'Int32' | 'Int64' | 'Guid' | 'Boolean' | 'Single' | 'Decimal'<!--/acceptValues-->
<!--type-->String | Object<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies the type of the key property or properties.
<!--/shortDescription-->

<!--fullDescription-->
If a key expression is a simple [getter](/Documentation/Guide/Data_Layer/Data_Layer/#Getters_And_Setters), the **keyType** option takes on a string value.

    <!--JavaScript-->
    var store = new DevExpress.data.ODataStore({
        url: "/url/to/service",
        key: "ProductID",
        keyType: "Guid"
    });

If you specified a composite key, the **keyType** option should apply an object providing corresponding properties for each key expression, as demonstrated in the following example:

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

When specifying this option in an [ASP.NET MVC Control](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/), use the `EdmType` enum that has the following values: `Int32`, `Int64`, `Guid`, `String`, `Boolean`, `Single` and `Decimal`.

#####See Also#####
- [fieldTypes](/Documentation/ApiReference/Data_Layer/ODataStore/Configuration/#fieldTypes)
<!--/fullDescription-->
